import Section from '../../layout/Section'
import SolutionBox from '../../ui/SolutionBox'

export default function InitialHypothesis() {
  return (
    <Section id="initial-hypothesis" title="Initial Hypothesis">
      <SolutionBox>
        <div style={{ textAlign: 'center', lineHeight: '2.5' }}>
          <strong>Poor UX & outdated tech in ESL recruitment platforms</strong><br />
          <span style={{ fontSize: '1.5em', color: '#4caf50' }}>↓</span><br />
          Modern platform with better filtering & search = Market opportunity<br />
          <span style={{ fontSize: '1.5em', color: '#4caf50' }}>↓</span><br />
          Multiple revenue streams = Sustainable business<br />
          <span style={{ fontSize: '1.5em', color: '#4caf50' }}>↓</span><br />
          Global expansion path = Scale potential
        </div>
      </SolutionBox>
    </Section>
  )
}
