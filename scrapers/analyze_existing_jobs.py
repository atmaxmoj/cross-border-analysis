#!/usr/bin/env python3
"""
Analyze existing Dave's ESL job data to count schools and monthly volume
"""

import json
from datetime import datetime
from collections import defaultdict
from pathlib import Path

# Load existing data
output_dir = Path(__file__).parent / 'output'
jobs_file = output_dir / 'daves_esl_jobs.json'

with open(jobs_file, 'r') as f:
    jobs = json.load(f)

# Filter out "Unknown" entries
valid_jobs = [j for j in jobs if j['school'] != 'Unknown' and j['title'] != 'Unknown']

print(f"📊 DAVE'S ESL CAFE - ACTUAL JOB POSTING VOLUME")
print(f"=" * 70)
print(f"\nTotal jobs in data: {len(jobs)}")
print(f"Valid jobs (with school names): {len(valid_jobs)}")

# Count unique schools
schools = defaultdict(int)
for job in valid_jobs:
    schools[job['school']] += 1

print(f"\nUnique schools posting jobs: {len(schools)}")

# Parse dates and count by month
by_month = defaultdict(int)
for job in valid_jobs:
    date_str = job.get('date', '')
    if date_str:
        try:
            # Format: "Oct. 11, 2025\n07:29 pm PST"
            date_part = date_str.split('\n')[0]
            # Parse month and year
            date_obj = datetime.strptime(date_part, '%b. %d, %Y')
            month_key = date_obj.strftime('%Y-%m')
            by_month[month_key] += 1
        except:
            pass

# Calculate monthly average
if by_month:
    total_posts = sum(by_month.values())
    num_months = len(by_month)
    avg_per_month = total_posts / num_months

    print(f"\nMonthly posting data:")
    print(f"  Months tracked: {num_months}")
    print(f"  Total posts with dates: {total_posts}")
    print(f"  Average posts per month: {avg_per_month:.1f}")
    print(f"  Estimated annual volume: {avg_per_month * 12:.0f} posts/year")

    print(f"\n  By month:")
    for month in sorted(by_month.keys()):
        print(f"    {month}: {by_month[month]} posts")
else:
    print("\n⚠️  No date information available")

# Top posting schools
print(f"\nTop 20 schools by posting volume:")
top_schools = sorted(schools.items(), key=lambda x: x[1], reverse=True)[:20]
for i, (school, count) in enumerate(top_schools, 1):
    print(f"  {i:2d}. {school[:55]:<55} {count:3d} posts")

# Frequency analysis
posting_freq = defaultdict(int)
for count in schools.values():
    if count == 1:
        posting_freq['1 post'] += 1
    elif count == 2:
        posting_freq['2 posts'] += 1
    elif count <= 5:
        posting_freq['3-5 posts'] += 1
    elif count <= 10:
        posting_freq['6-10 posts'] += 1
    else:
        posting_freq['10+ posts'] += 1

print(f"\nPosting frequency distribution:")
for freq, school_count in sorted(posting_freq.items()):
    print(f"  {freq}: {school_count} schools")

# Calculate average posts per school
avg_posts_per_school = len(valid_jobs) / len(schools) if schools else 0
print(f"\nAverage posts per school: {avg_posts_per_school:.1f}")

# Estimate SAM based on actual data
if avg_per_month and len(schools) > 0:
    print(f"\n" + "=" * 70)
    print(f"SAM VALIDATION")
    print(f"=" * 70)
    print(f"\nActual data from Dave's ESL Cafe:")
    print(f"  - {len(schools)} unique schools currently posting")
    print(f"  - {avg_per_month:.0f} jobs posted per month")
    print(f"  - {avg_posts_per_school:.1f} posts per school (average)")
    print(f"  - {avg_per_month * 12:.0f} estimated annual postings")

    # Estimate schools hiring per month
    # If each school posts 2-3x per year, how many unique hirers per month?
    annual_posts_per_school = avg_posts_per_school
    if annual_posts_per_school > 0:
        est_unique_hirers_per_month = avg_per_month / (annual_posts_per_school / 12)
        print(f"\nEstimated unique schools hiring per month: {est_unique_hirers_per_month:.0f}")
        print(f"  (assumes each school posts {annual_posts_per_school:.1f}x per year)")
