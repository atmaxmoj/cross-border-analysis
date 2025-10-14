import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'
import ProblemBox from '../../ui/ProblemBox'
import SolutionBox from '../../ui/SolutionBox'

export default function AllContradictions() {
  return (
    <>
      <Section id="contradiction-1" title="Contradiction #1: Trust Over Tech">
        <h4>The Problem:</h4>
        <p>Pete's assumption: "Better UX will win users from Dave's Cafe"</p>

        <h4>Reality Check:</h4>
        <InfoBox>
          <strong>Dave's Monthly Visitors:</strong> 350,000<br />
          <strong>Dave's Age:</strong> 30 years<br />
          <strong>Dave's Mobile Score:</strong> 15/100<br />
          <strong>Dave's Feature Set:</strong> Basic<br /><br />

          <strong>Teach Away Monthly Visitors:</strong> 80,000<br />
          <strong>Teach Away Age:</strong> 15 years<br />
          <strong>Teach Away Mobile Score:</strong> 85/100<br />
          <strong>Teach Away Feature Set:</strong> Advanced<br /><br />

          <strong>Conclusion:</strong> 4x traffic difference despite vastly inferior tech
        </InfoBox>

        <h4>Why:</h4>
        <ul>
          <li>Teachers trust Dave's reputation over Teach Away's features</li>
          <li>"Everyone uses Dave's" = network effect</li>
          <li>Risk aversion in career decisions</li>
          <li>Schools go where teachers are, teachers go where jobs are</li>
        </ul>

        <h4>Solution:</h4>
        <p>Don't compete on UX alone. Compete on trust:</p>
        <SolutionBox>
          <strong>YouTeacher Value Prop:</strong><br />
          "The Safe ESL Job Board"<br /><br />

          <strong>Features:</strong><br />
          <div className="tree-structure">{`├── School verification scores (0-100)
├── Teacher review system (Glassdoor model)
├── Scam school blacklist (publicly maintained)
├── Contract dispute mediation
└── Background checks for listed schools`}</div>
          <br />
          <strong>Marketing Message:</strong><br />
          "Dave's Cafe has the jobs. We tell you which ones are legit."
        </SolutionBox>

        <p>This creates a <strong>complementary moat</strong>, not a replacement strategy.</p>
      </Section>

      <Section id="contradiction-2" title="Contradiction #2: Chicken & Egg Cold Start">
        <p><em>(Covered extensively in Discovery #2)</em></p>

        <h4>Additional Context:</h4>
        <p>Historical examples of failed dual-sided cold starts:</p>
        <ul>
          <li>Google+ (social network, couldn't bootstrap network)</li>
          <li>Quibi (content platform, no content or audience)</li>
          <li>Countless marketplace startups</li>
        </ul>

        <p>Successful aggregation strategies:</p>
        <ul>
          <li>Yelp (scraped phone books, added reviews)</li>
          <li>Zillow (aggregated MLS, added estimates)</li>
          <li>Product Hunt (curated existing products, added discovery)</li>
        </ul>
      </Section>

      <Section id="contradiction-3" title="Contradiction #3: Multi-Revenue Stream Trap">
        <h4>The Illusion:</h4>
        <p>More revenue streams = Lower risk + Higher total revenue</p>

        <h4>The Reality:</h4>
        <p><strong>Why This Fails:</strong></p>
        <p>Each revenue stream requires:</p>
        <ul>
          <li>Different customer acquisition strategy</li>
          <li>Different sales process</li>
          <li>Different product features</li>
          <li>Different support infrastructure</li>
          <li>Different success metrics</li>
        </ul>

        <p><strong>Result:</strong> 9 revenue streams done poorly vs. 1 done excellently</p>

        <h4>Solution: Sequential Focus</h4>
        <InfoBox>
          <strong>Successful Company Revenue Streams (First 3 Years):</strong><br /><br />
          Airbnb: 1 (host commission)<br />
          Uber: 1 (ride commission)<br />
          LinkedIn: 1 (recruiting solutions)<br />
          Slack: 1 (seat-based subscription)<br /><br />
          <strong>Pete's Plan Year 1:</strong> 9 simultaneous streams
        </InfoBox>

        <SolutionBox>
          <strong>Quarter 1-4:</strong><br />
          primary: Job posting fees ($75-149/post)<br />
          secondary: None<br />
          goal: Prove schools will pay for verified placement<br /><br />

          <strong>Quarter 5-8:</strong><br />
          primary: Job posting fees (scale)<br />
          secondary: Subscription model ($99/month unlimited)<br />
          goal: Convert high-frequency recruiters to subscription<br /><br />

          <strong>Quarter 9-12:</strong><br />
          primary: Subscription revenue<br />
          secondary: Featured placement upgrades<br />
          tertiary: Consider adjacent streams<br /><br />

          <strong>Year 2+:</strong><br />
          Expand to adjacent revenue after core is proven
        </SolutionBox>
      </Section>

      <Section id="contradiction-4" title="Contradiction #4: Global Ambition vs. Local Execution">
        <h4>The Temptation:</h4>
        <p>Total Addressable Market increases with each country:</p>
        <ul>
          <li>China: 2,000 schools</li>
          <li>Korea: 3,500 schools</li>
          <li>Japan: 2,000 schools</li>
          <li>SE Asia: 5,000 schools</li>
          <li>= 12,500 schools (looks great on pitch deck!)</li>
        </ul>

        <h4>The Trap:</h4>
        <ProblemBox>
          <strong>Reality of Multi-Country Launch:</strong><br /><br />
          Each country requires:<br />
          <div className="tree-structure">{`├── Different school verification process
├── Different teacher certification standards
├── Different visa requirements knowledge
├── Different languages/translation
├── Different payment methods
├── Different marketing channels
└── Different legal compliance`}</div>
          <br />
          <strong>Cost:</strong> 3-5 months per country<br />
          <strong>Result:</strong> Stretched team, no PMF anywhere
        </ProblemBox>

        <h4>Solution: China-First Strategy</h4>
        <SolutionBox>
          <strong>Phase 1 (Months 1-12): China Depth</strong><br />
          <div className="tree-structure">{`├── Master verification in one regulatory environment
├── Build repeatable sales process
├── Achieve profitability in single market
└── Goal: 50+ paying schools, $100K ARR`}</div>
          <br />
          <strong>Phase 2 (Months 13-24): Korea Expansion</strong><br />
          <div className="tree-structure">{`├── Apply proven China playbook
├── Hire Korea-speaking team member
├── Localize verification standards
└── Goal: Replicate China success`}</div>
          <br />
          <strong>Phase 3 (Year 3+): Systematic Expansion</strong><br />
          └── Open new markets only after prior market is profitable
        </SolutionBox>
      </Section>

      <Section id="contradiction-5" title="Contradiction #5: B2C Dream vs. B2B Reality">
        <h4>The Tension:</h4>
        <InfoBox>
          Who pays: Schools (B2B)<br />
          Who uses: Teachers (B2C)<br />
          Product optimized for: ???
        </InfoBox>

        <h4>Solution: Dual Optimization</h4>
        <SolutionBox>
          <strong>Teacher Side (B2C - Free):</strong><br />
          <div className="tree-structure">{`├── Premium search/filtering
├── School verification scores
├── Salary data
├── Teacher reviews
├── Email alerts
└── Mobile-optimized`}</div>
          <br />
          <strong>School Side (B2B - Paid):</strong><br />
          <div className="tree-structure">{`├── Job posting ($75-149/post)
├── Verification badge upgrade
├── Featured placement
├── Applicant tracking
├── Bulk posting discounts
└── Analytics dashboard`}</div>
          <br />
          <strong>Balance:</strong> Both need to be excellent,<br />
          but B2B features drive revenue
        </SolutionBox>
      </Section>

      <Section id="contradiction-6" title="Contradiction #6: Technology vs. Team Bandwidth">
        <h4>Current Team:</h4>
        <InfoBox>
          Pete: Product + Domain Expertise<br />
          Mojo: Full-stack developer<br /><br />
          Reality:<br />
          └── 2-person team needs to be strategic about feature prioritization
        </InfoBox>

        <h4>2-Person Strategy:</h4>
        <SolutionBox>
          <strong>Core Principle: Automation over hiring</strong><br /><br />

          <strong>Phase 1 (Months 1-3): Essential features only</strong><br />
          <div className="tree-structure">{`├── Job aggregation (automated)
├── Basic filtering (Mojo builds once)
├── School verification (Pete manages, simple workflow)
└── Payment processing (Stripe/Ping++, off-the-shelf)`}</div>
          <br />
          <strong>Phase 2 (Months 4-6): Self-service automation</strong><br />
          <div className="tree-structure">{`├── School dashboard (self-service, reduces support needs)
├── Automated email sequences (onboarding, renewals)
├── AI chatbot for FAQs (reduces Pete's support time)
└── Analytics (use existing tools like PostHog)`}</div>
          <br />
          <strong>Phase 3 (Months 7-12): Scale without adding headcount</strong><br />
          <div className="tree-structure">{`├── Advanced filtering (AI-powered, but automated)
├── Community features (minimal moderation needed)
├── API integrations (one-time build by Mojo)
└── Contract help for specific tasks (design, copywriting)`}</div>
          <br />
          <strong>Key:</strong> Build systems that don't require ongoing manual work
        </SolutionBox>
      </Section>

      <Section id="contradiction-7" title="Contradiction #7: Competitive Moat Illusion">
        <h4>Pete's Perceived Moats:</h4>
        <div className="phase-box">
          1. Better UI/UX ✓<br />
          2. Better filtering ✓<br />
          3. Mobile optimization ✓<br />
          4. Modern tech stack ✓
        </div>

        <h4>Why These Aren't Moats:</h4>
        <ProblemBox>
          <strong>Timeline to replicate:</strong><br />
          <div className="tree-structure">{`├── UI/UX: 3 months (hire designers)
├── Filtering: 2 months (standard feature)
├── Mobile: 2 months (responsive design)
└── Tech stack: Irrelevant to users`}</div>
          <br />
          <strong>Total:</strong> Dave's could copy in 6 months if they wanted to
        </ProblemBox>

        <h4>YouTeacher's Defensible Moat:</h4>
        <SolutionBox>
          <strong>Verification System:</strong><br />
          <div className="tree-structure">{`├── Human-verified school backgrounds
├── Teacher review aggregation
├── Scam pattern detection
├── Historical data on school behavior
└── Reputation scoring algorithm`}</div>
          <br />
          <strong>Why it's defensible:</strong><br />
          - Requires time to build data set<br />
          - Requires domain expertise (Pete has this)<br />
          - Requires ongoing curation (labor-intensive)<br />
          - Network effects kick in (more reviews = more value)<br /><br />

          <strong>Timeline to replicate:</strong> 2-3 years minimum
        </SolutionBox>
      </Section>
    </>
  )
}
