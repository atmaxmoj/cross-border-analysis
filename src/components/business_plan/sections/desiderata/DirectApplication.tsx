import InfoBox from '../../../ui/InfoBox'

export default function DirectApplication() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.5 Basic User Accounts</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #1 (Competing with incumbents)<br/>
        <strong>Solves Pain Point:</strong> Schools need to manage their job postings. Future features (reviews, messaging) require user identity.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>All job boards:</strong> Account system is table stakes for managing content and building platform features.</li>
          <li><strong>Stack Overflow:</strong> Reputation system requires user accounts. Community features need identity.</li>
        </ul>
        <strong>Implementation:</strong> Bare minimum:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Schools create account with email + password</li>
          <li>Teachers can browse without account (increase accessibility)</li>
          <li>Schools can edit/delete their own job postings</li>
          <li>Simple authentication (no OAuth, no 2FA at MVP)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
