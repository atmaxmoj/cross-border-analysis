import InfoBox from '../../../ui/InfoBox'

export default function RegionalChampion() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.3 Regional Champion Program</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #10 (Asia expansion strategy - depth vs breadth)<br/>
        <strong>Solves Pain Point:</strong> Each Asian country has unique regulations (visa, work permits, tax).
        Teachers need local expertise: "How do I get a work visa in Thailand?" "What's the tax situation for
        foreigners in Vietnam?"<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Seek Regional Champion:</strong> Dominated Australia/NZ first, then expanded to Asia with
          local partnerships. Depth-first strategy (master one region) before breadth.</li>
          <li><strong>Boss Zhipin:</strong> China-only focus until complete market dominance (28.7M MAU). LinkedIn
          China failed due to lack of localization.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Start with China (54% of Asia's ESL jobs): Build comprehensive guides for visa, work permits, taxes,
          city-specific info</li>
          <li>Recruit "Regional Champions": Experienced teachers in each city (Beijing, Shanghai, Guangzhou, Chengdu,
          etc.) who answer questions, write guides, moderate forums</li>
          <li>Compensate champions: Free premium features, revenue share from teacher referrals, or small stipend</li>
          <li>Expand to other markets (Vietnam, Thailand, Korea, Japan) only after China dominance established</li>
        </ul>
      </InfoBox>
    </div>
  )
}
