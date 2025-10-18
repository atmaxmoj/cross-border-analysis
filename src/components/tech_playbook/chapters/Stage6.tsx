import Section from '../../layout/Section'

export default function Stage6() {
  return (
    <Section id="stage6-tracking" title="Stage 6: Application Tracking (Year 3)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Enable in-platform applications so teachers apply ON our site instead of redirecting to schools.</strong>
          Capture conversion data to prove ROI to schools.
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> B-Tier (Differentiators) - Application tracking increases platform stickiness
        </p>
      </div>

      <h4>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a teacher, I want to apply through the platform, so I can track my application status</li>
        <li>As a school, I want to see all applicants in one dashboard, so I don't manage email chaos</li>
        <li>As a school, I want to update application status (Viewed, Interview, Offer), so teachers know where they stand</li>
        <li>As Pete, I want application-to-hire conversion data, so I can prove ROI and justify premium pricing</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR34: Application Management System</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> In-platform application system with status tracking</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Apply button: Teachers submit resume, cover letter, contact info</li>
          <li>Application status workflow: Submitted → Viewed → Interview Scheduled → Offer → Hired/Rejected</li>
          <li>School dashboard: View all applicants, filter by status, sort by date</li>
          <li>School can update status, add notes (internal, not visible to teacher)</li>
          <li>Teacher dashboard: Track applications, see status updates</li>
          <li>Email notifications: Status updates sent to teacher</li>
          <li>Analytics: Track conversion rates (applied → interviewed → hired)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>50%+ of applications happen in-platform (vs external redirects)</li>
          <li>Schools update status for 60%+ of applications</li>
          <li>Application-to-hire conversion rate: 5-10% (industry benchmark)</li>
        </ul>
        <p><strong>Build Time:</strong> 3 weeks</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>Target Metrics (Month 36):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>In-platform applications: 50%+ of total applications</li>
          <li>Conversion data: Track 500+ applications from submission to hire</li>
          <li>Schools willing to pay premium ($99 vs $49) for access to application tracking</li>
        </ul>
      </div>
    </Section>
  )
}
