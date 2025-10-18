# Technical Infrastructure Mapping for PRD

This document maps ALL technical infrastructure needed across stages (not just Desiderata features).

## Stage 1: Foundation & Traffic Acquisition (Months 1-6)

### Infrastructure & DevOps
- [ ] Docker Compose multi-service setup (web + scraper)
- [ ] PostgreSQL database + migration system (Prisma or Alembic)
- [ ] Environment configuration (.env management)
- [ ] Vercel deployment (frontend)
- [ ] Railway/Render deployment (backend + DB)
- [ ] GitHub Actions CI/CD (lint, test, build)
- [ ] Sentry error tracking
- [ ] Google Analytics
- [ ] Logging infrastructure (Winston/Pino)

### Core Platform (No Auth Yet)
- [ ] Next.js 14 App Router setup
- [ ] SSR for job listing pages (SEO critical)
- [ ] PostgreSQL Full-Text Search
- [ ] Pagination component (20 items/page)
- [ ] Filter UI (location, salary, school type)
- [ ] Sort UI (date, salary)
- [ ] Responsive design (mobile-first, Tailwind CSS)
- [ ] Error boundaries
- [ ] Loading states (Suspense)
- [ ] 404/error pages
- [ ] Accessibility (WCAG AA minimum)

### Scraper Service
- [ ] Python + Scrapy framework
- [ ] Multi-platform scraper architecture (Dave's ESL, SeriousTeachers, etc.)
- [ ] Request throttling (1 req/second per domain)
- [ ] robots.txt compliance
- [ ] User-Agent rotation
- [ ] Error handling & retry logic
- [ ] Data deduplication
- [ ] Cron job scheduling (daily updates)
- [ ] Scraper health monitoring

### Database Schema (Stage 1)
- [ ] jobs_aggregated table (id, title, location, salary, description, source_url, source_platform, posted_date, scraped_date)
- [ ] email_subscribers table (email, location_preference, created_at)
- [ ] Indexes: location, posted_date, title (FTS)

### Email Infrastructure
- [ ] SendGrid/AWS SES setup
- [ ] Email templates (weekly digest)
- [ ] Unsubscribe handling
- [ ] Bounce/complaint handling

### Performance & SEO
- [ ] Server-side rendering (job pages)
- [ ] CDN for static assets
- [ ] Database indexing strategy
- [ ] Page load target: < 2 seconds
- [ ] Meta tags (Open Graph, Twitter Cards)
- [ ] Sitemap generation
- [ ] robots.txt

### Security (Basic)
- [ ] HTTPS only
- [ ] Input sanitization (XSS prevention)
- [ ] SQL injection prevention (parameterized queries)
- [ ] Rate limiting (API endpoints)

---

## Stage 2: Monetization Foundation (Months 7-12)

### NEW Infrastructure
- [ ] Authentication system (NextAuth.js or Clerk)
- [ ] Payment gateway (Stripe)
- [ ] Payment gateway (Alipay Business)
- [ ] File upload service (AWS S3 or Cloudinary)
- [ ] Rich text editor (TipTap)
- [ ] Transactional email templates (payment confirmation, password reset)

### Authentication System
- [ ] Email/password authentication
- [ ] JWT session management (7-day expiration)
- [ ] Email verification flow
- [ ] Password reset flow
- [ ] Password hashing (bcrypt)
- [ ] Login/logout endpoints
- [ ] Protected routes (middleware)
- [ ] Role-based access control (Teacher, School)
- [ ] Session invalidation

### Payment Infrastructure
- [ ] Stripe integration (international schools)
  - [ ] Checkout session
  - [ ] Webhook handling (payment success/failure)
  - [ ] Invoice generation
  - [ ] Payment method storage
- [ ] Alipay Business integration (China schools)
  - [ ] Payment API
  - [ ] Callback handling
  - [ ] Refund handling
- [ ] Payment retry logic
- [ ] Payment failure notifications

### Database Schema (NEW in Stage 2)
- [ ] users table (id, email, password_hash, role, email_verified, created_at)
- [ ] teachers table (user_id, name, bio, resume_url)
- [ ] schools table (user_id, school_name, business_license, address, contact_email, contact_phone)
- [ ] job_postings_direct table (school_id, title, location, salary_min, salary_max, description, status, expires_at, created_at)
- [ ] payments table (user_id, job_posting_id, amount, currency, payment_method, stripe_payment_id, status, created_at)
- [ ] sessions table (user_id, token, expires_at)

### File Upload
- [ ] AWS S3 bucket setup (or Cloudinary)
- [ ] Presigned URL generation
- [ ] File size limits (max 5MB for logos)
- [ ] File type validation (jpg, png only)
- [ ] Virus scanning (ClamAV)

### Rich Text Editor
- [ ] TipTap integration
- [ ] Toolbar configuration
- [ ] Character limit (5000 chars)
- [ ] HTML sanitization (prevent XSS)

### Email Templates (Transactional)
- [ ] Payment confirmation
- [ ] Job posting published
- [ ] Job posting expiring soon (7 days before)
- [ ] Job posting expired
- [ ] Password reset
- [ ] Email verification

### Security (Enhanced)
- [ ] CSRF protection (NextAuth handles this)
- [ ] Rate limiting (login: 5 attempts/15min, posting: 10 posts/day)
- [ ] Password strength requirements
- [ ] Email enumeration prevention
- [ ] Payment fraud detection (Stripe Radar)

### Performance
- [ ] Redis caching (job listings, search results)
- [ ] Database query optimization
- [ ] Connection pooling

### Admin Tools (for Pete)
- [ ] Manual job posting approval (if needed)
- [ ] Payment dispute dashboard
- [ ] User account management

---

## Stage 3: Trust Infrastructure (Months 13-18)

### NEW Infrastructure
- [ ] Banking API integration (Alipay Business - extract company metadata)
- [ ] Government data scraping (China Labor Bureau, Ministry of Education)
- [ ] Verification workflow engine
- [ ] Badge calculation system
- [ ] Manual review dashboard (Pete)

### Banking Verification System
- [ ] Alipay Business API (¥1 deposit trigger)
- [ ] WeChat Pay Business API
- [ ] Extract company info from payment metadata
- [ ] Government database lookup (business registry)
- [ ] Auto-award "Basic Verified" badge
- [ ] Award 5 FREE job postings after verification

### Government Data Scraping
- [ ] China Labor Bureau scraper (labor violations)
- [ ] Ministry of Education scraper (education licensing)
- [ ] Court filing system scraper (legal disputes)
- [ ] Business registration database scraper
- [ ] Data update schedule (monthly)
- [ ] Verification cache (avoid repeated lookups)

### Badge System Infrastructure
- [ ] Badge calculation engine (Tier 1: Compliance)
- [ ] Badge display logic
- [ ] Badge cache (Redis)
- [ ] Badge history tracking

### Database Schema (NEW in Stage 3)
- [ ] school_verifications table (school_id, verification_type, status, verified_date, expiry_date)
- [ ] school_badges table (school_id, badge_type, tier, awarded_date)
- [ ] government_data_cache table (school_name, business_license, data_source, data, last_updated)

### Manual Review Dashboard (Pete)
- [ ] Pending verifications queue
- [ ] Approve/reject verification
- [ ] Add manual notes
- [ ] View government data

---

## Stage 4: Reviews & Community (Months 19-24)

### NEW Infrastructure
- [ ] Review system (PostgreSQL + moderation)
- [ ] Upvote/downvote system
- [ ] Community forum (Discourse integration OR custom)
- [ ] Notification system (email + in-app)
- [ ] Spam detection (basic ML or rule-based)

### Review System
- [ ] 5-star rating + written review
- [ ] Category ratings (Management, Salary, Contract Honesty)
- [ ] Upvote/downvote reviews
- [ ] Flag inappropriate reviews
- [ ] Verified teacher requirement (worked at school)

### Database Schema (NEW in Stage 4)
- [ ] reviews table (teacher_id, school_id, rating, review_text, categories_json, upvotes, downvotes, status, created_at)
- [ ] review_flags table (review_id, flagger_user_id, reason, created_at)

### Community Forum
- [ ] Option A: Discourse integration (self-hosted)
- [ ] Option B: Custom forum (React + PostgreSQL)
- [ ] Categories: Job Search, School Discussions, City Guides, Visa Help
- [ ] Verified teacher badge on posts

### Notification System
- [ ] Email notifications (new review, reply to comment)
- [ ] In-app notifications (bell icon)
- [ ] Notification preferences

---

## Stage 5: Advanced Search & Discovery (Months 25-30)

### NEW Infrastructure
- [ ] Elasticsearch (replace PostgreSQL FTS)
- [ ] Map view (Google Maps API or Mapbox)
- [ ] Saved search alerts
- [ ] Recommendation engine (basic collaborative filtering)

### Elasticsearch
- [ ] Job index schema
- [ ] Multi-field search (title, description, location)
- [ ] Faceted search (school type, benefits)
- [ ] Geo-search (jobs within X km)
- [ ] Synonyms (ESL = TEFL = English teacher)

### Map View
- [ ] Google Maps or Mapbox integration
- [ ] Cluster markers (multiple jobs in same city)
- [ ] Click marker → show job details

### Saved Searches
- [ ] Save search criteria (location + filters)
- [ ] Email alerts when new jobs match
- [ ] Manage saved searches (edit, delete)

---

## Stage 6: Application Tracking (Months 31-36)

### NEW Infrastructure
- [ ] Application management system
- [ ] School-side applicant dashboard
- [ ] Teacher-side application tracking
- [ ] Status update notifications
- [ ] Application-to-hire analytics

### Application System
- [ ] Apply through platform (vs external)
- [ ] Application status workflow: Submitted → Viewed → Interview Scheduled → Offer → Hired/Rejected
- [ ] Schools update status
- [ ] Teachers get email notifications
- [ ] Track conversion rates

### Database Schema (NEW in Stage 6)
- [ ] applications table (job_posting_id, teacher_id, status, applied_date, updated_date)
- [ ] application_notes table (application_id, author_user_id, note_text, created_at)

---

## Stage 7: AI Protection (Year 3)

### NEW Infrastructure
- [ ] OpenAI API integration
- [ ] ML model training pipeline
- [ ] Scam detection engine
- [ ] Contract review tool
- [ ] NLP sentiment analysis

### AI Scam Detection
- [ ] Train model on scam patterns (too-good salary, vague location)
- [ ] Real-time job posting analysis
- [ ] Scam risk score: Low/Medium/High
- [ ] Auto-flag suspicious postings for manual review

### AI Contract Review
- [ ] PDF upload
- [ ] OCR (Tesseract or AWS Textract)
- [ ] Extract key terms (salary, hours, termination clauses)
- [ ] Flag unfair clauses
- [ ] Compare to market standards
- [ ] Generate risk score

---

## Stage 8: Moat Features (Year 3-4)

### Advanced Badge System (C.8)
- [ ] Tier 2: Performance badges (Top Rated, High Retention, Fast Response)
- [ ] Tier 3: Excellence badges (DEI Champion, Well-Managed, Career Growth)
- [ ] Real-time dashboard for schools (progress toward badges)
- [ ] NLP analysis of reviews (sentiment, keywords)

### Weekly Meetups (C.6)
- [ ] Timeleft API integration OR manual (Pete)
- [ ] Event RSVP system
- [ ] Payment ($12/event or $18/month subscription)
- [ ] Attendance tracking
- [ ] Restaurant commission tracking

### Escrow/EOR (C.7)
- [ ] Partner with Deel/Skuad (API integration)
- [ ] Escrow payment flow (3-5% fee)
- [ ] EOR service ($200-300/teacher/month)
- [ ] Legal contracts

---

## Cross-Stage Infrastructure

### Monitoring & Observability
- [ ] Sentry (error tracking)
- [ ] DataDog or New Relic (APM)
- [ ] Logging (Winston/Pino → CloudWatch or Logtail)
- [ ] Uptime monitoring (UptimeRobot or Pingdom)
- [ ] Performance monitoring (Core Web Vitals)

### Testing
- [ ] Unit tests (Jest + React Testing Library)
- [ ] Integration tests (Playwright or Cypress)
- [ ] API tests (Supertest)
- [ ] E2E tests (Playwright)

### DevOps
- [ ] GitHub Actions CI/CD
- [ ] Staging environment
- [ ] Production environment
- [ ] Database backups (automated daily)
- [ ] Disaster recovery plan

### Security (Ongoing)
- [ ] Dependency updates (Dependabot)
- [ ] Security audits (npm audit, Snyk)
- [ ] Penetration testing (Year 2+)
- [ ] GDPR compliance (data deletion, export)
- [ ] Privacy policy
- [ ] Terms of service

### Performance (Ongoing)
- [ ] CDN (Cloudflare or Vercel Edge)
- [ ] Image optimization (Next.js Image component)
- [ ] Code splitting (React.lazy)
- [ ] Lazy loading
- [ ] Database connection pooling
- [ ] Query optimization
- [ ] Caching strategy (Redis)
