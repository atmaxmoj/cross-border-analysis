import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function IndeedAggregationModel() {
  return (
    <Section id="indeed-aggregation-model" title="Indeed's Aggregation Model (Quantity & Monetization)">
      <h4>Overview:</h4>
      <p>
        Indeed operates as a global employment-related search engine, aggregating job listings from a vast array of sources
        across the internet. It connects job seekers with employers, facilitating the hiring process through a two-sided marketplace model.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Aggregation Strategy (Relevant to Question #4: Data Fusion):</strong> Indeed's core strategy is to provide a comprehensive inventory
          of job opportunities by collecting listings from company career sites, Applicant Tracking Systems (ATS), other job boards,
          and recruiting agencies. This solves the quantity problem for job seekers.
          <InfoBox>
            <strong>Indeed's Aggregation Sources:</strong>
            <ul>
              <li>Company career sites</li>
              <li>Applicant Tracking Systems (ATS)</li>
              <li>Other job boards</li>
              <li>Recruiting agencies</li>
            </ul>
            <span style={{ fontSize: '0.85em', color: '#718096' }}>
              Source: <a href="https://www.vizologi.com/business-model/indeed-business-model/" target="_blank" rel="noopener noreferrer">Vizologi</a>, <a href="https://www.recruit-holdings.com/who/indeed/" target="_blank" rel="noopener noreferrer">Recruit Holdings</a>
            </span>
          </InfoBox>
        </li>
        <li>
          <strong>Monetization (Employers Pay, Job Seekers Free) (Relevant to Question #3: Monetization):</strong> Indeed successfully monetizes employers
          for enhanced visibility and access to candidates, while job seeking remains free for individuals.
          <InfoBox>
            <strong>Indeed's Revenue Streams:</strong>
            <ul>
              <li>Pay-Per-Click (PPC) Advertising for promoted job listings.</li>
              <li>Premium Job Listing Fees for increased visibility.</li>
              <li>Resume Database Access subscriptions for searching and contacting candidates.</li>
              <li>Featured Employer Profiles for enhanced branding.</li>
              <li>Recruitment Advertising (banner/display ads).</li>
              <li>Assessments & Hiring Platform tools.</li>
              <li>Hiring Events fees.</li>
            </ul>
            <span style={{ fontSize: '0.85em', color: '#718096' }}>
              Source: <a href="https://www.vizologi.com/business-model/indeed-business-model/" target="_blank" rel="noopener noreferrer">Vizologi</a>, <a href="https://fourweekmba.com/indeed-business-model/" target="_blank" rel="noopener noreferrer">FourWeekMBA</a>
            </span>
          </InfoBox>
        </li>
        <li>
          <strong>Scaling a Two-Sided Market (Relevant to Question #2):</strong> By providing a massive, free inventory of jobs, Indeed attracts job seekers, which in turn makes the platform valuable to employers who then pay for access to that talent pool. This creates a powerful flywheel effect for scaling a two-sided marketplace.
        </li>
      </ul>

      <h4 style={{ marginTop: '30px' }}>SWOT Analysis for YouTeacher:</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
          <strong style={{ color: '#2f855a' }}>Strengths (Copy)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li><strong>A.1 Job Aggregator = Direct Copy:</strong> Indeed's core strategy - scrape existing job boards to solve chicken-egg problem with instant inventory</li>
            <li>Free for job seekers, monetize employers - proven B2B model (70% employers pay, 30% free)</li>
            <li>Pay-Per-Click model scales with usage - we can adopt for premium job listings (schools pay per application)</li>
            <li>Resume database access - applicable to our "Verified Teacher" profiles (B.2 Credential Verification)</li>
            <li>Simple value prop: "All jobs in one place" - we replicate for ESL niche ("All ESL jobs in Asia")</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '4px' }}>
          <strong style={{ color: '#c53030' }}>Weaknesses (Avoid)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Quantity over quality - Indeed has spam problem (fake jobs, MLM schemes), we need C.1 AI Scam Detection from day 1</li>
            <li>No trust layer - Indeed doesn't verify employers, we must add B.6 School Verification to differentiate</li>
            <li>Race to bottom on pricing - Indeed competes on volume, we compete on trust (premium schools pay more for verified badge)</li>
            <li>Commoditized aggregation - anyone can scrape, we need moat beyond aggregation (reviews, verification, purchasing power data)</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
          <strong style={{ color: '#2c5282' }}>Opportunities (Gaps to Exploit)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Indeed doesn't serve ESL niche well - generic job board, we specialize with ESL-specific filters (visa support, housing, TEFL required)</li>
            <li>No international salary context - B.5 Purchasing Power Calculator solves "is 15K RMB good?" question Indeed can't answer</li>
            <li>Weak employer vetting - we add B.6 multi-source verification (GSXT, Tianyancha, court records) Indeed doesn't have</li>
            <li>No community - we add B.3 Discord + C.6 Weekly Meetups for teacher support Indeed can't provide</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
          <strong style={{ color: '#744210' }}>Threats (Competitive Risks)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Indeed could add ESL category - mitigate by building niche-specific moats (B.5 purchasing power, B.6 GSXT verification, C.2 contract review)</li>
            <li>Scraping arms race - job boards may block scrapers, mitigate: partner with schools for direct postings (Stage 2-3)</li>
            <li>Low switching costs - teachers use multiple job boards, mitigate: make YouTeacher THE source via aggregation + unique data (reviews, verification)</li>
            <li>Recruit Holdings (Indeed parent) has deep pockets - $15B revenue, could outspend us, mitigate: focus on niche defensibility, not feature parity</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}