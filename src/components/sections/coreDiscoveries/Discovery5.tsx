import Section from '../../layout/Section'
import InsightBox from '../../ui/InsightBox'

export default function Discovery5() {
  return (
    <Section id="discovery-5" title="Discovery #5: Successful New Entrants (2006+) Focused on Single Regions, Not Global Launch">
      <p><strong>What prompted this investigation:</strong> Pete's original plan proposed expanding from China → Korea → Japan → SE Asia → MENA → LatAm within 18 months. This raised questions about whether new platforms should start global or focus regionally. Examining how existing competitors approached geographic expansion reveals a critical pattern.</p>

      <h4>Competitor Regional Strategies:</h4>
      <table style={{ margin: '20px 0' }}>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Founded</th>
            <th>Initial Geographic Strategy</th>
            <th>Current Coverage</th>
            <th>Market Position</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#fff9e6' }}>
            <td><strong>Dave's ESL Cafe</strong></td>
            <td>1995</td>
            <td style={{ background: '#ffe0b2' }}>Global from Day 1<br /><span style={{ fontSize: '0.85em' }}>Separate boards for China, Korea, Japan, International</span></td>
            <td>Global (China, Korea, Japan, Europe, SE Asia)</td>
            <td>Market leader (350K monthly visitors)</td>
          </tr>
          <tr style={{ background: '#fff9e6' }}>
            <td><strong>TeachAway</strong></td>
            <td>2003</td>
            <td style={{ background: '#ffe0b2' }}>Global from Day 1<br /><span style={{ fontSize: '0.85em' }}>Started with Middle East (UAE), rapidly expanded</span></td>
            <td>Global (UAE, Japan, Korea, Saudi Arabia, China, Thailand, Kazakhstan, Spain, Poland, Vietnam)</td>
            <td>2,000+ schools, 60K monthly applicants</td>
          </tr>
          <tr style={{ background: '#fff9e6' }}>
            <td><strong>SeriousTeachers</strong></td>
            <td>2009</td>
            <td style={{ background: '#ffe0b2' }}>Global from Day 1<br /><span style={{ fontSize: '0.85em' }}>"International Alliance" covering 150+ countries</span></td>
            <td>Global (150+ countries)</td>
            <td>48K TEFL graduates database</td>
          </tr>
          <tr>
            <td colSpan={5} style={{ background: '#f5f5f5', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9em', padding: '8px' }}>Regional-Focus New Entrants (2006+)</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td><strong>Korvia</strong></td>
            <td>2006</td>
            <td style={{ background: '#c8e6c9', fontWeight: 'bold' }}>Korea ONLY<br /><span style={{ fontSize: '0.85em' }}>Exclusive EPIK partnership</span></td>
            <td>Korea only (public school programs: EPIK, GEPIK, GOE)</td>
            <td>10,000+ teachers placed; "Best Agency" award from Seoul City Mayor (2013)</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td><strong>HiredChina</strong></td>
            <td>2014</td>
            <td style={{ background: '#c8e6c9', fontWeight: 'bold' }}>China ONLY<br /><span style={{ fontSize: '0.85em' }}>Based in Hong Kong, China-focused from start</span></td>
            <td>China only (Shanghai, Beijing, Guangzhou, Shenzhen)</td>
            <td>6,000+ companies, 200K+ WeChat followers; "China's most professional foreigner job search platform"</td>
          </tr>
        </tbody>
      </table>

      <h4>Critical Insight: The Window for Global Launch Closed After 2009</h4>
      <InsightBox>
        <strong>Pattern Analysis:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li><strong>Pre-2010 Era (1995-2009):</strong> Platforms could launch globally because the market was nascent. Dave's, TeachAway, and SeriousTeachers faced minimal competition and teachers had few alternatives. Going global immediately created network effects across all regions.</li>
          <li><strong>Post-2010 Era (2010+):</strong> With established global players already dominant, new entrants succeeded by <strong>going deep, not wide</strong>:
            <ul>
              <li><strong>Korvia (2006):</strong> Became Korea's #1 agency by focusing exclusively on EPIK public school programs, winning government partnerships and Seoul City Mayor's "Best Agency" award</li>
              <li><strong>HiredChina (2014):</strong> Became China's leading expat job platform by understanding China-specific needs (WeChat integration, Chinese company relationships, local regulatory knowledge)</li>
            </ul>
          </li>
          <li><strong>Why regional focus wins now:</strong> Regional platforms can offer deeper value than global competitors:
            <ul>
              <li>Local regulatory expertise (work permits, visa processes vary by country)</li>
              <li>Government/ministry partnerships (Korvia's exclusive EPIK partnership)</li>
              <li>Cultural/language integration (HiredChina's WeChat, Chinese company database)</li>
              <li>Focused community (teachers want region-specific advice, not generic global forums)</li>
            </ul>
          </li>
        </ul>
      </InsightBox>
    </Section>
  )
}
