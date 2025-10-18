import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'

export default function Architecture() {
  return (
    <Chapter id="architecture" title="2. System Architecture">
      <Section id="microservices-responsibilities" title="2.1 Microservices by Responsibilities">
        <div style={{ padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '6px', marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0 }}>Architecture Principle</h4>
          <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
            <strong>Single Responsibility Principle:</strong> Each microservice has ONE clearly defined responsibility.
            Services communicate via REST APIs with shared secret tokens for security. Stage 1-2 uses monolithic deployment (Docker Compose),
            Stage 5+ migrates to cloud with proper service separation.
          </p>
        </div>

        <h4 style={{ marginTop: '25px' }}>Core Microservices (Stage 1-3)</h4>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>1. Web Service (Frontend + BFF)</h5>
          <p><strong>Single Responsibility:</strong> Serve user interface and coordinate backend services (Backend-for-Frontend pattern)</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> HTTP requests from browsers (teachers, schools, admin)</li>
            <li><strong>OUT:</strong> API calls to Auth, Job, School, Payment, Notification services</li>
            <li><strong>OWNS:</strong> UI rendering, session management (JWT cookies), API orchestration</li>
            <li><strong>DOES NOT OWN:</strong> Business logic, data persistence (delegates to services)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Render job listing pages (SSR for SEO)</li>
            <li>Orchestrate multi-service calls (e.g., job details + school profile + reviews)</li>
            <li>Handle file uploads (delegate to Storage service via presigned URLs)</li>
            <li>Validate user sessions (check JWT, call Auth service if needed)</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>2. Job Aggregator Service (Scraper)</h5>
          <p><strong>Single Responsibility:</strong> Scrape external job platforms and sync aggregated jobs to database</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Cron triggers (daily at 2 AM UTC), manual scrape API calls</li>
            <li><strong>OUT:</strong> HTTP requests to Dave's ESL, SeriousTeachers, etc. Database writes (jobs_aggregated table)</li>
            <li><strong>OWNS:</strong> Scraping logic, rate limiting, robots.txt compliance, data deduplication</li>
            <li><strong>DOES NOT OWN:</strong> Direct job postings (owned by Job Service), search indexing (owned by Search Service)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>Fetch job listings from 5+ external platforms (Dave's ESL, SeriousTeachers, TEFL.com, ESLCafe, GoAbroad)</li>
            <li>Parse HTML, extract fields (title, location, salary, description, source URL)</li>
            <li>Deduplicate jobs (hash title + location + description)</li>
            <li>Mark expired jobs (posted_date &gt; 60 days)</li>
            <li>Expose /health endpoint for monitoring</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>3. Auth Service</h5>
          <p><strong>Single Responsibility:</strong> User authentication, authorization, and session management</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Login/signup requests, JWT validation requests from other services</li>
            <li><strong>OUT:</strong> JWT tokens, email verification links (via Notification Service)</li>
            <li><strong>OWNS:</strong> users table, sessions table, password hashing, JWT generation/validation</li>
            <li><strong>DOES NOT OWN:</strong> Teacher/school profiles (owned by respective services, linked via user_id)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>POST /auth/signup - Create user account (email + password)</li>
            <li>POST /auth/login - Validate credentials, return JWT</li>
            <li>POST /auth/verify-email - Verify email token</li>
            <li>POST /auth/reset-password - Send password reset link</li>
            <li>POST /auth/validate-token - Validate JWT (called by other services)</li>
            <li>DELETE /auth/logout - Invalidate session</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>4. Job Service</h5>
          <p><strong>Single Responsibility:</strong> Manage direct job postings by schools (not aggregated jobs)</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Job posting CRUD requests from schools, search queries</li>
            <li><strong>OUT:</strong> Database writes (job_postings_direct table), events to Notification Service (job expiring soon)</li>
            <li><strong>OWNS:</strong> job_postings_direct table, job TTL logic, job analytics (views, clicks)</li>
            <li><strong>DOES NOT OWN:</strong> Aggregated jobs (owned by Aggregator), payments (owned by Payment Service)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>POST /jobs - Create new job posting (requires payment_id from Payment Service)</li>
            <li>GET /jobs/:id - Get job details</li>
            <li>PATCH /jobs/:id - Update job posting</li>
            <li>DELETE /jobs/:id - Delete or mark as filled</li>
            <li>GET /jobs/search - Search direct + aggregated jobs (unified view)</li>
            <li>Cron: Daily check for expiring jobs (TTL = 60 days), emit events to Notification Service</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>5. School Service</h5>
          <p><strong>Single Responsibility:</strong> Manage school profiles, verification status, and badges</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> School profile CRUD, verification requests, badge calculations</li>
            <li><strong>OUT:</strong> Database writes (schools, school_verifications, school_badges tables)</li>
            <li><strong>OWNS:</strong> schools table, verification logic, badge calculation logic</li>
            <li><strong>DOES NOT OWN:</strong> Job postings (owned by Job Service), reviews (owned by Review Service)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>POST /schools - Create school profile (called after signup)</li>
            <li>GET /schools/:id - Get school profile + badges + verification status</li>
            <li>PATCH /schools/:id - Update school profile</li>
            <li>POST /schools/:id/verify - Trigger verification (manual Stage 2-3, automated Stage 3+)</li>
            <li>GET /schools/:id/badges - Calculate and return badges (Basic Verified, Top Rated, High Retention, etc.)</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>6. Payment Service</h5>
          <p><strong>Single Responsibility:</strong> Process payments via Stripe and Alipay Business</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Payment initiation requests, webhook events from Stripe/Alipay</li>
            <li><strong>OUT:</strong> Database writes (payments table), events to Job Service (payment succeeded → publish job)</li>
            <li><strong>OWNS:</strong> payments table, Stripe/Alipay integration, refund logic</li>
            <li><strong>DOES NOT OWN:</strong> Job posting logic (owned by Job Service)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>POST /payments/create-checkout - Create Stripe checkout session or Alipay payment link</li>
            <li>POST /payments/webhook - Handle Stripe/Alipay webhooks (payment.succeeded, payment.failed)</li>
            <li>POST /payments/refund - Issue refund (manual admin operation)</li>
            <li>GET /payments/:payment_id - Get payment details</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
          <h5>7. Notification Service</h5>
          <p><strong>Single Responsibility:</strong> Send email and in-app notifications</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Notification requests from other services (job expiring, payment succeeded, new review)</li>
            <li><strong>OUT:</strong> Emails via SendGrid/AWS SES, in-app notifications (stored in notifications table)</li>
            <li><strong>OWNS:</strong> notifications table, email templates, SendGrid/SES integration</li>
            <li><strong>DOES NOT OWN:</strong> Business logic for when to send notifications (owned by respective services)</li>
          </ul>
          <p><strong>Key Operations:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li>POST /notifications/email - Send transactional email (email verification, password reset, payment confirmation)</li>
            <li>POST /notifications/in-app - Create in-app notification (new review, job application)</li>
            <li>GET /notifications/:user_id - Get user's notifications</li>
            <li>PATCH /notifications/:id/read - Mark notification as read</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '35px' }}>Additional Microservices (Stage 3+)</h4>

        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '1px solid #fc8181', borderRadius: '6px', marginTop: '15px' }}>
          <h5>8. Review Service (Stage 4)</h5>
          <p><strong>Single Responsibility:</strong> Manage teacher reviews and ratings of schools</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Review CRUD requests, upvote/downvote requests, flag inappropriate reviews</li>
            <li><strong>OUT:</strong> Database writes (reviews, review_flags tables), events to Notification Service (new review)</li>
            <li><strong>OWNS:</strong> reviews table, review moderation logic, upvote/downvote tracking</li>
            <li><strong>DOES NOT OWN:</strong> School profiles (owned by School Service), but references school_id</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '1px solid #fc8181', borderRadius: '6px', marginTop: '15px' }}>
          <h5>9. Search Service (Stage 5)</h5>
          <p><strong>Single Responsibility:</strong> Advanced search and discovery using Elasticsearch</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Search queries, index update events from Job/School services</li>
            <li><strong>OUT:</strong> Elasticsearch queries, search results</li>
            <li><strong>OWNS:</strong> Elasticsearch indices (jobs_index, schools_index), search ranking logic</li>
            <li><strong>DOES NOT OWN:</strong> Source data (owned by Job/School services, synced to Elasticsearch)</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '1px solid #fc8181', borderRadius: '6px', marginTop: '15px' }}>
          <h5>10. AI Service (Stage 7)</h5>
          <p><strong>Single Responsibility:</strong> AI-powered scam detection and contract review</p>
          <p><strong>Boundaries:</strong></p>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>IN:</strong> Job postings for scam analysis, contract PDFs for review</li>
            <li><strong>OUT:</strong> Scam risk scores, contract analysis reports</li>
            <li><strong>OWNS:</strong> ML model inference, OpenAI API calls, scam pattern database</li>
            <li><strong>DOES NOT OWN:</strong> Job data (owned by Job Service), contract storage (owned by Storage Service)</li>
          </ul>
        </div>
      </Section>

      <Section id="microservices-nature" title="2.2 Nature of Microservices">
        <h4>Service Characteristics</h4>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d3748', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Service</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Sync/Async</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Stateful/Stateless</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Data Ownership</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Scaling Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Web Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless (JWT)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>None (BFF)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal (CDN + multi-region)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Job Aggregator</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Async (Cron)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>jobs_aggregated</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Single instance (cron)</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Auth Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless (JWT)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>users, sessions</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal (read replicas)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Job Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync + Async (TTL cron)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>job_postings_direct</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>School Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>schools, school_verifications, school_badges</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Payment Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync + Async (webhooks)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>payments</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal (idempotency key)</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Notification Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Async (queue-based)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>notifications</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal + queue workers</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Review Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>reviews, review_flags</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>Search Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sync (search) + Async (indexing)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateful (Elasticsearch)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Elasticsearch indices</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>ES cluster (3+ nodes)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}><strong>AI Service</strong></td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Async (queue-based)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Stateless</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>scam_scores, contract_analyses</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Horizontal (GPU workers)</td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ marginTop: '30px' }}>Communication Patterns</h4>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Synchronous (REST):</strong> Web → Auth, Web → Job, Web → School, Web → Payment (user-facing operations)</li>
          <li><strong>Asynchronous (Events):</strong> Payment → Job (payment.succeeded), Job → Notification (job.expiring), Review → School (review.created for badge recalculation)</li>
          <li><strong>Scheduled (Cron):</strong> Job Aggregator (daily scrape), Job Service (TTL check), Notification Service (weekly digest)</li>
        </ul>
      </Section>

      <Section id="tech-stack" title="2.3 Tech Stack & Middleware">
        <h4>Per-Service Tech Stack</h4>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Web Service (Frontend + BFF)</h5>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>Framework:</strong> Next.js 14 (App Router, React Server Components)</li>
            <li><strong>Language:</strong> TypeScript</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>State Management:</strong> React Context + Server State (no Redux needed with RSC)</li>
            <li><strong>HTTP Client:</strong> Fetch API (native), Axios for complex requests</li>
            <li><strong>Deployment:</strong> Docker container (Stage 1-2), Vercel (Stage 5+ cloud migration)</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Job Aggregator Service</h5>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>Framework:</strong> FastAPI (Python web framework)</li>
            <li><strong>Language:</strong> Python 3.11+</li>
            <li><strong>Scraping:</strong> Scrapy framework + BeautifulSoup for parsing</li>
            <li><strong>Scheduler:</strong> APScheduler for cron jobs</li>
            <li><strong>HTTP Client:</strong> httpx (async HTTP client)</li>
            <li><strong>ORM:</strong> SQLAlchemy for database writes</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Backend Services (Auth, Job, School, Payment, Notification, Review)</h5>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>Framework:</strong> FastAPI (Python) OR NestJS (TypeScript) - decision pending</li>
            <li><strong>Language:</strong> Python 3.11+ or TypeScript 5+</li>
            <li><strong>ORM:</strong> Prisma (TypeScript) or SQLAlchemy (Python)</li>
            <li><strong>Validation:</strong> Pydantic (Python) or Zod (TypeScript)</li>
            <li><strong>Authentication:</strong> JWT (jose library for Python, jsonwebtoken for Node)</li>
            <li><strong>Deployment:</strong> Docker containers</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Search Service (Stage 5+)</h5>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>Search Engine:</strong> Elasticsearch 8.x</li>
            <li><strong>Client Library:</strong> @elastic/elasticsearch (Node) or elasticsearch-py (Python)</li>
            <li><strong>Indexing Strategy:</strong> Event-driven (Job/School services emit events → Search service updates indices)</li>
          </ul>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>AI Service (Stage 7+)</h5>
          <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
            <li><strong>Framework:</strong> FastAPI (Python)</li>
            <li><strong>ML Libraries:</strong> OpenAI API (GPT-4 for contract review), scikit-learn (scam detection model)</li>
            <li><strong>Queue:</strong> Redis + Bull (job queue for async processing)</li>
            <li><strong>OCR:</strong> Tesseract or AWS Textract (for contract PDF parsing)</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '30px' }}>Shared Middleware & Infrastructure</h4>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d3748', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Component</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Technology</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Database</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>PostgreSQL 15+</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Primary data store (all services share DB in Stage 1-2, separate DBs Stage 5+)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Cache</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Redis 7+</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Session cache, job listing cache, rate limiting</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Message Queue</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Redis + Bull (Node) or RQ (Python)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Async job processing (emails, notifications, AI analysis)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>File Storage</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>AWS S3 or Cloudinary</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>School logos, teacher resumes, contract PDFs</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>CDN</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>CloudFront or Vercel Edge</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Static assets, image optimization</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Monitoring</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Sentry (errors) + DataDog (APM)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Error tracking, performance monitoring</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Logging</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Winston (Node) or Python logging → CloudWatch</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Centralized logging</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Analytics</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Google Analytics 4</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>User behavior tracking</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="system-diagrams" title="2.4 System Diagrams (UML)">
        <h4>High-Level Architecture Diagram</h4>
        <pre style={{ backgroundColor: '#1a202c', color: '#68d391', padding: '20px', borderRadius: '6px', overflow: 'auto', fontSize: '0.85em', lineHeight: '1.6' }}>
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                              USERS (Browsers)                                │
│                    Teachers, Schools, Admin (Pete)                          │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 │ HTTPS
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          WEB SERVICE (Next.js)                               │
│                        Frontend + BFF (Orchestration)                        │
│  - SSR job pages                                                            │
│  - Coordinate multi-service calls                                           │
│  - JWT session validation                                                   │
└──┬────────┬────────┬─────────┬─────────┬──────────┬──────────┬─────────────┘
   │        │        │         │         │          │          │
   │        │        │         │         │          │          │
   │        │        │         │         │          │          │
