import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'

export default function RiskSummary() {
  return (
    <Section id="risk-summary" title="Risk Summary & Kill Criteria">
      <InfoBox>
        <strong>Overall Risk Profile:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Highest Impact Risks:</strong> Stage 1 aggregation blocked (business fails), Stage 2 monetization fails (no revenue path), Founder burnout (project shutdown)</li>
          <li><strong>Highest Probability Risks:</strong> Seasonal hiring volatility (70%), Competitors copy features (50%), Traffic target miss (40%)</li>
          <li><strong>Most Mitigable Risks:</strong> Verification liability (insurance + disclaimers), Payment processing (Ping++ integration), Regulatory crackdown (geographic diversification)</li>
          <li><strong>Least Mitigable Risks:</strong> Dave's ESL matches pricing (limited control), China policy changes (exogenous shock), Founder bandwidth limits (2-person team reality)</li>
        </ul>

        <strong>Stage-by-Stage Kill Criteria Summary:</strong>
        <table style={{ fontSize: '0.85em', marginTop: '15px' }}>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Go/No-Go Decision Point</th>
              <th>Success Criteria</th>
              <th>Kill Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Stage 1</strong><br/>(Month 6)</td>
              <td>Proceed to Stage 2?</td>
              <td>✅ 10K MAU<br/>✅ 50K jobs aggregated<br/>✅ 5K email subscribers</td>
              <td>❌ &lt;5K MAU<br/>❌ &lt;10K jobs<br/>→ Reassess or shutdown<br/><br/>Sunk cost: $600</td>
            </tr>
            <tr>
              <td><strong>Stage 2</strong><br/>(Month 18)</td>
              <td>Proceed to Stage 3?</td>
              <td>✅ 100+ paying schools<br/>✅ $10K+ MRR<br/>✅ 30%+ retention rate</td>
              <td>❌ &lt;50 schools<br/>❌ &lt;$5K MRR<br/>→ Pivot (B2C) or shutdown<br/><br/>Sunk cost: $1.8K</td>
            </tr>
            <tr>
              <td><strong>Stage 3</strong><br/>(Month 36)</td>
              <td>Proceed to Stage 4?</td>
              <td>✅ 500+ schools<br/>✅ $30K+ MRR<br/>✅ 15%+ Premium tier uptake</td>
              <td>❌ &lt;300 schools<br/>❌ &lt;$20K MRR<br/>→ Cap growth, seek exit<br/><br/>Sunk cost: $3.6K</td>
            </tr>
            <tr>
              <td><strong>Stage 4</strong><br/>(Year 4+)</td>
              <td>Continue scaling?</td>
              <td>✅ $60K+ MRR<br/>✅ 2+ moat features validated<br/>✅ Geographic expansion successful</td>
              <td>❌ Revenue flat 12+ months<br/>❌ No defensible moat<br/>→ Sell or maintain as lifestyle business</td>
            </tr>
          </tbody>
        </table>

        <br/>
        <strong>Ultimate Kill Criteria (Any Stage):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Founder consensus:</strong> If both Pete + Mojo agree "This isn't working and we're burned out" → Shut down within 30 days. Don't drag for years.</li>
          <li><strong>Runway depletion:</strong> If runway &lt;3 months and cannot raise funds/achieve profitability → Shut down or fire sale.</li>
          <li><strong>Market collapse:</strong> If China ESL market shrinks &gt;70% due to regulatory policy → Immediate geographic pivot or exit.</li>
          <li><strong>Catastrophic event:</strong> Major lawsuit (&gt;$500K), data breach affecting &gt;10K users, or founder incapacitation &gt;3 months → Execute contingency plan or wind down.</li>
        </ul>

        <br/>
        <strong>Success Definition (Avoid "Zombie Startup" Trap):</strong>
        <table style={{ fontSize: '0.85em', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Metrics by Year 3</th>
              <th>Strategic Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f0fff4' }}>
              <td><strong>🎯 Good Outcome</strong></td>
              <td>$50K+ MRR<br/>Defensible moat<br/>Profitable</td>
              <td>Continue scaling to $1M+ ARR<br/>OR<br/>Sell for $2M-$5M (4-8x revenue multiple)</td>
            </tr>
            <tr style={{ background: '#fef3c7' }}>
              <td><strong>⚠️ Acceptable Outcome</strong></td>
              <td>$20K-$50K MRR<br/>No strong moat<br/>Breakeven/slight profit</td>
              <td>Maintain as lifestyle business (Pete + Mojo salary)<br/>OR<br/>Sell for $500K-$1M (2-3x revenue multiple)</td>
            </tr>
            <tr style={{ background: '#fff5f5' }}>
              <td><strong>❌ Bad Outcome</strong></td>
              <td>&lt;$20K MRR<br/>Unprofitable<br/>No growth trajectory</td>
              <td>Shut down by Month 36<br/>Do NOT operate as zombie startup for 5+ years<br/>Total loss: $3.6K + 3 years opportunity cost</td>
            </tr>
          </tbody>
        </table>

        <br/>
        <strong>Decision Framework: When to Pivot vs When to Shutdown</strong>
        <div style={{ fontSize: '0.9em', marginTop: '10px' }}>
          <p><strong>Pivot Conditions (Try Alternative Before Quitting):</strong></p>
          <ul>
            <li>Strong engagement metrics (10K+ MAU, 40%+ weekly active) BUT schools won't pay → Try B2C monetization (teacher premium services)</li>
            <li>Schools pay for Standard tier ($49) BUT won't upgrade to Premium → Pivot to volume strategy (1,000+ schools at $49)</li>
            <li>China regulatory issues BUT platform works → Geographic expansion to Korea/Japan/Thailand</li>
            <li>B2B model fails BUT have strong data asset (50K+ teacher reviews) → Sell to acquirer (Glassdoor, LinkedIn, AngelList)</li>
          </ul>

          <p style={{ marginTop: '15px' }}><strong>Shutdown Conditions (No Path Forward):</strong></p>
          <ul>
            <li>Stage 1: &lt;5K MAU after 9 months trying all acquisition tactics → Market doesn't want aggregation platform (Sunk: $900)</li>
            <li>Stage 2: &lt;10 paying schools after 18 months + B2C pivot also fails → No viable monetization path (Sunk: $1.8K)</li>
            <li>Stage 3: Revenue stuck below $20K/month after 36 months → Cannot sustain team, no exit value (Sunk: $3.6K)</li>
            <li>Cross-stage: Both founders burned out for 3+ months + no path to hiring help → Shut down for mental health</li>
            <li>Catastrophic: China bans all foreign teachers OR Dave's drops price to $0 (free posting) → Market/competitive dynamics changed permanently</li>
          </ul>

          <p style={{ marginTop: '15px' }}><strong>Key Principle:</strong> Set kill criteria BEFORE starting each stage. Commit to shutting down if criteria not met. Don't move goalposts every 6 months to justify continuing ("just 6 more months..."). This prevents zombie startup trap.</p>
        </div>

        <br/>
        <strong>Post-Mortem Planning (If Shutdown Occurs):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Data asset:</strong> If we've accumulated 20K+ teacher reviews + 500+ verified schools, offer dataset to acquirer (Indeed, Glassdoor, LinkedIn China). Potential recovery: $50K-$200K.</li>
          <li><strong>Open source:</strong> Release platform code on GitHub. Builds personal brand for Pete + Mojo, demonstrates execution ability for future ventures.</li>
          <li><strong>Lessons learned:</strong> Write detailed post-mortem (public blog post). Helps ESL teacher community understand why we failed, builds trust for future attempts.</li>
          <li><strong>Team transition:</strong> 3-month wind-down period. Notify schools/teachers, offer data export, recommend alternatives (Dave's ESL, SeriousTeachers), ensure graceful exit.</li>
          <li><strong>Financial:</strong> Calculate total investment (time + money), analyze ROI, determine tax write-offs. Accept sunk cost, don't chase losses.</li>
        </ul>
      </InfoBox>
    </Section>
  )
}
