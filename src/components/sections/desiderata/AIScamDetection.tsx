import InfoBox from '../../ui/InfoBox'

export default function AIScamDetection() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.1 AI-Powered Scam Detection</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
        <strong>Solves Pain Point:</strong> Even with verification, some scams slip through. Teachers report: "Job seemed
        legit until I arrived and found no school." "Contract had hidden clauses in Chinese I didn't understand."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Amazon Trust Flywheel:</strong> Fraud detection algorithms (seller verification, review
          authenticity checks) maintained trust at scale. Schools need similar protection.</li>
          <li><strong>Platform Discrimination:</strong> Proactive moderation prevents low-quality actors from degrading
          platform trust.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>ML model trained on scam patterns: Unrealistic salaries, vague job descriptions, pressure tactics
          ("apply now or lose the job"), schools with zero reviews and multiple job postings</li>
          <li>Flag suspicious listings for manual review before going live</li>
          <li>Teacher-side warnings: "This job listing has characteristics similar to reported scams. Proceed with caution."</li>
          <li>Continuous learning: As teachers report scams, model improves</li>
        </ul>
      </InfoBox>
    </div>
  )
}
