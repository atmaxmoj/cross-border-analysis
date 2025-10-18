import InfoBox from '../../../ui/InfoBox'

export default function ContractReview() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.2 Contract Review &amp; Comparison Tool</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
        <strong>Solves Pain Point:</strong> Teachers report: "I didn't understand the contract, turns out I couldn't
        leave for 2 years." "My contract had a clause where they could dock my pay for any reason."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Transparency in contracts (via reviews mentioning contract terms) helped
          teachers make informed decisions.</li>
          <li><strong>Expert Verification:</strong> Providing tools that help users evaluate offers builds trust and
          increases platform stickiness.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Contract upload &amp; parsing: OCR + NLP extracts key terms (salary, working hours, termination clauses,
          penalties, bonuses)</li>
          <li>Red flag detection: Highlight concerning clauses (e.g., "employer can terminate without notice," "teacher
          must pay for flight if leaving early")</li>
          <li>Comparison tool: Upload multiple contract offers, see side-by-side comparison of terms</li>
          <li>Community wisdom: "85% of teachers found this clause problematic" (crowdsourced contract analysis)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
