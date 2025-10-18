import Section from '../../layout/Section'

export default function Stage4() {
  return (
    <Section id="stage4-community" title="Stage 4: Reviews & Community (Year 2)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Add peer reviews to deepen trust beyond verification badges.</strong> Enable teachers to review schools they've worked at.
          Build network effects through community contributions.
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> B-Tier (Differentiators) - Reviews and community content create moat
        </p>
      </div>

      <h4>Problem Statement</h4>
      <p style={{ marginLeft: '20px', fontSize: '0.95em' }}>
        Verification badges (Stage 3) prove school is legal, but don't tell teachers about working conditions, management quality, contract honesty.
        Pain Points #2 (Contract Terms), #3 (Working Conditions), #4 (Hidden Costs) still unsolved. Teachers need peer reviews from other teachers.
      </p>

      <h4>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a teacher, I want to read reviews from teachers who worked at a school, so I know about working conditions</li>
        <li>As a teacher, I want to rate schools on specific categories (Management, Salary, Contract Honesty), so I get detailed insights</li>
        <li>As a teacher, I want to upvote helpful reviews, so the best reviews rise to the top</li>
        <li>As a teacher, I want to flag inappropriate reviews, so fake reviews are removed</li>
        <li>As Pete, I want to moderate flagged reviews, so the platform stays trustworthy</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR28: Review System</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> 5-star rating + written reviews with category ratings</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Overall rating: 1-5 stars</li>
          <li>Category ratings: Management (1-5), Salary Accuracy (1-5), Contract Honesty (1-5), Benefits (1-5)</li>
          <li>Written review: 100-2000 characters</li>
          <li>Verified teacher requirement: Only teachers who worked at school can review (verify via application tracking in Stage 6, or manual verification in Stage 4)</li>
          <li>Upvote/downvote: Teachers can upvote helpful reviews, downvote unhelpful</li>
          <li>Sort reviews: Most helpful (upvotes), Newest, Highest rating, Lowest rating</li>
          <li>Flag review: Teachers can flag reviews as "fake", "spam", "offensive"</li>
          <li>Moderation queue: Pete reviews flagged reviews, can delete or approve</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>50+ schools have at least 1 review by Month 24</li>
          <li>200+ total reviews submitted</li>
          <li>Average review length: 300+ characters (detailed, not spam)</li>
          <li>10%+ of reviews are upvoted (helpful content)</li>
        </ul>
        <p><strong>Build Time:</strong> 2 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR29: Notification System</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Email + in-app notifications for reviews, replies</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Email notification: School receives email when new review posted</li>
          <li>In-app notification: Bell icon in header, shows unread notifications</li>
          <li>Notification types: New review on your school, Reply to your review, Upvote on your review</li>
          <li>Notification preferences: Teachers can opt out of email notifications (still get in-app)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>100% of schools notified within 1 hour of new review</li>
          <li>Email open rate: 40%+</li>
        </ul>
        <p><strong>Build Time:</strong> 1 week</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR30: Community Forum (Keep Discord or Add Custom)</h5>
        <p><strong>Priority:</strong> P2 (Nice to Have)</p>
        <p><strong>Description:</strong> Enhanced Discord integration OR custom forum</p>
        <p><strong>Option A: Enhanced Discord Integration</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Add more channels: #city-beijing, #city-shanghai, #visa-help, #contract-review</li>
          <li>Verified teacher role: Teachers with verified employer history get special badge in Discord</li>
          <li>Zero dev time, leverage existing Discord community from Stage 1</li>
        </ul>
        <p><strong>Option B: Custom Forum (React + PostgreSQL)</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Categories: Job Search, School Discussions, City Guides, Visa Help</li>
          <li>Threaded discussions, upvote/downvote posts</li>
          <li>Search forum content</li>
          <li>Build time: 3-4 weeks - only do if Discord not working</li>
        </ul>
        <p><strong>Recommendation:</strong> Stick with Discord in Stage 4 (zero dev time), build custom forum only if Discord becomes limiting factor</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>North Star Metric:</strong> Review Coverage (% of schools with at least 1 review) - validates community contributing content</p>
        <p style={{ marginTop: '15px' }}><strong>Target Metrics (Month 24):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Schools with reviews: 50+ (20% of 250 schools)</li>
          <li>Total reviews: 200+</li>
          <li>Discord members: 1,000+ (from 500 in Stage 1)</li>
          <li>Daily active forum/Discord users: 50+</li>
          <li>Teachers citing reviews in application decisions: 40%+ (survey data)</li>
        </ul>
      </div>

      <h4 style={{ marginTop: '25px' }}>Out of Scope (Stage 4)</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>Advanced badge tiers (comes in Stage 8)</li>
        <li>In-platform messaging (comes in Stage 6)</li>
        <li>AI sentiment analysis of reviews (comes in Stage 8)</li>
      </ul>
    </Section>
  )
}
