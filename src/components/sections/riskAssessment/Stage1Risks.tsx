import Section from '../../layout/Section'
import ProblemBox from '../../ui/ProblemBox'
import SolutionBox from '../../ui/SolutionBox'

export default function Stage1Risks() {
  return (
    <Section id="stage-1-risks" title="Stage 1 Risks: Traffic Acquisition (Months 1-6)">
      <p>
        <strong>Stage Goal:</strong> Build 10K+ MAU via aggregation (Features A.1-A.3). Revenue: $0. Success metric = teacher traffic.
      </p>

      <h4>Risk 1.1: Aggregation Sources Block Scraping (Feature A.1)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Dave's ESL Cafe, SeriousTeachers, or other platforms detect scraping and block our IP addresses
        or issue cease-and-desist letter.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>No job listings = no value proposition for teachers</li>
          <li>Cannot build traffic in Stage 1 = business model fails</li>
          <li>Forced to pivot to manual school submissions = chicken-and-egg problem (Contradiction #2)</li>
        </ul>

        <strong>Probability: 🟡 Medium (30%)</strong><br/>
        <strong>Evidence:</strong> Indeed, Glassdoor, Zillow all aggregate successfully. Job boards generally allow
        aggregation as it drives traffic to their platforms. However, Dave's ESL may view us as direct competitor.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation Strategy (Multi-Layered):</strong><br/><br/>

        <strong>Plan A: Respectful Scraping (Default)</strong>
        <div className="tree-structure">{`├── Scrape at human-like intervals (2-5 second delays between requests)
├── Proper User-Agent headers identifying as YouTeacher
├── robots.txt compliance
├── Attribution on every aggregated listing: "Originally posted on Dave's ESL Cafe"
└── Contact info displayed: "Questions about this job? Visit original posting"`}</div>
        <br/>

        <strong>Plan B: Official Partnership Negotiation</strong>
        <div className="tree-structure">{`├── If blocked, immediately reach out to Dave's ESL: "We drive traffic to your platform"
├── Offer data-sharing agreement: "We'll share analytics on which jobs get most applications"
├── Propose white-label partnership: "Your jobs featured prominently with your branding"
└── Timeline: 2-4 weeks to negotiate; if rejected, proceed to Plan C`}</div>
        <br/>

        <strong>Plan C: RSS Feeds + Manual Curation</strong>
        <div className="tree-structure">{`├── Many job boards offer RSS feeds (public data)
├── Supplement with manual entry of top 100 schools posting monthly
├── Partner with recruiters to post directly (faster than waiting for schools)
└── Timeline: 4-8 weeks to build manual curation pipeline`}</div>
        <br/>

        <strong>Plan D: Pivot to Recruiter-First Model</strong>
        <div className="tree-structure">{`├── If aggregation completely fails, launch with recruiter partnerships
├── 20-30 recruiters post 10-20 jobs each = 200-600 jobs (enough for MVP)
├── Reference: Liepin model (96.5% revenue from recruiters, not direct schools)
└── Timeline: 2-3 months to onboard recruiters`}</div>
        <br/>

        <strong>Kill Criteria:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li><strong>Month 3:</strong> If we have &lt;1,000 jobs aggregated across all sources → activate Plan D (recruiter pivot)</li>
          <li><strong>Month 6:</strong> If &lt;5K MAU after trying all 4 plans → serious reassessment or shutdown</li>
        </ul>
      </SolutionBox>

      <h4>Risk 1.2: Fail to Reach 10K MAU Traffic Target</h4>
      <ProblemBox>
        <strong>Risk:</strong> Even with successful aggregation (A.1), teachers don't discover or use our platform.
        Stage 1 target of 10K MAU not reached by Month 6.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Cannot monetize in Stage 2 (schools won't pay to post if no teacher audience)</li>
          <li>$600 server costs (6 months × $100/mo) sunk with no path to revenue</li>
          <li>Invalidates core assumption: "Better UX alone attracts teachers" (Contradiction #1: Trust Over Tech)</li>
        </ul>

        <strong>Probability: 🟡 Medium (40%)</strong><br/>
        <strong>Evidence:</strong> SeriousTeachers has better UX than Dave's ESL but only 15% market share.
        Teachers exhibit strong inertia toward incumbents (Barrier #3: High Trust Threshold).
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation Strategy:</strong><br/><br/>

        <strong>Traffic Acquisition Tactics (Execute All Simultaneously):</strong><br/>
        <div className="tree-structure">{`├── SEO: Target 500+ long-tail keywords ("ESL jobs Beijing", "English teacher Shanghai", etc.)
├── Reddit outreach: Post on r/TEFL, r/ChinaJobs with value-add content (not spam)
│   └── "I built a search engine for ESL jobs - feedback welcome?" (ask-first approach)
├── WeChat groups: Join 10+ ESL teacher WeChat groups, share platform (with permission)
├── Facebook groups: Post in "ESL Teachers China", "Teaching English in Asia" groups
├── Email alerts: "Get new jobs matching your criteria weekly" - capture emails for remarketing
└── Pete's network: Leverage 6 years ESL teaching connections for initial users`}</div>
        <br/>

        <strong>Validation Metrics (Check Monthly):</strong><br/>
        <table style={{ fontSize: '0.85em', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Target MAU</th>
              <th>Action if Below Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Month 1</td>
              <td>500 MAU</td>
              <td>Beta test with Pete's teacher network</td>
            </tr>
            <tr>
              <td>Month 2</td>
              <td>1,500 MAU</td>
              <td>If &lt;1K: Double Reddit/Facebook outreach</td>
            </tr>
            <tr>
              <td>Month 3</td>
              <td>3,000 MAU</td>
              <td>If &lt;2K: Run paid ads ($500 budget test)</td>
            </tr>
            <tr>
              <td>Month 4</td>
              <td>5,000 MAU</td>
              <td>If &lt;3K: Pivot messaging (trust over tech)</td>
            </tr>
            <tr>
              <td>Month 6</td>
              <td>10,000 MAU</td>
              <td>If &lt;7K: Extend Stage 1 by 2 months OR pivot</td>
            </tr>
          </tbody>
        </table>
        <br/>

        <strong>Kill Criteria:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li><strong>Month 6:</strong> If &lt;5K MAU → Serious reassessment. May indicate market doesn't want aggregation platform.</li>
          <li><strong>Month 9:</strong> If still &lt;7K MAU after trying all tactics → Pivot or shutdown. Sunk cost: $900.</li>
        </ul>
      </SolutionBox>

      <h4>Risk 1.3: High CAC Makes Growth Unsustainable</h4>
      <ProblemBox>
        <strong>Risk:</strong> Organic growth too slow, paid advertising required. Customer Acquisition Cost (CAC)
        for teachers exceeds $10-20, making Stage 1 unaffordable.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>10K MAU at $20 CAC = $200K cost (far exceeds $6K Stage 1 budget)</li>
          <li>Cannot justify spending on free users with no revenue</li>
          <li>Forces premature monetization before building teacher audience</li>
        </ul>

        <strong>Probability: 🟢 Low (20%)</strong><br/>
        <strong>Evidence:</strong> Job boards have natural viral loops (teachers share jobs with friends).
        Reddit/Facebook/WeChat provide free distribution channels.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation:</strong><br/>
        <div className="tree-structure">{`├── Target organic channels first (Reddit, WeChat, Facebook groups)
├── Paid ads ONLY if organic validates demand (if first 500 users have 40%+ weekly retention)
├── Run $500 paid ad test in Month 3: if CAC >$10, immediately stop
├── If CAC too high, focus on SEO long-tail keywords (3-6 month payoff)
└── Contingency: Pete writes guest posts on TEFL blogs (free backlinks + traffic)`}</div>
        <br/>

        <strong>Decision Rule:</strong> If CAC &gt;$10 → No paid ads. Organic-only growth, extend Stage 1 timeline to 9-12 months.
      </SolutionBox>
    </Section>
  )
}
