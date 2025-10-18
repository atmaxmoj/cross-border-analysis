import Section from '../../layout/Section'

export default function Stage2() {
  return (
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

      <h4 style={{ marginTop: '25px' }}>User Journey</h4>
      <div style={{ padding: '15px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '6px', marginTop: '10px' }}>
        <ol style={{ marginLeft: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Outbound Contact:</strong> Mr. Wang (training center director) receives cold email: "YouTeacher has 1,500+ active teachers. Post for $49 vs Dave's $75. First post FREE."</li>
          <li><strong>Visit Landing Page:</strong> Clicks email link → Sees stats: "1,500 MAU, 500+ jobs posted, average 30 views/job in first week"</li>
          <li><strong>Account Creation:</strong> Clicks "Post a Job" → Creates school account (email, school name, business license number)</li>
          <li><strong>First Job Post:</strong> Fills form: "Elementary English Teacher - Shenzhen" | Salary: ¥18K-22K | Housing: Yes | Rich text editor for description</li>
          <li><strong>Payment:</strong> Clicks "Publish for ¥49" → Alipay Business payment → Job goes live immediately</li>
          <li><strong>Monitor Performance:</strong> Dashboard shows: 45 views, 3 email clicks, 1 Discord mention in first 3 days</li>
          <li><strong>Receive Applications:</strong> Gets 8 applications via email (teachers clicking "Apply" redirect to school's email)</li>
          <li><strong>Renewal:</strong> After 60 days, receives email: "Your posting expires in 7 days. Renew for $49?" → One-click renewal</li>
        </ol>
        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em', color: '#6b7280' }}>
          <strong>Outcome:</strong> Mr. Wang hired 1 teacher from 8 applicants. ROI: $49 spend → $25K/year salary savings vs agency recruitment. Posts 3 more jobs over next 6 months.
        </p>
      </div>

      <h4 style={{ marginTop: '25px' }}>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a school, I want to post jobs directly on the platform, so I can reach teachers without paying Dave's ESL $75</li>
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
          <li>Rich text editor for job description</li>
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
          <li>Payment success rate: 95%+</li>
        </ul>
        <p><strong>Build Time:</strong> 3 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR14: User Accounts (A.5)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> School and teacher accounts for authentication and management</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Email/password authentication</li>
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
        <p><strong>Build Time:</strong> 2 weeks</p>
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
        <p><strong>Build Time:</strong> 1-2 days</p>
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
        <p><strong>Build Time:</strong> Ongoing</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR16.5: Manual Government Data Verification (Pre-FR25)</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Manual lookup of school legitimacy using China government databases (manual pre-version of FR25 automated scraping)</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Pete manually checks each school posting against China government databases</li>
          <li>Data sources: China Labor Bureau (劳动监察) for labor violations, Ministry of Education (教育部) for education licensing, Court Filing System (中国裁判文书网) for lawsuits</li>
          <li>Manual process: School submits business license → Pete looks up license number in databases → Flags if violations found</li>
          <li>Simple spreadsheet tracking: School name, business license, check date, violations found (yes/no), notes</li>
          <li>If violations found → Add warning to school profile: "Labor violation reported in 2023" or reject posting</li>
          <li>Time estimate: 15-30 minutes per school manual lookup</li>
          <li>Scales up to ~50-100 schools in Stage 2, then automate in Stage 3 (FR25)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>100% of paying schools manually verified before posting goes live</li>
          <li>Verification completes within 24 hours of payment</li>
          <li>Schools with serious violations (unpaid wages, illegal terminations) rejected from platform</li>
          <li>Pete maintains verification spreadsheet with 50+ schools by Month 12</li>
        </ul>
        <p><strong>Build Time:</strong> 1 day (simple spreadsheet + process documentation)</p>
        <p><strong>Why Manual First:</strong> In Stage 2 we only have ~50 schools, manual verification is feasible. This validates the data sources work BEFORE investing in automation (FR25 in Stage 3).</p>
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
        <p><strong>Build Time:</strong> 1 week</p>
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
          <li>Refund handling: Manual refunds via Stripe Dashboard</li>
          <li>Payment method storage: Stripe Customer object for repeat customers</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>95%+ payment success rate (test with Stripe test cards)</li>
          <li>Webhooks process within 5 seconds of payment</li>
          <li>Zero duplicate charges (idempotency working)</li>
          <li>Invoice PDF generated and emailed automatically</li>
        </ul>
        <p><strong>Build Time:</strong> 2 weeks</p>
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
        <p><strong>Build Time:</strong> 3 days</p>
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
        <p><strong>Build Time:</strong> 1 week</p>
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
        <p><strong>Build Time:</strong> 3 days</p>
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
        <p><strong>Build Time:</strong> 3 days</p>
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
        <p><strong>Build Time:</strong> 2 weeks - Can defer to Month 9-10 if time-constrained (use FR21 APIs via Postman instead)</p>
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
  )
}
