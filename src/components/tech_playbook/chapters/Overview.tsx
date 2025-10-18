import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function Overview() {
  return (
    <Chapter id="overview" title="1. Product Requirements Document (PRD)">
      <InfoBox>
        <strong>Document Purpose</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em' }}>
          This PRD translates the business plan's Desiderata (Chapter 6) into concrete technical requirements organized by strategic stages.
          Each stage has ONE clear strategic goal. Features are derived from evidence (6,195 teacher posts, case studies of $1.8B-$15B companies).
        </p>
        <p style={{ margin: '10px 0', fontSize: '0.85em', fontStyle: 'italic' }}>
          <strong>Sources:</strong> All metrics from Business Model Chapter 7, personas from pain point analysis (Market Analysis Chapter 3),
          features from Desiderata Chapter 6.
        </p>
      </InfoBox>

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
          <p><strong>Description:</strong> Fast, intuitive search with basic filters</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Full-text search: job title, description keywords (PostgreSQL FTS or Elasticsearch)</li>
            <li>Filters: Location (city dropdown), salary range (slider), school type (international/training center/public)</li>
            <li>Sort by: date posted (newest first), salary (high to low)</li>
            <li>Pagination: 20 jobs per page</li>
            <li>Mobile-responsive design (Tailwind CSS), works on iOS/Android</li>
            <li>No login required - public access to maximize traffic</li>
            <li>Search performance: Results load in &lt;500ms (index optimization)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Average search completes in &lt;30 seconds</li>
            <li>60%+ of users find relevant job in first search (track click-through rate)</li>
            <li>Mobile traffic accounts for 50%+ of total (responsive design working)</li>
          </ul>
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
          <p><strong>Description:</strong> Link to Discord server for community discussion (better than Dave's ghost town forum)</p>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100+ Discord members by Month 3</li>
            <li>10+ messages/day (active community vs Dave's ghost town)</li>
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
          <p><strong>Build Time:</strong> 2 days (Mojo)</p>
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
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
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
          <p><strong>Build Time:</strong> 2-3 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR9: Performance & SEO Infrastructure</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Server-side rendering, SEO optimization, performance targets</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Next.js 14 App Router with SSR for job listing pages (SEO critical)</li>
            <li>Dynamic Open Graph tags (title, description, image per job)</li>
            <li>Sitemap generation: /sitemap.xml with all job URLs</li>
            <li>robots.txt configuration</li>
            <li>Meta tags: title, description, canonical URL</li>
            <li>CDN: Vercel Edge Network for static assets (images, CSS, JS)</li>
            <li>Image optimization: Next.js Image component with lazy loading</li>
            <li>Code splitting: React.lazy for non-critical components</li>
            <li>Performance target: Lighthouse score &gt;90 (Performance, SEO, Accessibility)</li>
            <li>Core Web Vitals: LCP &lt;2.5s, FID &lt;100ms, CLS &lt;0.1</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Job detail pages load in &lt;2 seconds</li>
            <li>Google Search Console shows indexed job pages within 1 week</li>
            <li>Mobile PageSpeed score &gt;85</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
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
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR11: Security Basics</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Essential security measures for public platform</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>HTTPS only (redirect HTTP → HTTPS)</li>
            <li>Input sanitization: DOMPurify for user-generated content (email signup)</li>
            <li>SQL injection prevention: Parameterized queries (Prisma ORM handles this)</li>
            <li>XSS prevention: React escapes by default, validate email format</li>
            <li>Rate limiting: 100 requests/minute per IP (prevent scraping)</li>
            <li>CORS policy: Allow only youteacher.com origin</li>
            <li>Security headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>SSL Labs score: A or A+</li>
            <li>Security headers pass securityheaders.com scan</li>
            <li>Rate limiting blocks excessive requests (test with Apache Bench)</li>
          </ul>
          <p><strong>Build Time:</strong> 2 days (Mojo)</p>
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
          <p><strong>Build Time:</strong> 2 days (Mojo)</p>
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

      <Section id="stage2-monetization" title="Stage 2: Monetization Foundation (Months 4-6)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Enable schools to post jobs directly on our platform and start generating revenue.</strong> Leverage the teacher audience
            built in Stage 1 as proof of value. Revenue target: $2,500/month by Month 6.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> A-Tier (Basic Utility) - Must-have features to monetize
          </p>
        </div>

        <h4>Problem Statement</h4>
        <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
          We have teacher traffic but zero revenue. Schools are paying $75/post on Dave's ESL for 1995-era UX. We need to enable direct posting
          at competitive pricing ($49/post) while providing superior UX.
        </p>

        <h4>Target Users</h4>
        <div style={{ padding: '15px', backgroundColor: '#f0fff4', border: '1px solid #68d391', borderRadius: '6px', marginTop: '10px' }}>
          <h5>Schools & Training Centers (Primary Persona)</h5>
          <p><strong>Background:</strong> Training centers and international schools in China that need 3-10 foreign teachers per year</p>

          <p style={{ marginTop: '15px' }}><strong>Pain Points:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Dave's ESL charges $75/post with 1995-era UX - expensive for questionable ROI</li>
            <li>Low quality applicants - many unqualified or visa issues</li>
            <li>Can't showcase school legitimacy</li>
            <li>No applicant management tools</li>
          </ul>

          <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em' }}>
            <strong>Needs:</strong> Cheaper posting ($49 vs $75), access to qualified teachers, dashboard to manage postings.
          </p>
        </div>

        <h4 style={{ marginTop: '25px' }}>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a school, I want to post jobs directly on the platform, so I can reach 10,000+ teachers without paying Dave's ESL $75</li>
          <li>As a school, I want to create an account, so I can manage multiple job postings from one dashboard</li>
          <li>As a school, I want to edit or delete my postings, so I can update jobs when positions are filled</li>
          <li>As a school, I want analytics on job views, so I know my posting is getting seen</li>
          <li>As Pete, I want to email 500 schools currently on Dave's ESL, so I can drive initial school signups</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR13: Direct Job Posting System (A.4)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Schools can post jobs directly on our platform for $49</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Job posting form with required fields: job title, location, salary range, school type, job description</li>
            <li>Optional fields: housing provided, flight reimbursement, visa sponsorship, working hours, benefits</li>
            <li>Rich text editor for job description (TipTap or Quill)</li>
            <li>Preview before publishing</li>
            <li>Pricing: $49/post (60-day listing), auto-expires after 60 days with renewal reminder email</li>
            <li>Payment via Stripe (international schools) or Alipay Business (China schools)</li>
            <li>Post goes live immediately after payment confirmation</li>
            <li>Schools can edit/delete postings anytime from dashboard</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>20+ schools post by Month 9</li>
            <li>50+ schools post by Month 12</li>
            <li>Average 2 posts per school (seasonal hiring: Feb-March, July-Sept)</li>
            <li>Payment success rate: 95%+ (Stripe/Alipay reliability)</li>
          </ul>
          <p><strong>Build Time:</strong> 3 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR14: User Accounts (A.5)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> School and teacher accounts for authentication and management</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Email/password authentication (NextAuth.js or Clerk)</li>
            <li>Account types: Teacher, School (separate DB tables: teachers, schools)</li>
            <li>School dashboard: View active postings, job analytics (views, clicks), payment history</li>
            <li>Teacher dashboard: Save favorite jobs, track jobs applied to (basic for now)</li>
            <li>Email verification required for signup</li>
            <li>Password reset flow (email link)</li>
            <li>JWT-based sessions, 7-day expiration</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of schools can self-manage postings (no manual intervention)</li>
            <li>1,000+ teacher accounts created by Month 12</li>
            <li>Account creation takes &lt;2 minutes</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR15: Post TTL (Time-To-Live) System</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Automatic job posting expiration to keep listings fresh and drive renewal revenue</p>
          <p><strong>Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Default TTL: 60 days from posting date</li>
            <li>Cron job runs daily at 2 AM UTC to mark expired posts as "expired"</li>
            <li>Expired posts: Hidden from search results, visible in school dashboard as "Expired"</li>
            <li>Renewal reminders: Email sent 7 days before expiration, 1 day before expiration</li>
            <li>One-click renewal: "Renew for $49" button in email and dashboard</li>
            <li>Schools can manually mark as "Filled" before expiration (no refund)</li>
            <li>Analytics: Track expiration rate, renewal rate</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of posts automatically expire after 60 days</li>
            <li>Renewal email open rate: 40%+</li>
            <li>Renewal conversion: 30%+ of expired posts get renewed</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR16: Discord Integration</h5>
          <p><strong>Priority:</strong> P2 (Nice to Have)</p>
          <p><strong>Description:</strong> Embed Discord widget on site so users stay on website</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Embed Discord iframe widget in sidebar or footer</li>
            <li>Users can see messages without leaving website</li>
            <li>Still requires Discord account to post messages (acceptable friction)</li>
          </ul>
          <p><strong>Build Time:</strong> 1-2 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR16: Outbound Sales Process (Pete)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Email 500 schools currently posting on Dave's ESL</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Scrape list of schools posting on Dave's ESL (name, email if available)</li>
            <li>Email template: "You're paying $75/post on Dave's ESL. Our 10,000+ teacher audience costs just $49/post. First post FREE to try."</li>
            <li>Target: 500 schools, 5% response rate (25 interested schools)</li>
            <li>Track: Email opens, replies, conversions</li>
            <li>Follow-up sequence: Day 3, Day 7 if no response</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>500 emails sent by Month 7</li>
            <li>25+ interested schools (5% response rate)</li>
            <li>10+ schools post first job (40% conversion from interested → paying)</li>
          </ul>
          <p><strong>Build Time:</strong> Ongoing (Pete)</p>
        </div>

        <h5 style={{ marginTop: '30px', marginLeft: '20px', color: '#64748b' }}>Infrastructure & Platform Requirements</h5>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR17: Authentication Infrastructure</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Complete auth system with NextAuth.js or Clerk</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>NextAuth.js setup with JWT strategy OR Clerk (managed auth service)</li>
            <li>Password hashing: bcrypt with salt rounds = 10</li>
            <li>Email verification: Send verification link on signup, expire after 24h</li>
            <li>Password reset: Generate secure token, email link, expire after 1h</li>
            <li>Session management: JWT stored in HTTP-only cookie, 7-day expiration</li>
            <li>Protected API routes: Middleware checks JWT validity</li>
            <li>Role-based permissions: Teacher can save jobs, School can post jobs</li>
            <li>Login throttling: Max 5 attempts per 15 minutes (prevent brute force)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of protected routes require valid JWT</li>
            <li>Email verification works end-to-end</li>
            <li>Password reset flow completes in &lt;2 minutes</li>
            <li>Login throttling blocks brute force attempts</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR18: Payment Infrastructure</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Stripe + Alipay Business payment processing</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Stripe integration: Checkout session for $49 job postings (international schools)</li>
            <li>Alipay Business integration: Payment API for China schools (¥349 ≈ $49)</li>
            <li>Webhook handling: Stripe webhooks for payment.succeeded, payment.failed events</li>
            <li>Idempotency: Use Stripe payment_intent_id to prevent duplicate charges</li>
            <li>Invoice generation: PDF invoice sent via email after successful payment</li>
            <li>Payment retry: If payment fails, show error with retry button</li>
            <li>Refund handling: Manual refunds via Stripe Dashboard (Pete)</li>
            <li>Payment method storage: Stripe Customer object for repeat customers</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>95%+ payment success rate (test with Stripe test cards)</li>
            <li>Webhooks process within 5 seconds of payment</li>
            <li>Zero duplicate charges (idempotency working)</li>
            <li>Invoice PDF generated and emailed automatically</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR19: Database Schema Additions (Stage 2)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Add auth, payment, and job posting tables</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>users table: id, email, password_hash, role (teacher/school), email_verified, created_at</li>
            <li>teachers table: user_id, name, bio, resume_url, linkedin_url</li>
            <li>schools table: user_id, school_name, business_license, address, contact_email, contact_phone, logo_url</li>
            <li>job_postings_direct table: school_id, title, location, salary_min, salary_max, description_html, status (draft/published/expired), payment_id, expires_at, created_at</li>
            <li>payments table: user_id, job_posting_id, amount, currency, payment_method (stripe/alipay), stripe_payment_id, status (pending/succeeded/failed), created_at</li>
            <li>sessions table: user_id, token (JWT hash), expires_at</li>
            <li>Indexes: users.email (unique), schools.user_id, job_postings_direct.school_id, payments.stripe_payment_id (unique)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Migrations run successfully</li>
            <li>All foreign keys enforced (cascade deletes)</li>
            <li>Queries on user_id, school_id complete in &lt;10ms (indexed)</li>
          </ul>
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR20: File Upload System</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> AWS S3 or Cloudinary for school logos and teacher resumes</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>AWS S3 bucket setup (or Cloudinary account)</li>
            <li>Presigned URL generation for direct uploads (avoid server bottleneck)</li>
            <li>File size limits: School logos max 5MB, teacher resumes max 10MB</li>
            <li>File type validation: Logos (jpg, png only), Resumes (pdf, docx only)</li>
            <li>Virus scanning: AWS Lambda + ClamAV or Cloudinary moderation</li>
            <li>Image optimization: Resize logos to 200x200px thumbnail</li>
            <li>CDN delivery: CloudFront or Cloudinary CDN for fast image loading</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of uploads complete in &lt;10 seconds</li>
            <li>Invalid file types rejected with clear error message</li>
            <li>Images load in &lt;1 second globally (CDN working)</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR21: Enhanced Security (Stage 2)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> CSRF protection, rate limiting for auth endpoints</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>CSRF tokens: NextAuth.js handles CSRF automatically (double submit cookie pattern)</li>
            <li>Rate limiting (auth endpoints): Login max 5 attempts/15min, Signup max 3 accounts/hour per IP</li>
            <li>Rate limiting (posting): Job posting max 10 posts/day per school</li>
            <li>Password strength: Min 8 chars, 1 uppercase, 1 number, 1 special character</li>
            <li>Email enumeration prevention: Same response for "email not found" and "wrong password"</li>
            <li>Session fixation prevention: Regenerate session ID after login</li>
            <li>XSS prevention (enhanced): Sanitize rich text editor output with DOMPurify</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>CSRF attack test fails (tokens validated)</li>
            <li>Brute force login attack blocked after 5 attempts</li>
            <li>XSS test payloads sanitized in job descriptions</li>
          </ul>
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR22: Admin API Endpoints (Stage 2 Extensions)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Additional admin APIs for job posting and payment management (extends FR12 from Stage 1)</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Authentication: API key for Pete (environment variable, never committed to git)</li>
            <li><code>POST /api/admin/schools/verify</code> - Manually mark a school as verified (bypass payment flow for early adopters)</li>
            <li><code>POST /api/admin/jobs</code> - Manually create job posting on behalf of a school (for outbound sales: school pays offline, Pete posts for them)</li>
            <li><code>PATCH /api/admin/jobs/:id</code> - Edit existing job posting</li>
            <li><code>DELETE /api/admin/jobs/:id</code> - Delete job posting or mark as filled</li>
            <li><code>GET /api/admin/schools?search=name</code> - Search schools by name, email, or business license</li>
            <li><code>GET /api/admin/jobs?search=title&school_id=123</code> - Search jobs by title, school, or location</li>
            <li><code>GET /api/admin/users?email=teacher@example.com</code> - Search users/teachers by email or name</li>
            <li><code>POST /api/admin/payments/manual</code> - Record manual payment (school paid via WeChat/Alipay directly to Pete)</li>
            <li>All endpoints return JSON, use standard HTTP status codes (200, 400, 401, 500)</li>
            <li>Request logging: Log all admin API calls to audit trail (who did what, when)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Pete can verify a school in &lt;30 seconds via Postman/curl</li>
            <li>Pete can create job posting on behalf of school in &lt;2 minutes</li>
            <li>100% of admin actions logged for audit trail</li>
            <li>API key authentication blocks unauthorized access (401 error)</li>
          </ul>
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
          <p><strong>Why Critical:</strong> During Month 7-12 outbound sales, schools may pay but not want to use self-service UI yet. Pete needs to manually create postings. Also enables early school verifications without waiting for payment infrastructure.</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fef3e7', border: '1px solid #f59e0b', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR23: Admin Dashboard (Pete)</h5>
          <p><strong>Priority:</strong> P2 (Nice to Have)</p>
          <p><strong>Description:</strong> Web UI for Pete to manage platform (wraps FR21 admin APIs with visual interface)</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Admin login: Pete's email hard-coded as admin role</li>
            <li>View all schools: List schools with signup date, # of postings, total revenue</li>
            <li>View all job postings: Filter by status (published/expired), school, date</li>
            <li>Manual job approval: If needed, Pete can approve/reject jobs before publishing</li>
            <li>Payment disputes: View payment history, issue manual refunds</li>
            <li>User management: Suspend/ban users if policy violations</li>
            <li>Analytics dashboard: MAU, MRR, CAC, retention charts</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Pete can view all platform activity from one dashboard</li>
            <li>Manual refund process completes in &lt;2 minutes</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo) - Can defer to Month 9-10 if time-constrained (use FR21 APIs via Postman instead)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>North Star Metric:</strong> Monthly Recurring Revenue (MRR) - validates schools will pay for access to our teacher audience</p>
          <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 12):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Schools posting directly: 50+</li>
            <li>Revenue: $4,900/month (50 schools × $49/post × 2 posts/month)</li>
            <li>School retention: 40%+ post again within 6 months (seasonal hiring cycle)</li>
            <li>Teacher accounts: 1,000+ registered</li>
            <li>CAC (Customer Acquisition Cost): &lt;$100 per school (outbound email + free trial)</li>
            <li>30%+ of teacher job applications happen ON our platform (vs redirecting to aggregated jobs)</li>
          </ul>

          <p style={{ marginTop: '15px' }}><strong>Go/No-Go Decision (End of Month 12):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>✓ 50+ schools have posted directly</li>
            <li>✓ $5,000+/month revenue</li>
            <li>✓ 40%+ school retention (post again within 6 months)</li>
            <li><strong>If YES:</strong> Proceed to Stage 3 (add school verification)</li>
            <li><strong>If NO:</strong> Test pricing ($29 vs $49), improve sales messaging, or pivot to teacher-side subscriptions</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '25px' }}>Technical Requirements</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Authentication:</strong> NextAuth.js or Clerk (JWT-based)</li>
          <li><strong>Payment:</strong> Stripe (international), Alipay Business API (China)</li>
          <li><strong>Database schema:</strong> New tables: users, schools, teacher_profiles, job_postings_direct, payments</li>
          <li><strong>Job posting:</strong> Rich text editor (TipTap), image upload for school logo (AWS S3 or Cloudinary)</li>
          <li><strong>Email:</strong> Transactional emails (payment confirmation, posting expiration reminders) via SendGrid</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Out of Scope (Stage 2)</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>School verification badges (comes in Stage 3)</li>
          <li>Application tracking system (comes in Stage 6)</li>
          <li>Reviews and ratings (comes in Stage 4)</li>
          <li>Advanced search filters (comes in Stage 5)</li>
          <li>In-platform messaging (comes in Stage 4)</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Evidence & Case Studies</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Indeed (2007):</strong> Started monetizing via pay-per-click after 3 years of aggregation. Had traffic, then charged employers</li>
          <li><strong>Boss Zhipin:</strong> Basic posting free initially, but schools pay for premium features once they see ROI (teacher quality)</li>
          <li><strong>Pricing leverage:</strong> Dave's ESL charges $75/post with 1995 UX. We charge $49 with modern UX + better targeting</li>
          <li><strong>Conservative assumption:</strong> 10% of Dave's ESL schools (500 schools × 10% = 50) switch to us. Industry benchmark: 5-15%</li>
        </ul>
      </Section>

      <Section id="stage3-trust" title="Stage 3: Trust Infrastructure (Months 7-12)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Build trust through automated school verification to solve Pain Points #1 and #5.</strong> Leverage banking APIs and government data to verify schools
            WITHOUT manual labor. Differentiate from Dave's ESL with verified badges.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> B-Tier (Differentiators) - School verification sets us apart from competitors
          </p>
        </div>

        <h4>Problem Statement</h4>
        <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
          90% of Dave's ESL listings are scams (Pain Point #1 from 12/12 sources). Teachers can't verify schools (Pain Point #5). We have 50+ schools posting,
          but teachers still don't trust job listings. We need AUTOMATED verification to scale trust without hiring 10 people.
        </p>

        <h4>Target Users</h4>
        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '6px', marginTop: '10px' }}>
          <h5>Jessica Chen Returns - Now Needs Verification Before Applying</h5>
          <p><strong>Context:</strong> Jessica was scammed $2,000 in Stage 1 story. She's back searching for jobs but WILL NOT apply unless school is verified.</p>

          <p style={{ marginTop: '15px' }}><strong>Current Behavior:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Sees 500 jobs on YouTeacher (aggregated + direct postings)</li>
            <li>Filters to "Verified Schools Only" - sees only 5-10 schools</li>
            <li>ONLY applies to verified schools, even if unverified jobs pay more</li>
            <li>Trusts "Banking Verified" badge more than "Manual Review" badge (knows manual review can be fooled)</li>
          </ul>

          <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em' }}>
            <strong>Quote:</strong> "I don't care if the salary is 10% higher. If there's no verification badge, I'm not applying. Been burned once, never again."
          </p>
        </div>

        <h4 style={{ marginTop: '25px' }}>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a teacher, I want to filter by "Verified Schools Only", so I avoid scam listings</li>
          <li>As a teacher, I want to see HOW a school was verified (banking vs manual), so I know the trust level</li>
          <li>As a school, I want to get verified automatically via Alipay Business deposit, so I don't wait for manual review</li>
          <li>As a school, I want a "Verified" badge on my job postings, so I attract higher-quality applicants</li>
          <li>As Pete, I want government data (labor violations, court filings) to auto-flag risky schools, so I prevent scams at scale</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR24: Banking Verification System (B.6)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Alipay Business API integration to verify schools via ¥1 deposit</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>School initiates verification: "Pay ¥1 via Alipay Business to verify"</li>
            <li>Alipay Business payment metadata contains: company name, business license number, legal representative</li>
            <li>Extract metadata from Alipay webhook</li>
            <li>Cross-check business license against China Business Registry API (国家企业信用信息公示系统)</li>
            <li>If business license valid + company name matches → auto-award "Banking Verified" badge</li>
            <li>Award 5 FREE job postings after verification (solve chicken-egg: schools pay ¥1, get ¥245 value = 5 posts × ¥49)</li>
            <li>Display badge on school profile + all job postings</li>
            <li>Badge expires after 12 months (schools must re-verify annually)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100+ schools verified by Month 18</li>
            <li>95%+ of verifications happen automatically (no manual review)</li>
            <li>Verification completes in &lt;5 minutes from payment</li>
            <li>70%+ of verified schools post at least 1 job within 30 days (5 free posts incentive working)</li>
          </ul>
          <p><strong>Build Time:</strong> 3 weeks (Mojo)</p>
          <p><strong>Evidence:</strong> Upwork uses banking verification (micro-deposits). LinkedIn uses company email domains. Banking metadata is STRONGEST trust signal (can't fake a business bank account)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR25: Government Data Scraping</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Scrape China government databases to flag schools with violations</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Scrape China Labor Bureau database (劳动监察) for labor violations (unpaid wages, illegal terminations)</li>
            <li>Scrape Ministry of Education database (教育部) for education licensing status</li>
            <li>Scrape Court Filing System (中国裁判文书网) for lawsuits involving school</li>
            <li>Monthly update schedule (government data updates slowly)</li>
            <li>If violations found → flag school profile with warning: "Labor violation reported in 2023"</li>
            <li>Cache government data to avoid repeated lookups (store in government_data_cache table)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>50%+ of verified schools checked against government databases</li>
            <li>5-10% of schools flagged with violations (based on industry estimates)</li>
            <li>Government data cache refreshed monthly</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR26: Badge System (Tier 1: Compliance)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Display verification badges on school profiles and job postings</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Badge types: "Banking Verified" (green checkmark), "Manual Review" (yellow checkmark), "Government Flagged" (red warning)</li>
            <li>Badge calculation engine runs daily: check school_verifications table, update school_badges table</li>
            <li>Display badges on: School profile page, job posting cards, job detail page</li>
            <li>Tooltip on badge hover: "Verified via Alipay Business on 2025-03-15. Expires 2026-03-15"</li>
            <li>Teachers can filter jobs: "Show Verified Schools Only" checkbox</li>
            <li>Redis cache for badge status (avoid DB lookups on every job card render)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of verified schools show badge on profiles and job postings</li>
            <li>Badge tooltip explains verification method</li>
            <li>Teachers can filter to verified schools only</li>
            <li>Badge queries complete in &lt;10ms (Redis cache working)</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR27: Manual Review Dashboard (Pete)</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Admin dashboard for Pete to manually review edge cases</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Queue of pending verifications (schools that paid ¥1 but business license didn't auto-match)</li>
            <li>Pete can: Approve (award badge), Reject (refund ¥1), Request More Info (email school)</li>
            <li>View government data for school: Labor violations, court cases, education license status</li>
            <li>Add manual notes: "Called school, verified legitimate. Business license registered under parent company name."</li>
            <li>Audit trail: Log all manual review decisions</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>5-10 schools/month require manual review (95% auto-verified)</li>
            <li>Pete can review + decide in &lt;5 minutes per school</li>
            <li>100% of manual reviews logged for audit</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>North Star Metric:</strong> % of Teachers Applying Only to Verified Schools - validates trust infrastructure solves scam problem</p>
          <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 18):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Verified schools: 100+</li>
            <li>Revenue: $37,000/month (250 schools × 2 posts/month × $49, plus 100 verified schools posting more frequently)</li>
            <li>Teachers filtering by "Verified Only": 60%+ (shows trust is critical decision factor)</li>
            <li>Verified schools get 3x more applicants than unverified (demonstrates badge value)</li>
            <li>Application-to-verified-schools ratio: 80%+ (teachers avoid unverified even if higher salary)</li>
          </ul>

          <p style={{ marginTop: '15px' }}><strong>Go/No-Go Decision (End of Month 18):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>✓ 100+ schools verified</li>
            <li>✓ 60%+ of teachers filter by "Verified Only"</li>
            <li>✓ Verified schools report better applicant quality</li>
            <li><strong>If YES:</strong> Proceed to Stage 4 (add reviews to deepen trust)</li>
            <li><strong>If NO:</strong> Investigate: Is banking verification too difficult? Do teachers not care about verification? Wrong trust signals?</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '25px' }}>Out of Scope (Stage 3)</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Teacher reviews (comes in Stage 4)</li>
          <li>Advanced badge tiers (Performance, Excellence - comes in Stage 8)</li>
          <li>Real-time badge dashboard for schools (comes in Stage 8)</li>
          <li>Application tracking (comes in Stage 6)</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Evidence & Case Studies</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Upwork (2015):</strong> Introduced banking verification (micro-deposits) to reduce freelancer fraud. Verified freelancers got 40% more job offers</li>
          <li><strong>LinkedIn (2012):</strong> Company verification via corporate email domain. Verified companies get 2-3x more applicants</li>
          <li><strong>China Business Registry API:</strong> Public government database (国家企业信用信息公示系统) with 30M+ registered companies. Alipay Business payment metadata includes business license</li>
          <li><strong>Trust premium:</strong> Research shows teachers willing to accept 10-15% lower salary at verified schools vs unverified</li>
        </ul>
      </Section>

      <Section id="stage4-community" title="Stage 4: Reviews & Community (Year 2)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Add peer reviews to deepen trust beyond verification badges.</strong> Enable teachers to review schools they've worked at.
            Build network effects through community contributions.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> B-Tier (Differentiators) - Reviews and community content create moat
          </p>
        </div>

        <h4>Problem Statement</h4>
        <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
          Verification badges (Stage 3) prove school is legal, but don't tell teachers about working conditions, management quality, contract honesty.
          Pain Points #2 (Contract Terms), #3 (Working Conditions), #4 (Hidden Costs) still unsolved. Teachers need peer reviews from other teachers.
        </p>

        <h4>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a teacher, I want to read reviews from teachers who worked at a school, so I know about working conditions</li>
          <li>As a teacher, I want to rate schools on specific categories (Management, Salary, Contract Honesty), so I get detailed insights</li>
          <li>As a teacher, I want to upvote helpful reviews, so the best reviews rise to the top</li>
          <li>As a teacher, I want to flag inappropriate reviews, so fake reviews are removed</li>
          <li>As Pete, I want to moderate flagged reviews, so the platform stays trustworthy</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR28: Review System</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> 5-star rating + written reviews with category ratings</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Overall rating: 1-5 stars</li>
            <li>Category ratings: Management (1-5), Salary Accuracy (1-5), Contract Honesty (1-5), Benefits (1-5)</li>
            <li>Written review: 100-2000 characters</li>
            <li>Verified teacher requirement: Only teachers who worked at school can review (verify via application tracking in Stage 6, or manual verification in Stage 4)</li>
            <li>Upvote/downvote: Teachers can upvote helpful reviews, downvote unhelpful</li>
            <li>Sort reviews: Most helpful (upvotes), Newest, Highest rating, Lowest rating</li>
            <li>Flag review: Teachers can flag reviews as "fake", "spam", "offensive"</li>
            <li>Moderation queue: Pete reviews flagged reviews, can delete or approve</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>50+ schools have at least 1 review by Month 24</li>
            <li>200+ total reviews submitted</li>
            <li>Average review length: 300+ characters (detailed, not spam)</li>
            <li>10%+ of reviews are upvoted (helpful content)</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR29: Notification System</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Email + in-app notifications for reviews, replies</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Email notification: School receives email when new review posted</li>
            <li>In-app notification: Bell icon in header, shows unread notifications</li>
            <li>Notification types: New review on your school, Reply to your review, Upvote on your review</li>
            <li>Notification preferences: Teachers can opt out of email notifications (still get in-app)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of schools notified within 1 hour of new review</li>
            <li>Email open rate: 40%+</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR30: Community Forum (Keep Discord or Add Custom)</h5>
          <p><strong>Priority:</strong> P2 (Nice to Have)</p>
          <p><strong>Description:</strong> Enhanced Discord integration OR custom forum</p>
          <p><strong>Option A: Enhanced Discord Integration</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Add more channels: #city-beijing, #city-shanghai, #visa-help, #contract-review</li>
            <li>Verified teacher role: Teachers with verified employer history get special badge in Discord</li>
            <li>Zero dev time, leverage existing Discord community from Stage 1</li>
          </ul>
          <p><strong>Option B: Custom Forum (React + PostgreSQL)</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Categories: Job Search, School Discussions, City Guides, Visa Help</li>
            <li>Threaded discussions, upvote/downvote posts</li>
            <li>Search forum content</li>
            <li>Build time: 3-4 weeks (Mojo) - only do if Discord not working</li>
          </ul>
          <p><strong>Recommendation:</strong> Stick with Discord in Stage 4 (zero dev time), build custom forum only if Discord becomes limiting factor</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>North Star Metric:</strong> Review Coverage (% of schools with at least 1 review) - validates community contributing content</p>
          <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 24):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Schools with reviews: 50+ (20% of 250 schools)</li>
            <li>Total reviews: 200+</li>
            <li>Discord members: 1,000+ (from 500 in Stage 1)</li>
            <li>Daily active forum/Discord users: 50+</li>
            <li>Teachers citing reviews in application decisions: 40%+ (survey data)</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '25px' }}>Out of Scope (Stage 4)</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Advanced badge tiers (comes in Stage 8)</li>
          <li>In-platform messaging (comes in Stage 6)</li>
          <li>AI sentiment analysis of reviews (comes in Stage 8)</li>
        </ul>
      </Section>

      <Section id="stage5-discovery" title="Stage 5: Advanced Search & Discovery (Year 2-3)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Improve job discovery with advanced search, map view, saved searches.</strong> Solve Pain Point #8 (Job Search Friction).
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> B-Tier (Differentiators) - Advanced search improves retention
          </p>
        </div>

        <h4>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a teacher, I want to search jobs on a map, so I can find jobs near specific neighborhoods or subway lines</li>
          <li>As a teacher, I want to save my search criteria, so I get email alerts when new matching jobs are posted</li>
          <li>As a teacher, I want multi-field search (title + description + benefits), so I find jobs like "housing provided near subway"</li>
          <li>As a teacher, I want synonym search (ESL = TEFL = English teacher), so I don't miss relevant jobs</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR31: Elasticsearch Migration</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Replace PostgreSQL FTS with Elasticsearch for advanced search</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Elasticsearch cluster setup (AWS OpenSearch or self-hosted)</li>
            <li>Job index schema: title, description, location, salary, benefits, school_name, posting_date</li>
            <li>Multi-field search: title^3 + description^2 + benefits^1 (weighted relevance)</li>
            <li>Faceted search: Filter by school_type, benefits (housing, flight, visa), contract_length</li>
            <li>Geo-search: Find jobs within X km of location (requires geocoding addresses)</li>
            <li>Synonym support: ESL = TEFL = English teacher = Foreign teacher</li>
            <li>Real-time indexing: Index new jobs within 1 minute of posting</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Search results return in &lt;200ms (vs 500ms with PostgreSQL)</li>
            <li>Synonym search finds all relevant jobs</li>
            <li>Geo-search accurate within 1km</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR32: Map View</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Google Maps or Mapbox integration for geographic job search</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Google Maps API or Mapbox integration</li>
            <li>Geocode job addresses to lat/long (use Amap 高德地图 for China addresses)</li>
            <li>Cluster markers when multiple jobs in same city</li>
            <li>Click marker → show job card with title, salary, school name</li>
            <li>Click job card → navigate to job detail page</li>
            <li>Search within map bounds: "Search this area" button</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>90%+ of job addresses geocoded successfully</li>
            <li>Map loads in &lt;3 seconds</li>
            <li>10%+ of users use map view (track with analytics)</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR33: Saved Searches & Alerts</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Teachers can save search criteria and get email alerts for new matching jobs</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Save search button: Saves location, salary range, filters, keywords</li>
            <li>Manage saved searches: View, edit, delete from dashboard</li>
            <li>Email alerts: Daily or weekly digest of new jobs matching saved search</li>
            <li>Alert frequency preference: Immediately, Daily, Weekly</li>
            <li>Unsubscribe from specific alert (keep account active)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>500+ saved searches created by Month 30</li>
            <li>Email alert click-through rate: 15%+</li>
            <li>Teachers with saved searches have 2x higher retention</li>
          </ul>
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>Target Metrics (Month 30):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Avg time to find relevant job: &lt;5 minutes (vs 30+ min on Dave's ESL)</li>
            <li>Saved searches created: 500+</li>
            <li>Map view usage: 10%+ of search sessions</li>
            <li>Teacher retention: 60%+ return within 30 days (vs 40% in Stage 1)</li>
          </ul>
        </div>
      </Section>

      <Section id="stage6-tracking" title="Stage 6: Application Tracking (Year 3)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Enable in-platform applications so teachers apply ON our site instead of redirecting to schools.</strong>
            Capture conversion data to prove ROI to schools.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> B-Tier (Differentiators) - Application tracking increases platform stickiness
          </p>
        </div>

        <h4>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a teacher, I want to apply through the platform, so I can track my application status</li>
          <li>As a school, I want to see all applicants in one dashboard, so I don't manage email chaos</li>
          <li>As a school, I want to update application status (Viewed, Interview, Offer), so teachers know where they stand</li>
          <li>As Pete, I want application-to-hire conversion data, so I can prove ROI and justify premium pricing</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR34: Application Management System</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> In-platform application system with status tracking</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Apply button: Teachers submit resume, cover letter, contact info</li>
            <li>Application status workflow: Submitted → Viewed → Interview Scheduled → Offer → Hired/Rejected</li>
            <li>School dashboard: View all applicants, filter by status, sort by date</li>
            <li>School can update status, add notes (internal, not visible to teacher)</li>
            <li>Teacher dashboard: Track applications, see status updates</li>
            <li>Email notifications: Status updates sent to teacher</li>
            <li>Analytics: Track conversion rates (applied → interviewed → hired)</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>50%+ of applications happen in-platform (vs external redirects)</li>
            <li>Schools update status for 60%+ of applications</li>
            <li>Application-to-hire conversion rate: 5-10% (industry benchmark)</li>
          </ul>
          <p><strong>Build Time:</strong> 3 weeks (Mojo)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>Target Metrics (Month 36):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>In-platform applications: 50%+ of total applications</li>
            <li>Conversion data: Track 500+ applications from submission to hire</li>
            <li>Schools willing to pay premium ($99 vs $49) for access to application tracking</li>
          </ul>
        </div>
      </Section>

      <Section id="stage7-ai" title="Stage 7: AI Protection (Year 3-4)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Use AI to detect scam job postings and analyze teacher contracts.</strong> Solve Pain Points #1 (Scams) and #2 (Contract Terms) at scale.
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> C-Tier (Excitement) - AI features create wow factor and PR opportunities
          </p>
        </div>

        <h4>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a teacher, I want AI to flag suspicious job postings, so I avoid scams</li>
          <li>As a teacher, I want AI to review my contract, so I know if terms are unfair</li>
          <li>As Pete, I want AI to auto-flag scam patterns, so I prevent fraud at scale without hiring moderators</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR35: AI Scam Detection</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> ML model to detect scam job postings</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Train ML model on scam patterns: Unrealistic salary, vague location, urgency language ("hire immediately"), grammar errors</li>
            <li>Scam risk score: Low/Medium/High</li>
            <li>Auto-flag high-risk postings for manual review</li>
            <li>Display warning on job detail page: "Warning: This job may be a scam. Unrealistic salary detected."</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Detect 80%+ of known scam postings (test with historical Dave's ESL scams)</li>
            <li>False positive rate &lt;10% (don't flag legitimate jobs)</li>
          </ul>
          <p><strong>Build Time:</strong> 4 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR36: AI Contract Review</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> AI-powered contract analysis tool</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Teachers upload PDF contract</li>
            <li>OCR extraction (Tesseract or AWS Textract)</li>
            <li>Extract key terms: Salary, working hours, termination clauses, housing details, flight reimbursement</li>
            <li>Flag unfair clauses: "No termination clause", "Required to pay for broken contract", "Unrealistic working hours (60+/week)"</li>
            <li>Compare to market standards: "Salary 20% below market for this city"</li>
            <li>Generate risk score: Low/Medium/High</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Extract key terms with 90%+ accuracy</li>
            <li>Flag 5+ common unfair clauses</li>
          </ul>
          <p><strong>Build Time:</strong> 4 weeks (Mojo)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>Target Metrics:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Scam detection: Flag 100+ suspicious postings in first 6 months</li>
            <li>Contract review usage: 200+ contracts analyzed</li>
            <li>Teachers trust AI warnings: 70%+ avoid flagged jobs</li>
          </ul>
        </div>
      </Section>

      <Section id="stage8-moat" title="Stage 8: Moat Features (Year 4+)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Build competitive moat with features competitors can't replicate.</strong> Advanced badge system (C.8), weekly teacher meetups (C.6),
            escrow/EOR service (C.7).
          </p>
          <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
            <strong>Tier:</strong> C-Tier/D-Tier (Excitement/Transformative) - Badge gamification, meetups, escrow create unfair advantage
          </p>
        </div>

        <h4>User Stories</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>As a school, I want to track progress toward Top Rated badge, so I improve my ranking</li>
          <li>As a teacher, I want to attend weekly meetups, so I build community in new city</li>
          <li>As a teacher, I want escrow service, so school can't withhold my salary</li>
          <li>As a school, I want EOR service, so I don't handle visa paperwork</li>
        </ul>

        <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR37: Advanced Badge System (C.8)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Tier 2 (Performance) and Tier 3 (Excellence) badges</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Tier 2 badges: Top Rated (4.5+ stars, 20+ reviews), High Retention (70%+ teachers stay 2+ years), Fast Response (&lt;24h to applicants)</li>
            <li>Tier 3 badges: DEI Champion (diverse teacher hiring), Well-Managed (5+ years operation, zero violations), Career Growth (teachers promoted internally)</li>
            <li>Real-time dashboard: Schools see badge progress ("15 reviews needed for Top Rated badge")</li>
            <li>NLP analysis of reviews: Extract sentiment, keywords to auto-award badges</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>20+ schools earn Tier 2 badges</li>
            <li>5+ schools earn Tier 3 badges</li>
            <li>Schools with Tier 2/3 badges get 5x more applicants than unverified</li>
          </ul>
          <p><strong>Build Time:</strong> 3 weeks (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR38: Weekly Teacher Meetups (C.6)</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Weekly in-person meetups in major cities (Beijing, Shanghai, Shenzhen, Chengdu)</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Timeleft API integration OR manual (Pete books restaurants)</li>
            <li>Event RSVP system: Teachers sign up, pay $12/event or $18/month subscription</li>
            <li>Attendance tracking: QR code check-in</li>
            <li>Restaurant commission: Negotiate 10-15% commission on food/drinks</li>
            <li>Net revenue: $12 ticket - $3 restaurant commission = $9 profit/teacher</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>4 cities with weekly meetups</li>
            <li>20+ teachers/event average</li>
            <li>Revenue: $720/week = $2,880/month (20 teachers × 4 cities × $9 profit)</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo for RSVP system, Pete for operations)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR39: Escrow/EOR Service (C.7)</h5>
          <p><strong>Priority:</strong> P2 (Nice to Have)</p>
          <p><strong>Description:</strong> Partner with Deel/Skuad for escrow payments and Employer of Record</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Escrow: School deposits 3 months salary, released monthly after teacher confirmation</li>
            <li>Fee: 3-5% of salary</li>
            <li>EOR: Deel/Skuad handles visa, payroll, insurance</li>
            <li>Fee: $200-300/teacher/month</li>
            <li>API integration with Deel or Skuad</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>10+ schools use escrow service</li>
            <li>5+ teachers hired via EOR</li>
            <li>Revenue: $5K-$10K/month from fees</li>
          </ul>
          <p><strong>Build Time:</strong> 4 weeks (Mojo for integration, legal contracts)</p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>Target Metrics:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Advanced badges: 20+ schools with Tier 2/3 badges</li>
            <li>Meetups: 80+ teachers/week across 4 cities</li>
            <li>Escrow/EOR: $10K/month additional revenue</li>
            <li>Competitive moat: Dave's ESL can't replicate badge system, meetups, or escrow</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '25px' }}>Evidence & Case Studies</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Yelp Elite badges:</strong> Top reviewers get special badge, exclusive events. Creates status game that drives engagement</li>
          <li><strong>Timeleft:</strong> Weekly dinner meetups in 300+ cities. $12-18/person, 80%+ retention rate</li>
          <li><strong>Deel:</strong> $12B valuation (2023). EOR service is $5.4B market growing 20%/year</li>
          <li><strong>Escrow.com:</strong> Escrow payments reduce fraud 95%+. Teachers willing to pay 3-5% fee for protection</li>
        </ul>
      </Section>
    </Chapter>
  )
}
