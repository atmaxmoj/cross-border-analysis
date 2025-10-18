import InfoBox from '../../../ui/InfoBox'

export default function DataInsights() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.5 Data-Driven School Insights & Purchasing Power Calculator</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #5 (Data flywheel acceleration)<br/>
        <strong>Solves Pain Point:</strong> Teachers want objective data: "What's the average salary for international
        schools in Shanghai?" "How many teachers at this school are on their second contract?"
        <strong>CRITICAL for international hiring:</strong> "Is 15,000 RMB/month in Chengdu better than 20,000 RMB/month in Shanghai?"
        Raw salary numbers are meaningless without purchasing power context. No platform provides this.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Zillow Data-First:</strong> Zestimate (home value algorithm) attracted 36M MAU. Data created
          unique value that traditional platforms couldn't replicate. Schools need equivalent transparency.</li>
          <li><strong>Glassdoor:</strong> Salary data and CEO approval ratings provided unique insights, driving traffic
          and building moat.</li>
          <li><strong>Numbeo / Expatistan:</strong> Cost-of-living comparison sites prove purchasing power context is essential
          for international workers. Teachers relocating to China/Korea/Japan need this to make informed decisions.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li><strong>Salary Transparency:</strong> School profile pages show: Average salary (aggregated from reviews),
          contract renewal rate (% of teachers who renew), average review rating, response time to applications,
          number of open positions (trend)</li>
          <li><strong>Purchasing Power Calculator (NEW):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Convert salary to USD equivalent purchasing power by city tier</li>
              <li>Example: "15,000 RMB/month in Shanghai (Tier-1) = $2,100 USD nominal, $1,400 USD purchasing power"</li>
              <li>Example: "12,000 RMB/month in Chengdu (Tier-3) = $1,680 USD nominal, <strong>$2,500 USD purchasing power</strong> (better lifestyle!)"</li>
              <li>Cost-of-living breakdown: Rent (1-bedroom apartment), food, transportation, entertainment by city tier</li>
              <li>Visual comparison tool: "Your life in Shanghai vs Chengdu vs Hangzhou vs Bangkok vs Seoul"</li>
              <li>Data sources: Numbeo API for cost-of-living indices, aggregated teacher expense data from reviews</li>
            </ul>
          </li>
          <li><strong>Market insights:</strong> Salary heatmaps by city and school type, visa processing time averages, hiring season trends</li>
          <li><strong>Data flywheel:</strong> More teachers = more reviews + expense data = better purchasing power estimates =
          more teachers attracted to platform</li>
        </ul>
        <strong>Why This Matters:</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          For Americans, 15,000 RMB/month (~$2,100) sounds like poverty. But in a tier-3 Chinese city, it's equivalent to
          $2,500+ USD purchasing power—comfortable middle-class lifestyle with savings. Without this context, teachers
          reject good opportunities or accept bad ones. Purchasing power calculator makes salary data actionable for
          international hiring decisions.
        </p>
      </InfoBox>
    </div>
  )
}
