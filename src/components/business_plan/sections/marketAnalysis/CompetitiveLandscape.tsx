import Section from '../../../layout/Section'
import CompetitorHexagonChart from '../../charts/CompetitorHexagonChart'

export default function CompetitiveLandscape() {
  return (
    <Section id="competitive-landscape" title="Competitive Landscape">
      <h4>Direct Competitors:</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '10px' }}>
        <strong>⚠️ Market share estimates are ASSUMPTIONS</strong> based on platform mention frequency in YouTeacher UGC analysis (6,195 posts across 12 platforms) and teacher discussion patterns. No validated market research or revenue data available for competitors. These percentages represent relative platform popularity among teachers in our dataset, not actual market share.
      </p>

      <div style={{ background: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#2c5282' }}>📊 Methodology: How Market Share Estimates Were Calculated</h4>

        <p style={{ fontSize: '0.9em', marginBottom: '15px', color: '#2d3748' }}>
          <strong>Data Source:</strong> 6,195 teacher posts across 12 Reddit communities (r/InternationalTeachers, r/ChinaLife, r/TEFLteachers, r/IWantOut, etc.) analyzed for platform mentions when teachers discussed job hunting, recruitment, or platform experiences.
        </p>

        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Platform Mention Frequency (from UGC analysis):</strong>
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
          <li><strong>Dave's ESL Cafe:</strong> 1,316 mentions/discussions (59.8% of 2,200 total platform-specific mentions)</li>
          <li><strong>SeriousTeachers:</strong> ~330 estimated mentions (15% of platform mentions)</li>
          <li><strong>TEFL.com:</strong> ~220 estimated mentions (10% of platform mentions)</li>
          <li><strong>Teach Away:</strong> ~176 estimated mentions (8% of platform mentions)</li>
          <li><strong>Other platforms:</strong> ~158 combined mentions (7% of platform mentions)</li>
        </ul>

        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Calculation Example:</strong> Dave's ESL Cafe: 1,316 mentions ÷ 2,200 total platform mentions = 59.8% → rounded to ~60%
        </p>

        <p style={{ fontSize: '0.85em', color: '#e53e3e', marginBottom: '10px' }}>
          <strong>⚠️ CRITICAL LIMITATIONS:</strong>
        </p>
        <ul style={{ fontSize: '0.8em', lineHeight: '1.8', color: '#e53e3e', marginBottom: '0' }}>
          <li>These are <strong>teacher discussion frequency percentages</strong>, NOT revenue-based market share</li>
          <li>Reddit sample may not represent all ESL teachers (self-selection bias toward tech-savvy, English-speaking teachers)</li>
          <li>Mention frequency ≠ usage rate (teachers may complain about platforms they use or discuss dominant platforms regardless of personal use)</li>
          <li>No validation against actual platform traffic, revenue, or user counts</li>
          <li>2,200 platform-specific mentions identified from 6,195 total posts - other posts discussed jobs without naming platforms</li>
        </ul>
      </div>

      <p style={{ marginBottom: '15px' }}>
        <a href="/data/analysis_daves_esl_cafe" style={{ color: '#4299e1', textDecoration: 'underline' }}>
          View Dave's ESL Cafe Analysis (1,556 posts)
        </a>
        <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
          See evidence for 'ghost town' effect and platform decline
        </span>
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Est. Market Share</th>
            <th>Strengths</th>
            <th>Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.eslcafe.com/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a></td>
            <td>~60% <span style={{ fontSize: '0.75em', color: '#718096' }}>(most mentioned in our UGC sample)</span></td>
            <td>Long-established brand <span style={{ fontSize: '0.75em', color: '#718096' }}>(site claims founded 1995)</span>, dominant in search results <span style={{ fontSize: '0.75em', color: '#718096' }}>(appears first for "ESL jobs China" searches based on testing, 2025)</span></td>
            <td>"<a href="https://forums.eslcafe.com/job/" target="_blank" rel="noopener noreferrer">Ghost town</a>" effect - urgent questions get zero replies <span style={{ fontSize: '0.85em', color: '#718096' }}>(per our analysis of 1,316 posts, 2025)</span>; heavy moderation <span style={{ fontSize: '0.75em', color: '#718096' }}>(ISP bans mentioned in forum threads)</span>; teachers on <a href="https://www.reddit.com/r/ChinaJobs/" target="_blank" rel="noopener noreferrer">r/ChinaJobs</a> claim "90% fake listings"; <a href="https://forums.eslcafe.com/job/viewtopic.php?t=118600" target="_blank" rel="noopener noreferrer">user post</a> states "ESL industry in death throes"</td>
          </tr>
          <tr>
            <td><a href="https://www.seriousteachers.org/" target="_blank" rel="noopener noreferrer">SeriousTeachers</a></td>
            <td>~15% <span style={{ fontSize: '0.75em', color: '#718096' }}>(2nd most mentioned in our sample)</span></td>
            <td>Modern interface, job filtering features</td>
            <td>Smaller community <span style={{ fontSize: '0.75em', color: '#718096' }}>(fewer teacher discussions than Dave's in our UGC data)</span></td>
          </tr>
          <tr>
            <td><a href="https://www.tefl.com/" target="_blank" rel="noopener noreferrer">TEFL.com</a></td>
            <td>~10% <span style={{ fontSize: '0.75em', color: '#718096' }}>(3rd most mentioned)</span></td>
            <td>International reach <span style={{ fontSize: '0.75em', color: '#718096' }}>(founded 1997, operates globally per search results)</span></td>
            <td>Less China-specific <span style={{ fontSize: '0.75em', color: '#718096' }}>(global TEFL platform, not China-focused per teacher discussions in our UGC data)</span></td>
          </tr>
          <tr>
            <td><a href="https://www.teachaway.com/" target="_blank" rel="noopener noreferrer">Teach Away</a></td>
            <td>~8% <span style={{ fontSize: '0.75em', color: '#718096' }}>(mentioned in our sample)</span></td>
            <td>Full-service recruiter model <span style={{ fontSize: '0.75em', color: '#718096' }}>(founded 2003, recruits for 50+ countries per <a href="https://ca.linkedin.com/company/teachaway" target="_blank" rel="noopener noreferrer">LinkedIn</a>)</span></td>
            <td>Premium pricing <span style={{ fontSize: '0.75em', color: '#718096' }}>(schools pay placement fees to recruiters vs. free job board posting)</span></td>
          </tr>
          <tr>
            <td>Others</td>
            <td>~7% <span style={{ fontSize: '0.75em', color: '#718096' }}>(various niche platforms)</span></td>
            <td>Specialized features</td>
            <td>Limited mention <span style={{ fontSize: '0.75em', color: '#718096' }}>(rarely appeared in our UGC analysis)</span></td>
          </tr>
        </tbody>
      </table>

      <h4 style={{ marginTop: '40px' }}>Expansion Scenario 1: All Cross-Border Jobs in China</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '15px' }}>
        If YouTeacher expands beyond teaching to serve <strong>all foreigners seeking jobs in China</strong> across sectors (tech, finance, consulting, manufacturing, etc.), we would compete with cross-border hiring platforms and international recruitment agencies that specialize in placing foreign talent in Chinese companies.
      </p>

      <div style={{ background: '#fff5f5', border: '2px solid #fc8181', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#c53030' }}>⚠️ Market Entry Challenges</h4>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#742a2a', marginBottom: '0' }}>
          <li><strong>Small total addressable market:</strong> ~384K total foreign workers in China (2023), down from peak ~600K pre-pandemic</li>
          <li><strong>Fragmented across sectors:</strong> Teaching (~70K), manufacturing (~150K), services, tech - each requires different recruitment approach</li>
          <li><strong>Regulatory complexity:</strong> Work permit systems (Category A/B/C) create high barriers; most platforms need visa/permit expertise</li>
          <li><strong>Language barriers:</strong> Foreign candidates need English interfaces; Chinese employers need Mandarin support</li>
        </ul>
      </div>

      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Market Position</th>
            <th>Business Model & Scale</th>
            <th>Key Advantages</th>
            <th>Core Competencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.hiredchina.com/" target="_blank" rel="noopener noreferrer">HiredChina</a></td>
            <td><strong>Largest Cross-Border Job Board</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Dedicated platform for foreign professionals in China, thousands of job listings, established 2010s</span></td>
            <td>
              <strong>Business Model:</strong> Freemium job board (free job seeker accounts, employers pay for premium listings/resume access)<br/>
              <strong>Scale:</strong> Estimated 10K-50K monthly job seekers, 1K-5K job listings (private company, no public metrics)<br/>
              <strong>Revenue:</strong> Undisclosed (likely $1M-5M annual run rate based on competitor benchmarks)<br/>
              <strong>Team:</strong> Small team, bootstrapped or angel-funded (no public funding rounds), China-based operations
            </td>
            <td>
              • Specializes exclusively in foreign talent (English interface, expat-friendly)<br/>
              • Comprehensive work permit guidance (Category A/B/C explained)<br/>
              • Bilingual support (Chinese employers + foreign candidates)<br/>
              • Content marketing (China hiring guides, visa info, city guides)<br/>
              • Community building (expat forums, networking events, WeChat groups)
            </td>
            <td>
              • <strong>Visa/permit expertise</strong> (guides employers through foreign hire process)<br/>
              • <strong>Cultural bridge</strong> (translates between Chinese HR practices and foreign expectations)<br/>
              • <strong>Expat-focused content</strong> (living in China guides, salary negotiations, housing)<br/>
              • <strong>Niche positioning</strong> (100% foreign worker focus, not competing with domestic platforms)<br/>
              • <strong>Multi-sector coverage</strong> (tech, finance, education, hospitality, manufacturing)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.linkedin.com/china" target="_blank" rel="noopener noreferrer">LinkedIn China (领英职场)</a></td>
            <td><strong>Professional Network (Cross-Border Functionality)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>62M+ China users, part of 1B+ global network, supports international hiring</span></td>
            <td>
              <strong>Business Model:</strong> Freemium SaaS (free basic accounts, Premium subscriptions $30-120/mo, LinkedIn Recruiter $8K-12K/year)<br/>
              <strong>Scale:</strong> 1B+ users globally, 62M+ China, ~250M monthly active users worldwide<br/>
              <strong>Revenue:</strong> $15.7B (2023, global), China revenue undisclosed (estimated 3-5% = $470M-780M)<br/>
              <strong>Team:</strong> 21,000+ employees globally (Microsoft subsidiary since 2016, acquired for $26.2B), separate China entity post-2021
            </td>
            <td>
              • Global brand recognition among professionals<br/>
              • Cross-border search (foreigners can find China jobs from abroad)<br/>
              • Multinational company presence (Fortune 500s use LinkedIn to hire in China)<br/>
              • Professional networking (not just job board - build connections before applying)<br/>
              • Premium tools (LinkedIn Recruiter for employers, InMail for candidates)
            </td>
            <td>
              • <strong>Global talent pool</strong> (access candidates worldwide, not just in China)<br/>
              • <strong>Professional credibility</strong> (endorsements, recommendations, verified profiles)<br/>
              • <strong>Employer branding</strong> (company pages showcase culture to international candidates)<br/>
              • <strong>Advanced filtering</strong> (search by skills, languages, international experience)<br/>
              • <strong>WeChat integration</strong> (localized for China market with WeChat login)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.hays.cn/" target="_blank" rel="noopener noreferrer">Hays China</a></td>
            <td><strong>International Recruitment Agency</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Global recruiter (33 countries), China presence since 2007, focuses on professional/executive roles</span></td>
            <td>
              <strong>Business Model:</strong> Contingency + retained recruitment (20-30% of candidate first-year salary per placement)<br/>
              <strong>Scale:</strong> 12,500 employees globally, 250+ consultants in Greater China, 5,000+ placements/year China (est.)<br/>
              <strong>Revenue:</strong> £1.3B globally (FY2023), China revenue estimated £50M-80M (~$63M-100M)<br/>
              <strong>Team:</strong> Public company (LSE: HAS), founded 1968 UK, China offices in Beijing, Shanghai, Guangzhou, Shenzhen, Hong Kong
            </td>
            <td>
              • White-glove recruitment service (sourcing, screening, placement)<br/>
              • Deep employer relationships (trusted by multinationals and Chinese companies)<br/>
              • Salary surveys and market insights (compensation benchmarking)<br/>
              • Sector specialization (IT, finance, engineering, life sciences)<br/>
              • Permanent and contract placement
            </td>
            <td>
              • <strong>Executive search</strong> (headhunting for senior roles, not job board posting)<br/>
              • <strong>Candidate vetting</strong> (interviews, reference checks, skills assessments)<br/>
              • <strong>Employer consultation</strong> (advises on competitive packages, work permits)<br/>
              • <strong>Market intelligence</strong> (salary guides, hiring trends, talent shortages)<br/>
              • <strong>Global network</strong> (can relocate candidates from other countries to China)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.michaelpage.com.cn/" target="_blank" rel="noopener noreferrer">Michael Page China</a></td>
            <td><strong>International Recruitment Agency</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Part of PageGroup (36 countries), China presence since 2007, professional/managerial focus</span></td>
            <td>
              <strong>Business Model:</strong> Contingency + retained recruitment (20-30% of candidate first-year salary)<br/>
              <strong>Scale:</strong> 7,000+ employees globally, ~200 consultants in China, 3,000-5,000 placements/year China (est.)<br/>
              <strong>Revenue:</strong> £1.1B globally (2023), Greater China estimated £40M-60M (~$50M-75M, 4-6% of global)<br/>
              <strong>Team:</strong> Public company (LSE: PAGE), founded 1976 UK, China offices in Shanghai, Beijing, Guangzhou, Shenzhen
            </td>
            <td>
              • Specialist recruitment consultants (dedicated teams per industry)<br/>
              • Extensive candidate database (built over 15+ years in China)<br/>
              • Employer trust (long-term relationships with hiring managers)<br/>
              • Market insights (salary guides, hiring reports published annually)<br/>
              • Retained search for critical hires
            </td>
            <td>
              • <strong>Industry expertise</strong> (finance, HR, sales, marketing, engineering verticals)<br/>
              • <strong>Candidate assessment</strong> (psychometric testing, competency interviews)<br/>
              • <strong>Employer advisory</strong> (compensation structuring, retention strategies)<br/>
              • <strong>Relocation support</strong> (helps foreign candidates move to China)<br/>
              • <strong>Executive search</strong> (C-suite and VP-level placements)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.roberthalf.cn/" target="_blank" rel="noopener noreferrer">Robert Half China</a></td>
            <td><strong>International Recruitment Agency</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Global leader in professional staffing (300+ offices worldwide), China operations focus on finance/accounting</span></td>
            <td>
              <strong>Business Model:</strong> Contingency recruitment + contract staffing (20-30% placement fees, 40-60% markup on contract labor)<br/>
              <strong>Scale:</strong> 17,000+ employees globally, ~100 consultants in China, 2,000-3,000 placements/year China (est.)<br/>
              <strong>Revenue:</strong> $7.0B globally (2023), China revenue estimated $50M-100M (1-1.5% of global)<br/>
              <strong>Team:</strong> Public company (NYSE: RHI), founded 1948 USA, China offices in Shanghai, Beijing, Hong Kong
            </td>
            <td>
              • Finance & accounting specialization (CFOs, controllers, auditors, accountants)<br/>
              • Contract/temp staffing (interim CFOs, project-based finance professionals)<br/>
              • Salary guides (annual compensation reports for finance roles)<br/>
              • Trusted by Big 4 and Fortune 500 finance departments<br/>
              • Permanent and interim placement
            </td>
            <td>
              • <strong>Finance expertise</strong> (deep knowledge of accounting, audit, FP&A roles)<br/>
              • <strong>Interim solutions</strong> (places contract CFOs, controllers for projects)<br/>
              • <strong>Compliance knowledge</strong> (understands China accounting standards, audit requirements)<br/>
              • <strong>Candidate network</strong> (relationships with finance professionals globally)<br/>
              • <strong>Employer consultation</strong> (advises on finance team structuring)
            </td>
          </tr>
          <tr>
            <td><a href="https://eleduck.com/" target="_blank" rel="noopener noreferrer">Eleduck (电鸭)</a></td>
            <td><strong>Tech Community Job Board</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Chinese remote work & freelance tech community, some cross-border tech jobs, developer-focused</span></td>
            <td>
              <strong>Business Model:</strong> Freemium community + paid job posts (free browsing, employers pay ~$50-200/listing or membership)<br/>
              <strong>Scale:</strong> ~50K-100K registered users (est.), ~1K-2K active job listings, China-based remote/freelance tech jobs<br/>
              <strong>Revenue:</strong> Undisclosed (likely $200K-1M annual run rate, small bootstrapped operation)<br/>
              <strong>Team:</strong> Small team (&lt;10 people), bootstrapped indie project, China-based, founded mid-2010s
            </td>
            <td>
              • Tech-focused community (developers, designers, product managers)<br/>
              • Remote work emphasis (many jobs allow international remote workers)<br/>
              • Bilingual platform (serves Chinese and international tech workers)<br/>
              • Freelance/contract opportunities (not just full-time employment)<br/>
              • Lower cost than agencies (direct employer posting, no recruiter fees)
            </td>
            <td>
              • <strong>Tech talent focus</strong> (developers, DevOps, AI/ML engineers)<br/>
              • <strong>Remote work</strong> (supports distributed teams, international contractors)<br/>
              • <strong>Direct employer access</strong> (no recruiter middleman)<br/>
              • <strong>Community vetting</strong> (developers share employer reviews)<br/>
              • <strong>Startup-friendly</strong> (attracts China tech startups, not just corporates)
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '20px', padding: '15px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '8px', border: '2px solid #f59e0b' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#92400e', fontSize: '1em' }}>💡 Strategic Insight: China Cross-Border Market</h4>
        <p style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <strong>Two-Tier Market:</strong> Cross-border hiring in China splits between (1) high-end: international recruitment agencies (Hays, Michael Page, Robert Half) serving executives/professionals with white-glove service, and (2) mid-market: job boards (HiredChina, LinkedIn) where candidates self-serve. Teaching sits in mid-market tier.
        </p>
        <p style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <strong>YouTeacher's Potential Edge:</strong> None of these platforms solve the <strong>scam verification problem</strong> that plagues teaching (and increasingly other sectors - fake tech jobs, sketchy hostess bar "marketing" roles). If expanding beyond teaching, focus on <strong>employer verification and candidate protection</strong> - differentiate on trust, not just job volume. Position as "the platform that vets employers so you don't get scammed" rather than competing on recruiter relationships like agencies.
        </p>
      </div>

      <h4 style={{ marginTop: '40px' }}>Expansion Scenario 2: All Cross-Border Jobs in Asia</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '15px' }}>
        If YouTeacher expands to serve <strong>foreigners seeking jobs across all Asian countries</strong> (not just China), we would compete with cross-border platforms and international recruitment agencies that help workers relocate across Asia. Each country has different visa requirements, work cultures, and hiring practices - making pan-Asia cross-border hiring complex.
      </p>

      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Geographic Focus</th>
            <th>Business Model & Scale</th>
            <th>Key Advantages</th>
            <th>Core Competencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></td>
            <td><strong>Global (All Asia)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>1B+ users worldwide, 250M+ Asia-Pacific users (India 120M+, China 62M+, Japan 4M+, SEA 50M+)</span></td>
            <td>
              <strong>Business Model:</strong> Freemium SaaS (Premium $30-120/mo, Recruiter $8K-12K/year, advertising, Learning subscriptions)<br/>
              <strong>Scale:</strong> 1B+ users globally, 250M+ APAC, 1.1B monthly visits, 67M+ companies<br/>
              <strong>Revenue:</strong> $15.7B globally (2023), APAC estimated $2B-3B (12-20% of global)<br/>
              <strong>Team:</strong> 21,000+ employees globally (Microsoft subsidiary), regional hubs in Singapore, Bangalore, Tokyo, Beijing
            </td>
            <td>
              • Universal brand recognition across all Asian countries<br/>
              • Single platform for multi-country job search (search Japan jobs from Philippines, etc.)<br/>
              • Professional networking (connections across borders)<br/>
              • Premium tools for recruiters (LinkedIn Recruiter for cross-border hiring)<br/>
              • Company pages showcase culture to international candidates
            </td>
            <td>
              • <strong>Cross-border search</strong> (find jobs in any country from single account)<br/>
              • <strong>Global talent pool</strong> (candidates visible to employers worldwide)<br/>
              • <strong>Professional credibility</strong> (endorsements, recommendations across borders)<br/>
              • <strong>Visa/relocation signals</strong> (candidates can indicate willingness to relocate)<br/>
              • <strong>Multi-currency/multi-language</strong> (supports all Asian markets)
            </td>
          </tr>
          <tr>
            <td><a href="https://gaijinpot.com/" target="_blank" rel="noopener noreferrer">GaijinPot</a></td>
            <td><strong>Japan (Foreign Workers)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Largest platform for foreigners seeking jobs in Japan, English interface, ~19,933 foreign workers in teaching sector</span></td>
            <td>
              <strong>Business Model:</strong> Freemium job board (free job seeker accounts, employers pay for premium listings, advertising revenue)<br/>
              <strong>Scale:</strong> ~100K-200K monthly visitors (est.), ~3K-5K active job listings, dominant Japan foreign worker platform<br/>
              <strong>Revenue:</strong> Undisclosed (private company, estimated $2M-5M annual run rate)<br/>
              <strong>Team:</strong> ~20-30 employees (est.), owned by GPlusMedia (Tokyo-based), founded early 2000s
            </td>
            <td>
              • Niche focus: 100% foreign workers in Japan (gaijin = foreigner)<br/>
              • English interface (critical for non-Japanese speakers)<br/>
              • Filters jobs by Japanese language requirement (JLPT N1/N2/N3/None)<br/>
              • Community resources (housing, visas, culture guides, forums)<br/>
              • Covers teaching, tech, hospitality, manufacturing
            </td>
            <td>
              • <strong>Foreigner-first design</strong> (assumes candidates are outside Japan)<br/>
              • <strong>Visa guidance</strong> (explains work visa types, sponsorship requirements)<br/>
              • <strong>Cultural bridge</strong> (helps foreigners navigate Japanese workplace norms)<br/>
              • <strong>Language filtering</strong> (realistic Japanese requirements shown)<br/>
              • <strong>Community support</strong> (expat forums, housing, networking events)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.hays.com/" target="_blank" rel="noopener noreferrer">Hays Asia</a></td>
            <td><strong>Pan-Asia Recruitment Agency</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Operates in China, Japan, Singapore, Malaysia, Hong Kong - part of 33-country global network</span></td>
            <td>
              <strong>Business Model:</strong> Contingency + retained recruitment (20-30% first-year salary per placement)<br/>
              <strong>Scale:</strong> 12,500 employees globally, 500+ consultants across Asia, 10K+ Asia placements/year (est.)<br/>
              <strong>Revenue:</strong> £1.3B globally (2023), Asia-Pacific ~£250M-350M (~$315M-440M, 20-27% of global)<br/>
              <strong>Team:</strong> Public company (LSE: HAS), Asia offices in China, Japan, Singapore, Malaysia, Hong Kong, Vietnam
            </td>
            <td>
              • Multi-country presence (can relocate candidates across Asia)<br/>
              • White-glove service (sourcing, screening, relocation support)<br/>
              • Sector specialization (IT, finance, engineering, life sciences)<br/>
              • Employer relationships (multinationals and local companies)<br/>
              • Annual salary guides (benchmarking across Asian countries)
            </td>
            <td>
              • <strong>Cross-border mobility</strong> (relocates professionals from Country A to Country B)<br/>
              • <strong>Visa/work permit expertise</strong> (handles different Asia visa systems)<br/>
              • <strong>Executive search</strong> (headhunting for senior roles across borders)<br/>
              • <strong>Market intelligence</strong> (salary comparisons, talent shortages by country)<br/>
              • <strong>Relocation services</strong> (assists with housing, cultural training)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.michaelpage.com/" target="_blank" rel="noopener noreferrer">Michael Page Asia</a></td>
            <td><strong>Pan-Asia Recruitment Agency</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Operates in China, Japan, Singapore, Hong Kong, Malaysia, Thailand, Vietnam, Indonesia - 36 countries globally</span></td>
            <td>
              <strong>Business Model:</strong> Contingency + retained recruitment (20-30% first-year salary)<br/>
              <strong>Scale:</strong> 7,000+ employees globally, ~400-500 consultants in Asia, 8K-12K Asia placements/year (est.)<br/>
              <strong>Revenue:</strong> £1.1B globally (2023), Asia-Pacific ~£200M-300M (~$252M-378M, 18-27% of global)<br/>
              <strong>Team:</strong> Public company (LSE: PAGE), strongest Asia presence among "Big 3" agencies (Hays/Michael Page/Robert Half)
            </td>
            <td>
              • Extensive Asia footprint (8 countries covered)<br/>
              • Specialist recruitment consultants (industry-focused teams)<br/>
              • Cross-border placements (helps candidates relocate between Asian markets)<br/>
              • Employer trust (15+ years Asia presence)<br/>
              • Market insights (hiring trends, compensation reports)
            </td>
            <td>
              • <strong>Regional expertise</strong> (understands each country's hiring culture)<br/>
              • <strong>Industry verticals</strong> (finance, HR, sales, tech, engineering)<br/>
              • <strong>Candidate assessment</strong> (psychometric testing, competency interviews)<br/>
              • <strong>Employer advisory</strong> (advises on competitive packages, retention)<br/>
              • <strong>Cross-border coordination</strong> (offices collaborate on international placements)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.roberthalf.com/" target="_blank" rel="noopener noreferrer">Robert Half Asia</a></td>
            <td><strong>Pan-Asia Recruitment Agency (Finance Focus)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Operates in Hong Kong, Singapore, Tokyo - specializes in finance & accounting cross-border placements</span></td>
            <td>
              <strong>Business Model:</strong> Contingency recruitment + contract staffing (20-30% placement fees, 40-60% markup on contractors)<br/>
              <strong>Scale:</strong> 17,000+ employees globally, ~150-200 consultants in Asia, 3K-5K Asia placements/year (est.)<br/>
              <strong>Revenue:</strong> $7.0B globally (2023), Asia-Pacific estimated $300M-500M (4-7% of global)<br/>
              <strong>Team:</strong> Public company (NYSE: RHI), smaller Asia footprint than Hays/Michael Page (only HK, SG, Tokyo)
            </td>
            <td>
              • Finance & accounting specialization (CFOs, controllers, auditors)<br/>
              • Contract/temp staffing (interim executives for Asia projects)<br/>
              • Cross-border placements (relocates finance professionals across Asia)<br/>
              • Trusted by Big 4 and multinational finance departments<br/>
              • Salary guides (annual compensation reports for Asian markets)
            </td>
            <td>
              • <strong>Finance expertise</strong> (deep knowledge of accounting, audit, FP&A)<br/>
              • <strong>Interim solutions</strong> (places contract CFOs for Asia expansions)<br/>
              • <strong>Compliance knowledge</strong> (understands different Asia accounting standards)<br/>
              • <strong>Global network</strong> (can source finance talent from US/Europe for Asia)<br/>
              • <strong>Executive search</strong> (C-suite finance placements across borders)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.iss.edu/" target="_blank" rel="noopener noreferrer">ISS (International Schools Services)</a></td>
            <td><strong>International School Recruitment (Global)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Recruits teachers for international schools worldwide, major Asia presence (China, Japan, Korea, SEA)</span></td>
            <td>
              <strong>Business Model:</strong> Job fair fees + school services (teachers pay $200-400/fair, schools pay placement fees + ISS manages some schools)<br/>
              <strong>Scale:</strong> ~3,000-5,000 teacher placements/year globally, 200+ int'l schools attend job fairs, manages 15+ schools<br/>
              <strong>Revenue:</strong> Undisclosed (nonprofit 501(c)(3), estimated $20M-40M annual from fees + school management)<br/>
              <strong>Team:</strong> ~100-150 employees, nonprofit founded 1955 Princeton NJ, Asia job fairs in Bangkok, Shanghai
            </td>
            <td>
              • Specializes in international school placements (K-12 teachers, admin)<br/>
              • Global job fairs (teachers interview with multiple schools in one event)<br/>
              • Accreditation services (helps schools maintain quality standards)<br/>
              • Trusted by premium international schools (ISS-managed schools)<br/>
              • Relocation support (housing, visa, cultural orientation)
            </td>
            <td>
              • <strong>Teaching credential verification</strong> (validates licenses, degrees)<br/>
              • <strong>School vetting</strong> (ISS-managed schools have reputation standards)<br/>
              • <strong>Job fair model</strong> (efficient multi-school interviewing)<br/>
              • <strong>Cross-border expertise</strong> (places teachers from US/UK to Asia)<br/>
              • <strong>Family support</strong> (helps teachers relocate with dependents)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.searchassociates.com/" target="_blank" rel="noopener noreferrer">Search Associates</a></td>
            <td><strong>International School Recruitment (Global)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Major competitor to ISS, recruits for international schools in Asia (China, Japan, Korea, SEA, Middle East)</span></td>
            <td>
              <strong>Business Model:</strong> Subscription model (teachers pay $185/year membership, schools pay $1,500-3,000/fair participation)<br/>
              <strong>Scale:</strong> ~10,000 teacher members, 400+ schools attend job fairs, 4,000-6,000 placements/year globally (est.)<br/>
              <strong>Revenue:</strong> Undisclosed (private company, estimated $15M-30M annual from memberships + school fees)<br/>
              <strong>Team:</strong> ~50-80 employees, founded 1983 (older than TIE, younger than ISS), Asia fairs in Bangkok, Shanghai, HK
            </td>
            <td>
              • International school network (thousands of schools globally)<br/>
              • Regional job fairs (Asia fairs in Bangkok, Shanghai, Hong Kong)<br/>
              • Teacher database (matches candidates with school vacancies)<br/>
              • Premium school focus (top-tier international schools)<br/>
              • Career coaching (helps teachers advance internationally)
            </td>
            <td>
              • <strong>School relationships</strong> (long-term partnerships with int'l schools)<br/>
              • <strong>Teacher matching</strong> (algorithm matches qualifications to vacancies)<br/>
              • <strong>Job fair efficiency</strong> (teachers interview 10+ schools in 3 days)<br/>
              • <strong>Credential verification</strong> (validates teaching licenses)<br/>
              • <strong>Multi-country coverage</strong> (helps teachers move across Asia markets)
            </td>
          </tr>
          <tr>
            <td><a href="https://www.tieonline.com/" target="_blank" rel="noopener noreferrer">TIE Online</a></td>
            <td><strong>International School Recruitment (Global)</strong><br/><span style={{ fontSize: '0.75em', color: '#718096' }}>Third major int'l school recruiter, Asia presence in China, Japan, Korea, SEA, Middle East</span></td>
            <td>
              <strong>Business Model:</strong> Subscription model (teachers pay $99-149/year, schools pay lower fees than ISS/Search for fair participation)<br/>
              <strong>Scale:</strong> ~15,000 teacher members, 300+ schools, 3,000-5,000 placements/year (est.), online-first reduces fair costs<br/>
              <strong>Revenue:</strong> Undisclosed (private company, estimated $10M-20M annual from subscriptions + school fees)<br/>
              <strong>Team:</strong> ~30-50 employees, founded 1997, pioneered virtual recruitment fairs (pre-COVID innovation)
            </td>
            <td>
              • Online-first model (virtual job fairs, video interviews)<br/>
              • Lower cost than ISS/Search (more accessible for smaller schools)<br/>
              • Year-round recruitment (not just seasonal job fair model)<br/>
              • Teacher resources (professional development, cultural guides)<br/>
              • Diverse school network (includes smaller int'l schools)
            </td>
            <td>
              • <strong>Virtual recruitment</strong> (reduces travel costs for teachers/schools)<br/>
              • <strong>Continuous hiring</strong> (not limited to annual fair season)<br/>
              • <strong>Technology platform</strong> (online profiles, video interviews, digital contracts)<br/>
              • <strong>Mid-market focus</strong> (serves schools that can't afford ISS/Search fees)<br/>
              • <strong>Asia coverage</strong> (major presence in China, Korea, SEA int'l schools)
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '20px', padding: '15px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '8px', border: '2px solid #f59e0b' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#92400e', fontSize: '1em' }}>💡 Strategic Insight: Asia Cross-Border Market</h4>
        <p style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <strong>Fragmented by Sector & Country:</strong> Cross-border hiring in Asia splits by (1) <strong>high-end professional</strong>: international recruitment agencies (Hays, Michael Page, Robert Half) serving executives/managers, (2) <strong>international school teaching</strong>: specialized recruiters (ISS, Search Associates, TIE) serving K-12 teachers, and (3) <strong>mid-market general</strong>: job boards (LinkedIn, GaijinPot) where candidates self-serve. Each sector has different visa requirements and hiring practices per country.
        </p>
        <p style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <strong>LinkedIn's Dominance vs. Niche Specialists:</strong> LinkedIn is the only true pan-Asia platform for cross-border hiring, but it lacks sector-specific expertise. GaijinPot dominates Japan foreign workers; ISS/Search dominate int'l school teaching. Each niche specialist wins by solving country-specific or sector-specific problems LinkedIn doesn't address.
        </p>
        <p style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <strong>YouTeacher's Path:</strong> Expanding beyond China teaching to "all Asia cross-border jobs" requires competing with entrenched players in each country (GaijinPot in Japan, Hays/Michael Page in Singapore/HK). <strong>Recommendation: Vertical expansion (China teaching → all China jobs) is easier than horizontal expansion (China → Japan/Korea/SEA)</strong> because each new country requires different visa expertise, language support, employer relationships, and cultural knowledge. Master one country deeply before going regional.
        </p>
      </div>

      <CompetitorHexagonChart />
    </Section>
  )
}
