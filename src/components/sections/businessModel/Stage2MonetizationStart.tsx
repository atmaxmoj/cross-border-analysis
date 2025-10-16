import InfoBox from '../../ui/InfoBox'

export default function Stage2MonetizationStart() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Stage 2: Monetization Start (Months 7-18) - Direct Posting</h4>
      <InfoBox>
        <strong>Features Deployed:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>A.4 Job Posting System (schools post DIRECTLY on our platform)</li>
          <li>A.5 Basic User Accounts</li>
        </ul>

        <strong>Revenue Model:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Pay-per-post:</strong> $49/post (30-day listing) - 35% cheaper than Dave's ESL ($75)</li>
          <li><strong>Bulk packs:</strong> 5 posts for $199 ($40/post) - 47% cheaper than Dave's ESL</li>
          <li><strong>Early bird discount:</strong> "First 100 schools post for $29 (normally $49)" - create urgency</li>
        </ul>

        <strong>How We Gain Clients (Schools):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Outbound:</strong> Email schools currently posting on Dave's ESL
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>"You're paying $75/post on Dave's ESL. Our 10K+ teacher audience costs you just $49/post"</li>
              <li>Target: 500 schools posting monthly on Dave's ESL</li>
            </ul>
          </li>
          <li><strong>Inbound:</strong> Teachers viewing aggregated jobs see "Post your job here for $49"</li>
          <li><strong>Banner ads ON aggregated jobs:</strong> "Tired of Dave's ESL fees? Post here for 35% less"</li>
          <li><strong>Free trial:</strong> "First job post FREE - see the quality of applicants before you pay"</li>
        </ul>

        <strong>Revenue Projection (Conservative):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>Month 7-12: 50 schools × $49/post × 2 posts/month = <strong>$4,900/month</strong></li>
          <li>Month 13-18: 150 schools × $49/post × 2 posts/month = <strong>$14,700/month</strong></li>
          <li>Assumes: 10% conversion of Dave's ESL schools, 2 posts/month during hiring seasons (Feb-March, July-Sept)</li>
        </ul>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>200+ schools posting directly by month 18</li>
          <li>30% of teacher job applications happen ON our platform (vs redirecting to aggregated jobs)</li>
          <li>Retention: 40%+ schools post again within 6 months (seasonal hiring cycle)</li>
          <li>Customer acquisition cost (CAC): &lt;$100 per school (via outbound email + free trial)</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Indeed (2007):</strong> Started monetizing via pay-per-click after 3 years of aggregation. Had traffic, then charged employers.</li>
          <li><strong>Boss Zhipin:</strong> Basic posting free initially, but schools pay for premium features once they see ROI (teacher quality).</li>
          <li><strong>Pricing leverage:</strong> Dave's ESL charges $75/post with 1995 UX. We charge $49 with modern UX + better targeting. Easy value prop.</li>
        </ul>
      </InfoBox>
    </div>
  )
}
