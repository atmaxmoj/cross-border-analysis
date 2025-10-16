import Section from '../../layout/Section'
import ProblemBox from '../../ui/ProblemBox'
import SolutionBox from '../../ui/SolutionBox'

export default function Stage2Risks() {
  return (
    <Section id="stage-2-risks" title="Stage 2 Risks: Monetization Start (Months 7-18)">
      <p>
        <strong>Stage Goal:</strong> Schools pay $49/post (Feature A.4). Target: 50-150 paying schools. Revenue: $5K-$15K/month.
      </p>

      <h4>Risk 2.1: Schools Don't Pay for Direct Posting (Feature A.4)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Most critical monetization risk. Schools refuse to pay $49/post when they can post
        free on Dave's ESL. By Month 18, revenue &lt;$5K/month (below target of $15K/month).<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Business model fails - no path to profitability</li>
          <li>$1.8K sunk costs (Stage 1: $600 + Stage 2: $1.2K)</li>
          <li>Cannot proceed to Stage 3 differentiation features</li>
          <li>Validates Barrier #4: "Free alternatives reduce willingness to pay"</li>
        </ul>

        <strong>Probability: 🟡 Medium (35%)</strong><br/>
        <strong>Evidence:</strong> Dave's ESL charges $75/post and has 500+ schools paying monthly. We charge $49 (35% cheaper).
        Risk is schools may not see value in reaching our smaller teacher audience (10K MAU vs Dave's 350K).
      </ProblemBox>

      <SolutionBox>
        <strong>Validation Strategy (Before Full Launch):</strong><br/><br/>

        <strong>Pre-Launch Customer Discovery (Month 6):</strong>
        <div className="tree-structure">{`├── Interview 20 schools currently posting on Dave's ESL
├── Questions to validate:
│   ├── "Would you pay $49 to reach 10K targeted teachers (vs $75 for Dave's 350K mixed audience)?"
│   ├── "What would make you try a new job board?"
│   └── "How many applications per post do you get on Dave's ESL?"
├── Success criteria: 50%+ say "yes, I'd try at $49"
└── If <30% interest → Don't launch A.4, extend Stage 1 to build more traffic`}</div>
        <br/>

        <strong>Launch Strategy (Month 7):</strong>
        <div className="tree-structure">{`├── First 100 schools: $29/post (41% cheaper than Dave's) - create urgency
├── "First post FREE - but must fill out card info" - remove friction while capturing payment details
├── Email outbound to 500 schools on Dave's ESL: personalized pitch
│   └── "You're School X posting on Dave's ESL. Try YouTeacher for $29 (first 100 only)"
├── Target segment: Schools posting 5+ times/year (likely to convert to recurring customers)
└── Success metric Month 7: 20+ schools post (even at $29 discounted price)`}</div>
        <br/>

        <strong>Month-by-Month Validation:</strong><br/>
        <table style={{ fontSize: '0.85em', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Target</th>
              <th>Action if Below Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Month 7</td>
              <td>20 schools × $29 = $580</td>
              <td>If &lt;10 schools: Extend free trial to 60 days</td>
            </tr>
            <tr>
              <td>Month 9</td>
              <td>30 schools × $49 = $1,470</td>
              <td>If &lt;20 schools: Survey non-converters (why not?)</td>
            </tr>
            <tr>
              <td>Month 12</td>
              <td>50 schools × $49 × 2 = $4,900</td>
              <td>If &lt;$3K: Reassess pricing or value prop</td>
            </tr>
            <tr style={{ background: '#fff5f5' }}>
              <td>Month 18</td>
              <td>150 schools × $49 × 2 = $14,700</td>
              <td>If &lt;$8K: Hard pivot or shutdown</td>
            </tr>
          </tbody>
        </table>
        <br/>

        <strong>Alternative Monetization (Pivot Option):</strong><br/>
        If B2B fails by Month 12, test B2C teacher premium model:
        <div className="tree-structure">{`├── Resume review service: $29
├── Priority job alerts: $9/month
├── Salary negotiation guide: $19
├── Target: 500 teachers × $19 avg = $9,500/month (comparable to B2B target)
└── Evidence: r/internationalteachers salary spreadsheet (217 upvotes) shows teachers will pay for career tools`}</div>
        <br/>

        <strong>Kill Criteria:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li><strong>Month 9:</strong> If &lt;10 paying schools → Test B2C pivot immediately</li>
          <li><strong>Month 12:</strong> If &lt;30 paying schools → Execute B2C pivot fully or shutdown</li>
          <li><strong>Month 18:</strong> If &lt;50 paying schools AND B2C generates &lt;$5K/month → Shutdown. Total sunk cost: $1.8K.</li>
        </ul>
      </SolutionBox>

      <h4>Risk 2.2: Dave's ESL Matches Our Pricing</h4>
      <ProblemBox>
        <strong>Risk:</strong> Dave's ESL sees us as competitive threat and drops price from $75 to $49 or lower.
        We lose cost advantage (our primary differentiation in Stage 2).<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Must compete on UX/features alone (Contradiction #1: Trust Over Tech doesn't work)</li>
          <li>Price war could drive posting fees to $0 (race to bottom)</li>
          <li>Dave's 350K MAU vs our 10K MAU = schools choose Dave's at same price</li>
        </ul>

        <strong>Probability: 🟢 Low (15%)</strong><br/>
        <strong>Evidence:</strong> Dave's ESL hasn't changed pricing in 10+ years despite competitors. Platform shows
        signs of decline (ghost town forum). Unlikely to respond aggressively.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation:</strong><br/>
        <div className="tree-structure">{`├── Don't rely solely on pricing advantage - build differentiation early
├── Month 7: Launch B.6 School Verification (basic version) alongside A.4 posting
│   └── Pitch: "We're cheaper AND we verify schools - Dave's doesn't"
├── If Dave's drops price: Emphasize verification moat immediately
├── Worst case: We become "Dave's ESL with verification" - still differentiated
└── Contingency: Offer free verification for first 50 schools (builds dataset, creates switching cost)`}</div>
        <br/>

        <strong>Decision Rule:</strong> If Dave's ESL drops price below $40/post → Accelerate Stage 3 premium features (B.6-B.9) immediately.
        Don't compete on price, compete on trust/verification.
      </SolutionBox>

      <h4>Risk 2.3: Seasonal Hiring Volatility</h4>
      <ProblemBox>
        <strong>Risk:</strong> ESL hiring is highly seasonal (Feb-March, July-Sept). Revenue drops 60-70% in
        off-peak months (April-June, Oct-Jan).<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Inconsistent cash flow makes financial planning difficult</li>
          <li>May need 6-9 months runway instead of 3-6 months</li>
          <li>Schools churn if they only need to hire 2x/year</li>
        </ul>

        <strong>Probability: 🔴 High (70%)</strong><br/>
        <strong>Evidence:</strong> Chinese schools align with academic calendar. Hiring peaks before Sept semester start and Feb spring semester.
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation:</strong><br/>
        <div className="tree-structure">{`├── Plan runway for 18 months (not 12) to account for 2 full seasonal cycles
├── Offer annual subscriptions in Stage 3: $299/month × 12 = $3,588/year paid upfront
│   └── Reduces seasonal volatility, improves cash flow predictability
├── Diversify school types: Target year-round hiring (training centers, online schools)
├── Off-peak promotions: "Post 5 jobs in April-June, get 5 free for peak season"
└── Accept seasonality as industry reality, budget conservatively`}</div>
      </SolutionBox>
    </Section>
  )
}
