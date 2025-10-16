import InfoBox from '../../ui/InfoBox'

export default function RealTimeChat() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.4 Real-Time Chat Between Teachers &amp; Schools</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #1 (Beating incumbents), Question #9 (Agent disintermediation)<br/>
        <strong>Solves Pain Point:</strong> Teachers report slow response times on Dave's ESL: "I emailed a school
        2 weeks ago, no reply." Teachers want instant communication to gauge school responsiveness and seriousness.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Boss Zhipin:</strong> Direct instant messaging between job seekers and hiring managers drove
          50%+ higher engagement (28 min/day vs 18 min/day). Real-time chat eliminates email lag and builds rapport.</li>
          <li><strong>Marketplace Cold Start:</strong> Direct communication reduces friction and speeds up matching,
          helping overcome chicken-and-egg problem.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>In-platform messaging (like Boss Zhipin): Teachers and schools can chat in real-time after teacher applies or school shows interest</li>
          <li>Mobile push notifications for new messages</li>
          <li>Schools can initiate chat if they find a teacher profile interesting (proactive recruiting)</li>
          <li>Message templates for common questions (salary, visa, housing) to speed up conversations</li>
        </ul>
      </InfoBox>
    </div>
  )
}
