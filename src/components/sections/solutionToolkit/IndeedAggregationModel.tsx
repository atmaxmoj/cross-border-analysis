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
    </Section>
  )
}