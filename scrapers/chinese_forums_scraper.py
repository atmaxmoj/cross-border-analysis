#!/usr/bin/env python3
"""
Chinese-Forums.com Scraper using Playwright
Collects "Teaching English in China" forum discussions
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
import time

# Target forum section
FORUM_URL = 'https://www.chinese-forums.com/forums/forum/28-teaching-english-in-china/'
PAGES_TO_SCRAPE = 10  # 10 pages * 25 threads = 250 threads

def scrape_thread_list(page, page_num):
    """Scrape list of threads from a forum page"""
    page_url = f"{FORUM_URL}?page={page_num}" if page_num > 1 else FORUM_URL
    print(f"\n📊 Scraping page {page_num}: {page_url}")

    try:
        page.goto(page_url, wait_until='domcontentloaded', timeout=60000)
        time.sleep(3)

        threads = []

        # Find thread links
        thread_elements = page.query_selector_all('.ipsDataItem_title a')

        print(f"   Found {len(thread_elements)} threads")

        for element in thread_elements:
            try:
                title = element.inner_text()
                url = element.get_attribute('href')

                # Make absolute URL if needed
                if url and not url.startswith('http'):
                    url = f"https://www.chinese-forums.com{url}"

                threads.append({
                    'title': title,
                    'url': url,
                    'forum': 'teaching_english_china'
                })

                print(f"   ✓ {title[:60]}...")

            except Exception as e:
                print(f"   ✗ Error getting thread: {e}")
                continue

        return threads

    except Exception as e:
        print(f"   ✗ Error scraping page: {e}")
        return []

def scrape_thread_content(page, thread_url, thread_title):
    """Scrape posts from a specific thread"""
    try:
        page.goto(thread_url, wait_until='domcontentloaded', timeout=60000)
        time.sleep(3)

        posts = []

        # Find all post content
        post_elements = page.query_selector_all('[data-role="commentContent"]')

        for post in post_elements[:20]:  # First 20 posts per thread
            try:
                content = post.inner_text()

                # Try to get author
                author_elem = post.query_selector('.ipsType_break')
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
    print("🔍 Starting Chinese-Forums.com scraper...")

    all_threads = []
    all_thread_content = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()

        # Step 1: Get thread lists from multiple pages
        for page_num in range(1, PAGES_TO_SCRAPE + 1):
            threads = scrape_thread_list(page, page_num)
            all_threads.extend(threads)
            time.sleep(3)

        print(f"\n✅ Found {len(all_threads)} total threads")

        # Step 2: Scrape content from threads with pain point keywords
        pain_keywords = ['scam', 'fraud', 'problem', 'warning', 'avoid', 'illegal',
                        'unpaid', 'visa', 'contract', 'fired', 'quit', 'issue',
                        'complaint', 'bad', 'terrible', 'nightmare']

        priority_threads = [
            t for t in all_threads
            if any(keyword in t['title'].lower() for keyword in pain_keywords)
        ]

        # If not many priority threads, scrape all threads
        if len(priority_threads) < 20:
            priority_threads = all_threads[:50]  # First 50 threads

        print(f"\n📝 Scraping {len(priority_threads)} threads...")

        for i, thread in enumerate(priority_threads, 1):
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

            time.sleep(3)

        browser.close()

    # Save results
    threads_file = Path(__file__).parent / 'chinese_forums_threads.json'
    with open(threads_file, 'w', encoding='utf-8') as f:
        json.dump(all_threads, f, indent=2, ensure_ascii=False)

    content_file = Path(__file__).parent / 'chinese_forums_content.json'
    with open(content_file, 'w', encoding='utf-8') as f:
        json.dump(all_thread_content, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(all_threads)} thread links to: {threads_file}")
    print(f"✅ Saved {len(all_thread_content)} thread contents to: {content_file}")

    # Summary
    total_posts = sum(t['num_posts'] for t in all_thread_content)
    print(f"\n📊 Summary:")
    print(f"   - Pages scraped: {PAGES_TO_SCRAPE}")
    print(f"   - Threads found: {len(all_threads)}")
    print(f"   - Priority threads: {len(priority_threads)}")
    print(f"   - Thread content scraped: {len(all_thread_content)}")
    print(f"   - Total posts collected: {total_posts}")

if __name__ == "__main__":
    main()
