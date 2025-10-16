import InfoBox from '../../ui/InfoBox'

export default function D3PredictiveMatching() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>D.3 AI-Powered Predictive Matching (Bloomberg Terminal for ESL)</h4>
      <InfoBox>
        <strong>Transformation:</strong> Don't wait for schools to post jobs. PREDICT when/where they'll hire, match teachers BEFORE jobs are posted. Become intelligence layer, not just marketplace.<br/><br/>

        <strong>Features:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Predictive hiring:</strong> ML model analyzes historical patterns → "School X hires 5 new teachers every August for fall semester" → recommend qualified candidates in July before job is posted</li>
          <li><strong>Teacher success prediction:</strong> Analyze which teacher profiles succeed at which school types
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Personality match (extroverted vs quiet schools)</li>
              <li>Experience level (first-time teachers vs veterans)</li>
              <li>Cultural fit (teachers who stayed 3+ years share X traits)</li>
            </ul>
          </li>
          <li><strong>Salary negotiation AI:</strong> "Based on your qualifications (TEFL cert, 3 years experience, native English), you should ask for 22K RMB in Shanghai, not 18K. Here's negotiation script."</li>
          <li><strong>Market intelligence:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>"Demand for teachers in Shanghai up 30% YoY, apply now before competition increases"</li>
              <li>"Training centers hiring peak: Feb-March, July-Sept. International schools: April-June"</li>
              <li>"Your profile matches 47 schools actively hiring next month"</li>
            </ul>
          </li>
          <li><strong>Proactive alerts:</strong> "School Y (where you applied last year) is likely hiring again in 2 weeks based on their pattern. Want us to reach out?"</li>
        </ul>

        <strong>Why This is Disruptive:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Data compounds:</strong> The more placements, the better the AI predictions, the better the matches, the more schools pay for access. Network effects in DATA, not just users.</li>
          <li><strong>Shift from reactive to proactive:</strong> Teachers don't browse jobs, we PUSH perfect matches. Schools don't post jobs, we DELIVER pre-screened candidates.</li>
          <li><strong>Winner-take-all in data:</strong> Once we have 50K+ placements tracked (retention, performance, salary outcomes), competitors cannot replicate prediction accuracy without years of data collection.</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Bloomberg Terminal:</strong> $10B+/year revenue selling financial data + analytics to traders. Not just showing stock prices (commodity), but PREDICTING market movements (proprietary). Our equivalent: Not just showing jobs (commodity), but predicting hiring needs + match success (proprietary).</li>
          <li><strong>Hired.com:</strong> AI matching for tech jobs. Candidates create profile, companies "bid" on them. Sold for $100M+ to Adecco. Proof: Predictive matching works in labor markets.</li>
          <li><strong>LinkedIn Recruiter:</strong> $5B+ annual revenue from recruiter subscriptions. AI suggests candidates based on job requirements. We do same for ESL: "Here are 10 teachers who will succeed at your school."</li>
          <li><strong>Netflix recommendation engine:</strong> 80% of content watched comes from recommendations, not search. Proof: Proactive matching beats reactive search when data is proprietary.</li>
        </ul>

        <strong>Revenue Model:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Schools pay for "matched candidates":</strong> $199 per pre-screened teacher introduction (before job is even posted)</li>
          <li><strong>Success-based pricing:</strong> If school hires recommended teacher, we take 10% of first-month salary ($200-$300)</li>
          <li><strong>Market intelligence subscription:</strong> $499/month for schools to access hiring trends, salary benchmarks, candidate supply analysis</li>
          <li><strong>Teacher premium tier:</strong> $29/month for teachers to access salary negotiation AI, market intelligence, proactive job alerts</li>
        </ul>

        <strong>Revenue Projection (Year 5):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>5,000 matched introductions/year × $199 = <strong>$1M/year</strong></li>
          <li>1,000 successful hires × $250 avg commission = <strong>$250K/year</strong></li>
          <li>200 schools × $499/month market intelligence = <strong>$1.2M/year</strong></li>
          <li>10,000 teachers × $29/month premium tier = <strong>$3.5M/year</strong></li>
          <li><strong>Total: $6M/year</strong></li>
        </ul>

        <strong>Data Moat (Proprietary Insights):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Retention prediction:</strong> "Teachers with X background have 85% contract completion rate at international schools, but only 40% at training centers"</li>
          <li><strong>Salary optimization:</strong> "Asking for 24K RMB in Shanghai has 70% acceptance rate, 26K has 20% rate - optimize offer at 24K"</li>
          <li><strong>Timing intelligence:</strong> "Schools in Tier-2 cities (Hangzhou, Suzhou) have 3x more openings in Q3 vs Q1"</li>
          <li><strong>Cultural fit scoring:</strong> "Your personality profile (MBTI, work style) matches School Y culture at 92% - highest compatibility in database"</li>
        </ul>

        <strong>Why This is D-Tier (Not C-Tier):</strong> Creates new business model beyond marketplace. We're not just connecting buyers/sellers, we're PREDICTING future transactions and creating proprietary intelligence layer. Bloomberg Terminal doesn't just show stock prices, it predicts market movements. We don't just show jobs, we predict hiring needs and match success. This is data product, not marketplace.
      </InfoBox>
    </div>
  )
}
