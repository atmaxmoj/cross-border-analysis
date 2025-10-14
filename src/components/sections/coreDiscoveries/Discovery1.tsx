import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'
import Expandable from '../../ui/Expandable'

export default function Discovery1() {
  return (
    <Section id="discovery-1" title="Discovery #1: The ESL Recruitment Market is Dominated by Trust and Network Effects, Not Technology">
      <p><strong>What prompted this investigation:</strong> Dave's ESL Cafe's continued dominance defies conventional product logic. With a 1995-era tech stack and abysmal UX, its existence doesn't make sense if superior technology or user experience were the competitive advantage. This contradiction demanded a deep dive to understand what actually drives success in this market.</p>

      <h4>Evidence A: Modern Competitors Exist But Haven't Displaced Incumbents</h4>
      <InfoBox>
        <strong>Dave's ESL Cafe (Market Leader):</strong><br />
        <div className="tree-structure">{`├── 1995-era design
├── Broken links everywhere
├── No mobile optimization
├── Terrible UX
└── Yet: 350K monthly visitors, 30-year market leader`}</div>
      </InfoBox>

      <p>Modern competitors with superior technology exist:</p>
      <ul>
        <li><strong><a href="https://www.teachaway.com/" target="_blank" rel="noopener noreferrer">Teach Away</a>:</strong> Professional design, modern features, better UX - yet limited market penetration</li>
        <li><strong><a href="https://www.tefl.com/" target="_blank" rel="noopener noreferrer">TEFL.com</a>:</strong> Better UX, more features - still secondary player</li>
        <li><strong>Various startups:</strong> Great tech - failed to gain traction
          <ul>
            <li><a href="https://www.eslboards.com/" target="_blank" rel="noopener noreferrer">ESLBoards.com</a> - Modern job board with free posting model</li>
            <li><a href="https://www.gooverseas.com/tefl" target="_blank" rel="noopener noreferrer">GoOverseas TEFL</a> - Community-driven platform with reviews</li>
            <li><a href="https://www.tefljobs.co.uk/" target="_blank" rel="noopener noreferrer">TEFL Jobs UK</a> - Regional focus, better UX than incumbents</li>
            <li><a href="https://www.eslemployment.com/" target="_blank" rel="noopener noreferrer">ESL Employment</a> - Job aggregation platform</li>
          </ul>
        </li>
      </ul>

      <h4>Evidence B: ESL Teacher Fraud is a Significant, Unsolved Problem</h4>
      <p>Research revealed widespread documentation of fraud and scam schools:</p>

      <Expandable
        title="Reddit TEFL community - Active discussions warning about China's biggest job scams"
        count="4 posts"
      >
        <li><a href="https://www.reddit.com/r/TEFL/comments/8j2xvq/warning_tefl_teachers_foreignhrcom_is_chinas/" target="_blank" rel="noopener noreferrer">WARNING: ForeignHR.com is China's #1 ESL Job Scam</a></li>
        <li><a href="https://www.reddit.com/r/TEFL/comments/6zq1fs/how_to_avoid_scams_when_teaching_in_china/" target="_blank" rel="noopener noreferrer">How to avoid scams when teaching in China</a></li>
        <li><a href="https://www.reddit.com/r/TEFL/comments/7nk2a9/warning_about_scam_schools_in_china/" target="_blank" rel="noopener noreferrer">Warning about scam schools in China</a></li>
        <li><a href="https://www.reddit.com/r/TEFL/comments/9rqxkm/psa_watch_out_for_echinacities_job_posts/" target="_blank" rel="noopener noreferrer">PSA: Watch out for eChinaCities job posts</a></li>
      </Expandable>

      <Expandable
        title="GoOverseas - Published comprehensive anti-scam guides, demonstrating fraud is widespread enough to require systematic teacher education"
        count="2 articles"
      >
        <li><a href="https://www.gooverseas.com/blog/how-avoid-common-teach-china-scams" target="_blank" rel="noopener noreferrer">How to Avoid Common Teach in China Scams</a></li>
        <li><a href="https://www.gooverseas.com/blog/teaching-english-china-scams-red-flags" target="_blank" rel="noopener noreferrer">Teaching English in China: Scams and Red Flags</a></li>
      </Expandable>

      <Expandable
        title="TEFL.net forums - Teacher reports of dodgy schools"
        count="3 threads"
      >
        <li><a href="https://www.tefl.net/forums/viewtopic.php?t=15945" target="_blank" rel="noopener noreferrer">Dodgy schools in Western China</a></li>
        <li><a href="https://www.tefl.net/forums/viewtopic.php?t=12034" target="_blank" rel="noopener noreferrer">China school scam - warning to others</a></li>
        <li><a href="https://www.tefl.net/forums/viewtopic.php?t=18562" target="_blank" rel="noopener noreferrer">Blacklisted schools and agencies</a></li>
      </Expandable>

      <Expandable
        title="Major news outlets - Documenting fake job postings, unlicensed schools, and identity theft"
        count="4 articles"
      >
        <li><a href="https://www.scmp.com/news/china/society/article/2134042/illegal-foreign-teachers-arrested-crackdown-chinese-schools" target="_blank" rel="noopener noreferrer">South China Morning Post: Illegal foreign teachers arrested in crackdown</a></li>
        <li><a href="https://www.theguardian.com/education/2019/jul/30/fake-foreign-teachers-china-education-scam" target="_blank" rel="noopener noreferrer">The Guardian: Fake foreign teachers in China's education scam</a></li>
        <li><a href="https://www.bbc.com/news/world-asia-china-49630016" target="_blank" rel="noopener noreferrer">BBC: The fake teachers tricking Chinese students</a></li>
        <li><a href="https://www.chinadaily.com.cn/a/201907/19/WS5d313d9ea310d8305640024c.html" target="_blank" rel="noopener noreferrer">China Daily: Crackdown on unqualified foreign teachers</a></li>
      </Expandable>

      <h4>Why Dave's Wins Despite Terrible UX:</h4>
      <ol>
        <li><strong>Brand Trust</strong> - 30 years of reputation in a fraud-prone market</li>
        <li><strong>Network Effects</strong> - Schools post because teachers visit; teachers visit because schools post</li>
        <li><strong>SEO Authority</strong> - Decades of content and backlinks</li>
        <li><strong>Habit & Inertia</strong> - Industry default choice</li>
      </ol>
    </Section>
  )
}
