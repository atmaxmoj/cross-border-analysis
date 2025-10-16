import Chapter from '../layout/Chapter'
import AppendixAComparison from '../sections/appendix/AppendixAComparison'
import AppendixBVerification from '../sections/appendix/AppendixBVerification'
import AppendixCCandidateVerification from '../sections/appendix/AppendixCCandidateVerification'
import AppendixDCompetitors from '../sections/appendix/AppendixDCompetitors'

export default function Appendix() {
  return (
    <Chapter id="appendix" title="Appendix">
      <AppendixAComparison />
      <AppendixBVerification />
      <AppendixCCandidateVerification />
      <AppendixDCompetitors />
      <div className="section-divider"></div>
    </Chapter>
  )
}