┌──▼──┐  ┌─▼──┐  ┌──▼───┐  ┌──▼───┐  ┌─▼────┐  ┌──▼────┐  ┌──▼──────┐
│Auth │  │Job │  │School│  │Pay   │  │Review│  │Search │  │Notif    │
│Svc  │  │Svc │  │Svc   │  │Svc   │  │Svc   │  │Svc    │  │Svc      │
└──┬──┘  └─┬──┘  └──┬───┘  └──┬───┘  └─┬────┘  └──┬────┘  └──┬──────┘
   │        │        │         │         │          │          │
   │        │        │         │         │          │          │
   └────────┴────────┴─────────┴─────────┴──────────┴──────────┘
                                 │
                                 │ SQL
                                 ▼
   ┌─────────────────────────────────────────────────────────────┐
   │              PostgreSQL Database (Shared Stage 1-2)         │
   │  Tables: users, schools, jobs_aggregated, job_postings_     │
   │  direct, payments, reviews, notifications, sessions         │
   └─────────────────────────────────────────────────────────────┘

   ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
   │ Redis Cache  │     │ File Storage│     │ Elasticsearch│
   │ (Sessions,   │     │ (S3/Cloud-  │     │ (Search      │
   │  Rate Limit) │     │  inary)     │     │  Indices)    │
   └──────────────┘     └─────────────┘     └──────────────┘

   ┌──────────────────────────────────────────────────────────┐
   │       Job Aggregator Service (Python/Scrapy)             │
   │       Cron: Daily 2 AM UTC → Scrape external platforms   │
   └──────────────────────────────────────────────────────────┘
            │
            │ HTTP (Scraping)
            ▼
   ┌────────────────────────────────────────────────────────────┐
   │  External Platforms: Dave's ESL, SeriousTeachers, TEFL.com │
   └────────────────────────────────────────────────────────────┘`}
        </pre>

        <h4 style={{ marginTop: '35px' }}>Service Communication Flow (Sequence Diagram)</h4>
        <p style={{ fontSize: '0.9em', marginTop: '15px' }}><strong>Example: School Posts a Job</strong></p>
        <pre style={{ backgroundColor: '#1a202c', color: '#68d391', padding: '20px', borderRadius: '6px', overflow: 'auto', fontSize: '0.85em', lineHeight: '1.6' }}>
{`School         Web Service    Auth Service   Payment Service   Job Service    Notification Service
  │                 │                │                │               │                 │
  │─POST /jobs─────>│                │                │               │                 │
  │                 │                │                │               │                 │
  │                 │─Validate JWT──>│                │               │                 │
  │                 │<───user_id─────│                │               │                 │
  │                 │                │                │               │                 │
  │                 │─Create payment────────────────>│               │                 │
  │                 │<──payment_id───────────────────│               │                 │
  │                 │                │                │               │                 │
  │<─Redirect to────│                │                │               │                 │
  │  Stripe/Alipay  │                │                │               │                 │
  │                 │                │                │               │                 │
  │─Pay────────────────────────────>│                │               │                 │
  │                 │                │                │               │                 │
  │                 │                │<─Webhook───────│               │                 │
  │                 │                │  payment.      │               │                 │
  │                 │                │  succeeded     │               │                 │
  │                 │                │                │               │                 │
  │                 │                │────Event: payment.succeeded──>│                 │
  │                 │                │                │               │                 │
  │                 │                │                │               │─Publish job────>│
  │                 │                │                │               │  to DB          │
  │                 │                │                │               │                 │
  │                 │                │                │               │─Email: job─────>│
  │                 │                │                │               │  published      │
  │                 │                │                │               │                 │
  │<─Email: Job published───────────────────────────────────────────────────────────────│
  │                 │                │                │               │                 │`}
        </pre>

        <h4 style={{ marginTop: '35px' }}>Data Flow Diagram</h4>
        <pre style={{ backgroundColor: '#1a202c', color: '#68d391', padding: '20px', borderRadius: '6px', overflow: 'auto', fontSize: '0.85em', lineHeight: '1.6' }}>
{`┌─────────────────────────────────────────────────────────────────────┐
│                        WRITE PATHS                                  │
└─────────────────────────────────────────────────────────────────────┘

