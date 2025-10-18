import Section from '../../../layout/Section'

export default function AppendixEFeatureList() {
  return (
    <Section id="appendix-e" title="E. Feature Quick Reference">
      <p>Complete list of all Desiderata features with one-line descriptions.</p>

      <h3 style={{ marginTop: '30px' }}>A-Tier: Must-Have Features (Stage 1-2, Months 1-18)</h3>
      <ul style={{ fontSize: '0.9em', lineHeight: '2', fontFamily: 'monospace' }}>
        <li><strong>A.1 Job Aggregator:</strong> Scrape existing job boards (Dave's ESL, SeriousTeachers) to have 50K+ jobs from day 1, solving cold start</li>
        <li><strong>A.2 Job Search & Browse:</strong> Basic job listing page with filters (location, salary, school type) - core discovery mechanism</li>
        <li><strong>A.3 Transparent Job Listings:</strong> Standardized job post format showing salary, benefits, visa support, contract length</li>
        <li><strong>A.4 Basic School Verification:</strong> Display school name, location, business license status (scraped from GSXT) - minimum trust signal</li>
        <li><strong>A.5 Direct Application:</strong> Teachers apply directly to schools via platform (email forwarding initially, no complex applicant tracking)</li>
      </ul>

      <h3 style={{ marginTop: '30px' }}>B-Tier: Performance Features (Stage 3, Months 19-36)</h3>
      <ul style={{ fontSize: '0.9em', lineHeight: '2', fontFamily: 'monospace' }}>
        <li><strong>B.1 School Reviews & Ratings:</strong> Glassdoor-style reviews (5-star ratings + written feedback) from verified teachers only</li>
        <li><strong>B.2 Credential Verification:</strong> Teacher profile showing verified degrees, TEFL certificates, teaching licenses (WES integration)</li>
        <li><strong>B.3 Community Forum (Discord):</strong> Integrate Discord widget for teacher discussions (zero dev time, better UX than custom forum)</li>
        <li><strong>B.4 Real-Time Chat:</strong> Direct messaging between teachers and schools for quick Q&A during hiring process</li>
        <li><strong>B.5 Data-Driven School Insights & Purchasing Power Calculator:</strong> Salary transparency + cost-of-living calculator ("15K RMB in Chengdu = $2,500 USD purchasing power")</li>
        <li><strong>B.6 School Verification System:</strong> Multi-source verification (GSXT + Tianyancha + court records + Maps API) with verification badges</li>
        <li><strong>B.7 Advanced Search & Filters:</strong> Filter by verified schools, review ratings, salary range, contract renewal rate, visa support type</li>
        <li><strong>B.8 Transparent Listing Requirements:</strong> Schools must disclose: exact salary, overtime policy, housing allowance, contract penalties</li>
        <li><strong>B.9 Direct Application Tracking:</strong> Teacher dashboard showing application status, school response times, interview scheduling</li>
        <li><strong>B.10 Edge/Client Entity Split:</strong> One Edge Entity (global platform/scraping) + Client Entities per market (China/Korea/Japan) for local payments/invoicing - scales to new markets while protecting platform from local regulation</li>
      </ul>

      <h3 style={{ marginTop: '30px' }}>C-Tier: Excitement Features (Stage 4, Year 3-4)</h3>
      <ul style={{ fontSize: '0.9em', lineHeight: '2', fontFamily: 'monospace' }}>
        <li><strong>C.1 AI-Powered Scam Detection:</strong> ML model flags suspicious job postings (unrealistic salary, pressure tactics, vague descriptions) before going live</li>
        <li><strong>C.2 Contract Review Tool:</strong> AI contract analysis highlighting red flags, salary benchmarking, visa clause verification ($29 per review)</li>
        <li><strong>C.3 Regional Champion Program:</strong> Pay experienced teachers in each city to help newcomers, organize meetups, provide local insights</li>
        <li><strong>C.4 Teacher Success Stories:</strong> Video interviews with successful teachers at verified schools, salary breakdowns, lifestyle comparisons</li>
        <li><strong>C.5 B2B Recruiter Marketplace:</strong> Recruiters pay 10-15% commission, platform takes 20% cut ($600-$1K per placement, 100 placements/yr = $60K-$100K)</li>
        <li><strong>C.6 Weekly Teacher Meetups:</strong> Organize dinners every Wednesday in 10+ cities ($12/event or $18/mo subscription, Timeleft model: €12M ARR)</li>
        <li><strong>C.7 Escrow & EOR Service:</strong> Salary escrow (3-5% fee) + Employer of Record partnerships with Deel/Skuad ($200-$300/teacher/month)</li>
        <li><strong>C.8 Advanced School Badge System:</strong> FREE multi-dimensional badges (Government Data + AI Analysis + Teacher Feedback) with 6-level scoring</li>
      </ul>

      <h3 style={{ marginTop: '30px' }}>D-Tier: Disruptive/Transformative Features (Year 5-10 Vision)</h3>
      <ul style={{ fontSize: '0.9em', lineHeight: '2', fontFamily: 'monospace' }}>
        <li><strong>D.1 ESL Teacher Super-App:</strong> WeChat-style ecosystem with housing, banking, visa, healthcare, social - become teacher's life operating system ($5.8M/yr potential)</li>
        <li><strong>D.2 School SaaS Platform:</strong> Workday-style HR software for international schools (applicant tracking, payroll, compliance) - recurring revenue $100-$500/school/month</li>
        <li><strong>D.3 Predictive Matching Engine:</strong> AI matches teachers to schools based on teaching style, personality, city preferences (Bloomberg Terminal for teaching jobs)</li>
        <li><strong>D.4 Teacher Collectives & Unions:</strong> Enable teacher organizing, collective bargaining for salary standards, blacklist abusive schools (labor union power shift)</li>
        <li><strong>D.5 Geographic Expansion Platform:</strong> Template for launching in new countries (Korea, Japan, Thailand, Vietnam) with 83-85% feature transferability</li>
      </ul>

      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
        <strong>Feature Prioritization Summary:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Stage 1-2 (Months 1-18):</strong> Build ONLY A-tier features (A.1-A.5). Critical: Start with job aggregator (A.1) to have 50K+ jobs from day 1, solving chicken-egg problem. Goal: 10K MAU by Month 6.</li>
          <li><strong>Stage 3 (Months 19-36):</strong> Add B-tier features (B.1-B.10) for differentiation. Focus: Verification infrastructure (B.6) + purchasing power calculator (B.5) create moat competitors can't replicate. B.10 Edge/Client entity split enables monetization in China while protecting platform. Goal: $30K+ MRR, 500+ schools.</li>
          <li><strong>Stage 4 (Year 3-4):</strong> Launch C-tier features (C.1-C.8) for excitement + moat building. Simultaneously expand market (vertical: all foreign jobs in China Year 3 Q3-Q4, horizontal: Korea/Japan Year 4). Goal: $1.25M ARR by end of Year 4.</li>
          <li><strong>Year 5-10:</strong> D-tier features transform industry structure (super-app, SaaS, predictive matching, teacher collectives). These are vision features, not Year 1-3 priorities. Potential: $100M+ ARR category expansion.</li>
        </ul>
      </div>
    </Section>
  )
}
