import InfoBox from '../../../ui/InfoBox'

export default function SchoolVerification() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.4 Job Posting System (Direct Posting on Our Platform)</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #2 (Chicken & egg problem - transition from aggregator to direct platform)<br/>
        <strong>Solves Pain Point:</strong> After we have teacher traffic from aggregation (A.1), schools need a way to post jobs DIRECTLY on YouTeacher instead of Dave's ESL.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed:</strong> Started as aggregator (2004), then added direct job posting when they had traffic. Schools preferred posting on Indeed because their traffic was higher quality than competitors.</li>
          <li><strong>Boss Zhipin:</strong> Basic job posting infrastructure enabled employers to bypass recruiters once platform had user base.</li>
        </ul>
        <strong>Implementation:</strong> Absolute minimum:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Schools create account and post job listings DIRECTLY on YouTeacher</li>
          <li>Job form includes: Title, location, salary, description, contact email</li>
          <li>Direct jobs appear in public listing feed ALONGSIDE aggregated jobs (A.1)</li>
          <li>No paywall - free to post (monetize later)</li>
          <li><strong>Critical difference from A.1:</strong> Teachers apply on OUR platform, not redirected to other sites</li>
        </ul>
        <strong>Why This Comes After A.1:</strong> We need teacher traffic FIRST (from aggregation) before schools will post directly. Once we have traffic, direct posting becomes attractive to schools.
      </InfoBox>
    </div>
  )
}
