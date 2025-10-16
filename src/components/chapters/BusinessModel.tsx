import Chapter from '../layout/Chapter'
import Section from '../layout/Section'
import InfoBox from '../ui/InfoBox'
import Stage1TrafficAcquisition from '../sections/businessModel/Stage1TrafficAcquisition'
import Stage2MonetizationStart from '../sections/businessModel/Stage2MonetizationStart'
import Stage3Differentiation from '../sections/businessModel/Stage3Differentiation'
import Stage4MoatBuilding from '../sections/businessModel/Stage4MoatBuilding'
import BusinessModelSummary from '../sections/businessModel/BusinessModelSummary'

export default function BusinessModel() {
  return (
    <Chapter id="business-model" title="7. Business Model: Staged Revenue Growth">
      <p>
        This chapter outlines our revenue strategy aligned with product features (Desiderata). We progress through 4 stages:
        (1) Traffic Acquisition via aggregation [Months 1-6, $0 revenue], (2) Monetization Start via direct posting [Months 7-18, $5K-$15K/mo],
        (3) Differentiation via premium features [Months 19-36, $37K/mo], and (4) Moat Building via excitement features [Year 3+, $74K/mo].
      </p>
      <p>
        <strong>Core Strategy:</strong> Don't monetize too early. Build teacher traffic first via aggregation (like Indeed 2004-2007),
        THEN charge schools to reach that audience. Each stage builds on the previous: traffic → monetization → premium tiers → multiple revenue streams.
      </p>

      <Section id="stage-1-traffic" title="Stage 1: Traffic Acquisition">
        <Stage1TrafficAcquisition />
      </Section>

      <Section id="stage-2-monetization" title="Stage 2: Monetization Start">
        <Stage2MonetizationStart />
      </Section>

      <Section id="stage-3-differentiation" title="Stage 3: Differentiation">
        <Stage3Differentiation />
      </Section>

      <Section id="stage-4-moat" title="Stage 4: Moat Building">
        <Stage4MoatBuilding />
      </Section>

      <Section id="business-model-summary" title="Summary & Projections">
        <BusinessModelSummary />
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
