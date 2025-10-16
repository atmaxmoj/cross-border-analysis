import InfoBox from '../../ui/InfoBox'

export default function DataInsights() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.5 Data-Driven School Insights</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #5 (Data flywheel acceleration)<br/>
        <strong>Solves Pain Point:</strong> Teachers want objective data: "What's the average salary for international
        schools in Shanghai?" "How many teachers at this school are on their second contract?" No platform provides this.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Zillow Data-First:</strong> Zestimate (home value algorithm) attracted 36M MAU. Data created
          unique value that traditional platforms couldn't replicate. Schools need equivalent transparency.</li>
          <li><strong>Glassdoor:</strong> Salary data and CEO approval ratings provided unique insights, driving traffic
          and building moat.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>School profile pages show: Average salary (aggregated from reviews), contract renewal rate (% of teachers
          who renew), average review rating, response time to applications, number of open positions (trend)</li>
          <li>Market insights: Salary heatmaps by city and school type, visa processing time averages, hiring season trends</li>
          <li>Data flywheel: More teachers = more reviews = better data = more teachers attracted to platform</li>
        </ul>
      </InfoBox>
    </div>
  )
}
