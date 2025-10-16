import InfoBox from '../../ui/InfoBox'

export default function JobAggregator() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.1 Job Aggregator</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #2 (Chicken & egg problem)<br/>
        <strong>Solves Pain Point:</strong> Cold start problem - no schools will post if there are no teachers, no teachers will come if there are no jobs. Need content from day 1.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed:</strong> Started as job aggregator in 2004, scraping job postings from thousands of company websites and other job boards. Had millions of jobs from day 1 without needing employers to post. This solved the chicken-egg problem and drove massive teacher traffic.</li>
          <li><strong>Airbnb (indirect analogue):</strong> When stuck in 2009, they scraped Craigslist to cross-post listings and contacted hosts to join their platform. Solved cold start by leveraging existing marketplaces.</li>
          <li><strong>Our context:</strong> Dave's ESL Cafe, SeriousTeachers, ESLCafe forums all have job listings publicly available. We can aggregate these to have thousands of jobs on day 1.</li>
        </ul>
        <strong>Implementation:</strong> Absolute minimum:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Build scrapers for 3-5 major ESL job boards (Dave's ESL, SeriousTeachers, ESLCafe, etc.)</li>
          <li>Parse: Job title, location, salary (if available), description, source URL</li>
          <li>Store aggregated jobs in database with source attribution</li>
          <li>Update daily to keep listings fresh</li>
          <li>Display "Originally posted on [Source]" with link back to original posting</li>
          <li><strong>Critical: Teachers click through to apply on the ORIGINAL platform</strong> - we are a portal/aggregator, not the destination (yet)</li>
          <li>No need for school accounts - we're just aggregating existing public content to solve cold start</li>
        </ul>
        <strong>Why This Comes First:</strong> Without aggregation, we have zero jobs and zero teacher traffic. Aggregation gives us thousands of jobs from day 1, drives teacher traffic, THEN we can invite schools to post directly on our platform (A.4).
      </InfoBox>
    </div>
  )
}
