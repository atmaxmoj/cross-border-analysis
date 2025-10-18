import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'

export default function AppendixC() {
  return (
    <Chapter id="appendix-c" title="Appendix C: Competitor Landscape">
      <Section id="esl-job-boards" title="ESL-Specific Job Boards">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>Dave's ESL Cafe</strong></td>
              <td style={{ padding: '8px' }}>Trust & network effects (1995-era forum, dominant despite terrible UX)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>SeriousTeachers.org</strong></td>
              <td style={{ padding: '8px' }}>ESL job aggregation, better UI than Dave's ESL</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>TEFL.net</strong></td>
              <td style={{ padding: '8px' }}>ESL job board + TEFL certification content</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Teach Away</strong></td>
              <td style={{ padding: '8px' }}>Full-service recruiting agency (high-touch, expensive for schools)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>ISC Research</strong></td>
              <td style={{ padding: '8px' }}>International school database (B2B focus, premium pricing)</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="asia-teaching-platforms" title="Asia Teaching Platforms">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>GaijinPot</strong></td>
              <td style={{ padding: '8px' }}>Japan teaching jobs, dominant market position (similar to Dave's ESL in China)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>JET Programme</strong></td>
              <td style={{ padding: '8px' }}>Government-sponsored teaching (Japan), high trust but limited positions</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>EPIK</strong></td>
              <td style={{ padding: '8px' }}>Government-sponsored teaching (Korea), official channel with visa support</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>HiredChina.com</strong></td>
              <td style={{ padding: '8px' }}>Foreign jobs in China (all sectors), low verification standards</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="general-job-platforms" title="General Job Platforms (China & Asia)">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>Boss Zhipin (BOSS直聘)</strong></td>
              <td style={{ padding: '8px' }}>AI matching + direct chat, $15.2B market cap, weak for foreigners (Chinese UI)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>51job (前程无忧)</strong></td>
              <td style={{ padding: '8px' }}>China general jobs, large database but poor verification</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Zhaopin (智联招聘)</strong></td>
              <td style={{ padding: '8px' }}>China general jobs, B2B focus (recruiters)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>LinkedIn</strong></td>
              <td style={{ padding: '8px' }}>Professional network + jobs, weak in ESL niche (not education-focused)</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="global-job-platforms" title="Global Job Platforms">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>Indeed</strong></td>
              <td style={{ padding: '8px' }}>Job aggregation at scale, $1.8B acquisition, weak niche differentiation</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Glassdoor</strong></td>
              <td style={{ padding: '8px' }}>Company reviews + salary data, $1.2B acquisition, weak in Asia markets</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="community-platforms" title="Community & Social Platforms">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>Reddit (r/TEFL, r/Chinajobs)</strong></td>
              <td style={{ padding: '8px' }}>Community advice & job discussions, but no structured job board</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>WeChat Groups</strong></td>
              <td style={{ padding: '8px' }}>Informal teacher networks, ephemeral job postings, no verification</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Facebook Groups (ESL Teachers in China)</strong></td>
              <td style={{ padding: '8px' }}>Peer recommendations, but spam-heavy and no structured search</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="support-services" title="Support Services (Adjacent Competition)">
        <table style={{ fontSize: '0.9em', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competitor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Competing On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}><strong>Deel / Skuad</strong></td>
              <td style={{ padding: '8px' }}>EOR services ($400-$800/month), high barrier but we can partner not compete</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Timeleft</strong></td>
              <td style={{ padding: '8px' }}>Weekly social dinners (€12M ARR), proves community monetization model</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Stack Overflow</strong></td>
              <td style={{ padding: '8px' }}>Community + jobs combo ($1.8B acquisition), different vertical but same model</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
        <strong>Competitive Positioning Summary:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>vs. Dave's ESL Cafe:</strong> Better UX + verification infrastructure (they have network effects, we build trust through data)</li>
          <li><strong>vs. General platforms (Boss Zhipin, 51job):</strong> ESL vertical specialization + English UI + scam protection</li>
          <li><strong>vs. Teach Away:</strong> Self-service platform (lower cost for schools) + teacher community (not just recruiter marketplace)</li>
          <li><strong>vs. Global platforms (Indeed, Glassdoor):</strong> Asia market focus + Chinese business license verification + local community</li>
          <li><strong>vs. Government programs (JET, EPIK):</strong> Broader school coverage (not just public schools) + year-round hiring (not single annual intake)</li>
        </ul>

        <p style={{ fontSize: '0.9em', marginTop: '15px', fontWeight: 'bold' }}>
          Our moat: Verification infrastructure (2-3 years to replicate) + community relationships (C.6 meetups, uncopyable) + AI data models (C.1, C.8 improve with scale).
        </p>
      </div>

      <div className="section-divider"></div>
    </Chapter>
  )
}
