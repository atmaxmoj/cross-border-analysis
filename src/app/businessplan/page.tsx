import DocumentLayout from '@/components/layout/DocumentLayout'

// Business Plan chapters
import ExecutiveSummary from '@/components/business_plan/chapters/ExecutiveSummary'
import ProjectGenesis from '@/components/business_plan/chapters/ProjectGenesis'
import MarketAnalysis from '@/components/business_plan/chapters/MarketAnalysis'
import StrategicQuestions from '@/components/business_plan/chapters/StrategicQuestions'
import SolutionToolkit from '@/components/business_plan/chapters/SolutionToolkit'
import Desiderata from '@/components/business_plan/chapters/Desiderata'
import BusinessModel from '@/components/business_plan/chapters/BusinessModel'
import RiskAssessment from '@/components/business_plan/chapters/RiskAssessment'
import Appendix from '@/components/business_plan/chapters/Appendix'

export default function BusinessPlanPage() {
  return (
    <DocumentLayout
      currentDoc="business-plan"
      title="YouTeacher ESL Recruitment Platform"
      subtitle="Strategic Analysis & Comprehensive Business Plan"
    >
      <ExecutiveSummary />
      <ProjectGenesis />
      <MarketAnalysis />
      <StrategicQuestions />
      <SolutionToolkit />
      <Desiderata />
      <BusinessModel />
      <RiskAssessment />
      <Appendix />
    </DocumentLayout>
  )
}
