import Section from '../../layout/Section'

export default function Stage3() {
  return (
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

      <h4 style={{ marginTop: '25px' }}>User Journey</h4>
      <div style={{ padding: '15px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '6px', marginTop: '10px' }}>
        <ol style={{ marginLeft: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Return Visit:</strong> Jessica returns to YouTeacher after being scammed 6 months ago. Sees new "Verified Schools" filter</li>
          <li><strong>Filter Application:</strong> Checks "Verified Schools Only" → Results drop from 500 jobs to 25 jobs from 12 verified schools</li>
          <li><strong>Browse Verified Jobs:</strong> Sees green "Banking Verified" badge on each job → Clicks badge to see tooltip</li>
          <li><strong>View Verification Details:</strong> Tooltip shows: "Verified via Alipay Business on 2025-09-15. Business License: 91440300XXXXXXXXXX. No labor violations found."</li>
          <li><strong>Check School Profile:</strong> Clicks school name → Sees full verification details, government data check results, 8 years in operation</li>
          <li><strong>Apply with Confidence:</strong> Applies to 3 verified schools (vs 0 applications in previous visit due to scam fear)</li>
          <li><strong>Community Validation:</strong> Checks Discord → Sees other teachers confirm "Beijing International Academy" is legitimate</li>
          <li><strong>Interview & Hire:</strong> Gets interview, checks contract, accepts offer. School honored all contract terms</li>
        </ol>
        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.85em', color: '#6b7280' }}>
          <strong>Outcome:</strong> Jessica got hired by verified school, zero scam risk. Recommends YouTeacher to 5 teacher friends. Platform trust increases from 20% to 85% among users.
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
        <p><strong>Build Time:</strong> 3 weeks</p>
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
        <p><strong>Build Time:</strong> 2 weeks</p>
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
        <p><strong>Build Time:</strong> 1 week</p>
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
        <p><strong>Build Time:</strong> 1 week</p>
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
  )
}
