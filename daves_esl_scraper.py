#!/usr/bin/env python3
"""
Dave's ESL Cafe Scraper using Playwright
Collects China job postings and forum discussions about pain points
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
from datetime import datetime
import time

# Target sections on Dave's ESL Cafe
SCRAPE_SECTIONS = {
    'china_jobs': 'https://www.eslcafe.com/jobs/china',
    'job_discussion': 'https://www.eslcafe.com/forums/job',
    'teacher_discussion': 'https://www.eslcafe.com/forums/teacher'
}

def scrape_job_board(page):
    """Scrape China job postings from Dave's ESL Cafe"""
    print("\n📊 Scraping China job board...")

    try:
        page.goto('https://www.eslcafe.com/jobs/china', wait_until='domcontentloaded', timeout=60000)
        time.sleep(5)  # Wait for AngularJS to load

        jobs = []

        # Find job listing elements (AngularJS-based site)
        job_elements = page.query_selector_all('ul.cmn-list li.ng-scope')

        print(f"   Found {len(job_elements)} job elements")

        for job in job_elements[:100]:  # First 100 jobs
            try:
                # Extract job details
                title_elem = job.query_selector('.job-title a')
                title = title_elem.inner_text() if title_elem else 'Unknown'

                # Get job URL
                url = title_elem.get_attribute('href') if title_elem else ''
                if url and not url.startswith('http'):
                    url = f"https://www.eslcafe.com{url}"

                # Get school/employer name
                school_elem = job.query_selector('.job-title p')
                school = school_elem.inner_text() if school_elem else 'Unknown'

                # Get posting date
                date_elem = job.query_selector('.job-post-time')
                date = date_elem.inner_text()[:50] if date_elem else ''

                jobs.append({
                    'title': title,
                    'school': school,
                    'date': date,
                    'url': url,
                    'source': 'daves_esl_china_jobs'
                })

                print(f"   ✓ {title[:60]}...")

            except Exception as e:
                continue

        print(f"   ✓ Scraped {len(jobs)} job postings")
        return jobs

    except Exception as e:
        print(f"   ✗ Error scraping job board: {e}")
        return []

def scrape_forum_threads(page, forum_url, forum_name):
    """Scrape forum threads"""
    print(f"\n📊 Scraping {forum_name} forum...")

    try:
        page.goto(forum_url, wait_until='networkidle', timeout=30000)
        time.sleep(3)

        threads = []

        # Find thread links (adjust selectors)
        thread_elements = page.query_selector_all('a.thread-title, .topic-title, h3 a')

        print(f"   Found {len(thread_elements)} threads")

        for elem in thread_elements[:50]:  # First 50 threads
            try:
                title = elem.inner_text()
                url = elem.get_attribute('href')

                # Make absolute URL
                if url and not url.startswith('http'):
                    url = f"https://www.eslcafe.com{url}"

                # Filter for pain point keywords
                pain_keywords = ['china', 'scam', 'problem', 'warning', 'avoid',
                               'unpaid', 'contract', 'visa', 'fraud', 'fake']

                if any(keyword in title.lower() for keyword in pain_keywords):
                    threads.append({
                        'title': title,
                        'url': url,
                        'forum': forum_name
                    })
                    print(f"   ✓ {title[:60]}...")

            except Exception as e:
                continue

        return threads

    except Exception as e:
        print(f"   ✗ Error scraping forum: {e}")
        return []

def scrape_thread_content(page, thread_url, thread_title):
    """Scrape posts from a specific thread"""
    try:
        page.goto(thread_url, wait_until='networkidle', timeout=30000)
        time.sleep(2)

        posts = []

        # Find post content (adjust selectors)
        post_elements = page.query_selector_all('.post-content, .message, .post-body')

        for post in post_elements[:15]:  # First 15 posts
            try:
                content = post.inner_text()[:1000]

                posts.append({
                    'content': content
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
        return None

def main():
    print("🔍 Starting Dave's ESL Cafe scraper with Playwright...")

    all_jobs = []
    all_threads = []
    all_thread_content = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()

        # Step 1: Scrape job board
        jobs = scrape_job_board(page)
        all_jobs.extend(jobs)
        time.sleep(3)

        # Step 2: Scrape forum thread lists
        forum_threads = scrape_forum_threads(page, 'https://www.eslcafe.com/forums/job', 'job_discussion')
        all_threads.extend(forum_threads)
        time.sleep(3)

        teacher_threads = scrape_forum_threads(page, 'https://www.eslcafe.com/forums/teacher', 'teacher_discussion')
        all_threads.extend(teacher_threads)
        time.sleep(3)

        print(f"\n✅ Found {len(all_threads)} relevant threads")

        # Step 3: Scrape thread content
        print(f"\n📝 Scraping content from {len(all_threads)} threads...")

        for i, thread in enumerate(all_threads[:20], 1):  # Limit to 20 threads
            print(f"\n[{i}/20] {thread['title'][:60]}...")

            content = scrape_thread_content(page, thread['url'], thread['title'])
            if content:
                all_thread_content.append(content)

            time.sleep(2)

        browser.close()

    # Save results
    jobs_file = Path(__file__).parent / 'daves_esl_jobs.json'
    with open(jobs_file, 'w', encoding='utf-8') as f:
        json.dump(all_jobs, f, indent=2, ensure_ascii=False)

    threads_file = Path(__file__).parent / 'daves_esl_threads.json'
    with open(threads_file, 'w', encoding='utf-8') as f:
        json.dump(all_threads, f, indent=2, ensure_ascii=False)

    content_file = Path(__file__).parent / 'daves_esl_content.json'
    with open(content_file, 'w', encoding='utf-8') as f:
        json.dump(all_thread_content, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(all_jobs)} job postings to: {jobs_file}")
    print(f"✅ Saved {len(all_threads)} thread links to: {threads_file}")
    print(f"✅ Saved {len(all_thread_content)} thread contents to: {content_file}")

    # Summary
    total_posts = sum(t['num_posts'] for t in all_thread_content)
    print(f"\n📊 Summary:")
    print(f"   - Job postings: {len(all_jobs)}")
    print(f"   - Forum threads found: {len(all_threads)}")
    print(f"   - Thread content scraped: {len(all_thread_content)}")
    print(f"   - Total posts collected: {total_posts}")

if __name__ == "__main__":
    main()
