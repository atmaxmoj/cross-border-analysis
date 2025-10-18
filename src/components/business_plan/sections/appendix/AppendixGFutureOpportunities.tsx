import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'
import D1SuperApp from '../desiderata/D1SuperApp'
import D2SchoolSaaS from '../desiderata/D2SchoolSaaS'
import D3PredictiveMatching from '../desiderata/D3PredictiveMatching'
import D4TeacherCollectives from '../desiderata/D4TeacherCollectives'
import D5GeographicExpansion from '../desiderata/D5GeographicExpansion'

export default function AppendixGFutureOpportunities() {
  return (
    <Section id="appendix-g-future" title="G. Future Opportunities (5-10 Year Vision)">
      <InfoBox>
        <strong>⚠️ Important Context:</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          The features in this appendix represent <strong>5-10 year transformative opportunities</strong>, NOT Year 1-4 operational priorities.
          These D-tier features fundamentally change market structure and create new business models (think WeChat super-app,
          Workday SaaS transformation, LinkedIn network effects). They are included for strategic vision but should NOT distract
          from core execution (Stages 1-4).
        </p>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          <strong>Decision criteria for pursuing D-tier:</strong> Only consider these features after achieving $1M+ ARR,
          1,000+ paying schools, and defensible moats in core markets (China ESL + adjacent markets). Each D-tier feature
          requires different team composition, capital structure, and GTM strategy than the core job board business.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>D-Tier: Disruptive/Transformative Features</h3>
      <p>
        <strong>Beyond Kano: D-Tier Features</strong> - These features don't just create competitive moats, they fundamentally
        TRANSFORM the industry structure. D-tier changes market category definition, shifts power dynamics, or creates new business
        models. Think WeChat (messaging → super-app), Workday (on-prem HR → cloud SaaS), LinkedIn (recruitment → professional network).
      </p>
      <p>
        <strong>Characteristics of D-Tier:</strong> Winner-take-all network effects, 10x+ TAM expansion, impossible to achieve without
        platform/technology enabling coordination at scale. These are 5-10 year visions, not Year 1-3 features.
      </p>

      <D1SuperApp />
      <D2SchoolSaaS />
      <D3PredictiveMatching />
      <D4TeacherCollectives />
      <D5GeographicExpansion />

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #ecc94b', borderRadius: '8px' }}>
        <strong style={{ fontSize: '1.1em' }}>Summary: D-Tier Impact & Requirements</strong>
        <table style={{ width: '100%', marginTop: '15px', fontSize: '0.9em', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#fde68a', borderBottom: '2px solid #ecc94b' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Feature</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>TAM Impact</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Team Requirements</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Capital Needs</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #fde68a' }}>
              <td style={{ padding: '10px' }}><strong>D.1 Super-App</strong></td>
              <td style={{ padding: '10px' }}>$100M+ ARR<br/><span style={{ fontSize: '0.85em', color: '#78350f' }}>(WeChat-level ecosystem)</span></td>
              <td style={{ padding: '10px' }}>50+ engineers<br/>Product managers<br/>Operations team</td>
              <td style={{ padding: '10px' }}>$20M+ Series B</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #fde68a' }}>
              <td style={{ padding: '10px' }}><strong>D.2 School SaaS</strong></td>
              <td style={{ padding: '10px' }}>$50M+ ARR<br/><span style={{ fontSize: '0.85em', color: '#78350f' }}>(Workday-level recurring)</span></td>
              <td style={{ padding: '10px' }}>Enterprise sales<br/>Customer success<br/>Implementation team</td>
              <td style={{ padding: '10px' }}>$15M+ Series B</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #fde68a' }}>
              <td style={{ padding: '10px' }}><strong>D.3 Predictive Matching</strong></td>
              <td style={{ padding: '10px' }}>$10M+ ARR premium<br/><span style={{ fontSize: '0.85em', color: '#78350f' }}>(Bloomberg-level data moat)</span></td>
              <td style={{ padding: '10px' }}>ML engineers<br/>Data scientists<br/>Data infrastructure</td>
              <td style={{ padding: '10px' }}>$5M+ Series A extension</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #fde68a' }}>
              <td style={{ padding: '10px' }}><strong>D.4 Teacher Collectives</strong></td>
              <td style={{ padding: '10px' }}>Market power shift<br/><span style={{ fontSize: '0.85em', color: '#78350f' }}>(labor union dynamics)</span></td>
              <td style={{ padding: '10px' }}>Legal counsel<br/>Collective bargaining experts<br/>Government relations</td>
              <td style={{ padding: '10px' }}>$3M+ foundation funding<br/>(non-profit structure)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>D.5 Geographic Expansion</strong></td>
              <td style={{ padding: '10px' }}>$100M+ ARR<br/><span style={{ fontSize: '0.85em', color: '#78350f' }}>(LinkedIn-level category expansion)</span></td>
              <td style={{ padding: '10px' }}>Country managers<br/>Localization teams<br/>Regional legal/compliance</td>
              <td style={{ padding: '10px' }}>$30M+ Series C<br/>(global infrastructure)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '8px' }}>
        <strong>📌 Recommended Approach:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Years 1-4:</strong> Focus exclusively on Stages 1-4 (A/B/C-tier features). Do NOT build D-tier features.</li>
          <li><strong>Year 5 Decision Point:</strong> If core business reaches $1M+ ARR with strong unit economics, evaluate D-tier opportunities:
            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
              <li>D.3 Predictive Matching: Natural evolution of existing data moat</li>
              <li>D.5 Geographic Expansion: Scale proven model to new markets</li>
            </ul>
          </li>
          <li><strong>Year 7+ Decision Point:</strong> If company reaches $10M+ ARR, evaluate transformative pivots:
            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
              <li>D.1 Super-App: Requires $20M+ capital raise, 50+ person team</li>
              <li>D.2 School SaaS: Requires enterprise sales team, different GTM</li>
              <li>D.4 Teacher Collectives: Requires non-profit structure, political strategy</li>
            </ul>
          </li>
          <li><strong>Risk:</strong> Building D-tier features too early distracts from core execution, burns runway, creates complexity that kills the company before reaching PMF.</li>
        </ul>
      </div>
    </Section>
  )
}
