import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'

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

      <h4 style={{ marginTop: '30px' }}>SWOT Analysis of Indeed:</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
          <strong style={{ color: '#2f855a' }}>Strengths</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Massive job inventory - aggregates millions of jobs from company sites, ATS systems, other job boards (solved cold start via scraping)</li>
            <li>Global scale - 60+ countries, 300M+ unique visitors/month, world's #1 job site by traffic</li>
            <li>Simple, clean UX - minimal friction for job seekers, easy to search and apply</li>
            <li>SEO dominance - ranks #1 for most job-related search queries, drives massive organic traffic</li>
            <li>Recruit Holdings backing - $15B parent company provides capital, M&A opportunities (Glassdoor acquisition 2018)</li>
            <li>Pay-Per-Click model aligns incentives - employers only pay when candidates apply, reduces risk vs fixed job posting fees</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '4px' }}>
          <strong style={{ color: '#c53030' }}>Weaknesses</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Spam and low-quality jobs - no employer verification allows scams, MLM schemes, fake postings to proliferate</li>
            <li>Commoditized aggregation - core scraping strategy easily replicable, no defensible moat beyond scale</li>
            <li>Declining organic traffic - Google Jobs widget (2017) diverts traffic directly to employer sites, bypassing Indeed</li>
            <li>Revenue concentration - 90%+ from job posting/advertising, vulnerable to economic cycles (2020 COVID hit hard)</li>
            <li>No trust layer - doesn't verify employers or provide company reviews (unlike Glassdoor), purely transactional</li>
            <li>Geographic limitations - strong in US/UK, weaker in Asia/LatAm vs local competitors (51job China, Seek Australia)</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
          <strong style={{ color: '#2c5282' }}>Opportunities</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>AI-powered matching - leverage 20+ years job/candidate data for ML-based recommendations (currently basic keyword matching)</li>
            <li>Vertical specialization - create niche job boards (healthcare, tech, education) with category-specific features</li>
            <li>Employer verification - add trust layer to differentiate from low-quality aggregators, reduce spam</li>
            <li>Premium job seeker services - resume writing, interview prep, salary negotiation (currently employer-focused only)</li>
            <li>Glassdoor integration - combine job search (Indeed) + company reviews (Glassdoor) for full-stack recruiting platform</li>
            <li>International expansion - Asia, Africa growth markets underserved, opportunity for local partnerships</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
          <strong style={{ color: '#744210' }}>Threats</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Google for Jobs - directs job seekers to employer sites, disintermediates Indeed, threatens traffic (30% decline 2017-2020)</li>
            <li>LinkedIn competition - 900M professionals, adding job search features, employer tools, direct recruiting (LinkedIn Recruiter)</li>
            <li>Economic downturns - job posting spend evaporates during recessions (2008, 2020), high revenue volatility</li>
            <li>Job board commoditization - low barriers to entry, new aggregators launch constantly (ZipRecruiter, Glassdoor Jobs)</li>
            <li>Scraping arms race - employers/job boards increasingly block scrapers, forces direct integrations (higher cost)</li>
            <li>Employer backlash - complaints about spam applications, low-quality candidates, push for quality over quantity</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}