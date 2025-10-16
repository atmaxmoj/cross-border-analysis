import InfoBox from '../../ui/InfoBox'

export default function TransparentListings() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.3 Contact/Apply to Jobs</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #1 (Competing with incumbents)<br/>
        <strong>Solves Pain Point:</strong> Teachers need a way to express interest in jobs and contact schools.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Dave's ESL:</strong> Shows school email address or "reply to post" button. Basic but functional.</li>
          <li><strong>Craigslist:</strong> Email relay system works. No need for sophisticated features at MVP stage.</li>
        </ul>
        <strong>Implementation:</strong> Bare minimum:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Display school contact email on job listing</li>
          <li>Optional: Simple "Apply" button that opens email client pre-filled with job details</li>
          <li>Teachers send resume/cover letter via email (not in-platform)</li>
          <li>No application tracking, no in-platform messaging (add later)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
