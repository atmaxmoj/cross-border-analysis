import Section from '../../../layout/Section'
import ProblemBox from '../../../ui/ProblemBox'
import SolutionBox from '../../../ui/SolutionBox'

export default function CrossStageRisks() {
  return (
    <Section id="cross-stage-risks" title="Cross-Stage Risks: Team, Legal, Competitive, Regulatory">
      <p>
        Risks that apply across all stages and timeline.
      </p>

      <h4>Risk X.1: Founder Bandwidth & Burnout</h4>
      <ProblemBox>
        <strong>Risk:</strong> Pete (domain expert) + Mojo (developer) = 2-person team for 24-36 months. High risk
        of burnout, quality degradation, or one founder wanting to quit.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Both founders burned out → project shutdown</li>
          <li>One founder quits → other cannot continue alone (need both domain + technical expertise)</li>
          <li>Quality suffers → teacher complaints, school churn, reputation damage</li>
          <li>Missed opportunities → cannot execute on all 4 stages within 3-year timeline</li>
        </ul>

        <strong>Probability: 🟡 Medium (35%)</strong><br/>
        <strong>Evidence:</strong> 2-person startups have 50%+ burnout rate by Year 2. Pete + Mojo both have other
        professional obligations. Contradiction #6 acknowledges team bandwidth limits.
      </ProblemBox>

      <SolutionBox>
        <strong>Sustainability Strategy:</strong><br/><br/>

        <strong>Scope Management (Ruthless Prioritization):</strong>
        <div className="tree-structure">{`├── Say NO to 90% of feature ideas
├── No new features until current stage validated
│   └── Example: Don't build Stage 3 features until Stage 2 hits $10K/month revenue
├── Reject custom requests from schools ("Can you add LinkedIn integration?") - focus on core
└── Use "Desiderata framework" to evaluate: Is this A-tier (must-have), B-tier (performance), or C-tier (excitement)?
    Only build A-tier in Stages 1-2.`}</div>
        <br/>

        <strong>Work Boundaries (Avoid 80-Hour Weeks):</strong>
        <div className="tree-structure">{`├── No weekend work after Month 6 (except emergencies)
├── 40-50 hour weeks maximum (sustainable pace)
├── Alternate on-call duties: Pete handles support Week 1, Mojo Week 2
├── Mandatory 1 week vacation every 6 months (each founder)
└── Weekly check-in: "How burned out do you feel? 1-10 scale" - if >7, reduce workload immediately`}</div>
        <br/>

        <strong>Automation Over Hiring (Reduce Manual Work):</strong>
        <div className="tree-structure">{`├── Job aggregation: Automated scraping (set up once, runs forever)
├── Community: Use Discord (free, zero dev time vs 4-8 weeks building custom forum)
├── School verification: Checklist-driven (15 min per school, not 1 hour)
├── Customer support: AI chatbot for FAQs (reduces Pete's support time 60%)
├── Email sequences: Automated onboarding, renewals, upsells
└── Analytics: Use PostHog/Mixpanel (off-the-shelf, don't build custom dashboards)`}</div>
        <br/>

        <strong>Phased Hiring Plan (When to Add Headcount):</strong>
        <table style={{ fontSize: '0.85em', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Hire</th>
              <th>Cost</th>
              <th>Why Now?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$10K MRR<br/>(Month 12)</td>
              <td>Part-time VA<br/>(customer support)</td>
              <td>$1,500/mo</td>
              <td>Free up Pete for sales/verification</td>
            </tr>
            <tr>
              <td>$25K MRR<br/>(Month 24)</td>
              <td>Full-time marketer<br/>(SEO, content)</td>
              <td>$4K/mo</td>
              <td>Scale teacher acquisition</td>
            </tr>
            <tr>
              <td>$50K MRR<br/>(Year 3+)</td>
              <td>Verification specialist</td>
              <td>$4K/mo</td>
              <td>Scale school verification (Pete's bottleneck)</td>
            </tr>
            <tr>
              <td>$75K MRR<br/>(Year 4+)</td>
              <td>Developer #2</td>
              <td>$6K/mo</td>
              <td>Build excitement features faster</td>
            </tr>
          </tbody>
        </table>
        <br/>

        <strong>Decision Tree (Burnout Scenarios):</strong>
        <div className="tree-structure">{`├── If BOTH founders feel burned out (>7/10) for 2+ months:
│   ├── Option 1: Take 1-month break, hire temp contractor to maintain platform
│   ├── Option 2: Scale back ambitions (extend timelines, skip Stage 4 features)
│   └── Option 3: Pivot or shut down (don't drag for years)
├── If ONE founder wants out:
│   ├── Option 1: Remaining founder offers buyout (50% of current valuation)
│   ├── Option 2: Hire replacement (use founder's equity to pay competitive salary)
│   └── Option 3: Sell platform to acquirer or shut down
└── Kill criteria: If no PMF by Month 18 + both founders burned out → Shut down immediately
    Sunk cost: $1.8K. Don't drag to Month 36.`}</div>
        <br/>

        <strong>Celebrate Small Wins (Motivation Maintenance):</strong>
        <div className="tree-structure">{`├── First 100 MAU: Dinner celebration
├── First paying school: Open bottle of champagne
├── $10K MRR: Weekend trip
├── 50 verified schools: Team retreat
└── Maintain momentum through psychological wins, not just metrics`}</div>
      </SolutionBox>

      <h4>Risk X.2: China Regulatory Crackdown (2021 "Double Reduction" Repeat)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Chinese government announces new education policy similar to 2021 "Double Reduction"
        that decimated after-school tutoring industry. ESL teacher market shrinks 60-80% overnight.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Market size collapses: 12K teachers/year → 3K-5K teachers/year</li>
          <li>Schools close en masse, cannot pay platform fees</li>
          <li>Revenue drops 70%+ within 3 months</li>
          <li>Platform becomes unprofitable, forced shutdown or pivot</li>
        </ul>

        <strong>Probability: 🟢 Low (5%)</strong><br/>
        <strong>Evidence:</strong> 2021 crackdown targeted K-12 after-school tutoring for Chinese students. Most ESL
        teaching (adults, international schools, university) unaffected. Barrier #5 notes policy risk but job boards
        less regulated than training providers.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation: Geographic Diversification (But Not Premature)</strong><br/><br/>

        <strong>Stage 1-3: China-Only Focus (Do NOT Diversify Early)</strong>
        <div className="tree-structure">{`├── Months 1-36: China exclusively (Contradiction #4: Global Ambition vs Local Execution)
├── Reason: Master one regulatory environment before expanding
├── Accept regulatory risk as cost of focus
└── Evidence: Vertical expansion easier than horizontal (GaijinPot dominates Japan by staying focused)`}</div>
        <br/>

        <strong>Stage 4: Geographic Expansion to Reduce Country Risk (Year 3+)</strong>
        <div className="tree-structure">{`├── After China PMF (Month 36), expand to Korea (Desiderata D.5)
│   └── Korea market: 3,500 schools, 15K-20K ESL teachers/year
├── Then Thailand, Japan, Vietnam (sequentially, not simultaneously)
├── Target: By Year 4, China <60% of revenue (down from 100%)
└── Diversification reduces single-country regulatory risk`}</div>
        <br/>

        <strong>Early Warning System (Monitor Policy Signals):</strong>
        <div className="tree-structure">{`├── Subscribe to Chinese education policy newsletters (知乎教育, 芥末堆)
├── Monthly check: Ministry of Education announcements
├── Network: Maintain relationships with 20+ school directors (insider intelligence)
├── Red flags:
│   ├── "Regulate foreign teachers" mentioned in policy drafts
│   ├── New visa restrictions announced
│   └── Competitor platforms shutting down
└── If 2+ red flags detected: Accelerate geographic expansion immediately (emergency timeline)`}</div>
        <br/>

        <strong>Contingency Plan (If Crackdown Announced):</strong>
        <div className="tree-structure">{`├── Week 1: Assess impact - which segments affected? (K-12 tutoring vs international schools vs universities)
├── Week 2-4: Pivot messaging - focus on unaffected segments
│   └── Example: "International schools exempt from policy - we focus on international schools"
├── Month 1-3: Emergency geographic expansion
│   ├── Launch Korea version (use existing platform, translate in 2 weeks)
│   ├── Email 20K teachers in database: "Korea jobs now available"
│   └── Target: Replace 70% of lost China revenue with Korea revenue within 6 months
├── Worst case: If all ESL teaching banned in China → Accept China loss, pivot to Korea/Japan/Thailand
│   └── Sunk cost: 3 years China focus, but platform/code reusable in other markets
└── Exit option: Sell platform to Korea-focused acquirer (Saramin, JobKorea)`}</div>
        <br/>

        <strong>Insurance:</strong> No literal insurance available for regulatory risk. Best insurance = diversification after Year 3.
      </SolutionBox>

      <h4>Risk X.3: Payment Processing Challenges for Hong Kong Company</h4>
      <ProblemBox>
        <strong>Risk:</strong> Cannot integrate Alipay/WeChat Pay from Hong Kong entity. Chinese schools want to pay
        via Alipay, but we can only accept Stripe (credit cards).<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Lose 40-60% of potential Chinese school customers (prefer Alipay over credit card)</li>
          <li>Stage 2 monetization target ($15K/month) harder to hit</li>
          <li>Forced to establish WFOE (Wholly Foreign-Owned Enterprise) in China = $20K-$50K setup cost + compliance burden</li>
        </ul>

        <strong>Probability: 🟡 Medium (30%)</strong>
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation: Multi-Payment Gateway Strategy</strong><br/><br/>

        <strong>Phase 1 (Months 1-12): Credit Card Only (Acceptable)</strong>
        <div className="tree-structure">{`├── Stripe for international credit cards - works immediately from HK
├── Target segment: International schools (have corporate credit cards)
├── Hypothesis: International schools = 60% of paying customers, training centers = 40%
│   └── International schools prefer credit cards (easier accounting, no Alipay accounts)
└── Test: Can we hit $10K MRR with credit card only? If yes, no urgency to add Alipay`}</div>
        <br/>

        <strong>Phase 2 (Months 13-18): Add Alipay/WeChat (If Needed)</strong>
        <div className="tree-structure">{`├── Use aggregator: Ping++ (aggregates Alipay + WeChat Pay + UnionPay for HK/intl companies)
│   ├── Setup time: 1-2 weeks
│   ├── Fees: 2.9% + $0.30 per transaction (similar to Stripe)
│   └── Works from HK entity, no WFOE required
├── Alternative: Paymentwall, AsiaPay, iPayLinks (other aggregators supporting HK → China payments)
├── Decision trigger: If >30% of schools ask "Do you accept Alipay?" in Month 12 → Integrate Ping++
└── Cost: 1-2 weeks Mojo dev time, $0 upfront fees`}</div>
        <br/>

        <strong>Phase 3 (Year 3+): WFOE Only If Revenue &gt;$100K/year</strong>
        <div className="tree-structure">{`├── WFOE benefits: Direct Alipay integration (lower fees 0.6% vs 2.9%), local bank account, RMB invoices
├── WFOE costs: $20K-$50K setup, $10K-$20K/year compliance, dedicated accountant
├── Break-even: At $200K/year revenue, 2.3% fee savings (Ping++ 2.9% → direct 0.6%) = $4,600/year saved
│   └── $4,600 < $20K annual WFOE cost → Not worth it until $500K+ revenue
└── Decision: Don't establish WFOE until Year 4 ($600K+ ARR)`}</div>
        <br/>

        <strong>Fallback: Accept Credit Card Limitation</strong>
        <div className="tree-structure">{`├── If Ping++ also doesn't work for some reason → Credit card only
├── Market segment: Focus on international schools (already prefer credit cards)
├── Trade-off: Lose training center segment (30-40% of market) but avoid $50K WFOE cost
└── Evidence: Many HK SaaS companies serve Chinese customers via Stripe successfully (Shopify stores, SaaS tools)`}</div>
      </SolutionBox>

      <h4>Risk X.4: Key Dependency Risk (Pete's Domain Expertise)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Pete is single point of failure for:
        <ul style={{ marginTop: '10px' }}>
          <li>School verification (only person who understands Chinese business license verification)</li>
          <li>Teacher community management (6 years China ESL network)</li>
          <li>Sales to schools (understands school pain points intimately)</li>
          <li>Content creation (writes guides, reviews, teacher stories)</li>
        </ul>
        If Pete becomes unavailable (illness, quits, etc.) for &gt;2 weeks, business operations halt.<br/><br/>

        <strong>Impact (if occurs):</strong> Platform cannot verify new schools, community loses engagement, no sales pipeline.

        <strong>Probability: 🟢 Low (15%)</strong>
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation: Document Everything, Build Redundancy</strong><br/><br/>

        <strong>Documentation (Start Month 1):</strong>
        <div className="tree-structure">{`├── School verification SOP: 15-point checklist with screenshots, decision trees
├── Sales playbook: Email templates, objection handling, pricing negotiations
├── Community management: Weekly tasks, moderation guidelines, crisis responses
├── Content calendar: 90-day topic pipeline, writing templates
└── Store in Notion, accessible to Mojo and future hires`}</div>
        <br/>

        <strong>Redundancy Plan (Month 12):</strong>
        <div className="tree-structure">{`├── Train 2-3 "power users" (active community teachers) to do basic verification
│   └── Pay $50 per verification, audit quality monthly
├── Hire part-time VA (Month 12) to handle routine support, freeing Pete for strategic work
├── Cross-train Mojo on sales basics (can handle inbound inquiries if Pete out)
└── Emergency plan: If Pete unavailable >1 week, pause new verifications, focus on keeping existing schools happy`}</div>
        <br/>

        <strong>Long-term: Hire Replacement (Month 24+):</strong>
        <div className="tree-structure">{`├── When revenue hits $25K/month, hire "Operations Manager" ($4K/month)
├── Requirements: Fluent Chinese + English, 2+ years ESL teaching experience, based in China
├── Role: Take over 80% of Pete's operational tasks (verification, support, community)
├── Pete transitions to: Strategy, partnerships, product decisions
└── Reduces single point of failure risk from 100% to 20%`}</div>
      </SolutionBox>
    </Section>
  )
}
