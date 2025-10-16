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
    </Section>
  )
}
