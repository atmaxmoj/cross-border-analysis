import Chapter from '../../layout/Chapter'
import Expandable from '../../ui/Expandable'

export default function ExecutiveSummary() {
  return (
    <Chapter id="executive-summary" title="">
      <h2 id="executive-summary">Executive Summary</h2>

      <div className="abstract">
        <p>
          This document presents a comprehensive strategic analysis of YouTeacher, an ESL recruitment platform designed to
          address fraud and information asymmetry in the China international school market. Through systematic examination of
          incumbent platforms, analogous marketplaces (Glassdoor, Indeed, Upwork, AngelList, Boss Zhipin), and direct market
          research across Reddit communities and ESL forums, we validate both the severity of teacher pain points and the
          technical feasibility of school verification using Chinese government data sources.
        </p>

        <p>
          Our analysis reveals that the ESL recruitment market is dominated by trust and network effects rather than technology
          superiority—incumbent platforms like Dave's ESL Cafe (founded 1995) continue to dominate despite horrific UX because
          they control teacher attention and school relationships. The fundamental insight driving YouTeacher's strategy is that
          scam prevention through verified school data creates a defensible moat that pure technology improvements cannot replicate.
        </p>

        <p>
          The business model centers on solving the two-sided marketplace cold-start problem through job aggregation (scraping
          existing ESL boards to build immediate inventory for teachers) before monetizing verified schools through premium
          listings and placement fees. We adopt a depth-first geographic strategy, launching China-only to leverage domain
          expertise and regulatory advantages (two-entity structure: US-based platform + China client entity for fapiao/payments),
          with staged expansion to Korea, Japan, and Vietnam only after achieving product-market fit.
        </p>

        <p>
          The feature roadmap is structured using Kano analysis into Must-Haves (job aggregator, school verification, teacher
          reviews), Performance features (salary calculator, visa guides, city rankings), and Excitement features (weekly
          meetups, school badges, escrow/EOR services). Revenue projections show a path from $120K (Year 1, 20 paying schools)
          to $2.88M (Year 3, 480 schools + placement fees), with staged rollout minimizing upfront capital requirements while
          building the trust and data moats necessary to compete against entrenched incumbents.
        </p>
      </div>

      <div className="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li><a href="#project-genesis">Project Genesis</a></li>
          <li><a href="#market-analysis">Market Analysis</a></li>
          <li><a href="#strategic-questions">Strategic Questions</a></li>
          <li><a href="#solution-toolkit">Solution Toolkit</a></li>
          <li><a href="#desiderata">Desiderata (Feature Requirements)</a></li>
          <li><a href="#business-model">Business Model</a></li>
          <li><a href="#risk-assessment">Risk Assessment</a></li>
          <li><a href="#appendix">Appendices</a></li>
        </ol>
      </div>

      <div className="section-divider"></div>
    </Chapter>
  )
}
