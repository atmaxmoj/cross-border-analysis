import Chapter from '../layout/Chapter'
import TheSpark from '../sections/projectGenesis/TheSpark'
import InitialHypothesis from '../sections/projectGenesis/InitialHypothesis'
import OriginalModel from '../sections/projectGenesis/OriginalModel'

export default function ProjectGenesis() {
  return (
    <Chapter id="project-genesis" title="1. Project Genesis">
      <TheSpark />
      <InitialHypothesis />
      <OriginalModel />
      <div className="section-divider"></div>
    </Chapter>
  )
}
