import Chapter from '../../layout/Chapter'
import ComparisonTable from '../sections/comparison/ComparisonTable'

export default function Comparison() {
  return (
    <Chapter id="appendix-a" title="Appendix A: Pete's Original Plan vs. Enhanced Strategy">
      <ComparisonTable />
      <div className="section-divider"></div>
    </Chapter>
  )
}
