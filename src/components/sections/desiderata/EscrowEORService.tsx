import InfoBox from '../../ui/InfoBox'

export default function EscrowEORService() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.7 Escrow & EOR (Employer of Record) Service</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Scam prevention) + Question #9 (Agent value proposition)<br/>
        <strong>Solves Pain Point:</strong> From 6,195 teacher posts, #1 complaint is contract fraud: \"School didn't pay last 2 months salary.\" \"Contract said 20K RMB, actually paid 12K.\" \"Visa sponsorship promised, never delivered.\" Teachers want financial protection and legal compliance.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>EOR market:</strong> Companies pay $400-800/employee/month for EOR services (Deel, Skuad, Papaya Global) to handle visa, payroll, taxes, compliance in China. Proves willingness to pay for de-risking employment.</li>
          <li><strong>Escrow in marketplaces:</strong> Upwork/Fiverr hold client funds in escrow until work is completed. Airbnb holds guest payment until check-in. Creates trust in two-sided marketplace.</li>
          <li><strong>Smart contracts (Web3 angle):</strong> Crypto-native contracts could automate salary release based on completion milestones (e.g., monthly employment confirmation from both parties).</li>
          <li><strong>Agent replacement:</strong> Agents charge 20-30% of first-year salary. Our escrow/EOR service offers similar protection (visa, payroll, contract enforcement) for 3-5% ongoing fee.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li><strong>Escrow service (Phase 1):</strong> School pays monthly salary to YouTeacher escrow account. We release to teacher after both parties confirm month completed. Take 3-5% transaction fee.</li>
          <li><strong>Contract templates:</strong> Provide standardized, legally vetted ESL employment contracts (China, Korea, Japan, etc.) that protect both parties.</li>
          <li><strong>Dispute resolution:</strong> If school or teacher disputes payment, we mediate based on contract terms and evidence (attendance records, performance reviews).</li>
          <li><strong>EOR service (Phase 2 - partner with existing EOR):</strong> Partner with Deel/Skuad to offer visa sponsorship, payroll, tax withholding for teachers. Schools pay us, we handle all compliance. Charge $200-300/teacher/month (cheaper than direct EOR, we negotiate volume discount).</li>
          <li><strong>Smart contract option (Phase 3 - if crypto adoption grows):</strong> Salary paid in stablecoin (USDC/USDT), auto-released monthly via smart contract. Transparent, immutable, no intermediary needed.</li>
        </ul>
        <strong>Revenue Model:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Escrow: 3-5% of monthly salary (e.g., $60-100/month on $2,000 salary)</li>
          <li>EOR service: $200-300/teacher/month (partner with existing EOR, take margin)</li>
          <li>Contract templates: Free for basic, $49 for lawyer-reviewed premium version</li>
        </ul>
        <strong>Why This is a Delighter:</strong> Solves the #1 teacher pain point (fraud/non-payment) in a way NO job board does. Creates defensible moat - network effects of trust, legal infrastructure competitors cannot easily replicate. Transforms us from \"job board\" to \"full-service teacher employment platform.\"
      </InfoBox>
    </div>
  )
}
