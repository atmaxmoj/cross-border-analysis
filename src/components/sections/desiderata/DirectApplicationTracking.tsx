import InfoBox from '../../ui/InfoBox'

export default function DirectApplicationTracking() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.9 Direct Application &amp; Tracking System</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #9 (Role of recruitment agents)<br/>
        <strong>Solves Pain Point:</strong> Teachers report agent fraud: "Agent disappeared after I paid placement
        fee." "Agent took my documents and I never heard back." Teachers want to apply directly to schools AND
        track their application status.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Boss Zhipin:</strong> "Talk to the boss directly" eliminated HR/agent intermediaries for
          mid-level hiring. Became China's #1 platform by MAU with direct chat model.</li>
          <li><strong>Redfin Lesson:</strong> While Redfin failed to eliminate agents in real estate (high-stakes,
          unique transactions), ESL teaching jobs are more standardized—teachers WANT to bypass agents due to fraud.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>One-click apply with saved resume/credentials (stored in teacher profile)</li>
          <li>Track application status: submitted, reviewed, interview scheduled, offer, rejected</li>
          <li>In-platform messaging between teachers and schools (no need to share personal contact immediately)</li>
          <li>Application history: Teachers see all past applications and their status</li>
        </ul>
      </InfoBox>
    </div>
  )
}
