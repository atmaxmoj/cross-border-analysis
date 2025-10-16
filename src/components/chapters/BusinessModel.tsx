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
        This chapter outlines our revenue strategy aligned with product features (Desiderata). We progress through 4 stages over 4 years:
        (1) Traffic Acquisition [Months 1-6], (2) Monetization Start [Months 7-18], (3) Differentiation [Months 19-36],
        (4) Moat Building + Expansion [Year 3-4].
      </p>
      <p>
        <strong>Core Strategy:</strong> Don't monetize too early. Build teacher traffic first via aggregation (like Indeed 2004-2007),
        THEN charge schools to reach that audience. <strong>Critical insight:</strong> ESL teaching alone cannot sustain $1M+ ARR
        (ceiling = $700K-$900K). Stage 4 combines excitement features (moat building) WITH market expansion—vertical first (all foreign jobs
        in China Year 3 Q3-Q4, 11x market), then horizontal (teaching in Korea/Japan Year 4, 2-3x per country). This reaches <strong>$1.25M ARR by end of Year 4</strong>.
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

      <Section id="stage-4-moat" title="Stage 4: Moat Building + Expansion">
        <Stage4MoatBuilding />
      </Section>

      <Section id="business-model-summary" title="Summary & Projections">
        <BusinessModelSummary />
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
