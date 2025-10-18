import Section from '../../layout/Section'

export default function Stage5() {
  return (
    <Section id="stage5-discovery" title="Stage 5: Advanced Search & Discovery (Year 2-3)">
      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '6px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Strategic Goal</h4>
        <p style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
          <strong>Improve job discovery with advanced search, map view, saved searches.</strong> Solve Pain Point #8 (Job Search Friction).
        </p>
        <p style={{ fontSize: '0.85em', marginTop: '10px', color: '#92400e' }}>
          <strong>Tier:</strong> B-Tier (Differentiators) - Advanced search improves retention
        </p>
      </div>

      <h4>User Stories</h4>
      <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
        <li>As a teacher, I want to search jobs on a map, so I can find jobs near specific neighborhoods or subway lines</li>
        <li>As a teacher, I want to save my search criteria, so I get email alerts when new matching jobs are posted</li>
        <li>As a teacher, I want multi-field search (title + description + benefits), so I find jobs like "housing provided near subway"</li>
        <li>As a teacher, I want synonym search (ESL = TEFL = English teacher), so I don't miss relevant jobs</li>
      </ul>

      <h4 style={{ marginTop: '25px' }}>Feature Requirements</h4>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR31: Elasticsearch Migration</h5>
        <p><strong>Priority:</strong> P0 (Critical Path)</p>
        <p><strong>Description:</strong> Replace PostgreSQL FTS with Elasticsearch for advanced search</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Elasticsearch cluster setup (AWS OpenSearch or self-hosted)</li>
          <li>Job index schema: title, description, location, salary, benefits, school_name, posting_date</li>
          <li>Multi-field search: title^3 + description^2 + benefits^1 (weighted relevance)</li>
          <li>Faceted search: Filter by school_type, benefits (housing, flight, visa), contract_length</li>
          <li>Geo-search: Find jobs within X km of location (requires geocoding addresses)</li>
          <li>Synonym support: ESL = TEFL = English teacher = Foreign teacher</li>
          <li>Real-time indexing: Index new jobs within 1 minute of posting</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Search results return in &lt;200ms (vs 500ms with PostgreSQL)</li>
          <li>Synonym search finds all relevant jobs</li>
          <li>Geo-search accurate within 1km</li>
        </ul>
        <p><strong>Build Time:</strong> 2 weeks</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR32: Map View</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Google Maps or Mapbox integration for geographic job search</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Google Maps API or Mapbox integration</li>
          <li>Geocode job addresses to lat/long (use Amap 高德地图 for China addresses)</li>
          <li>Cluster markers when multiple jobs in same city</li>
          <li>Click marker → show job card with title, salary, school name</li>
          <li>Click job card → navigate to job detail page</li>
          <li>Search within map bounds: "Search this area" button</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>90%+ of job addresses geocoded successfully</li>
          <li>Map loads in &lt;3 seconds</li>
          <li>10%+ of users use map view (track with analytics)</li>
        </ul>
        <p><strong>Build Time:</strong> 1 week</p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '1px solid #3b82f6', borderRadius: '6px', marginTop: '15px' }}>
        <h5>FR33: Saved Searches & Alerts</h5>
        <p><strong>Priority:</strong> P1 (High)</p>
        <p><strong>Description:</strong> Teachers can save search criteria and get email alerts for new matching jobs</p>
        <p><strong>Detailed Requirements:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>Save search button: Saves location, salary range, filters, keywords</li>
          <li>Manage saved searches: View, edit, delete from dashboard</li>
          <li>Email alerts: Daily or weekly digest of new jobs matching saved search</li>
          <li>Alert frequency preference: Immediately, Daily, Weekly</li>
          <li>Unsubscribe from specific alert (keep account active)</li>
        </ul>
        <p><strong>Acceptance Criteria:</strong></p>
        <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
          <li>500+ saved searches created by Month 30</li>
          <li>Email alert click-through rate: 15%+</li>
          <li>Teachers with saved searches have 2x higher retention</li>
        </ul>
        <p><strong>Build Time:</strong> 1 week</p>
      </div>

      <h4 style={{ marginTop: '25px' }}>Success Criteria</h4>
      <div style={{ padding: '15px', backgroundColor: '#dcfce7', border: '1px solid #16a34a', borderRadius: '6px', marginTop: '10px' }}>
        <p><strong>Target Metrics (Month 30):</strong></p>
        <ul style={{ marginLeft: '20px', fontSize: '0.9em' }}>
          <li>Avg time to find relevant job: &lt;5 minutes (vs 30+ min on Dave's ESL)</li>
          <li>Saved searches created: 500+</li>
          <li>Map view usage: 10%+ of search sessions</li>
          <li>Teacher retention: 60%+ return within 30 days (vs 40% in Stage 1)</li>
        </ul>
      </div>
    </Section>
  )
}
