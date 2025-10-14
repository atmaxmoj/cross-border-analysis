#!/usr/bin/env python3
"""
SeriousTeachers.com Job Board Scraper
Collects China job postings from SeriousTeachers
"""

from playwright.sync_api import sync_playwright
import json
from pathlib import Path
from datetime import datetime
import time
import re

OUTPUT_DIR = Path(__file__).parent / 'output'
OUTPUT_DIR.mkdir(exist_ok=True)

RATE_LIMIT_DELAY = 3

def scrape_serious_teachers(page, max_pages=20):
    """Scrape SeriousTeachers.com China job board"""
    print(f"\n📊 Scraping SeriousTeachers.com China Jobs...")

    jobs = []
    base_url = 'https://www.seriousteachers.com/0/41/teaching-job-offers-from-china'

    for page_num in range(1, max_pages + 1):
        # SeriousTeachers pagination
        if page_num == 1:
            page_url = base_url
        else:
            page_url = f"{base_url}?page={page_num}"

        print(f"\n   📄 Page {page_num}/{max_pages}: {page_url}")

        try:
            page.goto(page_url, wait_until='domcontentloaded', timeout=30000)
            time.sleep(2)

            # Try multiple selectors
            job_selectors = [
                'article',
                '.job-posting',
                '.job-listing',
                '.job-item',
                '[class*="job"]',
                'div[data-job-id]'
            ]

            job_elements = []
            for selector in job_selectors:
                elements = page.query_selector_all(selector)
                if elements and len(elements) > 0:
                    # Filter out navigation/header elements
                    valid_elements = [e for e in elements if e.query_selector('h2, h3, .title, [class*="title"]')]
                    if valid_elements:
                        job_elements = valid_elements
                        print(f"      Found {len(valid_elements)} jobs using selector: {selector}")
                        break

            if not job_elements:
                print(f"      ⚠️  No jobs found on this page")
                # Save debug HTML
                html = page.content()
                with open(OUTPUT_DIR / f'debug_serious_page_{page_num}.html', 'w') as f:
                    f.write(html)
                break

            # Extract job data
            for elem in job_elements:
                try:
                    # Title
                    title_elem = elem.query_selector('h2, h3, .title, .job-title, [class*="title"]')
                    title = title_elem.inner_text().strip() if title_elem else 'N/A'

                    # School/Company
                    school_selectors = ['.company', '.school', '.employer', '[class*="company"]', '[class*="school"]']
                    school = 'N/A'
                    for sel in school_selectors:
                        school_elem = elem.query_selector(sel)
                        if school_elem:
                            school = school_elem.inner_text().strip()
                            break

                    # Location
                    location_elem = elem.query_selector('.location, [class*="location"]')
                    location = location_elem.inner_text().strip() if location_elem else 'China'

                    # Date
                    date_selectors = ['.date', '.posted', 'time', '[class*="date"]', '[class*="posted"]']
                    date_str = 'N/A'
                    for sel in date_selectors:
                        date_elem = elem.query_selector(sel)
                        if date_elem:
                            date_str = date_elem.inner_text().strip()
                            # Also try datetime attribute
                            if not date_str or date_str == 'N/A':
                                date_str = date_elem.get_attribute('datetime') or 'N/A'
                            break

                    # URL
                    link_elem = elem.query_selector('a[href*="job"], a[href*="teaching"]')
                    job_url = link_elem.get_attribute('href') if link_elem else 'N/A'
                    if job_url and job_url != 'N/A' and not job_url.startswith('http'):
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
                    print(f"      ✗ Error extracting job: {e}")
                    continue

            time.sleep(RATE_LIMIT_DELAY)

        except Exception as e:
            print(f"      ✗ Error scraping page: {e}")
            break

    print(f"\n   Total jobs collected: {len(jobs)}")
    return jobs

def main():
    print("🔍 Starting SeriousTeachers.com Scraper...")

    jobs = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()

        jobs = scrape_serious_teachers(page, max_pages=20)

        browser.close()

    # Save raw data
    jobs_file = OUTPUT_DIR / 'serious_teachers_jobs.json'
    with open(jobs_file, 'w', encoding='utf-8') as f:
        json.dump(jobs, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(jobs)} job postings to: {jobs_file}")

    # Quick analysis
    unique_schools = len(set(j['school'] for j in jobs if j['school'] != 'N/A'))
    print(f"\n📊 Quick Stats:")
    print(f"   - Total jobs: {len(jobs)}")
    print(f"   - Unique schools: {unique_schools}")

if __name__ == "__main__":
    main()
