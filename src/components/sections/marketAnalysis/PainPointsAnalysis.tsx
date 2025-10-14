import Section from '../../layout/Section'
import InsightBox from '../../ui/InsightBox'
import Expandable from '../../ui/Expandable'

export default function PainPointsAnalysis() {
  return (
    <Section id="pain-points" title="Pain Points Analysis">
      <p><strong>Context:</strong> We analyzed <strong>6,195 actual teacher posts</strong> (user-generated content) from <a href="https://www.reddit.com/r/TEFL" target="_blank" rel="noopener noreferrer">Reddit</a>, <a href="https://www.tefl.net/forums/" target="_blank" rel="noopener noreferrer">TEFL.net</a>, <a href="https://www.chinese-forums.com/" target="_blank" rel="noopener noreferrer">Chinese-Forums.com</a>, and <a href="https://forums.eslcafe.com/job/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a>. Every pain point below is derived from real teachers describing their actual experiences - not industry reports, not speculation, but direct evidence from the people who use (or refuse to use) ESL job boards.</p>

      <div style={{ background: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '8px', padding: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <p style={{ margin: '0', fontSize: '0.9em', color: '#2d3748' }}>
          <strong>⚠️ Analysis Scope:</strong> This pain point analysis is currently focused on <strong>China English teacher market only</strong>. While many pain points (scams, verification, contract fraud) are universal across Asian ESL markets, the specific evidence, frequency data, and severity scoring are derived from China-specific teacher experiences. Future research needed to validate pain points in other Asian markets (Thailand, Vietnam, Korea, Japan, etc.).
        </p>
      </div>

      <Expandable title="📊 View All Raw Data & Analysis" count="20 files available">
        <div style={{ marginBottom: '15px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '0.9em', marginBottom: '5px' }}>Raw Scraped Data (6,195 posts):</p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
            <li>
              <a href="/data/daves_esl_data" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                Dave's ESL Cafe Raw Data (1,556 posts combined)
              </a>
            </li>
            <li>
              <a href="/data/reddit_exploratory_evidence" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                Reddit Exploratory Evidence (4,681 posts from 10 subreddits)
              </a>
            </li>
            <li>
              <a href="/data/tefl_net_content" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                TEFL.net Forum Posts (67 posts)
              </a>
            </li>
            <li>
              <a href="/data/chinese_forums_content" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                Chinese-Forums.com Posts (131 posts)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p style={{ fontWeight: 'bold', fontSize: '0.9em', marginBottom: '5px' }}>Pain Point Analysis Reports:</p>
          <ul style={{ marginLeft: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
            <li>
              <a href="/data/analysis_daves_esl_cafe" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                Dave's ESL Cafe Pain Point Analysis
              </a> - Ghost town effect, fraud patterns, platform decline
            </li>
            <li>
              <a href="/data/analysis_r_tefl" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/TEFL Analysis (1,506 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_r_chinajobs" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/ChinaJobs Analysis (360 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_r_internationalteachers" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/internationalteachers Analysis (577 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_r_chinalife" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/chinalife Analysis (472 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_r_teflteachers" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/TEFLteachers Analysis (303 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_r_iwantout" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                r/IWantOut Analysis (291 posts)
              </a>
            </li>
            <li>
              <a href="/data/analysis_forums" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                TEFL.net & Chinese-Forums Analysis
              </a>
            </li>
            <li>
              <a href="/data/pain_point_analysis_framework" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                Pain Point Analysis Framework & Methodology
              </a>
            </li>
          </ul>
        </div>
      </Expandable>

      <InsightBox>
        <strong>✅ Data Collection Completed:</strong>
        <p style={{ margin: '10px 0' }}>This analysis is based on <strong>direct evidence from 6,195 posts</strong> across 12 data sources, manually analyzed for pain points:</p>
        <ul style={{ marginTop: '10px' }}>
          <li>
            <details style={{ cursor: 'pointer' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', display: 'inline' }}>
                Reddit: 4,681 posts from 10 subreddits
              </summary>
              <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                <li>r/TEFL: 1,506 posts</li>
                <li>r/China: 900 posts</li>
                <li>r/internationalteachers: 577 posts</li>
                <li>r/chinalife: 472 posts</li>
                <li>r/ChinaJobs: 360 posts</li>
                <li>r/TEFLteachers: 303 posts</li>
                <li>r/IWantOut: 291 posts</li>
                <li>r/expats: 207 posts</li>
                <li>r/ESL: 33 posts (data quality issue - 94% esports gaming content)</li>
                <li>r/teachabroad: 32 posts</li>
              </ul>
            </details>
          </li>
          <li><strong>TEFL.net:</strong> 67 posts from 5 major threads focused on scams and contract fraud</li>
          <li><strong>Chinese-Forums.com:</strong> 131 posts from 20 threads in "Teaching English in China" section</li>
          <li><strong>Dave's ESL Cafe:</strong> 1,316 posts from 248 threads (China Job Discussion Forum, 2003-2020 archive data). KEY FINDING: "Ghost town" effect - many urgent questions receive zero replies, indicating platform decline</li>
          <li><strong>Methodology:</strong> Pain severity scored from <strong>job board business impact perspective</strong>:
            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
              <li>Does it stop transactions entirely? (Platform Killer = 10/10)</li>
              <li>Does it damage platform trust permanently?</li>
              <li>Does it create mid-funnel churn/abandonment?</li>
              <li>Cross-source validation (found in how many of 12 sources?)</li>
            </ul>
          </li>
          <li><strong>Cross-validation:</strong> Every pain point validated across multiple sources to confirm patterns (not isolated complaints)</li>
        </ul>
      </InsightBox>

      <h4>Pain Severity Matrix</h4>

      <p><strong>Scoring Framework:</strong> Pain severity scored based on <strong>business impact for a job board</strong>:</p>
      <ul style={{ margin: '10px 0', lineHeight: '1.8' }}>
        <li><strong>10/10 - Platform Killer:</strong> Users won't use ANY job board after this experience ("I'll never use platforms again")</li>
        <li><strong>9/10 - Transaction Blocker:</strong> High engagement but zero transactions/revenue</li>
        <li><strong>8/10 - Mid-Funnel Churn:</strong> Users abandon before completing match</li>
        <li><strong>7/10 - Post-Match Failure:</strong> Platform blamed for bad outcomes</li>
        <li><strong>6/10 and below - Friction:</strong> Slows velocity but doesn't stop transactions</li>
      </ul>

      <table style={{ margin: '20px 0' }}>
        <thead>
          <tr>
            <th style={{ width: '5%' }}>Rank</th>
            <th style={{ width: '35%' }}>Pain Point</th>
            <th style={{ width: '10%' }}>Affected</th>
            <th style={{ width: '15%' }}>Severity Score</th>
            <th style={{ width: '35%' }}>Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#ffebee' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>1</td>
            <td><strong>Scam Listings & Fraudulent Recruiters</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 12/12 sources (100%)</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#f44336', color: 'white', fontWeight: 'bold', fontSize: '1.1em' }}>10/10</td>
            <td>r/ChinaJobs: "90% of Dave's ESL/eChinaCities are fake"; Dave's ESL: "ESL industry in death throes"</td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>2</td>
            <td><strong>Illegal Employment & Visa Fraud</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 11/12 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#f44336', color: 'white', fontWeight: 'bold', fontSize: '1.1em' }}>10/10</td>
            <td>Shane English Thailand: systematic illegal hiring; Dave's ESL: school offers part-time without visa, teacher imprisoned 48hrs</td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>3</td>
            <td><strong>Contract Fraud & Non-Payment</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 12/12 sources (100%)</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#f44336', color: 'white', fontWeight: 'bold', fontSize: '1.1em' }}>10/10</td>
            <td>Dave's ESL: "January wages still not paid" + release letter blackmail; Peizheng College: 100% deposit increase, hidden nanovirus outbreak</td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>4</td>
            <td><strong>Racial/Appearance Discrimination</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 9/11 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#f44336', color: 'white', fontWeight: 'bold', fontSize: '1.1em' }}>10/10</td>
            <td>r/TEFLteachers: 135 posts (44.6%); teacher applied to 100+ schools, zero consideration due to race</td>
          </tr>
          <tr style={{ background: '#fff3e0' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>5</td>
            <td><strong>Can't Verify School Legitimacy</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 12/12 sources (100%)</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ff9800', color: 'white', fontWeight: 'bold' }}>9/10</td>
            <td>Dave's ESL: "Any info on Sustech?" "Any info on Dipont?" - zero replies (ghost town effect)</td>
          </tr>
          <tr style={{ background: '#fff3e0' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>6</td>
            <td><strong>Job Cancellation After Arrival</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 5 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ff9800', color: 'white', fontWeight: 'bold' }}>9/10</td>
            <td>r/chinalife: 847 upvotes - "arrived yesterday, told school no longer needs me"</td>
          </tr>
          <tr style={{ background: '#fff3e0' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>7</td>
            <td><strong>Visa Eligibility Blocks Qualified Candidates</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 10/11 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ff9800', color: 'white', fontWeight: 'bold' }}>9/10</td>
            <td>Non-native with Masters TESOL told "you cannot legally work"; r/chinalife: 189 posts (highest frequency)</td>
          </tr>
          <tr style={{ background: '#fff9c4' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>8</td>
            <td><strong>Document/Apostille Complexity</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 8 sources</span></td>
            <td style={{ textAlign: 'center' }}>Both</td>
            <td style={{ textAlign: 'center', background: '#ffc107', fontWeight: 'bold' }}>8/10</td>
            <td>r/TEFLteachers: 52 posts; teachers abandon mid-process when learning requirements</td>
          </tr>
          <tr style={{ background: '#fff9c4' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>9</td>
            <td><strong>Information Overload</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 10/11 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ffc107', fontWeight: 'bold' }}>8/10</td>
            <td>r/TEFLteachers: 55 posts; "super overwhelmed by mixed advice"</td>
          </tr>
          <tr style={{ background: '#fff9c4' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>10</td>
            <td><strong>School Ghosting After Interviews</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 7 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ffc107', fontWeight: 'bold' }}>8/10</td>
            <td>Teacher flew to Bangkok, paid for accommodation, school ghosted; r/internationalteachers: 75 upvotes for "name and shame" request</td>
          </tr>
          <tr style={{ background: '#fff3e0' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>11</td>
            <td><strong>Contract Bait-and-Switch Upon Arrival</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 10/12 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ff9800', color: 'white', fontWeight: 'bold' }}>9/10</td>
            <td>Dave's ESL Peizheng College: teaching hours increased (no pay raise), 100% deposit hike, hidden nanovirus outbreak - teacher left in 1 week</td>
          </tr>
          <tr style={{ background: '#fff9c4' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>12</td>
            <td><strong>Unexpected Fees & Hidden Costs</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 8 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#ffc107', fontWeight: 'bold' }}>8/10</td>
            <td>r/chinalife: 102 posts, 223 upvotes - "fees after fees that were unexpected"</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>13</td>
            <td><strong>Can't Compare Salaries Effectively</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 9 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#8bc34a', color: 'white', fontWeight: 'bold' }}>7/10</td>
            <td>r/internationalteachers: Community built DIY salary spreadsheet (217 upvotes) - clear market gap</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>14</td>
            <td><strong>Poor Working Conditions Lead to Early Quit</strong><br /><span style={{ fontSize: '0.85em' }}>Found in 8 sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#8bc34a', color: 'white', fontWeight: 'bold' }}>7/10</td>
            <td>Multiple "nightmare school" warnings across all sources</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em' }}>15</td>
            <td><strong>Job Search Friction & Time Waste</strong><br /><span style={{ fontSize: '0.85em' }}>Found in multiple sources</span></td>
            <td style={{ textAlign: 'center' }}>Teachers</td>
            <td style={{ textAlign: 'center', background: '#8bc34a', color: 'white', fontWeight: 'bold' }}>6/10</td>
            <td>Teachers report weeks/months of searching, hundreds of applications</td>
          </tr>
        </tbody>
      </table>

      <h4 style={{ marginTop: '40px' }}>Detailed Evidence for Pain Points</h4>

      <Expandable title="Pain Point #1: Scam Listings & Fraudulent Recruiters" count="Severity: 10/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff5f5', borderLeft: '4px solid #f44336', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 12/12 sources (100%).</strong> Teachers explicitly state "I'll never use job boards again" after scam experiences. Dave's ESL Cafe analysis reveals "ESL industry in death throes" - teachers can't distinguish legitimate school contacts from recruiters who "have no decision making in the hiring process at all."</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Dave's ESL "flaky recruiters" hide their identity, pose as school HR; systematic resume harvesting; 90% of Dave's ESL/eChinaCities listings claimed fake; platform trust completely destroyed</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #2: Illegal Employment & Visa Fraud" count="Severity: 10/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff5f5', borderLeft: '4px solid #f44336', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 11/12 sources.</strong> Dave's ESL: School offers part-time position, knows teacher on tourist visa, promises to "look into visa but not likely." Teacher imprisoned 48 hours for working without visa. Community advice: "It's illegal, and could see you deported."</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Schools knowingly hire illegally; teacher arrested, 20K RMB bribe; permanent China bans; platform blamed for connecting teachers to illegal employers</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #3: Contract Fraud & Non-Payment" count="Severity: 10/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff5f5', borderLeft: '4px solid #f44336', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 12/12 sources (100%).</strong> Dave's ESL "January wages still not paid" (COVID-era): School stops responding, teacher trapped by release letter blackmail - "I don't wanna piss them off though cos I will need a release letter to work elsewhere." Peizheng College: 100% deposit increase demanded in cash, hidden nanovirus outbreak.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Unpaid wages + release letter double-trap; COVID-era salary theft; $8-10K losses; 80% of veteran teachers experienced contract fraud; escrow system desperately needed</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #4: Racial/Appearance Discrimination" count="Severity: 10/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff5f5', borderLeft: '4px solid #f44336', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 9/11 sources. 44.6% of r/TEFLteachers posts.</strong> Teacher applied to 100+ schools, zero consideration due to race (226 upvotes). British-Born Chinese with UK passport + Masters TESOL systematically rejected. 30-40% of teachers face discrimination.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Total market exclusion, "whites only" listings = PR disaster, underserved market segment opportunity, values decision required for YouTeacher</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #5: Can't Verify School Legitimacy" count="Severity: 9/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 12/12 sources (100%).</strong> Dave's ESL "ghost town" effect: Teachers post "Any info on Sustech?", "Any info on Dipont?" and receive ZERO replies. Community unable to help each other verify schools. High engagement but zero transactions - teachers abandon due to information vacuum.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Ghost town forum validates incumbent platform failure; verification system is table stakes feature; teachers desperate for structured school information</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #6: Job Cancellation After Arrival" count="Severity: 9/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 5 sources.</strong> r/chinalife: 847 upvotes - "arrived yesterday, told school no longer needs me." Teacher stranded abroad, wasted flights/visa, platform blamed.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Escrow deposit system needed to prevent last-minute cancellations, massive financial and emotional damage</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #7: Visa Eligibility Blocks Qualified Candidates" count="Severity: 9/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 10/11 sources.</strong> Non-native with Masters TESOL told "you cannot legally work." r/chinalife: 189 posts (highest frequency). Entire segments blocked from market, reduces platform TAM.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Eligibility checker needed, complex visa rules confuse qualified teachers, systematic market exclusion</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #8: Document/Apostille Complexity" count="Severity: 8/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff9c4', borderLeft: '4px solid #ffc107', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 8 sources.</strong> r/TEFLteachers: 52 posts. Teachers abandon mid-process when learning requirements. Mid-funnel abandonment due to unexpected complexity/costs.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Document guides desperately needed, apostille services cost $70-116 per teacher, 30-day deadlines create pressure</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #9: Information Overload" count="Severity: 8/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff9c4', borderLeft: '4px solid #ffc107', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 10/11 sources.</strong> r/TEFLteachers: 55 posts "super overwhelmed by mixed advice." Analysis paralysis - teachers spend weeks researching, never apply.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Structured information architecture needed, contradictory advice across forums, decision fatigue prevents action</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #10: School Ghosting After Interviews" count="Severity: 8/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff9c4', borderLeft: '4px solid #ffc107', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 7 sources.</strong> Teacher flew to Bangkok, paid accommodation, school ghosted. r/internationalteachers: 75 upvotes for "name and shame" request. High engagement, zero transaction, massive time waste.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Response SLAs needed, platform reputation damage from ghosting, teachers demand accountability mechanisms</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #11: Contract Bait-and-Switch Upon Arrival" count="Severity: 9/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 10/12 sources. UPGRADED from 8/10 to 9/10.</strong> Dave's ESL Peizheng College case shows SYSTEMATIC fraud: contract signed remotely (teacher feels safe), then upon arrival: teaching hours increased with NO salary increase, apartment deposit increased 100% (demanded in cash immediately), hidden nanovirus outbreak on campus not disclosed. Teacher left within 1 week. Community warns: "Never ever pay the school you are working for money, in any way."</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Schools change terms after arrival when teacher is vulnerable with sunk costs; contract lock-in system needed BEFORE arrival; multiple schools using same playbook = systematic issue not isolated incident</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #12: Unexpected Fees & Hidden Costs" count="Severity: 8/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#fff9c4', borderLeft: '4px solid #ffc107', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 8 sources.</strong> r/chinalife: 102 posts, 223 upvotes - "fees after fees that were unexpected." Financial strain creates negative reviews, teachers regret using platform.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Cost calculator desperately needed, transparent fee breakdowns, teachers blindsided by hidden costs after commitment</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #13: Can't Compare Salaries Effectively" count="Severity: 7/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#e8f5e9', borderLeft: '4px solid #8bc34a', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 9 sources.</strong> r/internationalteachers: Community built DIY salary spreadsheet (217 upvotes) - clear market gap. Bad salary decisions lead to early quit, platform blamed.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Salary transparency system needed, teachers self-organizing compensation data, cost-of-living adjustments critical</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #14: Poor Working Conditions Lead to Early Quit" count="Severity: 7/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#e8f5e9', borderLeft: '4px solid #8bc34a', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in 8 sources.</strong> Multiple "nightmare school" warnings across all sources. r/chinalife: "All schools here are terrible. Management is terrible. It is what it is." (217 upvotes) - normalization of mediocrity.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> School reviews critical, transparent reviews from real teachers = game changer, post-match failure damages platform reputation</p>
          </div>
        </li>
      </Expandable>

      <Expandable title="Pain Point #15: Job Search Friction & Time Waste" count="Severity: 6/10">
        <li style={{ listStyle: 'none' }}>
          <div style={{ background: '#e8f5e9', borderLeft: '4px solid #8bc34a', padding: '15px', marginTop: '10px' }}>
            <p><strong>Found in multiple sources.</strong> Teachers report weeks/months searching, hundreds of applications. Reduces platform usage frequency and satisfaction.</p>
            <p style={{ marginTop: '10px' }}><strong>Key Evidence:</strong> Better matching algorithms needed, filter/search improvements critical, teachers spend 3-4 months from search to arrival</p>
          </div>
        </li>
      </Expandable>
    </Section>
  )
}
