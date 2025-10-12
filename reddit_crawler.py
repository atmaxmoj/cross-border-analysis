#!/usr/bin/env python3
"""
Reddit Crawler for ESL Teacher Pain Points Evidence
Crawls relevant subreddits to gather authentic teacher experiences
"""

import praw
import json
import os
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Reddit credentials from environment
REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET")
REDDIT_USERNAME = os.getenv("REDDIT_USERNAME")
REDDIT_PASSWORD = os.getenv("REDDIT_PASSWORD")
REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT")

# Subreddit-specific exploratory queries - MAXIMIZED for data collection
# Goal: Get ALL relevant pain point discussions, no limits
SUBREDDIT_QUERIES = {
    'TEFL': [
        # Core pain keywords
        'China', 'scam', 'fake', 'avoid', 'warning', 'problem', 'issue',
        'regret', 'terrible', 'nightmare', 'help', 'frustrated',
        'quit', 'fired', 'unpaid', 'contract', 'visa', 'illegal',
        'recruiter', 'agency', 'school', 'employer'
    ],
    'China': [
        # Teaching/ESL specific
        'teaching', 'teacher', 'ESL', 'English teacher', 'TEFL',
        'work visa', 'Z visa', 'illegal work', 'scam', 'arrested',
        'deported', 'school', 'employer', 'salary'
    ],
    'ESL': [
        # China specific
        'China', 'Chinese school', 'recruiter', 'agency', 'scam',
        'contract', 'visa', 'problem', 'warning', 'avoid'
    ],
    'teachabroad': [
        'China', 'problem', 'warning', 'avoid', 'scam', 'experience',
        'regret', 'issue', 'nightmare'
    ],
    'internationalteachers': [
        'China', 'school', 'contract', 'issue', 'problem', 'warning',
        'avoid', 'verification', 'background check', 'hiring'
    ],
    'ChinaJobs': [
        'scam', 'fake', 'fraud', 'warning', 'avoid', 'illegal',
        'visa', 'contract', 'problem', 'issue'
    ],
    'TEFLteachers': [
        'China', 'problem', 'help', 'advice', 'warning', 'scam',
        'quit', 'frustrated', 'nightmare', 'avoid'
    ],
    # NEW subreddits for more data
    'chinalife': [
        'teaching', 'teacher', 'ESL', 'work', 'job', 'visa',
        'scam', 'problem', 'illegal', 'school'
    ],
    'expats': [
        'China teaching', 'ESL China', 'teacher China', 'work visa China',
        'scam China', 'illegal work China'
    ],
    'IWantOut': [
        'teach China', 'ESL China', 'China teacher', 'China work',
        'teaching abroad China'
    ]
}

# Known pain point keywords to tag posts (but don't limit search to these)
PAIN_POINT_KEYWORDS = {
    'scam': ['scam', 'fraud', 'fake', 'arrested', 'deport'],
    'payment': ['unpaid', 'salary', 'money', 'bonus', 'contract breach'],
    'visa': ['visa', 'illegal', 'work permit', 'Z visa', 'tourist visa'],
    'turnover': ['quit', 'leaving', 'renew', 'stay', 'leave'],
    'verification': ['degree', 'fake', 'qualify', 'background check'],
    'recruitment': ['hire', 'recruit', 'find teacher', 'shortage'],
    'ux': ['website', 'platform', 'Dave', 'job board', 'search'],
    'ghosting': ['ghost', 'no response', 'ignored', 'reply'],
    'discrimination': ['age', 'race', 'white', 'native', 'discriminat'],
    'communication': ['language', 'Chinese', 'parent', 'barrier'],
    'unknown': []  # Catch-all for posts that don't match known patterns
}

def setup_reddit():
    """Initialize Reddit API connection"""
    return praw.Reddit(
        client_id=REDDIT_CLIENT_ID,
        client_secret=REDDIT_CLIENT_SECRET,
        username=REDDIT_USERNAME,
        password=REDDIT_PASSWORD,
        user_agent=REDDIT_USER_AGENT
    )

def categorize_post(title, body):
    """Auto-categorize post based on content keywords"""
    content = (title + ' ' + body).lower()
    categories = []

    for category, keywords in PAIN_POINT_KEYWORDS.items():
        if any(keyword.lower() in content for keyword in keywords):
            categories.append(category)

    return categories if categories else ['unknown']

