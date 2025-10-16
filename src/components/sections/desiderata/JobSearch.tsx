import InfoBox from '../../ui/InfoBox'

export default function JobSearch() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.2 Job Search &amp; Filtering</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #7 (SEO vs community-first growth)<br/>
        <strong>Solves Pain Point:</strong> Teachers report Dave's ESL has poor search functionality, no filtering
        by location/salary/visa support. "I have to scroll through hundreds of irrelevant jobs."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed Aggregation Model:</strong> Won by making job discovery easy—search, filter, save jobs.
          Basic functionality but executed better than competitors.</li>
          <li><strong>Boss Zhipin:</strong> AI-powered recommendation algorithm made job discovery effortless,
          contributing to 28 min/day engagement (vs competitors' 18 min/day).</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Advanced filters: Location, salary range, school type (training center vs international school),
          visa sponsorship, contract length, housing provided</li>
          <li>Save searches, receive alerts for new matching jobs</li>
          <li>Mobile-first design (majority of teachers search on phones)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
