import Chapter from '../layout/Chapter'
import AppendixAComparison from '../sections/appendix/AppendixAComparison'
import AppendixBVerification from '../sections/appendix/AppendixBVerification'
import AppendixCCandidateVerification from '../sections/appendix/AppendixCCandidateVerification'
import AppendixDCompetitors from '../sections/appendix/AppendixDCompetitors'
import AppendixEFeatureList from '../sections/appendix/AppendixEFeatureList'
import AppendixFScrapingLegal from '../sections/appendix/AppendixFScrapingLegal'

export default function Appendix() {
  return (
    <Chapter id="appendix" title="Appendix">
      <AppendixAComparison />
      <AppendixBVerification />
      <AppendixCCandidateVerification />
      <AppendixDCompetitors />
      <AppendixEFeatureList />
      <AppendixFScrapingLegal />
      <div className="section-divider"></div>
    </Chapter>
  )
}