User signup:
  Web → Auth Service → PostgreSQL (users table) → Notification Service → Email

Job posting (school):
  Web → Payment Service → Stripe/Alipay → Payment Service (webhook)
    → Job Service → PostgreSQL (job_postings_direct) → Notification Service

Review creation:
  Web → Review Service → PostgreSQL (reviews) → School Service (recalc badges)
    → Notification Service → Email to school

Job scraping (aggregated):
  Cron → Job Aggregator Service → External Platforms → PostgreSQL (jobs_aggregated)

┌─────────────────────────────────────────────────────────────────────┐
│                        READ PATHS                                   │
└─────────────────────────────────────────────────────────────────────┘

Job search (Stage 1-4, PostgreSQL):
  Web → Job Service → PostgreSQL (FTS query) → Redis (cache) → Web

Job search (Stage 5+, Elasticsearch):
  Web → Search Service → Elasticsearch → Web

School profile:
  Web → School Service → PostgreSQL (schools + badges) → Redis (cache) → Web

Reviews for school:
  Web → Review Service → PostgreSQL (reviews) → Web`}
        </pre>
      </Section>

      <Section id="domain-models" title="2.5 Domain Definitions">
        <h4>Core Domain Models</h4>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>User Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> Auth Service</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type User = {
  id: string (UUID)
  email: string (unique, indexed)
  password_hash: string
  role: 'teacher' | 'school' | 'admin'
  email_verified: boolean
  created_at: timestamp
  updated_at: timestamp
}

type Session = {
  id: string (UUID)
  user_id: string (FK → users.id)
  token_hash: string (SHA256 of JWT)
  expires_at: timestamp
  created_at: timestamp
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>School Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> School Service</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type School = {
  id: string (UUID)
  user_id: string (FK → users.id)
  school_name: string
  business_license: string (China unified social credit code)
  address: string
  contact_email: string
  contact_phone: string
  logo_url: string | null
  created_at: timestamp
  updated_at: timestamp
}

type SchoolVerification = {
  id: string (UUID)
  school_id: string (FK → schools.id)
  verification_type: 'banking' | 'government_data' | 'manual'
  status: 'pending' | 'verified' | 'rejected'
  verified_date: timestamp | null
  expiry_date: timestamp | null (1 year after verified_date)
  notes: string | null (Pete's manual notes)
}

type SchoolBadge = {
  id: string (UUID)
  school_id: string (FK → schools.id)
  badge_type: 'basic_verified' | 'top_rated' | 'high_retention' | 'fast_response' | 'dei_champion'
  tier: 1 | 2 | 3 (Tier 1: Compliance, Tier 2: Performance, Tier 3: Excellence)
  awarded_date: timestamp
  criteria_met: JSON (stores criteria data, e.g., {avg_rating: 4.5, response_time_hours: 12})
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Job Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> Job Service (direct postings), Job Aggregator (aggregated jobs)</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type JobAggregated = {
  id: string (UUID)
  title: string
  location: string (city, province, country)
  salary: string | null (unparsed, e.g., "¥15K-20K/month")
  description: string (raw HTML)
  source_platform: 'daves_esl' | 'serious_teachers' | 'tefl_com' | 'eslcafe' | 'goabroad'
  source_url: string (original job posting URL)
  posted_date: timestamp (from source platform)
  scraped_date: timestamp (when we scraped it)
  is_expired: boolean (posted_date > 60 days)
}

type JobPostingDirect = {
  id: string (UUID)
  school_id: string (FK → schools.id)
  title: string
  location: string
  salary_min: number | null
  salary_max: number | null
  description_html: string (sanitized rich text)
  school_type: 'international' | 'training_center' | 'public'
  housing_provided: boolean
  visa_sponsorship: boolean
  status: 'draft' | 'published' | 'expired' | 'filled'
  payment_id: string (FK → payments.id)
  expires_at: timestamp (posted_date + 60 days)
  created_at: timestamp
  updated_at: timestamp
}

type JobAnalytics = {
  job_id: string (FK → job_postings_direct.id)
  views: number (incremented on each view)
  clicks: number (teacher clicked "Apply")
  applications: number (teacher applied)
  last_viewed_at: timestamp
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Payment Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> Payment Service</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type Payment = {
  id: string (UUID)
  user_id: string (FK → users.id)
  job_posting_id: string | null (FK → job_postings_direct.id)
  amount: number (in cents, e.g., 4900 for $49)
  currency: 'USD' | 'CNY'
  payment_method: 'stripe' | 'alipay'
  stripe_payment_id: string | null (Stripe PaymentIntent ID, unique)
  alipay_transaction_id: string | null
  status: 'pending' | 'succeeded' | 'failed' | 'refunded'
  created_at: timestamp
  updated_at: timestamp
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Review Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> Review Service</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type Review = {
  id: string (UUID)
  teacher_id: string (FK → users.id)
  school_id: string (FK → schools.id)
  rating: number (1-5 stars)
  review_text: string
  categories_json: JSON (e.g., {management: 4, salary: 5, contract_honesty: 3})
  upvotes: number
  downvotes: number
  status: 'published' | 'flagged' | 'removed'
  created_at: timestamp
  updated_at: timestamp
}

type ReviewFlag = {
  id: string (UUID)
  review_id: string (FK → reviews.id)
  flagger_user_id: string (FK → users.id)
  reason: 'spam' | 'inappropriate' | 'fake' | 'other'
  notes: string | null
  created_at: timestamp
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', borderRadius: '6px', marginTop: '15px' }}>
          <h5>Notification Domain</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Owned by:</strong> Notification Service</p>
          <pre style={{ backgroundColor: '#1a202c', color: '#63b3ed', padding: '15px', borderRadius: '4px', overflow: 'auto', fontSize: '0.85em' }}>
{`type Notification = {
  id: string (UUID)
  user_id: string (FK → users.id)
  type: 'job_expiring' | 'payment_succeeded' | 'new_review' | 'new_application'
  title: string
  body: string
  link: string | null (e.g., /jobs/123, /reviews/456)
  read: boolean
  created_at: timestamp
}

