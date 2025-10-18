import Section from '../../layout/Section'

export default function Stage1() {
  return (
    <Section id="stage1-traffic" title="Stage 1: Traffic Acquisition (Months 1-3)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Solve the chicken-and-egg problem by aggregating jobs from existing platforms.</strong> Have thousands of jobs from day 1
          WITHOUT needing schools to post directly. Build teacher traffic FIRST before monetizing. Revenue = $0 in this stage.
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> A-Tier (Basic Utility) - Must-have features to launch
        </p>
      </div>

      <h4>Problem Statement</h4>
      <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
        Classic marketplace cold start: No schools will post if there are no teachers, no teachers will visit if there are no jobs.
        Dave's ESL and competitors have ~10,000 jobs combined but terrible UX. We need content from day 1 without requiring supply-side engagement.
      </p>

      <h4>Target Users</h4>
      <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '6px', marginTop: '10px' }}>
        <h5>Jessica Chen - The Scam Victim (Primary Persona)</h5>
        <p><strong>Background:</strong> 28 years old, Canadian, Bachelor's in Education + TEFL cert, 1 year teaching in Thailand</p>

        <p style={{ marginTop: '15px' }}><strong>Pain Points (Severity: 10/10):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Scam Listings & Fraudulent Recruiters (Pain Point #1)</strong> - 90% of Dave's ESL listings reported fake (found in 12/12 sources)</li>
          <li><strong>Can't Verify School Legitimacy (Pain Point #5)</strong> - Posted "Any info on Sustech?" on Dave's ESL forum - ZERO replies (ghost town)</li>
          <li><strong>Job Search Friction (Pain Point #8)</strong> - Dave's ESL 1995-era UX, must check 5+ sites daily, no mobile support</li>
        </ul>

        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em' }}>
          <strong>Critical Experience:</strong> "Found job on Dave's ESL Cafe. School seemed legitimate - professional website, responded quickly.
          Signed contract remotely, bought $2,000 flight. Arrived in China - school doesn't exist at address. Recruiter was harvesting resumes.
          Lost all money, stranded abroad. <strong>I'll never use job boards again.</strong>" (847 upvotes on r/TEFLteachers)
        </p>
      </div>

      <h4 style={{ marginTop: '25px' }}>User Journey</h4>
      <div style={{ padding: '15px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '6px', marginTop: '10px' }}>
        <ol style={{ marginLeft: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Discovery:</strong> Jessica hears about YouTeacher from Reddit r/TEFLteachers ("Finally, a site that aggregates ALL ESL jobs!")</li>
          <li><strong>First Visit:</strong> Visits youteacher.com on her phone, sees 300+ jobs aggregated from 5 platforms (vs manually checking each site)</li>
          <li><strong>Search & Filter:</strong> Searches "Beijing English teacher", filters by salary (&gt;¥15K/month), school type (International School)</li>
          <li><strong>Browse Results:</strong> Sees 20 relevant jobs, each showing salary, location, school type, source platform badge</li>
          <li><strong>Click Through:</strong> Clicks on "International School - Beijing Chaoyang" → Opens original Dave's ESL posting in new tab</li>
          <li><strong>Email Signup:</strong> Signs up for weekly email alerts for "Beijing + International Schools" before leaving</li>
          <li><strong>Community Engagement:</strong> Joins Discord, posts "Anyone heard of 'Beijing Sunny International School'?" → Gets 3 replies within 2 hours</li>
          <li><strong>Return Visit:</strong> Receives weekly email with 10 new Beijing jobs → Clicks through, finds 2 interesting positions</li>
        </ol>
        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em', color: '#6b7280' }}>
          <strong>Outcome:</strong> Jessica saves 2+ hours/week vs manually checking 5 job sites. Applies to 3 jobs in first week (vs 1/month previously).
          Feels supported by active community.
        </p>
      </div>

      <h4 style={{ marginTop: '25px' }}>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a teacher, I want to search thousands of jobs in one place, so I don't have to check 5+ websites daily</li>
        <li>As a teacher, I want to filter by location and salary, so I can quickly find relevant opportunities</li>
        <li>As a teacher, I want a mobile-responsive interface, so I can browse jobs on my phone (60% of traffic)</li>
        <li>As a teacher, I want to see which platform the job came from, so I know where to apply</li>
        <li>As a teacher, I want weekly email alerts, so I don't miss new opportunities</li>
        <li>As a teacher, I want an active community to ask questions, so I can verify schools (vs Dave's ghost town forum)</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR1: Job Aggregator (A.1)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Scrape 3-5 major ESL job boards to aggregate all available jobs (~150-300 active jobs at any time)</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Build web scrapers for: Dave's ESL Cafe, SeriousTeachers, ESLCafe, TEFL.com, GoAbroad</li>
          <li>Parse fields: job title, location (city/province/country), salary, description, posting date, source URL</li>
          <li>Store in PostgreSQL with source attribution (required for legal compliance)</li>
          <li>Daily cron job to update listings (keep content fresh)</li>
          <li>Display "Originally posted on [Source Platform]" with clickable link</li>
          <li>Teachers click through to apply on ORIGINAL platform (portal model, not destination)</li>
          <li>Respect robots.txt, rate limit requests (1 req/second to avoid IP bans)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>150-200 active jobs by Week 2 (scraping Dave's ESL + SeriousTeachers)</li>
          <li>300-500 active jobs by Month 3 (scraping 5 platforms)</li>
          <li>Daily updates, listings marked as "expired" after 60 days</li>
          <li>100% of jobs have valid source URLs</li>
        </ul>
        <p><strong>Evidence:</strong> Oct 2025 scraping data: Dave's ESL 47 jobs, SeriousTeachers 10 jobs. Total ESL market ~150-300 active listings at any snapshot. Indeed (2004-2007) aggregated all available jobs, built 25M+ monthly visitors before monetizing</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR2: Job Search & Browse (A.2)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Fast, intuitive search with basic filters (UI inspired by Glassdoor's job search interface)</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Full-text search: job title, description keywords</li>
          <li>Filters: Location (city dropdown), salary range (slider), school type (international/training center/public)</li>
          <li>Sort by: date posted (newest first), salary (high to low)</li>
          <li>Pagination: 20 jobs per page</li>
          <li>Mobile-responsive design, works on iOS/Android</li>
          <li>No login required - public access to maximize traffic</li>
          <li>Search performance: Results load in &lt;500ms (index optimization)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Average search completes in &lt;30 seconds</li>
          <li>60%+ of users find relevant job in first search (track click-through rate)</li>
          <li>Mobile traffic accounts for 50%+ of total (responsive design working)</li>
        </ul>
        <p><strong>Design Reference:</strong> Study Glassdoor's job search UI patterns for filter placement, result card layout, and mobile responsiveness</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR3: Contact/Apply Links (A.3)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Job detail page with apply button redirecting to source platform</p>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>100% of jobs have functional apply links (no 404 errors)</li>
          <li>10%+ of job views result in click-throughs to source platform</li>
        </ul>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR4: Email Capture & Weekly Alerts</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> "Get new jobs weekly" signup form for email marketing</p>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>500+ email subscribers by Month 3</li>
          <li>20%+ open rate, 5%+ click-through rate</li>
        </ul>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR5: Discord Community</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Discord server integration for community discussion (better than Dave's ghost town forum)</p>
        <p><strong>Implementation:</strong> Use Discord widgets to embed server preview on website - no custom forum development needed</p>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>100+ Discord members by Month 3</li>
          <li>10+ messages/day (active community vs Dave's ghost town)</li>
          <li>Discord widget visible on homepage showing online members</li>
        </ul>
        <p><strong>Evidence:</strong> Discord has 500M+ users. Crypto projects, gaming communities, SaaS use Discord vs building custom forums. Zero dev time, instant moderation tools</p>
      </div>

      <h5 style={{ marginTop: '30px', marginLeft: '20px', color: '#64748b' }}>Infrastructure & Platform Requirements</h5>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR6: Docker Compose Multi-Service Setup</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Containerized development and deployment environment</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>docker-compose.yml with 3 services: web (Next.js), scraper (Python FastAPI), db (PostgreSQL)</li>
          <li>Environment variable management (.env files, never committed)</li>
          <li>Hot reload for development (volumes for src/)</li>
          <li>Health checks for each service</li>
          <li>Networking: services can communicate via service names</li>
          <li>Volume persistence for PostgreSQL data</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>All services start with single command: docker compose up</li>
          <li>Zero manual configuration needed after clone</li>
          <li>Hot reload works for frontend changes</li>
        </ul>
        <p><strong>Build Time:</strong> 2 days</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR7: Database Schema & Migrations</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> PostgreSQL schema design with migration system</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Tables: jobs_aggregated (id, title, location, salary, description, source_url, source_platform, posted_date, scraped_date, is_expired)</li>
          <li>Tables: email_subscribers (email, location_preference, created_at, unsubscribed_at)</li>
          <li>Indexes: location (B-tree), posted_date (B-tree), title (GIN for FTS)</li>
          <li>Full-text search index on title + description (PostgreSQL tsvector)</li>
          <li>Migration tool: Prisma (Node.js) or Alembic (Python)</li>
          <li>Seed data for development (100 sample jobs)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Migrations run automatically on docker compose up</li>
          <li>Search query on 50K jobs completes in &lt;500ms</li>
          <li>Database schema is version controlled</li>
        </ul>
        <p><strong>Build Time:</strong> 3 days</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR8: Scraper Service Architecture</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Python FastAPI service for multi-platform job scraping</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Scrapy framework with separate spiders for each platform (DavesESL, SeriousTeachers, ESLCafe)</li>
          <li>Request throttling: 1 request/second per domain (avoid IP bans)</li>
          <li>User-Agent rotation (mimic different browsers)</li>
          <li>robots.txt compliance checker</li>
          <li>Error handling: retry failed requests 3x with exponential backoff</li>
          <li>Data deduplication: hash(title + location + description) to detect duplicates</li>
          <li>Cron job: APScheduler runs daily at 2 AM UTC</li>
          <li>Logging: scraper performance metrics (jobs scraped, errors, runtime)</li>
          <li>Health check endpoint: /health returns scraper status</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>1,000+ jobs scraped from Dave's ESL in first run</li>
          <li>Zero duplicate jobs in database</li>
          <li>Scraper runs automatically daily without manual intervention</li>
          <li>Error rate &lt;5% (network failures, parsing errors)</li>
        </ul>
        <p><strong>Build Time:</strong> 2-3 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR9: Performance & SEO Infrastructure</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Server-side rendering, SEO optimization, performance targets, and basic CRM for school outreach</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Next.js 14 App Router with SSR for job listing pages (SEO critical)</li>
          <li>Dynamic Open Graph tags (title, description, image per job)</li>
          <li>Sitemap generation: /sitemap.xml with all job URLs</li>
          <li>robots.txt configuration</li>
          <li>Meta tags: title, description, canonical URL</li>
          <li>Basic CRM system: Track school contacts (name, email, outreach status, response date) for Pete's outbound sales</li>
          <li>SEO content: Basic blog section with 3-5 articles (e.g., "How to avoid ESL scams in China", "Top 10 international schools hiring")</li>
          <li>FAQ page: Answer common questions (visa requirements, salary expectations, contract red flags) - drives long-tail SEO traffic</li>
          <li>Image optimization with lazy loading</li>
          <li>Code splitting for non-critical components</li>
          <li>Performance target: Lighthouse score &gt;90 (Performance, SEO, Accessibility)</li>
          <li>Core Web Vitals: LCP &lt;2.5s, FID &lt;100ms, CLS &lt;0.1</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Job detail pages load in &lt;2 seconds</li>
          <li>Google Search Console shows indexed job pages + blog/FAQ within 1 week</li>
          <li>CRM tracks 100+ school contacts by Month 3</li>
          <li>Blog + FAQ pages generate 10%+ of organic traffic by Month 6</li>
          <li>Mobile PageSpeed score &gt;85</li>
        </ul>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR10: Monitoring, Logging & Analytics</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Error tracking, logging, and user analytics</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Sentry integration (frontend + backend error tracking)</li>
          <li>Google Analytics 4 (page views, user flows, conversions)</li>
          <li>Custom events: job_view, job_click, email_signup, discord_join</li>
          <li>Logging: Winston (Node.js) or Python logging with structured JSON logs</li>
          <li>Log levels: ERROR (Sentry alert), WARN, INFO, DEBUG</li>
          <li>Logs stored in files, rotated daily (max 7 days retention)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>100% of frontend errors captured in Sentry</li>
          <li>GA4 tracking installed, dashboard shows MAU</li>
          <li>Logs searchable for debugging issues</li>
        </ul>
        <p><strong>Build Time:</strong> 3 days</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR11: Security Basics</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Essential security measures for public platform and microservice communication</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>HTTPS only (redirect HTTP → HTTPS)</li>
          <li>Input sanitization: DOMPurify for user-generated content (email signup)</li>
          <li>SQL injection prevention: Parameterized queries with ORM</li>
          <li>XSS prevention: React escapes by default, validate email format</li>
          <li>Rate limiting: 100 requests/minute per IP (prevent scraping)</li>
          <li>CORS policy: Allow only youteacher.com origin</li>
          <li>Security headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options</li>
          <li>Microservices security: Shared secret tokens for service-to-service communication (web ↔ scraper ↔ db)</li>
          <li>Environment variable security: Never commit secrets, use .env files in .gitignore</li>
          <li>API authentication: Separate internal service tokens from public API keys</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>SSL Labs score: A or A+</li>
          <li>Security headers pass securityheaders.com scan</li>
          <li>Rate limiting blocks excessive requests (test with Apache Bench)</li>
          <li>Scraper service rejects requests without valid token</li>
          <li>Zero secrets found in git history</li>
        </ul>
        <p><strong>Build Time:</strong> 2 days</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR12: Admin API Endpoints (Stage 1)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Backend APIs for Pete to manually verify schools and manage platform from day 1</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Authentication: API key for Pete (environment variable, never committed to git)</li>
          <li><code>POST /api/admin/schools</code> - Manually add a school to database (for early verified schools)</li>
          <li><code>PATCH /api/admin/schools/:id/verify</code> - Mark school as verified (add "Verified" badge)</li>
          <li><code>GET /api/admin/schools</code> - List all schools</li>
          <li><code>GET /api/jobs/search?location=&amp;salary=</code> - Public search API (for frontend + testing)</li>
          <li><code>GET /api/jobs/:id</code> - Get job details by ID</li>
          <li>All endpoints return JSON, use standard HTTP status codes (200, 400, 401, 500)</li>
          <li>Request logging: Log all admin API calls to audit trail</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Pete can manually add + verify a school in &lt;1 minute via Postman</li>
          <li>Search API returns results in &lt;500ms</li>
          <li>API key authentication blocks unauthorized access to admin endpoints</li>
          <li>Public search API accessible without authentication</li>
        </ul>
        <p><strong>Build Time:</strong> 2 days</p>
        <p><strong>Why Critical:</strong> Pete needs to manually verify 5-10 schools in Stage 1 to seed trust. Search API needed for frontend to work. Separating admin vs public APIs from start ensures clean architecture.</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>North Star Metric:</strong> Monthly Active Teachers (MAU) - demonstrates product-market fit before monetizing</p>
        <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 3):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Jobs aggregated: 300-500 active listings (all major ESL platforms scraped)</li>
          <li>Monthly Active Teachers: 500-1,500 MAU (demonstrates traction)</li>
          <li>Discord community: 100+ members</li>
          <li>Email subscribers: 500+</li>
        </ul>

        <p style={{ marginTop: '15px' }}><strong>Go/No-Go Decision (End of Month 3):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>✓ 300+ active jobs live on platform</li>
          <li>✓ 500+ MAU (demonstrates teachers find value)</li>
          <li>✓ 100+ email signups OR 50+ Discord members</li>
          <li><strong>If YES:</strong> Proceed to Stage 2 (monetization)</li>
          <li><strong>If NO:</strong> Diagnose issue before building more features</li>
        </ul>
      </div>

      <h4 style={{ marginTop: '25px' }}>Out of Scope (Stage 1)</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>User accounts (not needed - public access)</li>
        <li>Direct job posting by schools (comes in Stage 2)</li>
        <li>School verification (comes in Stage 3)</li>
        <li>Reviews and ratings (comes in Stage 4)</li>
        <li>Advanced search filters beyond location/salary (comes in Stage 5)</li>
        <li>Custom forum (using Discord instead)</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Evidence & Case Studies</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li><strong>Indeed (2004-2007):</strong> Pure aggregator for 3 years, built 25M+ monthly visitors from aggregated job listings before monetizing</li>
        <li><strong>Airbnb (2009):</strong> Scraped Craigslist to solve cold start, drove initial traffic before hosts posted directly</li>
        <li><strong>Our advantage:</strong> Dave's ESL has 1995-era UX + ghost town forum. We offer modern UX + active Discord community</li>
      </ul>
    </Section>
  )
}
