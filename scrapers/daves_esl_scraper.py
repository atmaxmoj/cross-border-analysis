#!/usr/bin/env python3
"""
Dave's ESL Cafe Forum Scraper using Playwright
Collects forum discussions (UGC) about pain points in China teaching
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
from datetime import datetime
import time
import re

# Output directory
OUTPUT_DIR = Path(__file__).parent / 'output'
OUTPUT_DIR.mkdir(exist_ok=True)

# Target forum sections on Dave's ESL Cafe (phpBB forum IDs)
FORUM_URLS = [
    'https://forums.eslcafe.com/job/viewforum.php?f=9',  # China (Job-related Posts Only)
]

# Rate limiting settings - be gentle to avoid Cloudflare blocking!
PAGE_DELAY = 8  # seconds between page loads (increased to avoid rate limit)
THREAD_DELAY = 2  # seconds between thread requests

def scrape_forum_page(page, forum_url, max_pages=2):
    """Scrape forum threads from multiple pages"""
    print(f"\n📊 Scraping forum: {forum_url}")

    all_threads = []

    for page_num in range(max_pages):
        # Construct paginated URL
        if page_num == 0:
            page_url = forum_url
        else:
            # phpBB pagination uses &start=N where N is page_num * 50 (threads per page)
            start = page_num * 50
            page_url = f"{forum_url}&topicdays=0&start={start}"

        print(f"\n   📄 Page {page_num + 1}/{max_pages}: {page_url}")

        try:
            page.goto(page_url, wait_until='domcontentloaded', timeout=30000)
            time.sleep(5)  # Give page time to fully render and avoid rate limit

            threads = []

            # Try multiple selectors for phpBB forum structure
            thread_selectors = [
                'a.topictitle',  # phpBB topic links
                '.topic-title a',
                'h3 a',
                'a[href*="viewtopic"]'
            ]

            thread_elements = []
            for selector in thread_selectors:
                elements = page.query_selector_all(selector)
                if elements:
                    thread_elements = elements
                    print(f"      Found {len(elements)} threads using selector: {selector}")
                    break

            if not thread_elements or len(thread_elements) == 0:
                # Debug: save screenshot and HTML
                if page_num > 0:  # Only for pages that fail
                    print(f"      ⚠️  DEBUG: Saving screenshot for page {page_num + 1}")
                    page.screenshot(path=OUTPUT_DIR / f'debug_page_{page_num + 1}.png')
                    html = page.content()
                    with open(OUTPUT_DIR / f'debug_page_{page_num + 1}.html', 'w') as f:
                        f.write(html)
                print(f"      ⚠️  No threads found on this page, stopping pagination")
                break

            # Get all threads from this page
            for elem in thread_elements:
                try:
                    title = elem.inner_text().strip()
                    url = elem.get_attribute('href')

                    # Make absolute URL - need to preserve /job/ path
                    if url and not url.startswith('http'):
                        if url.startswith('viewtopic'):
                            # Relative URL like viewtopic.php?t=123
                            url = f"https://forums.eslcafe.com/job/{url}"
                        elif url.startswith('/'):
                            url = f"https://forums.eslcafe.com{url}"
                        else:
                            url = f"https://forums.eslcafe.com/job/{url}"

                    # Filter for China/pain point keywords (less strict - just needs one keyword)
                    pain_keywords = ['china', 'scam', 'problem', 'warning', 'avoid',
                                   'unpaid', 'contract', 'visa', 'fraud', 'fake', 'beijing',
                                   'shanghai', 'guangzhou', 'shenzhen', 'school', 'teacher',
                                   'salary', 'payment', 'illegal', 'apartment', 'housing',
                                   'esl', 'teaching', 'job', 'help', 'advice', 'issue']

                    # Collect all threads
                    threads.append({
                        'title': title,
                        'url': url,
                        'forum_url': forum_url,
                        'has_keywords': any(keyword in title.lower() for keyword in pain_keywords)
                    })
                    if any(keyword in title.lower() for keyword in pain_keywords):
                        print(f"      ✓ {title[:60]}...")
                    else:
                        print(f"      - {title[:60]}...")

                except Exception as e:
                    continue

            all_threads.extend(threads)
            print(f"      Collected {len(threads)} threads from this page")

            # Add delay after scraping each page to avoid rate limiting
            if page_num < max_pages - 1:  # Don't delay after last page
                print(f"      ⏳ Waiting {PAGE_DELAY}s before next page...")
                time.sleep(PAGE_DELAY)

        except Exception as e:
            print(f"      ✗ Error scraping page: {e}")
            break

    print(f"\n   Total threads collected: {len(all_threads)}")
    return all_threads

def scrape_thread_content(page, thread_url, thread_title):
    """Scrape posts from a specific thread with ALL metadata"""
    try:
        page.goto(thread_url, wait_until='domcontentloaded', timeout=30000)
        time.sleep(THREAD_DELAY)

        posts = []

        # Check if redirected to login page
        if 'login.php' in page.url:
            print(f"      ⚠️  Thread requires login, skipping")
            return None

        # phpBB uses table rows for posts - find all post rows
        # Each post is in a <tr> within table.forumline
        post_rows = page.query_selector_all('table.forumline tr')

        if not post_rows or len(post_rows) == 0:
            print(f"      ⚠️  No posts found")
            return None

        print(f"      Found {len(post_rows)} rows")

        for post_row in post_rows:  # Process ALL rows to extract posts
            try:
                # phpBB structure: each post row has 2 columns
                # Column 1 (left): Author profile info
                # Column 2 (right): Post content and metadata

                columns = post_row.query_selector_all('td')
                if len(columns) < 2:
                    continue

                author_column = columns[0]
                post_column = columns[1]

                # === EXTRACT AUTHOR METADATA (left column) ===
                author_name = None
                author_joined = None
                author_posts = None

                # Author name (from profile link)
                author_link = author_column.query_selector('a[href*="profile.php"]')
                if author_link:
                    author_name = author_link.inner_text().strip()

                # Author details (joined date and post count)
                author_text = author_column.inner_text()

                # Extract joined date
                if 'Joined:' in author_text:
                    joined_match = re.search(r'Joined:\s*([^\n]+)', author_text)
                    if joined_match:
                        author_joined = joined_match.group(1).strip()

                # Extract post count
                if 'Posts:' in author_text:
                    posts_match = re.search(r'Posts:\s*(\d+)', author_text)
                    if posts_match:
                        author_posts = int(posts_match.group(1))

                # === EXTRACT POST METADATA (right column) ===
                post_subject = None
                post_date = None
                post_content = None

                # Post date and subject are in the header section with class "postdetails"
                post_details = post_column.query_selector('.postdetails')
                if post_details:
                    details_text = post_details.inner_text()

                    # Extract post date (format: "Posted: Mon Jul 20, 2020 10:55 am")
                    if 'Posted:' in details_text:
                        date_match = re.search(r'Posted:\s*([^\n]+?)(?:\s+Post subject:|$)', details_text)
                        if date_match:
                            post_date = date_match.group(1).strip()

                    # Extract post subject
                    if 'Post subject:' in details_text:
                        subject_match = re.search(r'Post subject:\s*([^\n]+)', details_text)
                        if subject_match:
                            post_subject = subject_match.group(1).strip()

                # Post content is in the postbody div
                postbody = post_column.query_selector('.postbody')
                if postbody:
                    post_content = postbody.inner_text().strip()

                # Filter out error messages and login prompts
                error_indicators = [
                    'page you are looking for is not found',
                    '404 error page',
                    'missing webpage',
                    'nginx',
                    '/usr/share/nginx',
                    'login required',
                    'you must be logged in'
                ]

                is_error = post_content and any(indicator in post_content.lower() for indicator in error_indicators)

                # Only add valid posts with actual content
                if post_content and len(post_content) > 20 and not is_error:
                    post_data = {
                        'content': post_content[:2000],  # First 2000 chars
                    }

                    # Add all metadata fields
                    if author_name:
                        post_data['author'] = author_name
                    if author_joined:
                        post_data['author_joined'] = author_joined
                    if author_posts is not None:
                        post_data['author_total_posts'] = author_posts
                    if post_date:
                        post_data['post_date'] = post_date
                    if post_subject:
                        post_data['post_subject'] = post_subject

                    posts.append(post_data)

            except Exception as e:
                # Silent continue - some rows might be headers or separators
                continue

        if not posts:
            print(f"      ⚠️  No valid posts extracted")
            return None

        return {
            'title': thread_title,
            'url': thread_url,
            'posts': posts,
            'num_posts': len(posts)
        }

    except Exception as e:
        print(f"      ✗ Error scraping thread: {e}")
        return None

def main():
    print("🔍 Starting Dave's ESL Cafe forum scraper with Playwright...")

    all_threads = []
    all_thread_content = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            viewport={'width': 1920, 'height': 1080},
            locale='en-US'
        )
        page = context.new_page()

        # Scrape forum thread lists from each forum (all pages until no more threads)
        for forum_url in FORUM_URLS:
            threads = scrape_forum_page(page, forum_url, max_pages=999)
            all_threads.extend(threads)
            time.sleep(PAGE_DELAY)

        # Deduplicate threads by URL
        seen_urls = set()
        unique_threads = []
        for thread in all_threads:
            if thread['url'] not in seen_urls:
                seen_urls.add(thread['url'])
                unique_threads.append(thread)

        all_threads = unique_threads
        print(f"\n✅ Found {len(all_threads)} unique threads (after deduplication)")

        # Scrape thread content (~5 pages = 250 threads)
        threads_to_scrape = min(len(all_threads), 250)
        print(f"\n📝 Scraping content from {threads_to_scrape} threads...")

        for i, thread in enumerate(all_threads[:threads_to_scrape], 1):
            print(f"\n[{i}/{threads_to_scrape}] {thread['title'][:60]}...")

            content = scrape_thread_content(page, thread['url'], thread['title'])
            if content:
                all_thread_content.append(content)

            time.sleep(THREAD_DELAY)  # Be gentle with rate limits

        browser.close()

    # Save results to output directory
    threads_file = OUTPUT_DIR / 'daves_esl_threads.json'
    with open(threads_file, 'w', encoding='utf-8') as f:
        json.dump(all_threads, f, indent=2, ensure_ascii=False)

    content_file = OUTPUT_DIR / 'daves_esl_content.json'
    with open(content_file, 'w', encoding='utf-8') as f:
        json.dump(all_thread_content, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(all_threads)} thread links to: {threads_file}")
    print(f"✅ Saved {len(all_thread_content)} thread contents to: {content_file}")

    # Summary
    total_posts = sum(t['num_posts'] for t in all_thread_content)
    print(f"\n📊 Summary:")
    print(f"   - Forum threads found: {len(all_threads)}")
    print(f"   - Thread content scraped: {len(all_thread_content)}")
    print(f"   - Total posts collected: {total_posts}")

if __name__ == "__main__":
    main()
