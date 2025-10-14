#!/usr/bin/env python3
"""
TEFL.net Forums Scraper using Playwright
Bypasses anti-bot protection to collect China ESL pain point discussions
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
from datetime import datetime
import time

# Target TEFL.net forum sections for China/ESL pain points
# Will scrape multiple pages of each forum
FORUM_URLS = {
    'asia_forum': 'https://www.tefl.net/forums/viewforum.php?f=18',  # Asia (includes China)
}

# Number of pages to scrape per forum (each page has ~50 threads)
PAGES_PER_FORUM = 5  # Will get ~250 threads total

def scrape_forum_list(page, forum_url, forum_name):
    """Scrape list of threads from a forum page"""
    print(f"\n📊 Scraping {forum_name}: {forum_url}")

    try:
        page.goto(forum_url, wait_until='domcontentloaded', timeout=60000)
        time.sleep(3)  # Let JavaScript load

        threads = []

        # Find all thread links (adjust selectors based on actual HTML structure)
        thread_elements = page.query_selector_all('a.topictitle')

        print(f"   Found {len(thread_elements)} threads")

        for element in thread_elements[:50]:  # Limit to first 50 threads per forum
            try:
                title = element.inner_text()
                url = element.get_attribute('href')

                # Make absolute URL if relative
                if url and not url.startswith('http'):
                    url = f"https://www.tefl.net/forums/{url}"

                threads.append({
                    'title': title,
                    'url': url,
                    'forum': forum_name
                })

                print(f"   ✓ {title[:60]}...")

            except Exception as e:
                print(f"   ✗ Error getting thread: {e}")
                continue

        return threads

    except Exception as e:
        print(f"   ✗ Error scraping forum: {e}")
        return []

def scrape_thread_content(page, thread_url, thread_title):
    """Scrape posts from a specific thread"""
    try:
        page.goto(thread_url, wait_until='domcontentloaded', timeout=60000)
        time.sleep(3)

        posts = []

        # Find all post content (adjust selectors)
        post_elements = page.query_selector_all('.postbody')

        for post in post_elements[:20]:  # First 20 posts per thread
            try:
                content = post.inner_text()

                # Try to get author and date
                author_elem = post.query_selector('.author')
                author = author_elem.inner_text() if author_elem else 'Unknown'

                posts.append({
                    'author': author,
                    'content': content[:1000],  # First 1000 chars
                })

            except Exception as e:
                continue

        return {
            'title': thread_title,
            'url': thread_url,
            'posts': posts,
            'num_posts': len(posts)
        }

    except Exception as e:
        print(f"   ✗ Error scraping thread: {e}")
        return None

def main():
    print("🔍 Starting TEFL.net scraper with Playwright...")

    all_threads = []
    all_thread_content = []

    with sync_playwright() as p:
        # Launch browser (headless mode to run in background)
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()

        # Step 1: Get thread lists from each forum (multiple pages)
        for forum_name, base_forum_url in FORUM_URLS.items():
            print(f"\n🔄 Scraping {PAGES_PER_FORUM} pages from {forum_name}...")

            for page_num in range(1, PAGES_PER_FORUM + 1):
                # Calculate pagination offset (50 threads per page)
                start_offset = (page_num - 1) * 50

                # Add pagination parameter to URL
                if '?' in base_forum_url:
                    page_url = f"{base_forum_url}&start={start_offset}"
                else:
                    page_url = f"{base_forum_url}?start={start_offset}"

                print(f"\n   📄 Page {page_num}/{PAGES_PER_FORUM}...")
                threads = scrape_forum_list(page, page_url, forum_name)
                all_threads.extend(threads)

                time.sleep(3)  # Be polite, don't hammer the server

        print(f"\n✅ Found {len(all_threads)} total threads")

        # Step 2: Scrape content from high-priority threads
        # Filter for pain point keywords in titles
        pain_keywords = ['scam', 'fraud', 'problem', 'warning', 'avoid', 'illegal',
                        'unpaid', 'visa', 'contract', 'fired', 'quit', 'nightmare']

        priority_threads = [
            t for t in all_threads
            if any(keyword in t['title'].lower() for keyword in pain_keywords)
        ]

        print(f"\n📝 Scraping {len(priority_threads)} high-priority threads with pain point keywords...")

        for i, thread in enumerate(priority_threads, 1):  # Get ALL priority threads
            print(f"\n[{i}/{len(priority_threads)}] {thread['title'][:60]}...")

            try:
                content = scrape_thread_content(page, thread['url'], thread['title'])
                if content and content['num_posts'] > 0:
                    all_thread_content.append(content)
                    print(f"   ✅ Got {content['num_posts']} posts")
                else:
                    print(f"   ⚠️ No posts found")
            except Exception as e:
                print(f"   ✗ Error: {e}")

            time.sleep(3)  # Be polite and avoid rate limiting

        browser.close()

    # Save results
    threads_file = Path(__file__).parent / 'tefl_net_threads.json'
    with open(threads_file, 'w', encoding='utf-8') as f:
        json.dump(all_threads, f, indent=2, ensure_ascii=False)

    content_file = Path(__file__).parent / 'tefl_net_content.json'
    with open(content_file, 'w', encoding='utf-8') as f:
        json.dump(all_thread_content, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(all_threads)} thread links to: {threads_file}")
    print(f"✅ Saved {len(all_thread_content)} thread contents to: {content_file}")

    # Summary
    total_posts = sum(t['num_posts'] for t in all_thread_content)
    print(f"\n📊 Summary:")
    print(f"   - Forums scraped: {len(FORUM_URLS)}")
    print(f"   - Threads found: {len(all_threads)}")
    print(f"   - High-priority threads: {len(priority_threads)}")
    print(f"   - Thread content scraped: {len(all_thread_content)}")
    print(f"   - Total posts collected: {total_posts}")

if __name__ == "__main__":
    main()
