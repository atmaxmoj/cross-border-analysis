import InfoBox from '../../ui/InfoBox'

export default function BusinessModelSummary() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Summary: From $0 to $887K+ ARR</h4>
      <InfoBox>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', margin: '10px 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#2d3748', color: 'white' }}>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #cbd5e0' }}>Stage</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #cbd5e0' }}>Timeline</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #cbd5e0' }}>Key Features</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #cbd5e0' }}>Revenue</th>
                <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #cbd5e0' }}>How We Get Users/Clients</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f7fafc' }}>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}><strong>1. Traffic</strong></td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Months 1-6</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>A.1-A.3 (Aggregator)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>$0</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>SEO, better UX than Dave's ESL, email capture</td>
              </tr>
              <tr style={{ backgroundColor: '#ebf8ff' }}>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}><strong>2. Monetization</strong></td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Months 7-18</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>A.4-A.5 (Direct posting)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>$5K-$15K/mo</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Outbound to schools on Dave's ESL, undercut pricing 35%</td>
              </tr>
              <tr style={{ backgroundColor: '#f0fff4' }}>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}><strong>3. Differentiation</strong></td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Months 19-36</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>B.1-B.9 (Performance features)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>$37K/mo ($444K/yr)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Upsell verification/premium, reviews build trust</td>
              </tr>
              <tr style={{ backgroundColor: '#fef5e7' }}>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}><strong>4. Moat</strong></td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Year 3+</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>C.1-C.7 (Excitement features)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>$74K/mo ($887K/yr)</td>
                <td style={{ padding: '10px', border: '1px solid #cbd5e0' }}>Recruiter marketplace, AI tools, meetups, escrow/EOR, sponsors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong>Key Strategic Insights:</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Don't monetize too early:</strong> Stage 1 is intentionally $0 revenue. Need teacher traffic FIRST via aggregation, THEN schools will pay to reach that audience.</li>
            <li><strong>Pricing leverage:</strong> Dave's ESL charges $75/post with terrible UX. We charge $49 with modern UX = easy switch decision for schools.</li>
            <li><strong>Freemium upsell:</strong> Free tier (1 post/month) → Standard ($49) → Premium ($149). 30% premium conversion target based on verified schools getting 3x more applications.</li>
            <li><strong>Multiple revenue streams by Year 3:</strong> Job postings (50%), meetups (14%), escrow/EOR (12%), recruiters (9%), sponsors (10%), other (5%). Diversification = resilience.</li>
            <li><strong>Network effects kick in Stage 3-4:</strong> More teachers → more reviews → more schools trust platform → more jobs → more teachers. Self-reinforcing cycle.</li>
            <li><strong>Moat features (C.6, C.7) create lock-in:</strong> Teachers attending weekly meetups + using escrow service = deeply engaged community. Competitors cannot copy relationships built over years.</li>
          </ul>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fef5e7', border: '1px solid #ecc94b' }}>
          <strong>Reality Check - Conservative Assumptions:</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Stage 2 conversion:</strong> 10% of Dave's ESL schools switch (500 schools × 10% = 50 schools). Industry benchmark: 5-15% for competitive switches.</li>
            <li><strong>Stage 3 premium conversion:</strong> 30% upgrade to Premium (vs 2-5% typical freemium). Justified because verified badge = 3x more applications.</li>
            <li><strong>Stage 4 meetup attendance:</strong> 200 attendees/week across 10 cities (20 people/city/week). Timeleft has 25,000/week globally - we target 1% of their scale initially.</li>
            <li><strong>Churn rate:</strong> Assuming 40% annual churn due to seasonal hiring. Schools post during hiring seasons only (Feb-March, July-Sept), not year-round.</li>
          </ul>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0fff4', border: '1px solid #68d391' }}>
          <strong>Path to $1M+ ARR (Year 4):</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li>Expand to Southeast Asia (Vietnam, Thailand, Philippines): +30% schools, +$150K/year</li>
            <li>Increase meetup cities from 10 to 20: +$60K/year</li>
            <li>Scale escrow/EOR to 100 teachers: +$150K/year</li>
            <li>Partner with TEFL certification providers for co-marketing: +$50K/year</li>
            <li><strong>Total Year 4 projection: $1.3M ARR</strong></li>
          </ul>
        </div>
      </InfoBox>
    </div>
  )
}
