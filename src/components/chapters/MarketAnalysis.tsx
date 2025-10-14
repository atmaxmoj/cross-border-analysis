import Chapter from '../layout/Chapter'
import MarketSize from '../sections/marketAnalysis/MarketSize'
import PainPointsAnalysis from '../sections/marketAnalysis/PainPointsAnalysis'
import CompetitiveLandscape from '../sections/marketAnalysis/CompetitiveLandscape'
import Barriers from '../sections/marketAnalysis/Barriers'

export default function MarketAnalysis() {
  return (
    <Chapter id="market-analysis" title="3. Market Analysis">
      <MarketSize />
      <PainPointsAnalysis />
      <CompetitiveLandscape />
      <Barriers />
    </Chapter>
  )
}
