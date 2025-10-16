import InfoBox from '../../ui/InfoBox'

export default function SchoolVerificationSystem() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.6 School Verification System</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
        <strong>Solves Pain Point:</strong> From 6,195 teacher posts, top concern is "fake schools" and "contract fraud."
        Teachers report losing money to scam recruiters, arriving to find nonexistent jobs, and having contracts
        changed after arrival.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Company reviews and ratings created trust through transparency, enabling
          $8.1B valuation. Verification prevents fake employers from posting jobs.</li>
          <li><strong>Amazon Trust Flywheel:</strong> Seller verification + buyer reviews created self-reinforcing
          trust cycle. Schools must be verified before posting jobs.</li>
        </ul>
        <strong>Implementation:</strong> Multi-step verification process:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Business license verification (China: 营业执照, other countries: equivalent)</li>
          <li>Physical address verification</li>
          <li>School accreditation checks (where applicable)</li>
          <li>Verification badge displayed prominently on all job listings</li>
          <li>Only verified schools can post jobs (prevents scam postings)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
