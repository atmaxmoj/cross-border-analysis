import Section from '../../../layout/Section'
import ProblemBox from '../../../ui/ProblemBox'
import SolutionBox from '../../../ui/SolutionBox'

export default function Stage4Risks() {
  return (
    <Section id="stage-4-risks" title="Stage 4 Risks: Moat Building (Year 3+)">
      <p>
        <strong>Stage Goal:</strong> Excitement features create defensible moats (Features C.1-C.8). Revenue: $74K/month.
      </p>

      <h4>Risk 4.1: Excitement Features Don't Gain Traction (Features C.1-C.8)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Teachers don't use AI Scam Detection (C.1), Weekly Meetups (C.6), Contract Review (C.2),
        Escrow/EOR (C.7), or other excitement features. Investment in building these features ($50K-$100K dev time)
        doesn't generate meaningful revenue or engagement.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>No competitive moat = vulnerable to Dave's ESL copying verification + community</li>
          <li>Revenue stuck at Stage 3 levels ($37K/month, $444K/year)</li>
          <li>Cannot reach $1M ARR milestone</li>
          <li>Exit value limited (no strategic acquirer sees moat)</li>
        </ul>

        <strong>Probability: 🟡 Medium (40%)</strong><br/>
        <strong>Evidence:</strong> Excitement features are untested innovations. Weekly Meetups (C.6) reference from
        Timeleft (€12M ARR) but unvalidated in ESL teacher context. Escrow/EOR (C.7) complex to implement.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation: Lean Validation Before Full Build</strong><br/><br/>

        <strong>C.6 Weekly Teacher Meetups - Validation Test (Month 24):</strong>
        <div className="tree-structure">{`├── Manual MVP: Pete organizes 4 dinners in Beijing (1/week for 4 weeks)
├── Promotion: Email 5K Beijing-area teachers "Free dinner Wednesday 7pm - meet other ESL teachers"
├── Success metrics:
│   ├── 40+ attendees across 4 dinners (10/dinner avg)
│   ├── 60%+ attendees say "I'd pay $12 for this regularly"
│   └── 20%+ sign up for next month's dinners
├── Cost: $200 × 4 = $800 test investment
└── Decision: If metrics hit → Build platform features (venue booking, payments, 10-city expansion)
    If metrics miss → Abandon C.6, teachers don't value meetups`}</div>
        <br/>

        <strong>C.2 Contract Review Tool - Validation Test (Month 24):</strong>
        <div className="tree-structure">{`├── Manual MVP: Pete manually reviews 20 contracts (1 hour each, $29 fee)
├── Marketing: "Get your ESL contract reviewed by expert with 6 years China experience - $29"
├── Success metrics:
│   ├── 20 teachers pay $29 within 4 weeks (validates willingness to pay)
│   ├── 80%+ give 5-star review ("This caught red flags I missed")
│   └── 30%+ say "I'd use AI version for $19"
├── Cost: 20 hours Pete's time (opportunity cost only)
└── Decision: If validates → Build AI automation (GPT-4 + contract database)
    If doesn't validate → Abandon C.2`}</div>
        <br/>

        <strong>C.7 Escrow/EOR Service - Partner-First Approach:</strong>
        <div className="tree-structure">{`├── Don't build escrow infrastructure ourselves (massive compliance risk)
├── Partner with Deel, Skuad, Oyster for EOR services (white-label)
├── Escrow: Partner with Stripe Escrow or Asian payment providers (Ping++, Alipay escrow)
├── Revenue share: We get 20-30% of their fees for referrals
├── Risk: Low (no infrastructure investment), just integration work (2-4 weeks dev time)
└── Validation: If <20 teachers sign up in first 6 months → Deprioritize feature`}</div>
        <br/>

        <strong>C.1 AI Scam Detection - Build After Data Accumulation:</strong>
        <div className="tree-structure">{`├── Requires: 5,000+ teacher reviews + 500+ fraud reports to train ML model
├── Timeline: Don't attempt until Month 30+ (need data first)
├── Manual version first: Pete flags scam patterns (keywords, payment terms, visa language)
├── "Scam risk score" displayed to teachers based on manual rules
├── After 6 months data: Hire ML engineer ($10K contract) to build AI version
└── If manual version doesn't get 50%+ teacher engagement → Don't invest in AI`}</div>
        <br/>

        <strong>Feature Prioritization (Launch Sequentially, Not Simultaneously):</strong><br/>
        <table style={{ fontSize: '0.85em', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Feature</th>
              <th>Investment</th>
              <th>Validation Metric</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1 Year 3</td>
              <td>C.6 Meetups (manual)</td>
              <td>$3K test</td>
              <td>40+ attendees, 60% WTP</td>
            </tr>
            <tr>
              <td>Q2 Year 3</td>
              <td>C.2 Contract Review (manual)</td>
              <td>20h Pete time</td>
              <td>20 paying customers @ $29</td>
            </tr>
            <tr>
              <td>Q3 Year 3</td>
              <td>C.7 Escrow/EOR (partner)</td>
              <td>2 weeks dev</td>
              <td>20 users in 6 months</td>
            </tr>
            <tr>
              <td>Q4 Year 3</td>
              <td>C.1 AI Scam Detection</td>
              <td>$10K ML contract</td>
              <td>50%+ teacher engagement</td>
            </tr>
          </tbody>
        </table>
        <br/>

        <strong>Kill Criteria:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>If 3+ excitement features fail validation tests → Accept we're a "Stage 3 company" ($444K ARR ceiling)</li>
          <li>Consider: Focus on geographic expansion (D.5) instead of feature depth</li>
          <li>Alternative moat: Network effects from volume (1M+ teachers, 10K+ schools) instead of feature innovation</li>
        </ul>
      </SolutionBox>

      <h4>Risk 4.2: Competitors Copy Verification + Community Features</h4>
      <ProblemBox>
        <strong>Risk:</strong> By Year 3, Dave's ESL or SeriousTeachers copy our verification system (B.6) and
        community features (C.6). They have larger user bases (350K vs our 100K MAU), so teachers switch back.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Lose differentiation advantage - become "yet another job board"</li>
          <li>Price war - forced to match Dave's $75 or go lower than $49</li>
          <li>Revenue decline 30-50% as schools return to incumbent platforms</li>
          <li>Moat erodes, platform commoditized</li>
        </ul>

        <strong>Probability: 🟡 Medium (50%)</strong><br/>
        <strong>Evidence:</strong> Verification is copyable in 6-12 months (Contradiction #7). Dave's ESL has resources
        to hire developers and implement our features if we become meaningful competitive threat.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation: Build Network Effects Moat (Harder to Copy)</strong><br/><br/>

        <strong>Data Moat (Time-Based Defensibility):</strong>
        <div className="tree-structure">{`├── By Year 3, accumulate 50,000+ teacher reviews
├── 1,000+ verified schools with 2-3 years historical data
├── Salary benchmarking database: 5,000+ data points across 20+ cities
├── AI scam detection trained on 500+ fraud cases (proprietary dataset)
└── Competitor copying verification ≠ copying 3 years of accumulated data`}</div>
        <br/>

        <strong>Community Network Effects (Exponential Defensibility):</strong>
        <div className="tree-structure">{`├── Weekly meetups: 2,000+ teachers attending across 10 cities
│   └── Teacher says: "I met my best friend at YouTeacher meetup" → emotional lock-in
├── Forum: 100,000+ posts, 50,000+ monthly active users
│   └── Teacher searches "Is School X legit?" → finds answer on OUR forum, not Dave's
├── Regional Champions (C.3): 50+ volunteer community leaders in each city
│   └── Champions organize meetups, answer questions, advocate for platform
└── Switching cost: Teachers lose community relationships if they leave platform`}</div>
        <br/>

        <strong>First-Mover Advantage (Speed to Scale):</strong>
        <div className="tree-structure">{`├── By time Dave's ESL copies verification (Year 4), we have 3-year data lead
├── Schools already invested in building reputation on our platform (50+ reviews)
│   └── Switching to Dave's = starting reputation from zero
├── Teachers trust "original verification platform" over "Dave's ESL late copycat"
└── Analogy: Glassdoor (2008) vs LinkedIn reviews (2015) - first-mover won despite LinkedIn's scale`}</div>
        <br/>

        <strong>Strategic Positioning (Offense is Best Defense):</strong>
        <div className="tree-structure">{`├── Year 3: Announce C.8 Advanced Badge System (strongest moat feature)
│   └── Multi-dimensional school evaluation (government data + AI + proprietary scoring)
│   └── Requires data infrastructure Dave's ESL cannot replicate without massive investment
├── Messaging: "We're not a job board. We're the teacher protection platform."
├── Expand to adjacent services Dave's can't copy: Escrow/EOR (C.7), Weekly meetups (C.6)
└── Make Dave's ESL copying us ACCELERATE our differentiation (they're always 2 years behind)`}</div>
        <br/>

        <strong>Contingency: If Dave's Launches Verification in Year 3</strong>
        <div className="tree-structure">{`├── Immediate response: Double down on community (meetups, forum engagement)
├── Price war: Drop Premium tier to $99 (from $149) to retain schools
├── Exclusive partnerships: Sign exclusive verification deals with top 100 international schools
│   └── "Premium international schools ONLY verified on YouTeacher"
├── PR offensive: "Dave's ESL copies our verification after 30 years - proves we were right"
└── Worst case: Accept duopoly market (we have 30% share, Dave's has 50%, others 20%)`}</div>
        <br/>

        <strong>Acceptance Scenario:</strong> Even if Dave's copies us successfully, capturing 30% of China ESL job market
        = $400K-$600K ARR = viable business. Not unicorn outcome, but sustainable.
      </SolutionBox>
    </Section>
  )
}
