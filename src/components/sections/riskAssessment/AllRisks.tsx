import Section from '../../layout/Section'
import SolutionBox from '../../ui/SolutionBox'

export default function AllRisks() {
  return (
    <>
      <Section id="risk-matrix" title="Risk Matrix">
        <table>
          <thead>
            <tr>
              <th>Risk</th>
              <th>Impact</th>
              <th>Probability</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cold start failure</td>
              <td>🔴 Critical</td>
              <td>🟡 Medium</td>
              <td>Aggregation strategy</td>
            </tr>
            <tr>
              <td>Dave's legal action</td>
              <td>🟡 High</td>
              <td>🟢 Low</td>
              <td>Respectful scraping, quick pivot</td>
            </tr>
            <tr>
              <td>Insufficient differentiation</td>
              <td>🔴 Critical</td>
              <td>🟡 Medium</td>
              <td>Focus on verification moat</td>
            </tr>
            <tr>
              <td>Payment processing issues</td>
              <td>🟡 High</td>
              <td>🟡 Medium</td>
              <td>Multiple payment options</td>
            </tr>
            <tr>
              <td>Founder bandwidth</td>
              <td>🟡 High</td>
              <td>🟡 Medium</td>
              <td>Phased hiring plan</td>
            </tr>
            <tr>
              <td>China ESL market decline</td>
              <td>🟡 High</td>
              <td>🟢 Low</td>
              <td>Diversify to Korea/Japan</td>
            </tr>
            <tr>
              <td>Competitor copies verification</td>
              <td>🟡 High</td>
              <td>🟡 Medium</td>
              <td>First-mover advantage on data</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="top-risks" title="Top 5 Risks & Mitigation">
        <h4>1. Aggregation Sources Block Scraping</h4>
        <p><strong>Risk:</strong> Dave's Cafe or others detect scraping and block access.</p>

        <SolutionBox>
          <strong>Mitigation:</strong><br />
          <strong>Plan A:</strong> Respectful scraping (2-second delays, proper attribution)<br />
          <strong>Plan B:</strong> Negotiate official partnership/data feed<br />
          <strong>Plan C:</strong> Pivot to manual school submissions only<br />
          <strong>Plan D:</strong> Use RSS feeds where available<br /><br />

          <strong>Likelihood:</strong> Low (job boards generally allow aggregation)<br />
          <strong>Precedent:</strong> Indeed, Glassdoor, etc. aggregate successfully
        </SolutionBox>

        <h4>2. Insufficient School Adoption</h4>
        <p><strong>Risk:</strong> Schools don't see value in verification badges, won't pay.</p>

        <SolutionBox>
          <strong>Validation Strategy:</strong><br />
          <div className="tree-structure">{`├── Interview 20 schools before launch (already know pain points)
├── Offer first 5 schools free premium for 6 months
├── If <5 paying schools by Month 6 → reassess pricing or value prop
└── Hard pivot threshold: <10 schools by Month 9`}</div>
          <br />
          <strong>Alternative Monetization:</strong><br />
          └── If B2B fails, pivot to teacher premium model (resume services, alerts)
        </SolutionBox>

        <h4>3. Verification System Liability</h4>
        <p><strong>Risk:</strong> Verified school turns out to be fraudulent, teachers blame platform.</p>

        <SolutionBox>
          <strong>Legal Protection:</strong><br />
          <div className="tree-structure">{`├── Clear disclaimer: "Verification is not a guarantee"
├── Terms of service: Platform not liable for school behavior
├── Insurance: E&O insurance ($1M coverage, ~$1,200/year)
└── Transparent process: Show what verification includes/excludes`}</div>
          <br />
          <strong>Operational:</strong><br />
          <div className="tree-structure">{`├── Continuous monitoring of verified schools
├── Quick response to complaints
├── Revocation process for badges
└── Public changelog of verification decisions`}</div>
        </SolutionBox>

        <h4>4. Founder Bandwidth & Burnout</h4>
        <p><strong>Risk:</strong> 2-person team stretched too thin, quality suffers or founders quit.</p>

        <SolutionBox>
          <strong>Scope Management:</strong><br />
          <div className="tree-structure">{`├── Ruthless feature prioritization
├── No new features until core is proven
├── Say no to 90% of ideas
└── Hire help at $10K monthly revenue`}</div>
          <br />
          <strong>Sustainability:</strong><br />
          <div className="tree-structure">{`├── No 80-hour weeks (unsustainable)
├── Set boundaries (no weekend work after Month 6)
├── Celebrate small wins
└── Kill project quickly if not working (don't drag for years)`}</div>
          <br />
          <strong>Decision Tree:</strong><br />
          <div className="tree-structure">{`├── If no PMF by Month 9 → serious reassessment
├── If both founders burned out → pivot or shut down
└── If one founder wants out → offer buyout or dissolve`}</div>
        </SolutionBox>

        <h4>5. Payment Processing for Hong Kong Company</h4>
        <p><strong>Risk:</strong> Can't receive Alipay/WeChat payments from mainland users easily.</p>

        <SolutionBox>
          <strong>Multi-Pronged Approach:</strong><br />
          <div className="tree-structure">{`├── Stripe (for international credit cards) - works immediately
├── Ping++ (for aggregated Alipay/WeChat) - 1-2 week setup
├── Alternative: Paymentwall, AsiaPay (other aggregators)
└── Long-term: Establish WFOE if revenue > $100K/year`}</div>
          <br />
          <strong>Fallback:</strong><br />
          └── Credit card only for first 3 months (acceptable for international schools)
        </SolutionBox>
      </Section>
    </>
  )
}