def search_subreddit_exploratory(reddit, subreddit_name, queries, limit=100):
    """Search a specific subreddit with context-appropriate queries - MAXIMIZE data collection"""
    results = []
    subreddit = reddit.subreddit(subreddit_name)
    seen_ids = set()  # Avoid duplicates

    for query in queries:
        try:
            # Search posts - ALL TIME, NO LIMITS
            for submission in subreddit.search(query, limit=limit, time_filter='all'):
                # Skip duplicates (same post found by multiple queries)
                if submission.id in seen_ids:
                    continue
                seen_ids.add(submission.id)

                title = submission.title
                body = submission.selftext[:2000] if submission.selftext else ''

                # Auto-categorize based on content
                categories = categorize_post(title, body)

                post_data = {
                    'post_id': submission.id,
                    'query': query,
                    'subreddit': subreddit_name,
                    'categories': categories,  # May match multiple known pain points OR be 'unknown'
                    'title': title,
                    'body': body,
                    'score': submission.score,
                    'num_comments': submission.num_comments,
                    'url': f"https://reddit.com{submission.permalink}",
                    'created_utc': datetime.fromtimestamp(submission.created_utc).isoformat(),
                    'author': str(submission.author)
                }

                # Get top 3 comments (rich source of pain points)
                if submission.num_comments > 0:
                    submission.comments.replace_more(limit=0)
                    top_comments = []
                    for comment in submission.comments[:3]:
                        top_comments.append({
                            'body': comment.body[:500],
                            'score': comment.score
                        })
                    post_data['top_comments'] = top_comments

                results.append(post_data)
                print(f"  ✓ '{title[:60]}...' (score: {submission.score}, cats: {', '.join(categories)})")

        except Exception as e:
            print(f"  ✗ Error searching for '{query}': {e}")
            continue

    return results

def main():
    print("🔍 Starting EXPLORATORY Reddit crawler for ESL pain points...\n")
    print("📌 Goal: Discover ANY pain points (including unknown ones)\n")

    # Initialize Reddit
    reddit = setup_reddit()
    print(f"✓ Connected to Reddit as u/{REDDIT_USERNAME}\n")

    all_results = []

    # Search each subreddit with its specific queries - MAXIMIZE data collection
    for subreddit_name, queries in SUBREDDIT_QUERIES.items():
        print(f"📊 Searching r/{subreddit_name}")
        print(f"   Using {len(queries)} queries, limit=100 per query, all-time...")

        results = search_subreddit_exploratory(reddit, subreddit_name, queries, limit=100)

        print(f"   ✅ Found {len(results)} unique posts\n")
        all_results.extend(results)

    # Save results
    output_file = Path(__file__).parent / 'reddit_exploratory_evidence.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, indent=2, ensure_ascii=False)

    print(f"✅ Saved {len(all_results)} total posts to: {output_file}")

    # Analyze by category
    category_counts = {}
    for post in all_results:
        for cat in post['categories']:
            if cat not in category_counts:
                category_counts[cat] = []
            category_counts[cat].append(post)

    print("\n📈 Pain Points Discovered (by category):")
    print("-" * 70)
    for category in sorted(category_counts.keys(), key=lambda x: len(category_counts[x]), reverse=True):
        posts = category_counts[category]
        avg_score = sum(p['score'] for p in posts) / len(posts)
        print(f"{category:<20} {len(posts):>3} posts (avg score: {avg_score:.1f})")

    # Highlight unknown category
    if 'unknown' in category_counts:
        print(f"\n⚠️  {len(category_counts['unknown'])} posts in 'unknown' category - POTENTIAL NEW PAIN POINTS!")
        print("    Review these manually to discover what we're missing.")

    # Save organized summary
    summary_file = Path(__file__).parent / 'reddit_exploratory_summary.md'
    with open(summary_file, 'w', encoding='utf-8') as f:
        f.write("# Reddit Exploratory Research - Pain Points Discovery\n\n")
        f.write(f"**Total Posts Analyzed:** {len(all_results)}\n\n")

        f.write("## Pain Points by Category (Sorted by Frequency)\n\n")
        for category in sorted(category_counts.keys(), key=lambda x: len(category_counts[x]), reverse=True):
            posts = category_counts[category]
            f.write(f"### {category.upper()} ({len(posts)} posts)\n\n")

            # Get top 3 posts per category
            top_posts = sorted(posts, key=lambda x: x['score'], reverse=True)[:3]

            for i, post in enumerate(top_posts, 1):
                f.write(f"**{i}. {post['title']}**\n")
                f.write(f"- Subreddit: r/{post['subreddit']} | Score: {post['score']} | Comments: {post['num_comments']}\n")
                f.write(f"- URL: {post['url']}\n")
                if post.get('body'):
                    f.write(f"- Excerpt: {post['body'][:300]}...\n")
                if post.get('top_comments') and len(post['top_comments']) > 0:
                    f.write(f"- Top Comment: {post['top_comments'][0]['body'][:200]}...\n")
                f.write("\n")

        # Special section for unknown category
        if 'unknown' in category_counts:
            f.write("\n---\n\n")
            f.write("## ⚠️ UNKNOWN CATEGORY - Potential New Pain Points\n\n")
            f.write("These posts didn't match our known pain point categories. **Review manually to discover new insights!**\n\n")

            unknown_posts = sorted(category_counts['unknown'], key=lambda x: x['score'], reverse=True)
            for i, post in enumerate(unknown_posts, 1):
                f.write(f"**{i}. {post['title']}**\n")
                f.write(f"- r/{post['subreddit']} | Score: {post['score']} | Query: '{post['query']}'\n")
                f.write(f"- URL: {post['url']}\n")
                if post.get('body'):
                    f.write(f"- Full Text: {post['body'][:500]}...\n")
                f.write("\n")

    print(f"✅ Saved exploratory summary to: {summary_file}")

if __name__ == "__main__":
    main()
