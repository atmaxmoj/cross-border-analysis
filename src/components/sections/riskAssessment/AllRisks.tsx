import RiskMatrix from './RiskMatrix'
import Stage1Risks from './Stage1Risks'
import Stage2Risks from './Stage2Risks'
import Stage3Risks from './Stage3Risks'
import Stage4Risks from './Stage4Risks'
import CrossStageRisks from './CrossStageRisks'
import RiskSummary from './RiskSummary'

export default function AllRisks() {
  return (
    <>
      <p>
        This risk assessment is organized by <strong>Business Model stages</strong> (Chapter 7) and tied to specific
        <strong> Desiderata features</strong> (Chapter 6). Each risk is evidence-based, referencing pain points,
        contradictions, and barriers identified in our market analysis.
      </p>

      <RiskMatrix />
      <Stage1Risks />
      <Stage2Risks />
      <Stage3Risks />
      <Stage4Risks />
      <CrossStageRisks />
      <RiskSummary />
    </>
  )
}
