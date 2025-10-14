# YouTeacher - ESL Recruitment Platform

Strategic analysis and business plan for YouTeacher ESL recruitment platform, focusing on the China market.

## Project Structure

```
youteacher/
├── docs/                       # Original business plan PDF
├── research/                   # Pain point analysis from UGC
│   └── ugc_painpoint_analysis/ # 11 analysis reports from 4,929 posts
├── scrapers/                   # Data collection scripts
│   ├── reddit_crawler.py
│   ├── chinese_forums_scraper.py
│   ├── tefl_net_scraper.py
│   ├── daves_esl_scraper.py
│   └── output/                 # Scraped data (JSON)
├── src/                        # Next.js application
│   ├── app/                    # App router
│   ├── components/
│   │   ├── chapters/           # H2 level (major divisions)
│   │   ├── sections/           # H3 level (subsections)
│   │   ├── layout/             # Wrapper components
│   │   └── ui/                 # Reusable UI components
│   └── lib/                    # Utilities
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the business plan.

### Docker

```bash
docker-compose up --build
```

## Data Collection

### Reddit Scraper

Collects posts from 10 ESL-related subreddits:

```bash
cd scrapers
python reddit_crawler.py
```

**Output:** `scrapers/output/reddit_exploratory_evidence.json` (4,681 posts)

### Forum Scrapers

```bash
# TEFL.net
python tefl_net_scraper.py

# Chinese-Forums.com
python chinese_forums_scraper.py

# Dave's ESL Cafe
python daves_esl_scraper.py
```

## Pain Point Analysis

Located in `research/ugc_painpoint_analysis/`:

- 11 analysis reports (one per data source)
- Total: 4,929 posts manually analyzed
- Scoring framework based on job board business impact

### Key Findings

1. **Scam Listings** (10/10 impact) - Found in 11/11 sources
2. **Illegal Employment** (10/10 impact) - Found in 10/11 sources
3. **Contract Fraud** (10/10 impact) - Found in 11/11 sources
4. **Racial Discrimination** (10/10 impact) - 44.6% of r/TEFLteachers posts

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** CSS (extracted from original HTML)
- **Deployment:** Docker

## Environment Variables

Create `.env` file for scrapers:

```env
REDDIT_CLIENT_ID=your_client_id
REDDIT_CLIENT_SECRET=your_secret
REDDIT_USERNAME=your_username
REDDIT_PASSWORD=your_password
REDDIT_USER_AGENT=your_app_name
```

## Contributing

This is a strategic planning repository. The Next.js app converts the business plan HTML into React components for better maintainability and future features (like markdown analysis reader).

## License

Private project - All rights reserved
