import TableOfContents from '@/components/layout/TableOfContents'
import ExecutiveSummary from '@/components/chapters/ExecutiveSummary'
import ProjectGenesis from '@/components/chapters/ProjectGenesis'
import CoreDiscoveries from '@/components/chapters/CoreDiscoveries'
import MarketAnalysis from '@/components/chapters/MarketAnalysis'
import StrategicQuestions from '@/components/chapters/StrategicQuestions'
import SolutionToolkit from '@/components/chapters/SolutionToolkit'
import Desiderata from '@/components/chapters/Desiderata'
import BusinessModel from '@/components/chapters/BusinessModel'
import RiskAssessment from '@/components/chapters/RiskAssessment'
import Appendix from '@/components/chapters/Appendix'

export default function Home() {
  return (
    <>
      <div className="header-wrapper">
        <header>
          <h1>YouTeacher ESL Recruitment Platform</h1>
          <p className="subtitle">Strategic Analysis & Comprehensive Business Plan</p>
          <div className="meta-info">
            <div className="meta-item">
              <strong>Project Overview:</strong> ESL teacher recruitment platform targeting the China market
            </div>
            <div className="meta-item">
              <strong>Team:</strong> Pete (Domain Expert) & Mojo (Technical Lead)
            </div>
            <div className="meta-item">
              <strong>Date:</strong> October 2025
            </div>
            <div className="meta-item">
              <strong>Status:</strong> Pre-Launch Strategic Planning
            </div>
          </div>
        </header>
      </div>

      <div className="page-wrapper">
        <TableOfContents />

        <div className="content-wrapper">
          <main className="container">
            <div className="content">
              <ExecutiveSummary />
              <ProjectGenesis />
              <CoreDiscoveries />
              <MarketAnalysis />
              <StrategicQuestions />
              <SolutionToolkit />
              <Desiderata />
              <BusinessModel />
              <RiskAssessment />
              <Appendix />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
