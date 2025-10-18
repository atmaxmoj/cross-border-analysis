import Chapter from '../../layout/Chapter'
import OverviewMatrix from '../sections/contradictions/OverviewMatrix'
import AllContradictions from '../sections/contradictions/AllContradictions'

export default function Contradictions() {
  return (
    <Chapter id="contradictions" title="4. Seven Critical Contradictions">
      <p>Through critical analysis of Pete's original plan, we identified seven fundamental contradictions between stated goals and proposed methods. Each contradiction represents a strategic misalignment that must be resolved before launch.</p>

      <OverviewMatrix />
      <AllContradictions />

      <div className="section-divider"></div>
    </Chapter>
  )
}
