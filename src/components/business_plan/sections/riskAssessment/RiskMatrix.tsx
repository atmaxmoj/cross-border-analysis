import Section from '../../../layout/Section'

export default function RiskMatrix() {
  return (
    <Section id="risk-matrix" title="Risk Matrix by Stage">
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '15px' }}>
        Risks organized by business model stage (Chapter 7). Impact quantified using revenue projections.
        Each risk references specific Desiderata features (Chapter 6).
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Risk</th>
            <th>Impact</th>
            <th>Probability</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#fff5f5' }}>
            <td rowSpan={2}><strong>Stage 1</strong><br/>(Months 1-6)</td>
            <td>Aggregation sources block scraping</td>
            <td>🔴 Critical<br/>No traffic = No business</td>
            <td>🟡 Medium (30%)</td>
            <td>A.1</td>
          </tr>
          <tr style={{ background: '#fff5f5' }}>
            <td>Fail to reach 10K MAU traffic target</td>
            <td>🔴 Critical<br/>Can't monetize in Stage 2</td>
            <td>🟡 Medium (40%)</td>
            <td>A.1-A.3</td>
          </tr>

          <tr style={{ background: '#fffaf0' }}>
            <td rowSpan={3}><strong>Stage 2</strong><br/>(Months 7-18)</td>
            <td>Schools don't pay for direct posting</td>
            <td>🔴 Critical<br/>$0 revenue = pivot or shutdown</td>
            <td>🟡 Medium (35%)</td>
            <td>A.4</td>
          </tr>
          <tr style={{ background: '#fffaf0' }}>
            <td>Dave's ESL matches our pricing</td>
            <td>🟡 High<br/>Lose cost advantage</td>
            <td>🟢 Low (15%)</td>
            <td>A.4</td>
          </tr>
          <tr style={{ background: '#fffaf0' }}>
            <td>Seasonal hiring volatility (60-70% drops)</td>
            <td>🟡 High<br/>Cash flow unpredictable</td>
            <td>🔴 High (70%)</td>
            <td>A.4</td>
          </tr>

          <tr style={{ background: '#fef3c7' }}>
            <td rowSpan={3}><strong>Stage 3</strong><br/>(Months 19-36)</td>
            <td>Schools don't upgrade to Premium tier</td>
            <td>🟡 High<br/>Revenue stuck at $15K/mo</td>
            <td>🟡 Medium (30%)</td>
            <td>B.6-B.9</td>
          </tr>
          <tr style={{ background: '#fef3c7' }}>
            <td>Verification system liability lawsuit</td>
            <td>🔴 Critical<br/>$500K-$1M+ legal costs</td>
            <td>🟢 Low (10%)</td>
            <td>B.6</td>
          </tr>
          <tr style={{ background: '#fef3c7' }}>
            <td>Verification data quality degrades at scale</td>
            <td>🟡 High<br/>Badge loses credibility</td>
            <td>🟡 Medium (25%)</td>
            <td>B.6</td>
          </tr>

          <tr style={{ background: '#f0fff4' }}>
            <td rowSpan={2}><strong>Stage 4</strong><br/>(Year 3+)</td>
            <td>Excitement features don't gain traction</td>
            <td>🟡 High<br/>No moat = copycat vulnerability</td>
            <td>🟡 Medium (40%)</td>
            <td>C.1-C.8</td>
          </tr>
          <tr style={{ background: '#f0fff4' }}>
            <td>Competitors copy verification + community</td>
            <td>🟡 High<br/>Moat erodes, pricing pressure</td>
            <td>🟡 Medium (50%)</td>
            <td>B.6, C.6</td>
          </tr>

          <tr style={{ background: '#ebf8ff' }}>
            <td rowSpan={4}><strong>Cross-Stage</strong><br/>(All periods)</td>
            <td>Founder bandwidth & burnout</td>
            <td>🔴 Critical<br/>Project shutdown</td>
            <td>🟡 Medium (35%)</td>
            <td>All</td>
          </tr>
          <tr style={{ background: '#ebf8ff' }}>
            <td>China regulatory crackdown (2021 repeat)</td>
            <td>🔴 Critical<br/>Market vanishes overnight</td>
            <td>🟢 Low (5%)</td>
            <td>All</td>
          </tr>
          <tr style={{ background: '#ebf8ff' }}>
            <td>Payment processing challenges (Alipay/WeChat)</td>
            <td>🟡 High<br/>Lose 40-60% potential customers</td>
            <td>🟡 Medium (30%)</td>
            <td>A.4, A.5</td>
          </tr>
          <tr style={{ background: '#ebf8ff' }}>
            <td>Key dependency risk (Pete unavailable)</td>
            <td>🟡 High<br/>Operations halt</td>
            <td>🟢 Low (15%)</td>
            <td>B.6, all ops</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '20px', padding: '15px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '8px', border: '2px solid #f59e0b' }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>📊 Risk Profile Summary</h4>
        <ul style={{ fontSize: '0.9em', color: '#78350f', lineHeight: '1.8' }}>
          <li><strong>Highest Impact Risks:</strong> Stage 1 aggregation blocked, Stage 2 monetization fails, Founder burnout (all business-ending)</li>
          <li><strong>Highest Probability Risks:</strong> Seasonal volatility (70%), Competitors copy (50%), Traffic target miss (40%)</li>
          <li><strong>Most Mitigable:</strong> Verification liability (insurance + disclaimers), Payment processing (Ping++ integration), Regulatory (geographic diversification)</li>
          <li><strong>Least Mitigable:</strong> Dave's ESL pricing response (limited control), Founder bandwidth (2-person team reality), Market seasonality (industry structure)</li>
        </ul>
      </div>
    </Section>
  )
}
