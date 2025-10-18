import Section from '../../../layout/Section'
import InsightBox from '../../../ui/InsightBox'

export default function Discovery4() {
  return (
    <Section id="discovery-4" title="Discovery #4: Cold Start Challenges Require Aggregation Strategy Rather Than Dual-Sided Marketplace Approach">
      <p><strong>What prompted this investigation:</strong> Pete's "50 schools" plan attempts to build both sides of the marketplace simultaneously (convince schools to post, attract teachers to apply). This is the classic two-sided marketplace chicken-and-egg problem: schools won't post without teacher traffic, teachers won't visit without job volume. But how have successful two-sided marketplaces actually solved this problem?</p>

      <h4>Pete's "50 Schools" Dual-Sided Cold Start Problem:</h4>
      <table style={{ margin: '20px 0' }}>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Pete's Plan</th>
            <th>Problem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phase 1</strong></td>
            <td>Convince 50 schools to post jobs for free</td>
            <td style={{ background: '#ffebee' }}>Why would schools post if no teachers visit? Free posting is no benefit without traffic. They already have free options (Facebook groups, WeChat).</td>
          </tr>
          <tr>
            <td><strong>Phase 2</strong></td>
            <td>Drive teacher traffic via superior UI/UX, social media, paid ads</td>
            <td style={{ background: '#ffebee' }}>Teachers won't visit a platform with only 50 jobs when Dave's has thousands. Why leave the incumbent?</td>
          </tr>
          <tr>
            <td><strong>Phase 3</strong></td>
            <td>Once traffic reaches 50% of Dave's, start charging schools</td>
            <td style={{ background: '#ffebee' }}>Reaching "50% of Dave's traffic" (175K monthly visitors) with only 50 jobs is nearly impossible. Teachers need job volume, not just UI polish.</td>
          </tr>
        </tbody>
      </table>

      <h4>Analogous Marketplace Examples:</h4>
      <table style={{ margin: '20px 0' }}>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Side Solved First</th>
            <th>Cold Start Solution</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Airbnb</strong></td>
            <td style={{ background: '#e8f5e9', fontWeight: 'bold' }}>Supply<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(Listings/Hosts)</span></td>
            <td>Scraped Craigslist listings to solve supply-side cold start</td>
            <td>Built initial inventory without recruiting hosts</td>
          </tr>
          <tr>
            <td><strong>Uber</strong></td>
            <td style={{ background: '#fff3e0', fontWeight: 'bold' }}>Both Simultaneously<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(Heavy subsidies)</span></td>
            <td>Subsidized both drivers and riders heavily in early markets</td>
            <td>Expensive but effective - required massive funding</td>
          </tr>
          <tr>
            <td><strong>Indeed</strong></td>
            <td style={{ background: '#e8f5e9', fontWeight: 'bold' }}>Supply<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(Job Listings)</span></td>
            <td>Aggregated job listings from company websites before companies posted directly</td>
            <td>Built job seeker traffic, then attracted employers</td>
          </tr>
          <tr>
            <td><strong>Zillow</strong></td>
            <td style={{ background: '#e8f5e9', fontWeight: 'bold' }}>Supply<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(Property Listings)</span></td>
            <td>Aggregated MLS data before adding exclusive listings</td>
            <td>Became destination for home buyers first</td>
          </tr>
        </tbody>
      </table>

      <h4>Pattern Identified:</h4>
      <InsightBox>
        <strong>Universal principle:</strong> Two-sided marketplaces universally struggle without solving one side first.
      </InsightBox>
    </Section>
  )
}
