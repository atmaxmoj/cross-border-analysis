import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function ZillowDataFirst() {
  return (
    <Section id="zillow-data-first" title="Zillow's Data-First Cold Start (Building a Data Moat)">
      <h4>Overview:</h4>
      <p>
        Zillow revolutionized the real estate industry by providing accessible data, with its core feature being the "Zestimate,"
        a free, computer-generated home valuation tool.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Data as the Product (Question #4, #7):</strong> Zillow's innovation was turning previously inaccessible
          real estate data into a consumer-facing product. This immediately attracted users and press.
        </li>
        <li>
          <strong>Multi-Source Data Aggregation (Question #4):</strong> Zillow built its massive dataset by:
          <ul>
            <li>Purchasing public records (e.g., property tax assessments from county records).</li>
            <li>Negotiating with data owners (e.g., live listing data from Multiple Listing Services - MLS).</li>
            <li>Crowdsourcing: Allowing homeowners to update their own property details.</li>
          </ul>
          <span style={{ fontSize: '0.85em', color: '#718096' }}>
            Source: <a href="https://www.zippia.com/zillow-careers/history/" target="_blank" rel="noopener noreferrer">Zippia</a>, <a href="https://www.bestpractice.ai/case-studies/zillow-zestimate" target="_blank" rel="noopener noreferrer">BestPractice.ai</a>
          </span>
        </li>
        <li>
          <strong>Solving Cold Start with Data (Question #2):</strong> Zillow launched with a massive amount of data and a compelling, novel tool (the Zestimate) from day one, creating immediate value for users before a traditional marketplace fully formed.
        </li>
      </ul>

      <h4 style={{ marginTop: '30px' }}>SWOT Analysis for YouTeacher:</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
          <strong style={{ color: '#2f855a' }}>Strengths (Copy)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li><strong>Data-first launch strategy:</strong> Zillow had Zestimates for 90M+ homes before marketplace existed - we replicate via A.1 Job Aggregator (50K+ jobs from scraping day 1)</li>
            <li>Multi-source data aggregation - we copy with B.6 School Verification (GSXT + Tianyancha + court records + Maps API)</li>
            <li>Novel data product creates PR buzz - our B.5 Purchasing Power Calculator ("15K RMB = $2,500 in Chengdu") is Zestimate equivalent</li>
            <li>Crowdsourced updates (homeowners correct Zestimates) - we do same with B.1 teacher reviews correcting school info</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fff5f5', border: '2px solid #fc8181', borderRadius: '4px' }}>
          <strong style={{ color: '#c53030' }}>Weaknesses (Avoid)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Zestimate accuracy issues - early estimates ±20% off, damaged trust. Our B.5 purchasing power data must be accurate from day 1</li>
            <li>Data licensing costs - Zillow spent millions on MLS data. We avoid by scraping free public sources (GSXT, Dave's ESL)</li>
            <li>Relied on public records - China has less public data than US, mitigate: scrape what's available + crowdsource teacher reviews</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
          <strong style={{ color: '#2c5282' }}>Opportunities (Gaps to Exploit)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>ESL market has ZERO data products like Zestimate - B.5 Purchasing Power Calculator fills complete void</li>
            <li>Zillow focused US only - we build multi-market from day 1 (China/Korea/Japan via B.10 client entities)</li>
            <li>Real estate data commoditized over time - we avoid by adding human layer (B.1 reviews) data can't replace</li>
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
          <strong style={{ color: '#744210' }}>Threats (Competitive Risks)</strong>
          <ul style={{ margin: '5px 0', fontSize: '0.85em', lineHeight: '1.6' }}>
            <li>Data moat erodes if government opens records - unlikely in China (data remains fragmented), but monitor</li>
            <li>Competitors could copy algorithm - mitigate by adding proprietary teacher expense data no one else has</li>
            <li>Zillow faced agent backlash ("inaccurate Zestimates hurt sales") - we may face school pushback on verification scores, mitigate: B.10 Edge Entity hosts data outside China jurisdiction</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
