import Chapter from '../layout/Chapter'
import Expandable from '../ui/Expandable'

export default function ExecutiveSummary() {
  return (
    <Chapter id="executive-summary" title="">
      <h2 id="executive-summary">Executive Summary</h2>
      <p>This document presents a comprehensive analysis of the YouTeacher platform, comparing the original vision with enhanced strategic recommendations. Through systematic evaluation, we identified 7 core contradictions in the initial plan and developed actionable solutions to address market realities.</p>

      <div className="key-findings">
        <h3>Key Findings:</h3>
        <ol>
          <li>The ESL recruitment market is dominated by trust and network effects, not technology
            <ul>
              <li><a href="https://www.teachaway.com/" target="_blank" rel="noopener noreferrer">Teach Away</a> exists with better UI/UX and modern functionality in the same niche, yet <a href="https://www.eslcafe.com/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a> still dominates the market</li>
              <li>ESL teacher fraud is a significant, unsolved problem <span className="reference">(<a href="https://www.reddit.com/r/TEFL/comments/8j2xvq/warning_tefl_teachers_foreignhrcom_is_chinas/" target="_blank" rel="noopener noreferrer">Reddit: China's biggest job scam</a>, <a href="https://www.gooverseas.com/blog/how-avoid-common-teach-china-scams" target="_blank" rel="noopener noreferrer">Common teach in China scams</a>, <a href="https://www.tefl.net/forums/viewtopic.php?t=15945" target="_blank" rel="noopener noreferrer">TEFL.net: Dodgy schools in China</a>)</span></li>
            </ul>
          </li>
          <li>Verification of school legitimacy is technically feasible
            <ul>
              <li>Chinese Ministry of Education maintains official school registry databases <span className="reference">(<a href="http://www.moe.gov.cn/" target="_blank" rel="noopener noreferrer">MOE.gov.cn</a>)</span></li>
              <li>Provincial and municipal education bureaus publish licensed institution lists <span className="reference">(<a href="http://jyt.jiangsu.gov.cn/" target="_blank" rel="noopener noreferrer">Example: Jiangsu Education Bureau</a>)</span></li>
              <li>Business registration records available through government portals <span className="reference">(<a href="https://www.qcc.com/" target="_blank" rel="noopener noreferrer">Qichacha</a>, <a href="https://www.tianyancha.com/" target="_blank" rel="noopener noreferrer">Tianyancha</a>)</span></li>
            </ul>
          </li>
          <li>Schools will pay for access to teacher traffic
            <ul>
              <li><a href="https://www.eslcafe.com/joblist/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a> has charged schools for 30 years and remains operational</li>
            </ul>
          </li>
          <li>Cold start challenges require aggregation strategy rather than dual-sided marketplace approach
            <ul>
              <li>Pete's "50 schools" dual-sided approach faces chicken-and-egg problem: schools need teacher traffic, teachers need job volume</li>
              <li>Successful platforms solve one side first: Airbnb scraped Craigslist, Indeed aggregated company websites <span className="reference">(<a href="https://growthhackers.com/growth-studies/airbnb" target="_blank" rel="noopener noreferrer">Growth Hackers</a>, <a href="https://www.indeed.com/about" target="_blank" rel="noopener noreferrer">Indeed</a>)</span></li>
              <li>Aggregation strategy: scrape existing ESL job boards to build initial inventory, attract teachers, then invite schools</li>
              <li>Two-sided marketplaces universally struggle without solving one side first <span className="reference">(<a href="https://www.nfx.com/post/19-marketplace-kpis" target="_blank" rel="noopener noreferrer">NFX: Marketplace dynamics</a>)</span></li>
            </ul>
          </li>
          <li>Successful new entrants (2006+) focused on single regions, not global launch
            <ul>
              <li>Pre-2010 platforms (Dave's, TeachAway, SeriousTeachers) launched globally when market was nascent</li>
              <li>Post-2010 successful entrants focused on single regions: <a href="https://www.korvia.com/" target="_blank" rel="noopener noreferrer">Korvia</a> (Korea-only, 2006), <a href="https://www.hiredchina.com/" target="_blank" rel="noopener noreferrer">HiredChina</a> (China-only, 2014)</li>
              <li>Regional depth beats global breadth: local regulatory expertise, government partnerships, cultural integration</li>
              <li>YouTeacher launching in 2025 should focus China-only for 12-18 months until PMF, leveraging Pete's China-specific expertise</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li><a href="#project-genesis">Project Genesis</a></li>
          <li><a href="#core-discoveries">Core Discoveries</a></li>
          <li><a href="#market-analysis">Market Analysis</a></li>
          <li><a href="#contradictions">Seven Critical Contradictions</a></li>
          <li><a href="#business-model">Business Model</a></li>
          <li><a href="#risks">Risk Assessment</a></li>
          <li><a href="#comparison">Pete's Original Plan vs. Enhanced Strategy</a></li>
        </ol>
      </div>

      <div className="section-divider"></div>
    </Chapter>
  )
}
