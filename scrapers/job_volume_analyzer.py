#!/usr/bin/env python3
"""
Job Board Volume Analyzer
Scrapes Dave's ESL Cafe and competitors to measure actual monthly posting volume
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
from datetime import datetime
import time
import re
from collections import defaultdict

OUTPUT_DIR = Path(__file__).parent / 'output'
OUTPUT_DIR.mkdir(exist_ok=True)

# Job board URLs
JOB_BOARDS = {
    'daves_esl_cafe': {
        'name': "Dave's ESL Cafe",
        'url': 'https://www.eslcafe.com/jobs/china/',
        'type': 'list'
    },
    'serious_teachers': {
        'name': 'SeriousTeachers.com',
        'url': 'https://www.seriousteachers.com/jobs/china',
        'type': 'list'
    }
}

RATE_LIMIT_DELAY = 3  # seconds between requests

def parse_date(date_str):
    """Parse various date formats into datetime object"""
    # Common formats: "Dec 15, 2024", "15 Dec 2024", "2024-12-15", etc.
    formats = [
        '%b %d, %Y',
        '%d %b %Y',
        '%Y-%m-%d',
        '%m/%d/%Y',
        '%d/%m/%Y'
    ]

    for fmt in formats:
        try:
            return datetime.strptime(date_str.strip(), fmt)
        except:
            continue
    return None

def scrape_daves_esl_jobs(page, max_pages=10):
    """Scrape Dave's ESL Cafe China job board"""
    print(f"\n📊 Scraping Dave's ESL Cafe China job board...")

    jobs = []
    base_url = 'https://www.eslcafe.com/jobs/china/'

    for page_num in range(1, max_pages + 1):
        # Dave's ESL uses page numbers: ?page=1, ?page=2, etc.
        if page_num == 1:
            page_url = base_url
        else:
            page_url = f"{base_url}?page={page_num}"

        print(f"\n   📄 Page {page_num}/{max_pages}: {page_url}")

        try:
            page.goto(page_url, wait_until='domcontentloaded', timeout=30000)
            time.sleep(2)

            # Try multiple selectors for job listings
            job_selectors = [
                '.job-listing',
                '.job-item',
                'article.job',
                '[class*="job"]',
                '.listing-item'
            ]

            job_elements = []
            for selector in job_selectors:
                elements = page.query_selector_all(selector)
                if elements and len(elements) > 0:
                    job_elements = elements
                    print(f"      Found {len(elements)} jobs using selector: {selector}")
                    break

            if not job_elements:
                print(f"      ⚠️  No jobs found on this page")
                # Save debug HTML
                html = page.content()
                with open(OUTPUT_DIR / f'debug_daves_page_{page_num}.html', 'w') as f:
                    f.write(html)
                break

            # Extract job data
            for elem in job_elements:
                try:
                    # Extract job title
                    title_elem = elem.query_selector('h2, h3, .job-title, [class*="title"]')
                    title = title_elem.inner_text().strip() if title_elem else 'N/A'

                    # Extract school name
                    school_elem = elem.query_selector('.company, .school, [class*="company"], [class*="employer"]')
                    school = school_elem.inner_text().strip() if school_elem else 'N/A'

                    # Extract post date
                    date_elem = elem.query_selector('.date, .posted, [class*="date"], time')
                    date_str = date_elem.inner_text().strip() if date_elem else 'N/A'

                    # Extract location
                    location_elem = elem.query_selector('.location, [class*="location"]')
                    location = location_elem.inner_text().strip() if location_elem else 'China'

                    # Get job URL
                    link_elem = elem.query_selector('a')
                    job_url = link_elem.get_attribute('href') if link_elem else 'N/A'
                    if job_url and not job_url.startswith('http'):
                        job_url = f"https://www.eslcafe.com{job_url}"

                    jobs.append({
                        'board': 'daves_esl_cafe',
                        'title': title,
                        'school': school,
                        'location': location,
                        'posted_date': date_str,
                        'url': job_url,
                        'scraped_at': datetime.now().isoformat()
                    })

                    print(f"      ✓ {school[:40]} - {title[:40]}")

                except Exception as e:
                    print(f"      ✗ Error extracting job: {e}")
                    continue

            time.sleep(RATE_LIMIT_DELAY)

        except Exception as e:
            print(f"      ✗ Error scraping page: {e}")
            break

    print(f"\n   Total jobs collected: {len(jobs)}")
    return jobs

