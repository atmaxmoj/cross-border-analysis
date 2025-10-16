import InfoBox from '../../ui/InfoBox'

export default function TransparentListings() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.3 Transparent Job Listings</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
        <strong>Solves Pain Point:</strong> Teachers complain about "bait and switch"—salaries advertised online
        differ from actual contracts. "Listing said 20K RMB, contract offered 12K."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Salary transparency (crowdsourced salary data) built trust and traffic.
          Users valued knowing real compensation before applying.</li>
          <li><strong>Stack Overflow Jobs:</strong> Transparent salary ranges in job listings reduced application
          friction and increased match quality.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Require schools to post: Base salary, housing allowance, flight reimbursement, contract bonuses,
          working hours, class sizes</li>
          <li>Display salary in multiple currencies (RMB, USD, EUR) for international teachers</li>
          <li>Flag listings with incomplete information (penalize in search ranking)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
