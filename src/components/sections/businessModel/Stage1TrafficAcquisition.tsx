import InfoBox from '../../ui/InfoBox'

export default function Stage1TrafficAcquisition() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Stage 1: Traffic Acquisition (Months 1-6) - Aggregator Only</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '8px', marginBottom: '20px' }}>
        <strong style={{ fontSize: '1.1em', color: '#1e40af' }}>🎯 Stage 1 MVP Checklist (Launch in Month 3)</strong>
        <table style={{ width: '100%', marginTop: '15px', fontSize: '0.9em', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbeafe', borderBottom: '2px solid #3b82f6' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Feature</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Build Time</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Owner</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Success Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '10px' }}><strong>A.1 Job Aggregator</strong><br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>Scrape Dave's ESL + SeriousTeachers (2 platforms)</span></td>
              <td style={{ padding: '10px' }}>2 weeks</td>
              <td style={{ padding: '10px' }}>Mojo</td>
              <td style={{ padding: '10px' }}>1,000+ jobs aggregated</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '10px' }}><strong>A.2 Browse & Search</strong><br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>Location + keyword filter only</span></td>
              <td style={{ padding: '10px' }}>1 week</td>
              <td style={{ padding: '10px' }}>Mojo</td>
              <td style={{ padding: '10px' }}>Avg search time &lt;30 sec</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '10px' }}><strong>A.3 Contact/Apply</strong><br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>Redirect to original platform</span></td>
              <td style={{ padding: '10px' }}>3 days</td>
              <td style={{ padding: '10px' }}>Mojo</td>
              <td style={{ padding: '10px' }}>100% functional links</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '10px' }}><strong>Email Capture</strong><br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>"Get new jobs weekly" signup form</span></td>
              <td style={{ padding: '10px' }}>2 days</td>
              <td style={{ padding: '10px' }}>Mojo</td>
              <td style={{ padding: '10px' }}>100+ signups by Month 1</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>Discord Community</strong><br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>Link from website, Pete moderates</span></td>
              <td style={{ padding: '10px' }}>0 days<br/><span style={{ fontSize: '0.85em', color: '#059669' }}>(free, zero dev)</span></td>
              <td style={{ padding: '10px' }}>Pete</td>
              <td style={{ padding: '10px' }}>50+ members by Month 2</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#dcfce7', borderRadius: '4px' }}>
          <strong style={{ color: '#166534' }}>✅ Go/No-Go Decision (End of Month 3):</strong>
          <ul style={{ margin: '5px 0 0 0', fontSize: '0.9em', color: '#166534' }}>
            <li>✓ 1,000+ jobs live on platform</li>
            <li>✓ 100+ teacher email signups</li>
            <li>✓ 50+ Discord members</li>
            <li><strong>If YES:</strong> Proceed to Stage 2 (add A.4 Direct Posting)</li>
            <li><strong>If NO:</strong> Diagnose issue (SEO? Value prop? Wrong channels?) before building more features</li>
          </ul>
        </div>
      </div>

      <InfoBox>
        <strong>Features Deployed:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>A.1 Job Aggregator (scrape Dave's ESL, SeriousTeachers)</li>
          <li>A.2 Browse & Basic Search (location + keyword only)</li>
          <li>A.3 Contact/Apply (redirect to original platforms)</li>
          <li>Email capture form ("Get new jobs weekly")</li>
          <li><strong>Community:</strong> Discord server (free, zero dev time) - link from website</li>
        </ul>

        <strong>Revenue:</strong> $0<br/>
        <strong>Cost:</strong> Server costs, scraping infrastructure (~$100/month)<br/>
        <strong>Discord:</strong> Free (no hosting, no moderation tools to build)<br/><br/>

        <strong>How We Gain Traffic:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>SEO:</strong> Aggregate 10,000+ jobs = massive long-tail keyword coverage ("ESL jobs Beijing", "English teacher Shanghai", etc.)</li>
          <li><strong>Better UX than Dave's ESL:</strong> Modern design, mobile-responsive, fast search = teachers prefer browsing on our site</li>
          <li><strong>Discord community:</strong> "Join our Discord - ask questions, verify schools, connect with teachers" → Better than Dave's ghost town forum</li>
          <li><strong>Email alerts:</strong> "Get new ESL jobs in your inbox weekly" - capture email addresses for future marketing</li>
          <li><strong>Social proof:</strong> "Search 50,000 ESL jobs across 10 platforms in one place"</li>
        </ul>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>10K+ monthly active teachers (website)</li>
          <li>500+ Discord members (active community)</li>
          <li>50K+ aggregated job listings</li>
          <li>5K+ email subscribers</li>
          <li>Avg time on site: 8+ minutes (vs Dave's ESL ~3 min)</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed (2004-2007):</strong> Pure aggregator for 3 years, built massive traffic before monetizing. By 2007, had 25M+ monthly visitors from aggregated job listings.</li>
          <li><strong>Airbnb (2009):</strong> Scraped Craigslist to solve cold start problem, drove initial traffic before hosts posted directly.</li>
          <li><strong>Discord for communities:</strong> 500M+ users, modern mobile-first experience. Crypto projects, gaming communities, SaaS products use Discord as community hub before building custom forums. Zero dev time, instant moderation tools, real-time chat vs Dave's ESL async forum.</li>
          <li><strong>Our context:</strong> Dave's ESL has terrible UX (1995-era design) + "ghost town" forum. Teachers already searching for jobs - we just make it easier + provide active Discord community.</li>
        </ul>

        <strong>Why $0 Revenue is Correct:</strong> Need teacher traffic FIRST before schools will pay to post directly. Aggregation is the trojan horse to build audience without needing supply-side (schools) to engage yet.

        <strong>Why Discord in Stage 1:</strong> Building custom forum = 4-8 weeks Mojo dev time + ongoing maintenance + moderation tools. Discord = free, zero dev time, better UX than Dave's ESL forum. Trade-off: Users leave website (acceptable friction in Stage 1). Stage 2: Integrate Discord into site via iframe/widget.
      </InfoBox>
    </div>
  )
}
