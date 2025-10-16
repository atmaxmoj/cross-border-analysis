
import Chapter from '../layout/Chapter'
import GlassdoorPlaybook from '../sections/solutionToolkit/GlassdoorPlaybook'
import MarketplaceColdStarts from '../sections/solutionToolkit/MarketplaceColdStarts'
import SeekRegionalChampion from '../sections/solutionToolkit/SeekRegionalChampion'
import PlatformDiscrimination from '../sections/solutionToolkit/PlatformDiscrimination'
import ZillowDataFirst from '../sections/solutionToolkit/ZillowDataFirst'
import ExpertVerification from '../sections/solutionToolkit/ExpertVerification'
import AmazonTrustFlywheel from '../sections/solutionToolkit/AmazonTrustFlywheel'
import IndeedAggregationModel from '../sections/solutionToolkit/IndeedAggregationModel'
import EslInternalCases from '../sections/solutionToolkit/EslInternalCases'

export default function SolutionToolkit() {
  return (
    <Chapter id="solution-toolkit" title="5. A Toolkit of Analogues and Case Studies">
      <p>
        This chapter gathers in-depth studies of analogous companies and specific case studies from our market research.
        Each study provides multi-faceted lessons that can inform our answers to several of the strategic questions simultaneously.
      </p>

      <GlassdoorPlaybook />
      <MarketplaceColdStarts />
      <SeekRegionalChampion />
      <PlatformDiscrimination />
      <ZillowDataFirst />
      <ExpertVerification />
      <AmazonTrustFlywheel />
      <IndeedAggregationModel />
      <EslInternalCases />

      <div className="section-divider"></div>
    </Chapter>
  )
}

