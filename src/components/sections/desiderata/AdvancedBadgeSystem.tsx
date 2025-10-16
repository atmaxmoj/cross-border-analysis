import InfoBox from '../../ui/InfoBox'

export default function AdvancedBadgeSystem() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.8 Advanced School Badge System</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #6 (Scam prevention & platform discrimination) + Question #5 (Trust & verification)<br/>
        <strong>Solves Pain Point:</strong> Teachers report: "School had 4.5 stars but was terrible - fake reviews." "No way to know if school is LGBTQ+ friendly before applying." "Found out school had labor violations AFTER I signed contract." Teachers want multi-dimensional evaluation beyond basic star ratings.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor "Best Places to Work":</strong> Annual rankings based on employee reviews + company data created aspirational goal for companies. Contributed to $8.1B valuation. Companies actively compete to earn badges.</li>
          <li><strong>Yelp Health Scores:</strong> Integrated government health inspection data into restaurant listings. Differentiated Yelp from competitors, created trust through transparency. Restaurants improved hygiene to earn better scores.</li>
          <li><strong>LinkedIn "Top Companies":</strong> Multi-dimensional rankings (culture, growth, benefits) drive employer branding. Companies pay for recruitment tools to improve rankings.</li>
          <li><strong>Our context:</strong> ZERO ESL job boards have multi-dimensional school evaluation. Dave's ESL has no verification, SeriousTeachers has basic listings only.</li>
        </ul>

        <strong>Implementation - Three-Tier Badge System:</strong>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#fff5f5', border: '1px solid #fc8181' }}>
          <strong>Tier 1: Compliance Badges (scrape government data)</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>✅ <strong>"Verified & Compliant"</strong> - No labor violations in government records (past 3 years)</li>
            <li>📋 <strong>"Accredited"</strong> - Ministry of Education approved, licensed to hire foreign teachers</li>
            <li>⚖️ <strong>"Legal Standing"</strong> - No court disputes, no outstanding judgments, clean corporate record</li>
            <li><strong>Data sources:</strong> China Labor Bureau (劳动局), Ministry of Education databases, court filing systems, business registration records</li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#ebf8ff', border: '1px solid #4299e1' }}>
          <strong>Tier 2: Performance Badges (analyze platform data)</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>🏆 <strong>"Top Rated"</strong> - 4.5+ stars with 50+ teacher reviews (critical mass for statistical validity)</li>
            <li>📊 <strong>"High Retention"</strong> - 80%+ teachers complete full contract (no early departures due to poor conditions)</li>
            <li>⚡ <strong>"Fast Response"</strong> - Replies to applications within 48 hours (shows professionalism, teacher respect)</li>
            <li>💰 <strong>"Fair Pay"</strong> - Salary ≥ market average for region + school type (benchmarked against our data)</li>
            <li>🤝 <strong>"Transparent Contracts"</strong> - 100% of job listings include salary, housing, flight reimbursement, hours</li>
            <li><strong>Data sources:</strong> Platform reviews (B.1), application tracking (B.9), job listing completeness (B.8), salary database</li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f0fff4', border: '1px solid #68d391' }}>
          <strong>Tier 3: Excellence Badges (AI-driven proprietary analysis)</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>🌟 <strong>"DEI Champion"</strong> - Diverse hiring (age, race, gender, nationality), LGBTQ+ friendly policies, inclusive workplace culture
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Criteria: Teacher reviews mention inclusivity, no discrimination complaints, diverse teacher roster</li>
              </ul>
            </li>
            <li>🎯 <strong>"Well-Managed"</strong> - On-time salary payments (0 late payment complaints), transparent contracts, low complaint rate (&lt;5% of teachers)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Criteria: Payment dispute rate, contract change complaints, management responsiveness</li>
              </ul>
            </li>
            <li>🚀 <strong>"Career Growth"</strong> - Promotes teachers to senior/management roles, professional development budget, advancement opportunities
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Criteria: Teacher testimonials about promotions, training programs, career progression paths</li>
              </ul>
            </li>
            <li>🏅 <strong>"Teacher Favorite"</strong> - 90%+ teachers would recommend to a friend (Net Promoter Score equivalent)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Criteria: Exit interview data, "would you recommend?" question in reviews</li>
              </ul>
            </li>
            <li><strong>Data sources:</strong> NLP analysis of reviews, exit interviews, teacher surveys, contract dispute data, AI sentiment analysis</li>
          </ul>
        </div>

        <strong>How Badges are Earned (Transparent Criteria):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Public criteria:</strong> All badge requirements published (e.g., "High Retention = 80%+ contract completion")</li>
          <li><strong>Real-time tracking:</strong> Schools see dashboard showing progress toward each badge (e.g., "73% contract completion - 7% away from High Retention badge")</li>
          <li><strong>Automatic awards (Tier 1-2):</strong> Compliance and Performance badges awarded automatically when data thresholds met</li>
          <li><strong>Excellence badges (Tier 3):</strong> Require minimum data threshold (e.g., 50+ reviews for DEI Champion) to ensure statistical validity, still FREE but need sufficient data</li>
        </ul>

        <strong>Business Model (Badges are FREE, but gated by verification):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>First transaction requirement ($49 job post):</strong> Schools must post first job and PAY to unlock badge system
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li><strong>Why this matters:</strong> Payment requires REAL bank account (bank ID verification), filters out scammers who won't pay</li>
              <li><strong>KYC compliance:</strong> Bank transfer provides legal name, account number, business registration - impossible to fake</li>
              <li><strong>Commitment signal:</strong> Schools that pay are serious, not just browsing or phishing for teacher emails</li>
              <li><strong>After first payment:</strong> All badges calculated automatically based on performance data - CANNOT be purchased</li>
            </ul>
          </li>
          <li><strong>All badges FREE after verification:</strong> No ongoing fees for badges, earned purely through data (reviews, retention, compliance)</li>
          <li><strong>Indirect revenue from badges:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>"Hiring Insights Report" ($199): "Your retention is 65%. Top-rated schools average 82%. Here's how to improve."</li>
              <li>"Benchmark Analysis" ($499): Compare your metrics to competitors in your city/region</li>
              <li>Featured listings for badged schools ($99/month): Schools with 3+ badges can pay for top placement</li>
            </ul>
          </li>
        </ul>

        <strong>Why Bank ID Verification Matters:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Scam prevention:</strong> Fake schools won't provide real bank accounts (money laundering risk)</li>
          <li><strong>Legal accountability:</strong> Bank ID tied to business registration, enables legal recourse if school commits fraud</li>
          <li><strong>Government data matching:</strong> Can cross-reference bank account with Labor Bureau records, court filings</li>
          <li><strong>Trust signal to teachers:</strong> "This school passed bank verification" displayed on profile</li>
        </ul>

        <strong>Why This Creates a Moat:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Data infrastructure barrier:</strong> Requires government data scraping (Labor Bureau, Ministry of Education, courts), NLP/AI analysis, years of platform data. Competitors cannot replicate without massive investment.</li>
          <li><strong>Network effects:</strong> More teachers → more reviews → better badge accuracy → schools compete for badges → transparency improves → attracts more teachers. Self-reinforcing cycle.</li>
          <li><strong>Behavior change:</strong> Schools actively improve DEI, management, retention to earn badges. Creates "game dynamics" - schools compete on quality metrics, not just price.</li>
          <li><strong>Proprietary scoring:</strong> Our algorithms (based on 50K+ reviews, contract completion data, payment history) cannot be reverse-engineered by competitors.</li>
          <li><strong>First-mover advantage:</strong> First platform to systematically evaluate ESL schools on multiple dimensions. Sets the standard, becomes reference point.</li>
        </ul>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>500+ schools earn at least one badge by Year 3 (verified via first payment = bank ID check)</li>
          <li>100+ schools purchase Hiring Insights Report ($199) = $19,900/year indirect revenue</li>
          <li>50+ schools purchase Benchmark Analysis ($499) = $24,950/year indirect revenue</li>
          <li>Teachers prefer applying to badged schools: 80%+ applications go to schools with 2+ badges</li>
          <li>Schools with badges get 5x more applications (creates virtuous cycle - good schools grow, bad schools improve or exit)</li>
          <li>Measurable ecosystem improvement: Labor violation rate drops 30% among participating schools (badges create accountability)</li>
          <li>Bank ID verification blocks 90%+ scam schools (won't provide real banking details)</li>
        </ul>

        <strong>Why This is a Delighter (Not Performance Feature):</strong> Teachers DON'T expect multi-dimensional school evaluation - Dave's ESL has ZERO verification, SeriousTeachers has basic listings only. When teachers see badges showing DEI scores, government compliance data, and retention rates, they are DELIGHTED ("I can't believe they track this!"). Creates viral word-of-mouth and competitive moat competitors cannot easily copy.
      </InfoBox>
    </div>
  )
}