type EmailLog = {
  id: string (UUID)
  user_id: string (FK → users.id)
  email_type: 'verification' | 'password_reset' | 'payment_confirmation' | 'job_expiring' | 'weekly_digest'
  sendgrid_message_id: string
  status: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced'
  sent_at: timestamp
}`}
          </pre>
        </div>

        <h4 style={{ marginTop: '35px' }}>Domain Relationships (Entity-Relationship Diagram)</h4>
        <pre style={{ backgroundColor: '#1a202c', color: '#68d391', padding: '20px', borderRadius: '6px', overflow: 'auto', fontSize: '0.85em', lineHeight: '1.6' }}>
{`┌──────────┐        1      ┌──────────┐      1       ┌────────────────┐
│  users   │───────────────>│ schools  │─────────────>│ job_postings_  │
│          │     user_id    │          │  school_id   │    direct      │
│ - id     │                │ - id     │              │ - id           │
│ - email  │                │ - name   │              │ - title        │
│ - role   │                └──────────┘              │ - location     │
└──────────┘                      │                   │ - salary_min   │
     │                            │                   └────────────────┘
     │                            │ 1                         │
     │                            │                           │
     │                            ▼ *                         ▼ 1
     │                   ┌──────────────────┐       ┌─────────────┐
     │                   │ school_          │       │  payments   │
     │                   │ verifications    │       │             │
     │                   │ - id             │       │ - id        │
     │                   │ - school_id      │       │ - user_id   │
     │                   │ - status         │       │ - amount    │
     │                   └──────────────────┘       │ - status    │
     │                            │                 └─────────────┘
     │                            │ 1
     │                            ▼ *
     │                   ┌──────────────────┐
     │                   │ school_badges    │
     │                   │ - id             │
     │                   │ - school_id      │
     │                   │ - badge_type     │
     │                   └──────────────────┘
     │
     │ 1
     ▼ *
