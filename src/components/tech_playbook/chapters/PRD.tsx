import Chapter from '../../layout/Chapter'
import InfoBox from '../../ui/InfoBox'

// Import all stage components
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'
import Stage5 from './Stage5'
import Stage6 from './Stage6'
import Stage7 from './Stage7'
import Stage8 from './Stage8'

export default function PRD() {
  return (
    <Chapter id="overview" title="1. Product Requirements Document (PRD)">
      <InfoBox>
        <strong>Document Purpose</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em' }}>
          This PRD translates the business plan's Desiderata (Chapter 6) into concrete technical requirements organized by strategic stages.
          Each stage has ONE clear strategic goal. Features are derived from evidence (6,195 teacher posts, case studies of $1.8B-$15B companies).
        </p>
        <p style={{ margin: '10px 0', fontSize: '0.85em', fontStyle: 'italic' }}>
          <strong>Sources:</strong> All metrics from Business Model Chapter 7, personas from pain point analysis (Market Analysis Chapter 3),
          features from Desiderata Chapter 6.
        </p>
      </InfoBox>

      <Stage1 />
      <Stage2 />
      <Stage3 />
      <Stage4 />
      <Stage5 />
      <Stage6 />
      <Stage7 />
      <Stage8 />
    </Chapter>
  )
}
