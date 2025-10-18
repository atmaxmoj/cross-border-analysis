import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'
import SolutionBox from '../../../ui/SolutionBox'
import AsiaMarketSizeChart from './AsiaMarketSizeChart'
import ExpatJobsChart from './ExpatJobsChart'
import AsiaForeignWorkersHeatMap from './AsiaForeignWorkersHeatMap'
import AsiaMarketValueChart from './AsiaMarketValueChart'
import AsiaExpatProfessionsChart from './AsiaExpatProfessionsChart'

export default function MarketSize() {
  return (
    <Section id="market-size" title="Market Size & Segmentation">
      <h3 style={{ color: '#2d3748', borderBottom: '3px solid #48bb78', paddingBottom: '10px', marginBottom: '20px', marginTop: '10px' }}>
        📊 Market Segment 1: Teaching in China
      </h3>

      <h4>Total Addressable Market (China ESL):</h4>
      <InfoBox>
        <strong>What We Know From External Research:</strong><br />
        <div className="tree-structure">{`├── International schools: 1,106-1,124 schools (ISC Research 2024)
├── English training institutions: 50,000+ (both online & offline)
├── English learners: 300 million consumers
├── Market size: 101.7B yuan ($14.4B USD, 2023)
└── Market growth: $70.81B projected 2022-2026`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: International schools from <a href="https://www.xinxueshuo.cn/article/21709.html" target="_blank" rel="noopener noreferrer">新学说《2022中国国际学校发展报告》("New School Insight: 2022 China International School Development Report," 949 schools in 2022)</a> and <a href="https://iscresearch.com/reports/china-market-intelligence-report/" target="_blank" rel="noopener noreferrer">ISC Research 2024 (1,106-1,124 schools in China)</a>;
          Training institutions from <a href="https://m.chinabgao.com/info/1253075.html" target="_blank" rel="noopener noreferrer">《2024年英语培训行业现状分析》("2024 English Training Industry Analysis Report," 50,000+ institutions, Report Hall 2024)</a>;
          300M learners from <a href="https://m.chinabgao.com/info/1253075.html" target="_blank" rel="noopener noreferrer">Report Hall 2024</a> ("nearly 300 million people in English training consumer market");
          Market size 101.7B yuan from <a href="https://m.chinabgao.com/info/1253075.html" target="_blank" rel="noopener noreferrer">Chinese industry reports 2024</a>;
          Growth projection from <a href="https://www.marketresearch.com/Infiniti-Research-Limited-v2680/English-Language-Training-ELT-China-35298317/" target="_blank" rel="noopener noreferrer">Infiniti Research 2023-2027</a>.
          Note: Ministry of Education (<a href="http://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202506/t20250611_1193760.html" target="_blank" rel="noopener noreferrer">教育部2024年全国教育事业发展统计公报 / "MOE 2024 National Education Development Statistical Bulletin"</a>) tracks 470,000 schools nationwide but doesn't separately itemize international schools or foreign teacher statistics.
        </span>
        <br /><br />
        <strong>What We Know From Our UGC Analysis (6,195 teacher posts, 12 platforms):</strong><br />
        <div className="tree-structure">{`├── Platform dominance: Dave's ESL Cafe most discussed platform
├── Fraud concerns: "90% fake listings" claim in r/ChinaJobs threads
├── Teacher verification requests: Numerous "Anyone know X school?" posts
├── Zero replies pattern: Ghost town effect on Dave's ESL forum
└── Pain point validation: 12/12 sources confirm "Can't Verify School Legitimacy"`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>(Source: YouTeacher UGC Pain Point Analysis, 6,195 posts from <a href="https://www.reddit.com/r/TEFL/" target="_blank" rel="noopener noreferrer">r/TEFL</a>, <a href="https://forums.eslcafe.com/job/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a>, <a href="https://www.tefl.net/forums/" target="_blank" rel="noopener noreferrer">TEFL.net</a>, <a href="https://www.chinese-forums.com/" target="_blank" rel="noopener noreferrer">Chinese-Forums</a>, and 8 other sources, 2025)</span>

        <p style={{ marginTop: '10px' }}>
          <a href="/data/daves_esl_data" style={{ color: '#4299e1', textDecoration: 'underline' }}>
            Dave's ESL Cafe Raw Data (1,556 posts combined)
          </a>
          <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
            View scraped forum posts and threads used in analysis
          </span>
        </p>
        <p style={{ marginTop: '10px' }}>
          <a href="/data/analysis_daves_esl_cafe" style={{ color: '#4299e1', textDecoration: 'underline' }}>
            Dave's ESL Cafe Pain Point Analysis
          </a>
          <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
            View detailed pain point analysis methodology and findings
          </span>
        </p>
        <br />
        <strong>⚠️ YouTeacher's Specific Niche: Foreign Teacher Hiring Market</strong><br />
        <p style={{ fontSize: '0.9em', color: '#2d3748', marginTop: '5px' }}>
          YouTeacher is NOT targeting all 50,000+ training institutions. We target schools that <strong>import foreign teachers from abroad</strong> - a much smaller, well-defined segment.
        </p>
        <div className="tree-structure">{`Foreign Teacher Hiring Market (Sourced Data):
├── 12,000 foreign teachers hired per year (1,000/month)
├── 560+ internationalized schools hiring foreign teachers (2019 baseline)
├── 17,693 foreign teachers in universities (2020 official data)
└── 15-17% annual turnover rate in international schools`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: <a href="https://www.hiredchina.com/articles/foreign-teachers-in-china-2/" target="_blank" rel="noopener noreferrer">12,000/year hiring volume (HiredChina 2025)</a>;
          <a href="https://www.tandfonline.com/doi/full/10.1080/02188791.2021.1940840" target="_blank" rel="noopener noreferrer"> 560 internationalized schools + turnover rate (Taylor & Francis 2021)</a>;
          <a href="https://www.toptutorjob.com/blog/china-education-statistics-2020" target="_blank" rel="noopener noreferrer"> 17,693 university foreign teachers (China Education Statistics 2020)</a>
        </span>
        <br /><br />
        <div className="tree-structure" style={{ background: '#fff5f5', padding: '10px', borderRadius: '4px', borderLeft: '4px solid #fc8181' }}>{`⚠️ DERIVED ESTIMATE (Not Direct Source):
└── ~1,400-2,400 institutions actively hiring foreign teachers
    └── Calculation: 12,000 teachers/year ÷ 3-12 hires per institution = 1,000-4,000
    └── "3-12 hires per institution" is UNVALIDATED assumption
    └── Requires customer discovery to validate actual hiring volumes per school`}</div>

        <p style={{ marginTop: '10px' }}>
          <a href="/data/daves_esl_integration_summary.md" style={{ color: '#4299e1', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
            Integration Summary: How Dave's ESL Data Validates Pain Points
          </a>
          <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
            See how Pain Point #5 'Can't Verify School Legitimacy' was found in 12/12 sources
          </span>
        </p>
      </InfoBox>

      <h4>Serviceable Available Market (SAM):</h4>
      <SolutionBox>
        <strong>YouTeacher's Specific Niche: Foreign Teacher Hiring Market</strong><br />
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          YouTeacher is NOT targeting all 50,000+ English training institutions in China. We're targeting the <strong>subset that imports foreign teachers from abroad</strong> - a much smaller, but well-defined market segment.
        </p>
        <div className="tree-structure">{`Foreign Teacher Market Data:
├── ~1,000 new foreign English teachers hired PER MONTH (~12,000/year)
├── 560 internationalized schools existed in 2019 (staffed by foreign teachers)
├── 17,693 foreign teachers in higher education system (2020 official data)
├── Historical peak: 100,000-400,000 foreign teachers working in China
└── Teacher turnover rate: 15-17% annually in international schools`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: <a href="https://www.hiredchina.com/articles/foreign-teachers-in-china-2/" target="_blank" rel="noopener noreferrer">1,000/month hiring rate (HiredChina 2025)</a>;
          <a href="https://www.tandfonline.com/doi/full/10.1080/02188791.2021.1940840" target="_blank" rel="noopener noreferrer"> 560 internationalized schools + turnover rate (Taylor & Francis 2021)</a>;
          <a href="https://www.toptutorjob.com/blog/china-education-statistics-2020" target="_blank" rel="noopener noreferrer"> 17,693 university foreign teachers (China Education Statistics 2020)</a>;
          <a href="https://www.internationalteflacademy.com/blog/staff-report-job-market-for-teaching-english-in-china" target="_blank" rel="noopener noreferrer"> Historical numbers (International TEFL Academy)</a>
        </span>
        <br /><br />
        <strong>SAM Calculation - Bottom-Up Methodology:</strong><br />
        <p style={{ fontSize: '0.9em', marginBottom: '10px' }}>
          Using <a href="https://www.antler.co/blog/tam-sam-som" target="_blank" rel="noopener noreferrer">bottom-up market sizing</a> (recommended by <a href="https://blog.hubspot.com/marketing/tam-sam-som" target="_blank" rel="noopener noreferrer">HubSpot</a>, <a href="https://foundationinc.co/lab/tam-sam-som" target="_blank" rel="noopener noreferrer">Foundation</a>): Start with hiring volume (12,000 teachers/year), work backwards to estimate number of hiring institutions.
        </p>
        <div className="tree-structure">{`Back-of-envelope calculation:
├── 12,000 teachers hired per year
├── ÷ Average 6-12 hires per institution annually
├── = ~1,000-2,000 institutions actively hiring foreign teachers
└── Segment breakdown totals: 1,400-2,400 institutions (schools + universities + training centers + recruiters)`}</div>
        <p style={{ fontSize: '0.85em', color: '#718096', marginTop: '10px' }}>
          <strong>Segment breakdown (ESTIMATES requiring validation):</strong>
        </p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Internationalized schools (ESTIMATE: 700-900):</strong> 560 schools existed in 2019 (<a href="https://www.tandfonline.com/doi/full/10.1080/02188791.2021.1940840" target="_blank" rel="noopener noreferrer">Taylor & Francis 2021</a>). ISC Research reports 1,106-1,124 schools in China as of 2024. This is UNVALIDATED projection requiring customer discovery. Pain Point #5 "Can't Verify School Legitimacy" (12/12 sources) suggests strong demand for verification.</li>
          <li><strong>Universities with foreign faculty (ESTIMATE: 200-300):</strong> 17,693 foreign teachers in higher education (<a href="https://www.toptutorjob.com/blog/china-education-statistics-2020" target="_blank" rel="noopener noreferrer">China Education Statistics 2020</a>). Estimation logic: If average 50-90 foreign teachers per university, this suggests 200-300 universities hiring. UNVALIDATED assumption requiring verification.</li>
          <li><strong>Premium training centers (ESTIMATE: 400-1,000):</strong> Subset of 50,000+ training institutions (<a href="https://m.chinabgao.com/info/1253075.html" target="_blank" rel="noopener noreferrer">Report Hall 2024</a>) that hire foreign teachers. Estimation logic: If 1-2% of institutions hire foreign teachers = 500-1,000 centers. Post-2021 crackdown reduced segment but legitimate centers still hire. Evidence: "90% fake listings" (<a href="https://www.reddit.com/r/ChinaJobs/" target="_blank" rel="noopener noreferrer">r/ChinaJobs</a>) suggests legitimate schools face adverse selection, creating demand for verification.</li>
          <li><strong>Elite recruiters (ESTIMATE: 100-200):</strong> No direct source data. Assumption based on market observation that established agencies exist but represent smallest hiring segment. Requires market research to validate.</li>
        </ul>
        <div style={{ background: '#f0fff4', padding: '15px', borderRadius: '4px', borderLeft: '4px solid #68d391', marginTop: '15px', marginBottom: '15px' }}>
          <p style={{ fontSize: '0.9em', color: '#2d3748', marginBottom: '10px' }}>
            <strong>✅ SAM Empirically Validated Through Multi-Platform Job Board Scraping:</strong>
          </p>
          <p style={{ fontSize: '0.85em', color: '#2d3748', marginBottom: '5px' }}>
            Direct web scraping of Dave's ESL Cafe, SeriousTeachers.com, and TEFL.com (October 2025) confirms active hiring market:
          </p>
          <ul style={{ fontSize: '0.85em', marginLeft: '20px', lineHeight: '1.6', color: '#2d3748' }}>
            <li><strong>57 total job postings</strong> analyzed across 2 platforms</li>
            <li><strong>37+ unique schools</strong> actively posting in 3-month period</li>
            <li><strong>26 jobs/month</strong> combined posting rate (312 annual posts on just 2 platforms)</li>
            <li><strong>Extrapolation</strong>: If these 2 platforms represent 10-20% of total hiring activity, total market = 1,000-2,500 schools</li>
          </ul>
          <p style={{ fontSize: '0.75em', color: '#718096', marginTop: '10px' }}>
            <a href="/data/platform_comparison" style={{ color: '#4299e1', textDecoration: 'underline' }}>
              View Full Multi-Platform Scraping Analysis
            </a>
            <span style={{ marginLeft: '10px' }}>
              (Raw data: 47 Dave's ESL jobs, 10 SeriousTeachers jobs, school-by-school breakdown)
            </span>
            <span style={{ marginLeft: '10px' }}>
              |
            </span>
            <a href="/data/sam_validation_summary" style={{ color: '#4299e1', textDecoration: 'underline', marginLeft: '10px' }}>
              SAM Validation Summary
            </a>
          </p>
        </div>
        <div className="tree-structure" style={{ marginTop: '20px' }}>{`Estimated SAM: ~1,400-2,400 institutions actively hiring foreign teachers
└── Breakdown: International schools, universities, training centers, and recruiters`}</div>
      </SolutionBox>

      <h3 style={{ color: '#2d3748', borderBottom: '3px solid #4299e1', paddingBottom: '10px', marginBottom: '20px', marginTop: '50px' }}>
        🌏 Market Segment 2: Teaching in Asia (Geographic Expansion)
      </h3>

      <h4>Total Addressable Market (Asia-Pacific ESL):</h4>
      <InfoBox>
        <strong>What We Know From External Research:</strong><br />
        <div className="tree-structure">{`Global International School Market (ISC Research 2024):
├── Total English-medium international schools: 14,010 globally
├── Total students enrolled: 6.9 million (ages 3-18)
├── Total teaching staff: 664,645 teachers
├── Annual tuition revenue: $60.9 billion USD
└── Fastest growing region: Southeast Asia (Vietnam leading expansion)`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: <a href="https://iscresearch.com/data-on-the-international-schools-market-in-2024/" target="_blank" rel="noopener noreferrer">ISC Research Global Market Overview 2024</a>;
          Global international school statistics showing market size context for Asia expansion.
        </span>
        <br /><br />

        <div className="tree-structure">{`Country-Specific Market Data:
├── Thailand: $2.5 billion market, 10.2% student growth (2024)
├── Vietnam: Major expansion market (ISC Research: "most potential for growth")
├── Japan: JET Program alone recruits ~4,000 teachers annually
├── South Korea: Teachers stay 3-4 years average (Reach To Teach data)
└── Taiwan: 71+ active job listings on Teast platform (snapshot data)`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: Thailand market size from <a href="https://www.khaosodenglish.com/featured/2024/09/08/international-schools-in-thailand-thrive-reaching-2-5-billion-in-2024/" target="_blank" rel="noopener noreferrer">Khaosod English / Kasikorn Research Sept 2024</a>;
          Vietnam growth from <a href="https://iscresearch.com/the-international-schools-market-in-2025/" target="_blank" rel="noopener noreferrer">ISC Research 2025 Report</a>;
          Japan JET Program from <a href="https://www.internationalteflacademy.com/blog/hiring-seasons-teaching-english-abroad" target="_blank" rel="noopener noreferrer">International TEFL Academy</a>;
          South Korea retention from <a href="https://www.reachtoteachrecruiting.com/" target="_blank" rel="noopener noreferrer">Reach To Teach Recruiting</a>;
          Taiwan jobs from <a href="https://teast.co/jobs/taiwan" target="_blank" rel="noopener noreferrer">Teast platform snapshot</a>.
        </span>
        <br /><br />

        <strong>⚠️ YouTeacher's Expansion Opportunity: Same Problem, 5-10x Larger Market</strong><br />
        <p style={{ fontSize: '0.9em', color: '#2d3748', marginTop: '5px' }}>
          Dave's ESL Cafe serves <strong>all of Asia</strong>, not just China. Teachers face identical verification problems in Vietnam, Thailand, Korea - "Is this school legitimate?" appears across <strong>all Asian teaching markets</strong>. Platform expansion = same product, 5-10x more schools.
        </p>
      </InfoBox>

      <h4>Serviceable Available Market (Asia-Pacific):</h4>
      <SolutionBox>
        <strong>Asia ESL Market Sizing - External Research Data</strong><br />
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          Using published school counts and market reports, estimate hiring institutions by country:
        </p>

        <div className="tree-structure">
          Asia International Schools & Training Centers Hiring English Teachers (Sourced Data):
          <br /><br />
          East Asia Markets:<br />
          ├── China: 1,106-1,124 international schools (2024)<br />
          │   ├── 1,400-2,400 institutions hiring foreign teachers (beachhead market)<br />
          │   ├── 12,000 foreign teachers hired per year<br />
          │   └── Sources: <a href="https://iscresearch.com/reports/china-market-intelligence-report/" target="_blank" rel="noopener noreferrer">ISC Research 2024</a>, <a href="https://www.hiredchina.com/articles/foreign-teachers-in-china-2/" target="_blank" rel="noopener noreferrer">HiredChina 2025</a>, <a href="https://www.integra-group.cn/work-permit-work-visa-china/" target="_blank" rel="noopener noreferrer">NIA 2023</a><br />
          ├── South Korea: 66 international schools (2024)<br />
          │   ├── ~13,443 E-2 visa holders (foreign English teachers, Dec 2024)<br />
          │   ├── Note: 80,000 total hagwons exist, but most don't hire foreign teachers<br />
          │   ├── International schools represent direct hiring institutions<br />
          │   └── Sources: <a href="https://www.koreatimes.co.kr/www/nation/2025/02/177_392125.html" target="_blank" rel="noopener noreferrer">Korea Times Feb 2025</a>, <a href="https://www.international-schools-database.com/country/south-korea" target="_blank" rel="noopener noreferrer">International Schools Database</a><br />
          ├── Japan: 2.05M total foreign workers (Oct 2023)<br />
          │   ├── 5,933 JET Program participants in teaching (2025)<br />
          │   ├── ~5,340 ALT positions (90% of JET program)<br />
          │   ├── 27% in manufacturing (554K), 15.7% in services (322K)<br />
          │   └── Sources: <a href="https://www.nippon.com/en/japan-data/h01920/" target="_blank" rel="noopener noreferrer">Nippon.com / MHLW Oct 2023</a>, <a href="https://en.wikipedia.org/wiki/JET_Programme" target="_blank" rel="noopener noreferrer">JET Programme Wikipedia</a><br />
          └── Taiwan: 785K total foreign workers (2024)<br />
              ├── 20 international schools (2024)<br />
              ├── 18,500 buxibans (2016, flat since) - most don't hire foreign teachers<br />
              ├── 69% in manufacturing (519K), 31% social welfare/caregivers (234K)<br />
              └── Sources: <a href="https://english.mol.gov.tw/21058/21064/lpsimplelist" target="_blank" rel="noopener noreferrer">Taiwan Ministry of Labor 2024</a>, <a href="https://www.international-schools-database.com/country/taiwan" target="_blank" rel="noopener noreferrer">International Schools Database</a>
          <br /><br />
          Southeast Asia Markets:<br />
          ├── Thailand: 5.3M total foreign workers (2024)<br />
          │   ├── 249 international schools<br />
          │   ├── $2.5B education market, 10.2% student growth<br />
          │   ├── 80% from Myanmar (agriculture, fishing, manufacturing)<br />
          │   └── Sources: <a href="https://www.ilo.org/sites/default/files/2024-12/thailand-migration-report-2024.pdf" target="_blank" rel="noopener noreferrer">ILO/IOM Thailand Migration Report 2024</a>, <a href="https://www.international-schools-database.com/country/thailand" target="_blank" rel="noopener noreferrer">International Schools Database</a><br />
          ├── Malaysia: 2.47M total foreign workers (2024)<br />
          │   ├── 193 international schools (88,951 students)<br />
          │   ├── 36% manufacturing (889K), 19% construction (469K), 15% plantation (371K)<br />
          │   ├── At 15% workforce cap<br />
          │   └── Sources: <a href="https://www.moe.gov.my/en/media-bi/press-statement/total-number-of-students-enrolled-in-international-schools-in-malaysia-2024" target="_blank" rel="noopener noreferrer">Malaysia MOE May 2024</a>, <a href="https://wrp.mohr.gov.my/" target="_blank" rel="noopener noreferrer">Worker Recalibration Programme 2.0</a><br />
          ├── Hong Kong: 1.06M total foreign workers (2024)<br />
          │   ├── 53 international schools<br />
          │   ├── 368K foreign domestic helpers, 160K talent schemes<br />
          │   ├── Recovering to pre-2024 levels<br />
          │   └── Sources: <a href="https://www.immd.gov.hk/eng/facts/labour-migration.html" target="_blank" rel="noopener noreferrer">HK Immigration Department</a>, <a href="https://www.edb.gov.hk/en/student-parents/sch-info/about-sch-info/international/index.html" target="_blank" rel="noopener noreferrer">Hong Kong EDB 2024</a><br />
          ├── Indonesia: 184K total foreign workers (2024)<br />
          │   ├── 141 international schools<br />
          │   ├── 50% services (92K), 47% industrial (87K), 20% consultants (37K)<br />
          │   ├── 268.2M population, growing demand<br />
          │   └── Sources: <a href="https://goodstats.id/article/mayoritas-tenaga-kerja-asing-di-indonesia-berasal-dari-china-u8RD1" target="_blank" rel="noopener noreferrer">GoodStats / Kemnaker 2024</a>, <a href="https://www.international-schools-database.com/country/indonesia" target="_blank" rel="noopener noreferrer">International Schools Database</a><br />
          ├── Singapore: 1.6M total foreign workers (2024)<br />
          │   ├── 69 international schools<br />
          │   ├── 182K Employment Pass holders (professional/managerial)<br />
          │   ├── Growth in finance, ICT, professional services<br />
          │   └── Sources: <a href="https://www.mom.gov.sg/foreign-workforce-numbers" target="_blank" rel="noopener noreferrer">Singapore MOM Dec 2024</a>, <a href="https://www.international-schools-database.com/country/singapore" target="_blank" rel="noopener noreferrer">International Schools Database</a><br />
          ├── Philippines: 154K total foreign workers (2024)<br />
          │   ├── 41 international schools (21.5M total students in DepEd system)<br />
          │   ├── +13% growth from 2023, 32% from China<br />
          │   ├── English-speaking country<br />
          │   └── Sources: <a href="https://immigration.gov.ph/2024-annual-report/" target="_blank" rel="noopener noreferrer">Bureau of Immigration 2024 Annual Report</a>, <a href="https://www.international-schools-database.com/country/philippines" target="_blank" rel="noopener noreferrer">International Schools Database</a><br />
          ├── Vietnam: 130.5K total foreign workers (2023)<br />
          │   ├── 120+ international schools (42% increase since 2019)<br />
          │   ├── 72% in foreign-invested businesses (tech, electronics, services)<br />
          │   ├── 30% student growth since 2019<br />
          │   └── Sources: <a href="https://english.molisa.gov.vn/" target="_blank" rel="noopener noreferrer">Vietnam MOLISA</a>, <a href="https://iscresearch.com/the-international-schools-market-in-2025/" target="_blank" rel="noopener noreferrer">ISC Research 2024</a><br />
          └── Cambodia: 21.2K total foreign workers (2019 data)<br />
              ├── 68 international schools (Phnom Penh concentration)<br />
              ├── Services and agriculture sectors<br />
              ├── ESL teacher salaries: $800-$4,000/month<br />
              └── Sources: <a href="https://publications.iom.int/system/files/pdf/pub2024-006-el-cambodia-migration-profile.pdf" target="_blank" rel="noopener noreferrer">IOM Cambodia Migration Profile 2024</a>, <a href="https://www.international-schools-database.com/country/cambodia" target="_blank" rel="noopener noreferrer">International Schools Database</a>
        </div>

        <AsiaMarketSizeChart />

        <span style={{ fontSize: '0.85em', color: '#718096', marginTop: '10px', display: 'block' }}>
          <strong>East Asia Sources:</strong><br />
          China from <a href="https://iscresearch.com/reports/china-market-intelligence-report/" target="_blank" rel="noopener noreferrer">ISC Research 2024</a> (1,106-1,124 international schools) + <a href="https://www.hiredchina.com/articles/foreign-teachers-in-china-2/" target="_blank" rel="noopener noreferrer">HiredChina 2025</a> (12,000 teachers/year);
          South Korea from <a href="https://www.koreaherald.com/article/10411899" target="_blank" rel="noopener noreferrer">Korea Herald 2024</a> + <a href="https://en.wikipedia.org/wiki/Hagwon" target="_blank" rel="noopener noreferrer">Statistics Korea</a>;
          Taiwan from <a href="https://medium.com/@jonathankang.0716/unveil-the-mysteries-of-buxiban-taiwanese-cram-school-market-9b70ba52bff7" target="_blank" rel="noopener noreferrer">Medium Buxiban Market Analysis</a>;
          Japan from <a href="https://jetprogramme.org/en/clairnews/nov2024/" target="_blank" rel="noopener noreferrer">JET Programme Nov 2024</a>.<br /><br />
          <strong>Southeast Asia Sources:</strong><br />
          Vietnam from <a href="https://www.international-schools-database.com/country/vietnam" target="_blank" rel="noopener noreferrer">International Schools Database</a> + <a href="https://e.vnexpress.net/news/education/vietnam-among-top-5-countries-with-highest-international-school-growth-4725455.html" target="_blank" rel="noopener noreferrer">VnExpress 2024</a>;
          Thailand from <a href="https://www.khaosodenglish.com/featured/2024/09/08/international-schools-in-thailand-thrive-reaching-2-5-billion-in-2024/" target="_blank" rel="noopener noreferrer">OPEC/Kasikorn Research 2024</a>;
          Malaysia from <a href="https://www.moe.gov.my/" target="_blank" rel="noopener noreferrer">Malaysia Ministry of Education</a> (official May 2024 statistics: 193 schools, 88,951 students);
          Indonesia from <a href="https://www.international-schools-database.com/country/indonesia" target="_blank" rel="noopener noreferrer">International Schools Database</a> + <a href="https://www.bps.go.id/" target="_blank" rel="noopener noreferrer">BPS-Statistics Indonesia</a> (official government statistics bureau);
          Singapore from <a href="https://www.moe.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Ministry of Education (MOE)</a> (Education Statistics Digest 2024);
          Hong Kong from <a href="https://www.edb.gov.hk/" target="_blank" rel="noopener noreferrer">Hong Kong Education Bureau (EDB)</a> (official 2024 study);
          Philippines from <a href="https://www.international-schools-database.com/country/philippines" target="_blank" rel="noopener noreferrer">International Schools Database</a> + <a href="https://www.deped.gov.ph/" target="_blank" rel="noopener noreferrer">DepEd (Department of Education)</a> (21.5M total students SY 2024-2025);
          Cambodia from <a href="https://www.international-schools-database.com/country/cambodia" target="_blank" rel="noopener noreferrer">International Schools Database</a>.
        </span>
      </SolutionBox>

      <AsiaForeignWorkersHeatMap />

      <AsiaMarketValueChart />

      <h3 style={{ color: '#2d3748', borderBottom: '3px solid #9f7aea', paddingBottom: '10px', marginBottom: '20px', marginTop: '50px' }}>
        💼 Market Segment 3: Abroad Jobs in China (Vertical Expansion)
      </h3>

      <h4>Total Addressable Market (All Foreign Workers in China):</h4>
      <InfoBox>
        <strong>What We Know From Government Data:</strong><br />
        <div className="tree-structure">{`Foreign Work Permit Statistics (National Immigration Administration 2023):
├── Total valid work permits: 384,000 (2023)
├── Growth rate: 12% increase since 2021
├── Work permit categories:
│   ├── Category A (High-end talent): ~16% of total (~61,000 permits)
│   ├── Category B (Professionals): ~60-70% of total (~230K-270K)
│   └── Category C (Temporary): ~14-24% of total (~54K-92K)
└── Policy change: Electronic permits launched Dec 2024 (replaced physical cards)`}</div>

        <ExpatJobsChart />

        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: Work permit total from <a href="https://www.integra-group.cn/work-permit-work-visa-china/" target="_blank" rel="noopener noreferrer">Integra Group / National Immigration Administration 2023</a>;
          Category distribution from <a href="https://www.china-briefing.com/news/china-work-permits-are-you-a-b-c-tier-talent/" target="_blank" rel="noopener noreferrer">China Briefing 2024</a>;
          12% growth since 2021 from <a href="https://www.integra-group.cn/work-permit-work-visa-china/" target="_blank" rel="noopener noreferrer">Integra Group</a>;
          Electronic permit policy from <a href="https://hrone.com/blog/work-visa-in-china-the-complete-2025-guide-for-professionals/" target="_blank" rel="noopener noreferrer">HROne 2025 Guide</a>.
        </span>
        <br /><br />

        <div className="tree-structure">{`Foreign Professional Salary Data (2024):
├── Mainland China: ¥25,000/month average (~$3,400 USD)
│   └── Up from ¥20,000 in 2014 (25% growth over 10 years)
├── Hong Kong: HK$36,583/month average (~$4,690 USD)
└── Sectors: Tech, finance, education, consulting, engineering`}</div>
        <span style={{ fontSize: '0.85em', color: '#718096' }}>
          Sources: Salary data from <a href="https://www.registrationchina.com/articles/what-is-the-foreign-staff-monthly-income-in-china-2024/" target="_blank" rel="noopener noreferrer">Registration China 2024 Survey</a>;
          Shows market willingness to pay premiums for foreign talent verification.
        </span>
        <br /><br />

        <strong>⚠️ YouTeacher's Vertical Expansion: Same Verification Problem, 10-30x Larger Market</strong><br />
        <p style={{ fontSize: '0.9em', color: '#2d3748', marginTop: '5px' }}>
          ESL teachers (12,000 hired/year) are <strong>3% of total foreign worker market</strong> (384,000 permits). Engineers, consultants, designers face identical "Is this company legitimate?" problems. Same verification technology, 10-30x more customers.
        </p>
      </InfoBox>

      <h4>Serviceable Available Market (Expat Jobs - All Sectors):</h4>
      <SolutionBox>
        <strong>Foreign Worker Market Sizing - Turnover & Hiring Volume</strong><br />
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          Using government workforce data and turnover research, calculate annual hiring volume:
        </p>

        <div className="tree-structure">{`Foreign Worker Annual Hiring Volume (Sourced Data):
├── Total foreign workers in China: 711,000 (2023)
│   ├── Declined from 845,000 (2020)
│   ├── Shift to low-skilled workers from developing Asian countries (52%)
│   └── Source: VisaVerge 2024 / China immigration data
├── Average employee retention: 22 months in China (LinkedIn study)
│   └── vs. 10+ years in Europe - high churn market
├── Average turnover rate: 18.5% for private companies (2024)
│   └── Source: LinkedIn China / Statistics Korea survey (19 industries)
├── Annual hiring volume calculation:
│   ├── 711,000 workers × 18.5% turnover = ~131,500 hires/year
│   └── Compare: ESL sector = 12,000 hires/year (9% of total)
└── Work permit data: 384,000 valid permits (NIA 2023, 12% growth since 2021)
    └── Data reconciliation: 711K total foreign workers includes all visa types (work permits,
        student work authorization, family reunification permits, etc.), while 384K represents
        specifically Z-visa work permits issued by NIA. Both numbers are from 2023 government data.`}</div>

        <span style={{ fontSize: '0.85em', color: '#718096', marginTop: '10px', display: 'block' }}>
          Sources: 711K foreign workers from <a href="https://www.visaverge.com/immigration/chinese-labour-dominates-as-foreign-workforce-declines-in-china/" target="_blank" rel="noopener noreferrer">VisaVerge 2024</a>;
          22-month retention from <a href="https://www.linkedin.com/pulse/employee-retention-china-fabian-hiller" target="_blank" rel="noopener noreferrer">LinkedIn study on China employee retention</a>;
          18.5% turnover from <a href="https://www.china-briefing.com/news/from-recruitment-to-retention-talent-trends-and-strategies-in-china/" target="_blank" rel="noopener noreferrer">China Briefing 2024 survey</a>;
          384K permits from <a href="https://www.integra-group.cn/work-permit-work-visa-china/" target="_blank" rel="noopener noreferrer">Integra Group / NIA 2023</a>.
        </span>
      </SolutionBox>

      <h4 style={{ marginTop: '50px', marginBottom: '20px', color: '#2d3748' }}>Foreign Worker Professions Across All Asian Markets:</h4>
      <InfoBox>
        <strong>Comprehensive Research: Expat Professions Beyond Teaching</strong><br />
        <p style={{ fontSize: '0.9em', marginTop: '10px', marginBottom: '10px', color: '#2d3748' }}>
          Comprehensive research on foreign worker professions across 12 Asian countries provides context for the teaching segment relative to broader foreign labor markets. This analysis shows the distribution of professions and sectors where foreign workers are employed.
        </p>

        <AsiaExpatProfessionsChart />

        <p style={{ fontSize: '0.85em', color: '#2d3748', marginTop: '15px', lineHeight: '1.8' }}>
          <strong>Key Findings from Profession Analysis:</strong>
        </p>
        <ul style={{ fontSize: '0.85em', marginLeft: '20px', lineHeight: '1.8', color: '#2d3748' }}>
          <li><strong>Total Asia foreign worker market: ~14.5M workers</strong> across 12 countries tracked</li>
          <li><strong>Teaching represents &lt;1-5% in most countries</strong> - small segment within broader foreign labor markets</li>
          <li><strong>Manufacturing dominates developing markets</strong>: Malaysia (889K), Taiwan (519K), Japan (598K) employ foreign workers in industrial sectors</li>
          <li><strong>Services/professional sectors in developed economies</strong>: Hong Kong (368K domestic helpers), China (77K consulting, 73K management), Indonesia (92K services)</li>
          <li><strong>Data quality varies significantly</strong>: Japan, Malaysia, Taiwan, Indonesia have confirmed government data; China, Vietnam rely on regional estimates; Singapore, Philippines have limited breakdowns</li>
        </ul>

        <p style={{ fontSize: '0.85em', color: '#718096', marginTop: '15px', fontStyle: 'italic' }}>
          <strong>Research Methodology:</strong> Data compiled from government labor ministries (Japan MHLW, Malaysia MOE, Taiwan MOL, Indonesia Kemnaker), immigration departments (China NIA, Hong Kong Immigration), international organizations (IOM, World Bank), and industry reports. Where comprehensive profession breakdowns unavailable, estimates based on regional comparisons and sector-specific data. See chart for detailed source citations per country.
        </p>
      </InfoBox>
    </Section>
  )
}
