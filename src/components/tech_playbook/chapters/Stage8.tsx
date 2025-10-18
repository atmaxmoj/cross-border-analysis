import Section from '../../layout/Section'

export default function Stage8() {
  return (
    <Section id="stage8-moat" title="Stage 8: Moat Features (Year 4+)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Build competitive moat with features competitors can't replicate.</strong> Advanced badge system (C.8), weekly teacher meetups (C.6),
          escrow/EOR service (C.7).
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> C-Tier/D-Tier (Excitement/Transformative) - Badge gamification, meetups, escrow create unfair advantage
        </p>
      </div>

      <h4>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a school, I want to track progress toward Top Rated badge, so I improve my ranking</li>
        <li>As a teacher, I want to attend weekly meetups, so I build community in new city</li>
        <li>As a teacher, I want escrow service, so school can't withhold my salary</li>
        <li>As a school, I want EOR service, so I don't handle visa paperwork</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR37: Advanced Badge System (C.8)</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Tier 2 (Performance) and Tier 3 (Excellence) badges</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Tier 2 badges: Top Rated (4.5+ stars, 20+ reviews), High Retention (70%+ teachers stay 2+ years), Fast Response (&lt;24h to applicants)</li>
          <li>Tier 3 badges: DEI Champion (diverse teacher hiring), Well-Managed (5+ years operation, zero violations), Career Growth (teachers promoted internally)</li>
          <li>Real-time dashboard: Schools see badge progress ("15 reviews needed for Top Rated badge")</li>
          <li>NLP analysis of reviews: Extract sentiment, keywords to auto-award badges</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>20+ schools earn Tier 2 badges</li>
          <li>5+ schools earn Tier 3 badges</li>
          <li>Schools with Tier 2/3 badges get 5x more applicants than unverified</li>
        </ul>
        <p><strong>Build Time:</strong> 3 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR38: Weekly Teacher Meetups (C.6)</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Weekly in-person meetups in major cities (Beijing, Shanghai, Shenzhen, Chengdu)</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Timeleft API integration OR manual (Pete books restaurants)</li>
          <li>Event RSVP system: Teachers sign up, pay $12/event or $18/month subscription</li>
          <li>Attendance tracking: QR code check-in</li>
          <li>Restaurant commission: Negotiate 10-15% commission on food/drinks</li>
          <li>Net revenue: $12 ticket - $3 restaurant commission = $9 profit/teacher</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>4 cities with weekly meetups</li>
          <li>20+ teachers/event average</li>
          <li>Revenue: $720/week = $2,880/month (20 teachers × 4 cities × $9 profit)</li>
        </ul>
        <p><strong>Build Time:</strong> 2 weeks (Mojo for RSVP system, Pete for operations)</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR39: Escrow/EOR Service (C.7)</h5>
        <p><strong>Priority:</strong> P2 (Nice to Have)</p>
        <p><strong>Description:</strong> Partner with Deel/Skuad for escrow payments and Employer of Record</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Escrow: School deposits 3 months salary, released monthly after teacher confirmation</li>
          <li>Fee: 3-5% of salary</li>
          <li>EOR: Deel/Skuad handles visa, payroll, insurance</li>
          <li>Fee: $200-300/teacher/month</li>
          <li>API integration with Deel or Skuad</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>10+ schools use escrow service</li>
          <li>5+ teachers hired via EOR</li>
          <li>Revenue: $5K-$10K/month from fees</li>
        </ul>
        <p><strong>Build Time:</strong> 4 weeks (Mojo for integration, legal contracts)</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>Target Metrics:</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Advanced badges: 20+ schools with Tier 2/3 badges</li>
          <li>Meetups: 80+ teachers/week across 4 cities</li>
          <li>Escrow/EOR: $10K/month additional revenue</li>
          <li>Competitive moat: Dave's ESL can't replicate badge system, meetups, or escrow</li>
        </ul>
      </div>

      <h4 style={{ marginTop: '25px' }}>Evidence & Case Studies</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li><strong>Yelp Elite badges:</strong> Top reviewers get special badge, exclusive events. Creates status game that drives engagement</li>
        <li><strong>Timeleft:</strong> Weekly dinner meetups in 300+ cities. $12-18/person, 80%+ retention rate</li>
        <li><strong>Deel:</strong> $12B valuation (2023). EOR service is $5.4B market growing 20%/year</li>
        <li><strong>Escrow.com:</strong> Escrow payments reduce fraud 95%+. Teachers willing to pay 3-5% fee for protection</li>
      </ul>
    </Section>
  )
}
