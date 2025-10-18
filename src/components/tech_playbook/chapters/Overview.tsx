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

      <Section id="stage1-traffic" title="Stage 1: Traffic Acquisition (Months 1-6)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Solve the chicken-and-egg problem by aggregating jobs from existing platforms.</strong> Have thousands of jobs from day 1
            WITHOUT needing schools to post directly. Build teacher traffic FIRST before monetizing. Revenue = $0 in this stage.
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
            <li>150-200 active jobs by Month 1 (scraping Dave's ESL + SeriousTeachers)</li>
            <li>300-500 active jobs by Month 6 (scraping 5 platforms + some direct postings from Stage 2)</li>
            <li>500-1,000 jobs cumulative in database (includes expired listings for historical data)</li>
            <li>Daily updates, listings marked as "expired" after 60 days</li>
            <li>100% of jobs have valid source URLs</li>
          </ul>
          <p><strong>Build Time:</strong> 2 weeks (Mojo)</p>
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
          <p><strong>Build Time:</strong> 1 week (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR3: Contact/Apply Links (A.3)</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Job detail page with apply button redirecting to source platform</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Job detail page displays: title, location, salary, requirements, benefits, full description</li>
            <li>Show source platform with logo and link: "Originally posted on Dave's ESL Cafe [View Original]"</li>
            <li>Show posting date and last updated timestamp</li>
            <li>"Apply Now" button redirects to source URL (opens in new tab)</li>
            <li>Track click-throughs (analytics) for later ROI proof to schools</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100% of jobs have functional apply links (no 404 errors)</li>
            <li>10%+ of job views result in click-throughs to source platform</li>
          </ul>
          <p><strong>Build Time:</strong> 3 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR4: Email Capture & Weekly Alerts</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> "Get new jobs weekly" signup form for email marketing</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Signup form: Email + preferred location (city/country dropdown)</li>
            <li>SendGrid or AWS SES integration for email delivery</li>
            <li>Weekly digest: Top 10 new jobs matching teacher's location preference</li>
            <li>Unsubscribe link in every email (CAN-SPAM compliance)</li>
            <li>Track open rates, click rates for optimization</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>100+ email signups by Month 1</li>
            <li>5,000+ email subscribers by Month 6</li>
            <li>20%+ open rate, 5%+ click-through rate</li>
          </ul>
          <p><strong>Build Time:</strong> 2 days (Mojo)</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>FR5: Discord Community</h5>
          <p><strong>Priority:</strong> P1 (High)</p>
          <p><strong>Description:</strong> Link to Discord server for community discussion (better than Dave's ghost town forum)</p>
          <p><strong>Detailed Requirements:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Create Discord server with channels: #job-search, #school-verification, #visa-help, #city-guides (Beijing, Shanghai, etc.)</li>
            <li>Add Discord link to website header: "Join our community - verify schools, ask questions"</li>
            <li>Pete moderates, answers questions, seeds discussion</li>
            <li>Zero dev time - use existing Discord infrastructure</li>
          </ul>
          <p><strong>Acceptance Criteria:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>50+ Discord members by Month 2</li>
            <li>500+ members by Month 6</li>
            <li>10+ messages/day (active community vs Dave's ghost town)</li>
          </ul>
          <p><strong>Build Time:</strong> 0 days (free, Pete sets up)</p>
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

        <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
          <p><strong>North Star Metric:</strong> Monthly Active Teachers (MAU) - demonstrates product-market fit before monetizing</p>
          <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 6):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Jobs aggregated: 300-500 active listings (all major ESL platforms scraped)</li>
            <li>Monthly Active Teachers: 1,000-3,000 MAU (target 1% of Dave's ESL's 350K monthly views)</li>
            <li>Discord community: 100-200 members (active community beats Dave's ghost town)</li>
            <li>Email subscribers: 500-1,000</li>
            <li>Avg time on site: 5+ minutes (vs Dave's ESL ~3 min)</li>
            <li>Mobile traffic: 60%+ (responsive design working)</li>
          </ul>

          <p style={{ marginTop: '15px' }}><strong>Go/No-Go Decision (End of Month 3):</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>✓ 200+ active jobs live on platform (Dave's ESL + SeriousTeachers minimum)</li>
            <li>✓ 500+ MAU (demonstrates teachers find value)</li>
            <li>✓ 100+ email signups OR 50+ Discord members (early community forming)</li>
            <li><strong>If YES:</strong> Proceed to Stage 2 (add A.4 Direct Posting)</li>
            <li><strong>If NO:</strong> Diagnose issue (SEO? Value prop? Wrong channels?) before building more features</li>
          </ul>

          <p style={{ marginTop: '15px', fontSize: '0.85em', fontStyle: 'italic', color: '#065f46' }}>
            <strong>Evidence:</strong> Dave's ESL has 350K monthly views with 47 active jobs. We target 1% of their traffic (3.5K MAU) by Month 6 with better UX. Conservative estimate based on actual market size, not fantasy.
          </p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Technical Requirements</h4>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li><strong>Frontend:</strong> Next.js 14 (App Router), React, TypeScript, Tailwind CSS</li>
          <li><strong>Backend:</strong> Python FastAPI for scraper service, PostgreSQL for job storage</li>
          <li><strong>Scraper:</strong> Python + BeautifulSoup4 + Scrapy, Docker containers for each platform</li>
          <li><strong>Search:</strong> PostgreSQL Full-Text Search (upgrade to Elasticsearch if &gt;100K jobs)</li>
          <li><strong>Email:</strong> SendGrid or AWS SES</li>
          <li><strong>Hosting:</strong> Vercel (frontend), Railway or Render (backend + DB)</li>
          <li><strong>Monitoring:</strong> Sentry for errors, Google Analytics for traffic</li>
        </ul>

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

      <Section id="stage2-monetization" title="Stage 2: Monetization Foundation (Months 7-12)">
        <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Enable schools to post jobs directly on our platform and start generating revenue.</strong> Leverage the 10,000+ teacher audience
            built in Stage 1 as proof of value. Revenue target: $5,000/month by Month 12.
          </p>
        </div>

        <h4>Problem Statement</h4>
        <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
          We have teacher traffic but zero revenue. Schools are paying $75/post on Dave's ESL for 1995-era UX. We need to enable direct posting
          at competitive pricing ($49/post) while providing superior UX and targeting capabilities.
        </p>

        <h4>Target Users</h4>
        <div style={{ padding: '15px', backgroundColor: '#f0fff4', border: '1px solid #68d391', borderRadius: '6px', marginTop: '10px' }}>
          <h5>Mr. Wang (王老师) - Training Center Director (Primary Persona)</h5>
          <p><strong>Background:</strong> 42 years old, runs medium-sized training center in Shenzhen (150 students), needs 3-5 foreign teachers per semester, 8 years operating legally</p>

          <p style={{ marginTop: '15px' }}><strong>Pain Points:</strong></p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
            <li>Dave's ESL charges $75/post with 1995-era UX - expensive for questionable ROI</li>
            <li>Applicants are low quality - many don't have proper visas, unqualified</li>
            <li>Can't showcase school legitimacy - compete with scam schools on same platform</li>
            <li>No applicant management tools - just emails into void</li>
          </ul>

          <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.9em' }}>
            <strong>What Mr. Wang Needs:</strong> Cheaper posting ($49 vs $75), access to 10,000+ qualified teachers, basic account dashboard
            to manage postings, proof that platform drives real applicants.
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
          <h5>FR12: Direct Job Posting System (A.4)</h5>
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
          <h5>FR13: User Accounts (A.5)</h5>
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
          <h5>FR14: Discord Integration</h5>
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
          <h5>FR15: Outbound Sales Process (Pete)</h5>
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
          <h5>FR16: Authentication Infrastructure</h5>
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
          <h5>FR17: Payment Infrastructure</h5>
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
          <h5>FR18: Database Schema Additions (Stage 2)</h5>
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
          <h5>FR19: File Upload System</h5>
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
          <h5>FR20: Enhanced Security (Stage 2)</h5>
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
          <h5>FR21: Admin API Endpoints</h5>
          <p><strong>Priority:</strong> P0 (Critical Path)</p>
          <p><strong>Description:</strong> Backend APIs for Pete to manually manage schools, verifications, and job postings</p>
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
          <h5>FR22: Admin Dashboard (Pete)</h5>
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

      <div className="section-divider"></div>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9em', marginTop: '40px' }}>
        <em>Stages 3-10 to be detailed in next iteration (Trust Layer, Community, Discovery, Application Management, AI Protection, Community Moat, Full-Service Platform, Advanced Differentiation)</em>
      </p>
    </Chapter>
  )
}
