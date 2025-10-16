import InfoBox from '../../ui/InfoBox'

export default function Stage1TrafficAcquisition() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Stage 1: Traffic Acquisition (Months 1-6) - Aggregator Only</h4>
      <InfoBox>
        <strong>Features Deployed:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>A.1 Job Aggregator (scrape Dave's ESL, SeriousTeachers, ESLCafe)</li>
          <li>A.2 Browse & Basic Search</li>
          <li>A.3 Contact/Apply (redirect to original platforms)</li>
        </ul>

        <strong>Revenue:</strong> $0<br/>
        <strong>Cost:</strong> Server costs, scraping infrastructure (~$500/month)<br/><br/>

        <strong>How We Gain Traffic:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>SEO:</strong> Aggregate 10,000+ jobs = massive long-tail keyword coverage ("ESL jobs Beijing", "English teacher Shanghai", etc.)</li>
          <li><strong>Better UX than Dave's ESL:</strong> Modern design, mobile-responsive, fast search = teachers prefer browsing on our site</li>
          <li><strong>Email alerts:</strong> "Get new ESL jobs in your inbox weekly" - capture email addresses for future marketing</li>
          <li><strong>Social proof:</strong> "Search 50,000 ESL jobs across 10 platforms in one place"</li>
        </ul>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>10K+ monthly active teachers</li>
          <li>50K+ aggregated job listings</li>
          <li>5K+ email subscribers</li>
          <li>Avg time on site: 8+ minutes (vs Dave's ESL ~3 min)</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed (2004-2007):</strong> Pure aggregator for 3 years, built massive traffic before monetizing. By 2007, had 25M+ monthly visitors from aggregated job listings.</li>
          <li><strong>Airbnb (2009):</strong> Scraped Craigslist to solve cold start problem, drove initial traffic before hosts posted directly.</li>
          <li><strong>Our context:</strong> Dave's ESL has terrible UX (1995-era design). Teachers already searching for jobs - we just make it easier.</li>
        </ul>

        <strong>Why $0 Revenue is Correct:</strong> Need teacher traffic FIRST before schools will pay to post directly. Aggregation is the trojan horse to build audience without needing supply-side (schools) to engage yet.
      </InfoBox>
    </div>
  )
}
