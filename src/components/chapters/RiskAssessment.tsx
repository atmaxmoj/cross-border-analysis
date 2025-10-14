import Chapter from '../layout/Chapter'
import AllRisks from '../sections/riskAssessment/AllRisks'

export default function RiskAssessment() {
  return (
    <Chapter id="risks" title="6. Risk Assessment">
      <AllRisks />
      <div className="section-divider"></div>
    </Chapter>
  )
}
