import InfoBox from '../../ui/InfoBox'

export default function Stage3Differentiation() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Stage 3: Differentiation (Months 19-36) - Performance Features</h4>
      <InfoBox>
        <strong>Features Deployed:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>B.1 School Reviews & Ratings</li>
          <li>B.6 School Verification System (business license, address verification)</li>
          <li>B.7 Advanced Search & Filtering</li>
          <li>B.8 Transparent Listing Requirements (salary ranges, completeness score)</li>
          <li>B.9 Direct Application & Tracking System</li>
        </ul>

        <strong>Revenue Model - Premium Tiers:</strong>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f7fafc', border: '1px solid #cbd5e0' }}>
          <strong>Free Tier:</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>1 basic job post/month</li>
            <li>Appears in search, no verification badge</li>
            <li>Email-only applications</li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#ebf8ff', border: '1px solid #4299e1' }}>
          <strong>Standard Tier: $49/post</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>30-day featured listing</li>
            <li>Appears in all searches</li>
            <li>Email applications</li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f0fff4', border: '1px solid #68d391' }}>
          <strong>Premium Tier: $149/post (or $299/month unlimited)</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li><strong>Verified School Badge</strong> (B.6) - trust signal increases applications 3x</li>
            <li><strong>Featured at top of search</strong> (B.7) - 5x more visibility</li>
            <li><strong>Application tracking dashboard</strong> (B.9) - see who applied, status updates, analytics</li>
            <li><strong>Direct chat with candidates</strong> (B.4) - real-time messaging, faster hiring</li>
            <li><strong>Priority support</strong> - dedicated account manager</li>
          </ul>
        </div>

        <strong>How We Gain Premium Clients:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Upsell with data:</strong> "78% of teachers only apply to verified schools. Get verified for $149/post"</li>
          <li><strong>A/B test proof:</strong> Show verified schools get 3x more applications (send monthly reports)</li>
          <li><strong>Target segment:</strong> International schools & reputable training centers willing to pay premium for trust signal</li>
          <li><strong>Free verification trial:</strong> "Get verified free for 30 days, see the difference in application quality"</li>
        </ul>

        <strong>Revenue Projection:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>500 schools posting/month</li>
          <li>60% Standard ($49): 300 × $49 = $14,700/month</li>
          <li>30% Premium ($149): 150 × $149 = $22,350/month</li>
          <li>10% Free: 50 × $0 = $0</li>
          <li><strong>Total: $37,050/month = $444K/year</strong></li>
        </ul>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>30% of schools upgrade to Premium tier (vs 10% industry average for freemium)</li>
          <li>Verified schools get 3x more applications (proven ROI justifies $149 price)</li>
          <li>5,000+ teacher reviews submitted (critical mass for trust)</li>
          <li>50%+ of jobs include transparent salary data (reduces "bait and switch" complaints)</li>
          <li>NPS score: 50+ (schools love the platform, refer other schools)</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Verification + reviews created $8.1B valuation. Employers pay for "Enhanced Profile" to combat negative reviews.</li>
          <li><strong>Liepin:</strong> 96.5% revenue from business customers paying for premium features (verification, headhunter access).</li>
          <li><strong>Boss Zhipin:</strong> Premium features (direct chat, verified badge) drove 28.7M MAU and $15.2B market cap.</li>
          <li><strong>Freemium benchmark:</strong> 2-5% conversion is typical, we target 30% because schools NEED teachers and verification = more applications.</li>
        </ul>
      </InfoBox>
    </div>
  )
}
