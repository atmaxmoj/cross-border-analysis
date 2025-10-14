import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function Discovery3() {
  return (
    <Section id="discovery-3" title="Discovery #3: Schools Will Pay for Access to Teacher Traffic">
      <p><strong>What prompted this investigation:</strong> Understanding trust and verification is important, but a platform needs revenue to survive. The natural next step was examining competitors' business models to validate whether schools actually pay for teacher access, and if so, how much and under what models.</p>

      <h4>Evidence A: Job Board Subscription Models</h4>
      <ul>
        <li><strong><a href="https://www.eslcafe.com/joblist/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a>:</strong> Charges $75+ per post for 30-day listings, bulk discounts available, 350K monthly visitors</li>
        <li><strong>SeriousTeachers.org:</strong> Pricing ranges from $49 (1 week) to $540 (featured ad for 1 month), plus premium features like resume searches</li>
        <li><strong><a href="https://www.tefl.com/" target="_blank" rel="noopener noreferrer">TEFL.com</a>:</strong> Charges schools for job postings (pricing not publicly disclosed)</li>
        <li><strong><a href="https://www.eslboards.com/" target="_blank" rel="noopener noreferrer">ESLBoards.com</a>:</strong> Offers free posting (competing on free model, suggesting others charge)</li>
      </ul>

      <h4>Evidence B: Recruitment Platform Subscription Services</h4>
      <InfoBox>
        <strong>Teach Away Business Model:</strong><br />
        <div className="tree-structure">{`├── Academic Year Subscription (flat-fee unlimited recruitment)
├── Per-hire fee model (pay only for teachers actually hired)
├── Access to 750,000+ educator database
└── Schools willing to pay for verified, qualified teacher access`}</div>
      </InfoBox>

      <h4>Market Validation:</h4>
      <p>Dave's ESL Cafe has operated profitably for 30 years on school subscription revenue alone. This proves schools will pay for teacher access, even on a terrible platform. A modern platform with verification could charge premium pricing.</p>
    </Section>
  )
}
