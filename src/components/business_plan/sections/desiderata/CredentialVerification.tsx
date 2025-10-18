import InfoBox from '../../../ui/InfoBox'

export default function CredentialVerification() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.2 Credential Verification for Teachers</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
        <strong>Solves Pain Point:</strong> Schools complain about fake credentials. Teachers complain about tedious
        re-submission of documents to every school. "I've uploaded my degree 20 times to different platforms."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Verified employees (company email verification) could post reviews,
          building trust in content authenticity.</li>
          <li><strong>Expert Verification (concept from research):</strong> Platforms that verify professionals
          (e.g., LinkedIn verification, Upwork skills tests) reduce fraud and increase match quality.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Upload once: Degree, TEFL/TESOL certificate, passport, background check, teaching license (if applicable)</li>
          <li>Admin review + verification badge on teacher profile</li>
          <li>Schools can see verified credentials without teachers re-uploading for every application</li>
          <li>Optional: Teachers can choose which credentials to show publicly vs only to schools they apply to (privacy control)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