def scrape_serious_teachers_jobs(page, max_pages=10):
    """Scrape SeriousTeachers.com China job board"""
    print(f"\n📊 Scraping SeriousTeachers.com China job board...")

    jobs = []
    base_url = 'https://www.seriousteachers.com/jobs/china'

    for page_num in range(1, max_pages + 1):
        if page_num == 1:
            page_url = base_url
        else:
            page_url = f"{base_url}?page={page_num}"

        print(f"\n   📄 Page {page_num}/{max_pages}: {page_url}")

        try:
            page.goto(page_url, wait_until='domcontentloaded', timeout=30000)
            time.sleep(2)

            # Similar extraction logic
            job_selectors = [
                '.job-listing',
                '.job',
                'article',
                '[class*="job"]'
            ]

            job_elements = []
            for selector in job_selectors:
                elements = page.query_selector_all(selector)
                if elements and len(elements) > 0:
                    job_elements = elements
                    print(f"      Found {len(elements)} jobs using selector: {selector}")
                    break

            if not job_elements:
                print(f"      ⚠️  No jobs found on this page")
                break

            for elem in job_elements:
                try:
                    title_elem = elem.query_selector('h2, h3, .title')
                    title = title_elem.inner_text().strip() if title_elem else 'N/A'

                    school_elem = elem.query_selector('.company, .school')
                    school = school_elem.inner_text().strip() if school_elem else 'N/A'

                    date_elem = elem.query_selector('.date, time')
                    date_str = date_elem.inner_text().strip() if date_elem else 'N/A'

                    location_elem = elem.query_selector('.location')
                    location = location_elem.inner_text().strip() if location_elem else 'China'

                    link_elem = elem.query_selector('a')
                    job_url = link_elem.get_attribute('href') if link_elem else 'N/A'
                    if job_url and not job_url.startswith('http'):
                        job_url = f"https://www.seriousteachers.com{job_url}"

                    jobs.append({
                        'board': 'serious_teachers',
                        'title': title,
                        'school': school,
                        'location': location,
                        'posted_date': date_str,
                        'url': job_url,
                        'scraped_at': datetime.now().isoformat()
                    })

                    print(f"      ✓ {school[:40]} - {title[:40]}")

                except Exception as e:
                    continue

            time.sleep(RATE_LIMIT_DELAY)

        except Exception as e:
            print(f"      ✗ Error scraping page: {e}")
            break

    print(f"\n   Total jobs collected: {len(jobs)}")
    return jobs

def analyze_posting_volume(jobs):
    """Analyze job posting volume and patterns"""
    print(f"\n📊 Analyzing posting volume...")

    # Count by board
    by_board = defaultdict(int)
    # Count by school
    by_school = defaultdict(int)
    # Count by month (if dates available)
    by_month = defaultdict(int)

    for job in jobs:
        by_board[job['board']] += 1
        by_school[job['school']] += 1

        # Try to parse date
        date_obj = parse_date(job['posted_date'])
        if date_obj:
            month_key = date_obj.strftime('%Y-%m')
            by_month[month_key] += 1

    # Calculate statistics
    total_jobs = len(jobs)
    unique_schools = len([s for s in by_school.keys() if s != 'N/A'])

    # Top posting schools
    top_schools = sorted(by_school.items(), key=lambda x: x[1], reverse=True)[:20]

    # Monthly average (if we have date data)
    avg_per_month = sum(by_month.values()) / len(by_month) if by_month else 0

    analysis = {
        'total_jobs_scraped': total_jobs,
        'unique_schools': unique_schools,
        'avg_jobs_per_month': round(avg_per_month, 1) if avg_per_month > 0 else 'N/A',
        'by_board': dict(by_board),
        'by_month': dict(sorted(by_month.items())),
        'top_posting_schools': [
            {'school': school, 'posts': count}
            for school, count in top_schools
        ],
        'estimated_annual_postings': round(avg_per_month * 12) if avg_per_month > 0 else 'N/A'
    }

    return analysis

def main():
    print("🔍 Starting Job Board Volume Analyzer...")
    print(f"   Target: Measure actual China ESL job posting volume\n")

    all_jobs = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()

        # Scrape Dave's ESL Cafe
        daves_jobs = scrape_daves_esl_jobs(page, max_pages=5)
        all_jobs.extend(daves_jobs)

        # Scrape SeriousTeachers
        serious_jobs = scrape_serious_teachers_jobs(page, max_pages=5)
        all_jobs.extend(serious_jobs)

        browser.close()

    # Save raw data
    jobs_file = OUTPUT_DIR / 'job_postings_raw.json'
    with open(jobs_file, 'w', encoding='utf-8') as f:
        json.dump(all_jobs, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(all_jobs)} job postings to: {jobs_file}")

    # Analyze volume
    analysis = analyze_posting_volume(all_jobs)

    # Save analysis
    analysis_file = OUTPUT_DIR / 'job_volume_analysis.json'
    with open(analysis_file, 'w', encoding='utf-8') as f:
        json.dump(analysis, f, indent=2, ensure_ascii=False)

    print(f"✅ Saved analysis to: {analysis_file}")

    # Print summary
    print(f"\n📊 POSTING VOLUME ANALYSIS")
    print(f"=" * 60)
    print(f"Total jobs scraped: {analysis['total_jobs_scraped']}")
    print(f"Unique schools: {analysis['unique_schools']}")
    print(f"Average jobs per month: {analysis['avg_jobs_per_month']}")
    print(f"Estimated annual postings: {analysis['estimated_annual_postings']}")
    print(f"\nBy board:")
    for board, count in analysis['by_board'].items():
        print(f"  - {board}: {count} jobs")

    if analysis['by_month']:
        print(f"\nBy month:")
        for month, count in list(analysis['by_month'].items())[-6:]:  # Last 6 months
            print(f"  - {month}: {count} jobs")

    print(f"\nTop 10 posting schools:")
    for item in analysis['top_posting_schools'][:10]:
        print(f"  - {item['school'][:50]}: {item['posts']} posts")

if __name__ == "__main__":
    main()