┌──────────┐
│ reviews  │───────┐
│          │       │ school_id
│ - id     │       │
│ - rating │       │
│ - text   │       ▼
└──────────┘  ┌──────────┐
              │ schools  │
              └──────────┘`}
        </pre>
      </Section>

      <Section id="deployment-strategy" title="2.6 Deployment Strategy">
        <h4>Stage 1-2: Monolithic Deployment (Docker Compose)</h4>
        <p style={{ fontSize: '0.9em', marginTop: '15px' }}>
          All services run on a single server with Docker Compose. Shared PostgreSQL database. Simple, fast to iterate.
        </p>
        <pre style={{ backgroundColor: '#f7fafc', padding: '15px', borderRadius: '4px', marginTop: '15px', fontSize: '0.85em' }}>
{`# docker-compose.yml (Stage 1-2)
services:
  web:
    build: ./web
    ports: ["3000:3000"]
    depends_on: [db, redis]

  job-aggregator:
    build: ./job-aggregator
    depends_on: [db]

  db:
    image: postgres:15
    volumes: [postgres-data:/var/lib/postgresql/data]

  redis:
    image: redis:7

volumes:
  postgres-data:`}
        </pre>

        <h4 style={{ marginTop: '30px' }}>Stage 5+: Cloud Migration (Kubernetes + Managed Services)</h4>
        <p style={{ fontSize: '0.9em', marginTop: '15px' }}>
          Migrate to cloud once we have stable revenue (~$5K/month MRR). Use managed services to reduce operational burden.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d3748', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Component</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Stage 1-2 (Self-hosted)</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #4a5568' }}>Stage 5+ (Cloud)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Frontend</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Docker container</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Vercel (Next.js optimized)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Backend Services</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Docker Compose</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Kubernetes (EKS/GKE)</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Database</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>PostgreSQL (Docker)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>RDS PostgreSQL (managed)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Cache</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Redis (Docker)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>ElastiCache Redis</td>
            </tr>
            <tr style={{ backgroundColor: '#f7fafc' }}>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Search</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>N/A (PostgreSQL FTS)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Elasticsearch Service (AWS/Elastic Cloud)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>File Storage</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>AWS S3 (Day 1)</td>
              <td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>AWS S3 + CloudFront CDN</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
