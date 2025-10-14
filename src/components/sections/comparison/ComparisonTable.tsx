import Section from '../../layout/Section'

export default function ComparisonTable() {
  return (
    <Section id="comparison-table" title="Side-by-Side Comparison">
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Pete's Original Vision</th>
            <th>Enhanced Strategy (Mojo's Analysis)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Market Entry</strong></td>
            <td>Free job posting for schools</td>
            <td>Aggregate existing platforms + add verification layer</td>
          </tr>
          <tr>
            <td><strong>Differentiation</strong></td>
            <td>Better UI/UX + filtering</td>
            <td>Verification & trust scoring (defensible moat)</td>
          </tr>
          <tr>
            <td><strong>Cold Start</strong></td>
            <td>Free posting for 50 founding schools</td>
            <td>Aggregation first, then invite schools</td>
          </tr>
          <tr>
            <td><strong>Revenue Streams</strong></td>
            <td>9 sources from Day 1</td>
            <td>Focus on 1-2 initially, expand systematically</td>
          </tr>
          <tr>
            <td><strong>Geography</strong></td>
            <td>China → Korea → Japan → SE Asia → MENA → LatAm (18 months)</td>
            <td>China-only for 12-18 months until PMF</td>
          </tr>
          <tr>
            <td><strong>Team Size</strong></td>
            <td>2 people (Pete + Mojo)</td>
            <td>Remain 2-person team, leverage automation</td>
          </tr>
          <tr>
            <td><strong>Timeline</strong></td>
            <td>18 months to global</td>
            <td>12-16 weeks validation → 12 months China PMF → expansion</td>
          </tr>
          <tr>
            <td><strong>Competitive Moat</strong></td>
            <td>Better tech, UI/UX</td>
            <td>Verification data + school reviews (2-3 year head start)</td>
          </tr>
          <tr>
            <td><strong>Monetization</strong></td>
            <td>Immediate multi-stream revenue</td>
            <td>Single stream validation, then phased expansion</td>
          </tr>
          <tr>
            <td><strong>Success Metric</strong></td>
            <td>50% of Dave's traffic</td>
            <td>50+ paying schools, $100K ARR in Year 1</td>
          </tr>
        </tbody>
      </table>

      <h3 id="key-changes">Key Changes Summary</h3>
      <ol>
        <li><strong>Market Entry:</strong> Changed from dual-sided cold start to aggregation-first approach</li>
        <li><strong>Differentiation:</strong> Shifted from technology (easily copied) to trust/verification (defensible)</li>
        <li><strong>Geography:</strong> Narrowed from global to China-first depth strategy</li>
        <li><strong>Revenue:</strong> Sequential focus instead of simultaneous multi-stream</li>
        <li><strong>Timeline:</strong> More realistic 12-month validation vs. 18-month global expansion</li>
        <li><strong>Team:</strong> Accepted 2-person constraint, built automation-first strategy</li>
        <li><strong>Success Definition:</strong> Revenue-focused ($100K ARR) instead of vanity metric (traffic %)</li>
      </ol>
    </Section>
  )
}
