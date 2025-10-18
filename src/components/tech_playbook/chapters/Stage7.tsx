import Section from '../../layout/Section'

export default function Stage7() {
  return (
    <Section id="stage7-ai" title="Stage 7: AI Protection (Year 3-4)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Use AI to detect scam job postings and analyze teacher contracts.</strong> Solve Pain Points #1 (Scams) and #2 (Contract Terms) at scale.
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> C-Tier (Excitement) - AI features create wow factor and PR opportunities
        </p>
      </div>

      <h4>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a teacher, I want AI to flag suspicious job postings, so I avoid scams</li>
        <li>As a teacher, I want AI to review my contract, so I know if terms are unfair</li>
        <li>As Pete, I want AI to auto-flag scam patterns, so I prevent fraud at scale without hiring moderators</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR35: AI Scam Detection</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> ML model to detect scam job postings</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Train ML model on scam patterns: Unrealistic salary, vague location, urgency language ("hire immediately"), grammar errors</li>
          <li>Scam risk score: Low/Medium/High</li>
          <li>Auto-flag high-risk postings for manual review</li>
          <li>Display warning on job detail page: "Warning: This job may be a scam. Unrealistic salary detected."</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Detect 80%+ of known scam postings (test with historical Dave's ESL scams)</li>
          <li>False positive rate &lt;10% (don't flag legitimate jobs)</li>
        </ul>
        <p><strong>Build Time:</strong> 4 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR36: AI Contract Review</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> AI-powered contract analysis tool</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Teachers upload PDF contract</li>
          <li>OCR extraction (Tesseract or AWS Textract)</li>
          <li>Extract key terms: Salary, working hours, termination clauses, housing details, flight reimbursement</li>
          <li>Flag unfair clauses: "No termination clause", "Required to pay for broken contract", "Unrealistic working hours (60+/week)"</li>
          <li>Compare to market standards: "Salary 20% below market for this city"</li>
          <li>Generate risk score: Low/Medium/High</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Extract key terms with 90%+ accuracy</li>
          <li>Flag 5+ common unfair clauses</li>
        </ul>
        <p><strong>Build Time:</strong> 4 weeks</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>Target Metrics:</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Scam detection: Flag 100+ suspicious postings in first 6 months</li>
          <li>Contract review usage: 200+ contracts analyzed</li>
          <li>Teachers trust AI warnings: 70%+ avoid flagged jobs</li>
        </ul>
      </div>
    </Section>
  )
}
