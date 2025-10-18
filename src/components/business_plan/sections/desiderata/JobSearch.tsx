import InfoBox from '../../../ui/InfoBox'

export default function JobSearch() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>A.2 Browse &amp; Basic Search</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #1 (Competing with incumbents)<br/>
        <strong>Solves Pain Point:</strong> Teachers need to find relevant jobs quickly. Scrolling through hundreds of listings is frustrating.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Every job board:</strong> Basic search is table stakes. Craigslist, Indeed, Dave's ESL all have keyword + location search.</li>
          <li><strong>Without search:</strong> Platform is unusable at scale. Must have from day 1.</li>
        </ul>
        <strong>Implementation:</strong> Bare minimum:
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>List view of all job postings (newest first)</li>
          <li>Simple keyword search (job title, description)</li>
          <li>Simple location filter (city dropdown)</li>
          <li>Click job to see full details</li>
        </ul>
      </InfoBox>
    </div>
  )
}
