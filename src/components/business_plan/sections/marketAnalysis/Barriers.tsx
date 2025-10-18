import Section from '../../../layout/Section'

export default function Barriers() {
  return (
    <Section id="barriers" title="Barriers to Entry">
      <h4>Observed Market Barriers (Competitor Moats & User Pain Points):</h4>
      <p style={{ fontSize: '0.9em', color: '#718096', marginBottom: '15px' }}>
        Analysis of structural barriers that protect incumbent platforms and create friction for teachers attempting to verify schools. These barriers emerge from competitive advantages established platforms have built and pain points teachers face in the current market.
      </p>

      <div style={{ background: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#2c5282' }}>🏰 Barrier 1: Dave's ESL Cafe's Network Effects & Brand Moat</h4>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Observation:</strong> Dave's ESL Cafe maintains dominant market position (60% mention frequency in our UGC analysis) despite objectively poor user experience through accumulated network effects and brand recognition built over 30 years (founded 1995).
        </p>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Competitors' Moat:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>Two-sided marketplace lock-in:</strong> Schools post because teachers look there; teachers look because schools post there</li>
          <li><strong>Search engine dominance:</strong> "ESL jobs China" searches rank Dave's ESL first (decades of SEO authority)</li>
          <li><strong>Teacher habit formation:</strong> 30 years of ESL teachers learning "Dave's ESL is where you find jobs" creates generational inertia</li>
          <li><strong>Free posting model:</strong> Zero cost for schools to post maintains high listing volume even if quality is poor</li>
        </ul>
        <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic' }}>
          Evidence: Despite widespread complaints ("ghost town" forum, "90% fake listings" claims from r/ChinaJobs), Dave's ESL Cafe received 1,316 mentions in our 6,195-post UGC analysis - 3x more than SeriousTeachers (330 mentions) and TEFL.com (220 mentions) combined.
        </p>
      </div>

      <div style={{ background: '#fff5f5', border: '2px solid #fc8181', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#c53030' }}>🚫 Barrier 2: Lack of School Verification Creates Information Asymmetry</h4>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Observation:</strong> Teachers face severe information barriers when trying to verify school legitimacy, forcing them to rely on fragmented Reddit posts, WeChat groups, and word-of-mouth rather than systematic verification.
        </p>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Pain Points Creating Barriers:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>No centralized verification database exists:</strong> Teachers must manually search "Anyone know X school?" across multiple forums</li>
          <li><strong>Information scattered across 10+ platforms:</strong> Dave's ESL forum threads, r/TEFL, r/ChinaJobs, WeChat groups, 知乎, 小红书</li>
          <li><strong>Outdated information:</strong> School reputations change but old forum posts remain visible; no real-time updates</li>
          <li><strong>Survivorship bias:</strong> Teachers who got scammed often leave market; remaining voices may not reflect true scam prevalence</li>
          <li><strong>Language barriers:</strong> Chinese platforms (知乎, 小红书) have local teacher discussions but English speakers can't access</li>
        </ul>
        <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic' }}>
          Evidence: Our pain point analysis found "Can't Verify School Legitimacy" in 12/12 data sources (100% consistency). Typical pattern: Teacher posts "Anyone heard of [School Name]?" on Reddit → gets 0-2 replies after 48 hours → must decide whether to accept job offer anyway.
        </p>
      </div>

      <div style={{ background: '#f0fff4', border: '2px solid #68d391', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#2f855a' }}>🔒 Barrier 3: High Trust Threshold for New Platforms</h4>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Observation:</strong> Teachers exhibit strong risk aversion after hearing scam stories, creating high trust barriers for any new job platform to overcome.
        </p>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Competitors' Moat:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>Legacy brand = "battle-tested":</strong> Dave's ESL Cafe's 30-year history signals "at least they're not a complete scam site"</li>
          <li><strong>Community proof through volume:</strong> Hundreds of forum posts and job listings create social proof ("everyone uses this")</li>
          <li><strong>Teacher testimonials:</strong> "I found my job on Dave's ESL" stories perpetuate platform legitimacy despite negative experiences</li>
          <li><strong>Lack of alternatives:</strong> Teachers stick with Dave's ESL because switching to unknown platform feels riskier than staying</li>
        </ul>
        <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic' }}>
          Evidence: SeriousTeachers (15% market share) and TEFL.com (10%) have failed to significantly erode Dave's ESL dominance despite modern interfaces. Teachers in r/TEFL discussions frequently say "I know Dave's ESL has scams but at least I know what I'm dealing with."
        </p>
      </div>

      <div style={{ background: '#faf5ff', border: '2px solid #9f7aea', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#6b46c1' }}>💸 Barrier 4: Free Alternatives Reduce Willingness to Pay</h4>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Observation:</strong> Teachers have access to multiple zero-cost verification channels (Reddit, WeChat groups, Facebook groups), creating price sensitivity for any paid verification service.
        </p>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Pain Points Creating Barriers:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>Reddit posts are free:</strong> Teachers can ask "Anyone know X school?" on r/TEFL at zero cost</li>
          <li><strong>WeChat groups provide instant feedback:</strong> Free ESL teacher WeChat groups have hundreds of members willing to share experiences</li>
          <li><strong>Dave's ESL forum browsing is free:</strong> Teachers can search forum history for school names at no cost</li>
          <li><strong>Teacher salary constraints:</strong> ESL teachers earn $25K-45K/year avg; willingness-to-pay for verification is unknown</li>
          <li><strong>"Good enough" problem:</strong> Free options (despite being slow/unreliable) may be acceptable to price-sensitive teachers</li>
        </ul>
        <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic' }}>
          Evidence: Our UGC analysis found hundreds of "Anyone know [School]?" posts on free Reddit forums rather than teachers paying for SeriousTeachers ($98/month) or other paid verification services. No customer discovery conducted to validate WTP for systematic verification.
        </p>
      </div>

      <div style={{ background: '#fffaf0', border: '2px solid #ed8936', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
        <h4 style={{ marginTop: '0', marginBottom: '15px', color: '#c05621' }}>🏛️ Barrier 5: Regulatory Risk & Market Uncertainty</h4>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748' }}>
          <strong>Observation:</strong> China's 2021 "Double Reduction" education policy created massive market contraction, demonstrating regulatory risk that creates caution for any China-focused education platform.
        </p>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Competitors' Moat:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>Geographic diversification:</strong> Dave's ESL serves all Asian markets (Japan, Korea, Thailand, Vietnam, etc.), reducing China exposure</li>
          <li><strong>Platform neutrality:</strong> Job boards are less regulated than education content/training providers</li>
          <li><strong>Established players adapted:</strong> Dave's ESL survived 2021 crackdown because it's not a training provider itself</li>
        </ul>
        <p style={{ fontSize: '0.9em', marginBottom: '10px', color: '#2d3748', fontWeight: 'bold' }}>
          Pain Points Creating Barriers:
        </p>
        <ul style={{ fontSize: '0.85em', lineHeight: '1.8', color: '#4a5568', marginBottom: '10px' }}>
          <li><strong>Market size declined 60-75%:</strong> From historical peak 100,000-400,000 foreign teachers to current ~40,000-100,000 (est.)</li>
          <li><strong>Policy unpredictability:</strong> 2021 crackdown happened suddenly; no warning for platforms or teachers</li>
          <li><strong>Continued visa restrictions:</strong> Tighter Category A/B/C work permit requirements limit eligible teacher pool</li>
        </ul>
        <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic' }}>
          Evidence: Industry estimates show current hiring at 12,000 teachers/year, down from historical highs. Post-2021, several major training center chains (Wall Street English, Web International English) closed Chinese operations entirely.
        </p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '8px', marginTop: '30px', border: '2px solid #f59e0b' }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>📊 Summary: Barrier Strength Assessment</h4>

        <p style={{ fontSize: '0.9em', marginBottom: '15px', color: '#78350f', lineHeight: '1.8' }}>
          <strong>Strongest Barrier:</strong> Dave's ESL Cafe's network effects and 30-year brand moat. Two-sided marketplace lock-in creates powerful incumbent advantage.
        </p>

        <p style={{ fontSize: '0.9em', marginBottom: '15px', color: '#78350f', lineHeight: '1.8' }}>
          <strong>Most Painful User Barrier:</strong> Lack of centralized school verification database. Teachers face severe information asymmetry and must manually aggregate fragmented data.
        </p>

        <p style={{ fontSize: '0.9em', marginBottom: '0', color: '#78350f', lineHeight: '1.8' }}>
          <strong>Critical Unknown:</strong> Willingness-to-pay for systematic verification services remains unvalidated. Free alternatives (Reddit, WeChat) may be "good enough" despite being slow/unreliable.
        </p>
      </div>
    </Section>
  )
}
