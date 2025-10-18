import InfoBox from '../../../ui/InfoBox'

export default function B2BRecruiterService() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.5 B2B Data Service for Legitimate Recruiters</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #9 (Three-sided marketplace with agents)<br/>
        <strong>Solves Pain Point:</strong> Not all recruiters are scammers—some provide legitimate value (visa
        expertise, contract negotiation, cultural mediation). But teachers can't distinguish good from bad.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Liepin Headhunter Model:</strong> Three-sided marketplace (teachers + schools + recruiters)
          generated 96.5% revenue from business customers. Recruiters paid for access to verified candidate database.</li>
          <li><strong>Zillow:</strong> Worked WITH agents (not against them) via Premier Agent program. Agents paid
          for leads, Zillow monetized without alienating intermediaries.</li>
          <li><strong>Redfin:</strong> Failed by trying to eliminate agents. Hybrid approach (work with legitimate
          agents, eliminate bad ones) may be optimal.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Verified recruiter program: Recruiters must pass background checks, provide references, maintain high
          ratings from teachers</li>
          <li>Recruiters pay subscription fee for access to verified teacher profiles (like Liepin model)</li>
          <li>Teachers choose visibility: "Visible to schools only" or "Visible to schools + verified recruiters"</li>
          <li>Transparency: Teachers see recruiter ratings and reviews before engaging</li>
          <li>Revenue stream: Subscription fees from recruiters (answer Question #3: Monetization without charging teachers)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
