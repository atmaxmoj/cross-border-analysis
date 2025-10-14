import Section from '../../layout/Section'
import CompetitivePositioningChart from '../../charts/CompetitivePositioningChart'

export default function CompetitiveLandscape() {
  return (
    <Section id="competitive-landscape" title="Competitive Landscape">
      <h4>Direct Competitors:</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '10px' }}>
        <strong>⚠️ Market share estimates are ASSUMPTIONS</strong> based on platform mention frequency in YouTeacher UGC analysis (6,195 posts across 12 platforms) and teacher discussion patterns. No validated market research or revenue data available for competitors. These percentages represent relative platform popularity among teachers in our dataset, not actual market share.
      </p>

      <div style={{ background: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#2c5282' }}>📊 Methodology: How Market Share Estimates Were Calculated</h4>

        <p style={{ fontSize: '0.9em', marginBottom: '15px', color: '#2d3748' }}>
          <strong>Data Source:</strong> 6,195 teacher posts across 12 Reddit communities (r/InternationalTeachers, r/ChinaLife, r/TEFLteachers, r/IWantOut, etc.) analyzed for platform mentions when teachers discussed job hunting, recruitment, or platform experiences.
        </p>

        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Platform Mention Frequency (from UGC analysis):</strong>
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
          <li><strong>Dave's ESL Cafe:</strong> 1,316 mentions/discussions (59.8% of 2,200 total platform-specific mentions)</li>
          <li><strong>SeriousTeachers:</strong> ~330 estimated mentions (15% of platform mentions)</li>
          <li><strong>TEFL.com:</strong> ~220 estimated mentions (10% of platform mentions)</li>
          <li><strong>Teach Away:</strong> ~176 estimated mentions (8% of platform mentions)</li>
          <li><strong>Other platforms:</strong> ~158 combined mentions (7% of platform mentions)</li>
        </ul>

        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Calculation Example:</strong> Dave's ESL Cafe: 1,316 mentions ÷ 2,200 total platform mentions = 59.8% → rounded to ~60%
        </p>

        <p style={{ fontSize: '0.85em', color: '#e53e3e', marginBottom: '10px' }}>
          <strong>⚠️ CRITICAL LIMITATIONS:</strong>
        </p>
        <ul style={{ fontSize: '0.8em', lineHeight: '1.8', color: '#e53e3e', marginBottom: '0' }}>
          <li>These are <strong>teacher discussion frequency percentages</strong>, NOT revenue-based market share</li>
          <li>Reddit sample may not represent all ESL teachers (self-selection bias toward tech-savvy, English-speaking teachers)</li>
          <li>Mention frequency ≠ usage rate (teachers may complain about platforms they use or discuss dominant platforms regardless of personal use)</li>
          <li>No validation against actual platform traffic, revenue, or user counts</li>
          <li>2,200 platform-specific mentions identified from 6,195 total posts - other posts discussed jobs without naming platforms</li>
        </ul>
      </div>

      <p style={{ marginBottom: '15px' }}>
        <a href="/data/analysis_daves_esl_cafe" style={{ color: '#4299e1', textDecoration: 'underline' }}>
          View Dave's ESL Cafe Analysis (1,556 posts)
        </a>
        <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
          See evidence for 'ghost town' effect and platform decline
        </span>
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Est. Market Share</th>
            <th>Strengths</th>
            <th>Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.eslcafe.com/" target="_blank" rel="noopener noreferrer">Dave's ESL Cafe</a></td>
            <td>~60% <span style={{ fontSize: '0.75em', color: '#718096' }}>(most mentioned in our UGC sample)</span></td>
            <td>Long-established brand <span style={{ fontSize: '0.75em', color: '#718096' }}>(site claims founded 1995)</span>, dominant in search results <span style={{ fontSize: '0.75em', color: '#718096' }}>(appears first for "ESL jobs China" searches based on testing, 2025)</span></td>
            <td>"<a href="https://forums.eslcafe.com/job/" target="_blank" rel="noopener noreferrer">Ghost town</a>" effect - urgent questions get zero replies <span style={{ fontSize: '0.85em', color: '#718096' }}>(per our analysis of 1,316 posts, 2025)</span>; heavy moderation <span style={{ fontSize: '0.75em', color: '#718096' }}>(ISP bans mentioned in forum threads)</span>; teachers on <a href="https://www.reddit.com/r/ChinaJobs/" target="_blank" rel="noopener noreferrer">r/ChinaJobs</a> claim "90% fake listings"; <a href="https://forums.eslcafe.com/job/viewtopic.php?t=118600" target="_blank" rel="noopener noreferrer">user post</a> states "ESL industry in death throes"</td>
          </tr>
          <tr>
            <td><a href="https://www.seriousteachers.org/" target="_blank" rel="noopener noreferrer">SeriousTeachers</a></td>
            <td>~15% <span style={{ fontSize: '0.75em', color: '#718096' }}>(2nd most mentioned in our sample)</span></td>
            <td>Modern interface, job filtering features</td>
            <td>Smaller community <span style={{ fontSize: '0.75em', color: '#718096' }}>(fewer teacher discussions than Dave's in our UGC data)</span></td>
          </tr>
          <tr>
            <td><a href="https://www.tefl.com/" target="_blank" rel="noopener noreferrer">TEFL.com</a></td>
            <td>~10% <span style={{ fontSize: '0.75em', color: '#718096' }}>(3rd most mentioned)</span></td>
            <td>International reach <span style={{ fontSize: '0.75em', color: '#718096' }}>(founded 1997, operates globally per search results)</span></td>
            <td>Less China-specific <span style={{ fontSize: '0.75em', color: '#718096' }}>(global TEFL platform, not China-focused per teacher discussions in our UGC data)</span></td>
          </tr>
          <tr>
            <td><a href="https://www.teachaway.com/" target="_blank" rel="noopener noreferrer">Teach Away</a></td>
            <td>~8% <span style={{ fontSize: '0.75em', color: '#718096' }}>(mentioned in our sample)</span></td>
            <td>Full-service recruiter model <span style={{ fontSize: '0.75em', color: '#718096' }}>(founded 2003, recruits for 50+ countries per <a href="https://ca.linkedin.com/company/teachaway" target="_blank" rel="noopener noreferrer">LinkedIn</a>)</span></td>
            <td>Premium pricing <span style={{ fontSize: '0.75em', color: '#718096' }}>(schools pay placement fees to recruiters vs. free job board posting)</span></td>
          </tr>
          <tr>
            <td>Others</td>
            <td>~7% <span style={{ fontSize: '0.75em', color: '#718096' }}>(various niche platforms)</span></td>
            <td>Specialized features</td>
            <td>Limited mention <span style={{ fontSize: '0.75em', color: '#718096' }}>(rarely appeared in our UGC analysis)</span></td>
          </tr>
        </tbody>
      </table>

      <h4>Competitive Positioning Map:</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '10px' }}>
        ⚠️ THEORETICAL POSITIONING MAP (not based on quantitative research). This represents YouTeacher's strategic intent to compete on both trust (verification) and technology (modern platform), positioning against Dave's ESL Cafe (high trust/low tech legacy) and scam sites (low trust).
      </p>

      <CompetitivePositioningChart />
    </Section>
  )
}
