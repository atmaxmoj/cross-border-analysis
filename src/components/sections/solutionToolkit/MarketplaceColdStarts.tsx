import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function MarketplaceColdStarts() {
  return (
    <Section id="marketplace-cold-starts" title="Marketplace Cold-Starts (Airbnb & Timeleft)">
      <h4>Overview:</h4>
      <p>
        Building a two-sided marketplace requires solving the "chicken and egg" problem: how to attract supply (hosts/schools)
        and demand (guests/teachers) simultaneously. Airbnb and Timeleft offer contrasting, yet effective, non-capital-intensive strategies.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Airbnb's "Supply-First" Aggregation (Question #2):</strong> Airbnb leveraged an existing platform (Craigslist)
          to quickly build supply.
          <ul>
            <li>Developed a feature for hosts to easily cross-post Airbnb listings to Craigslist.</li>
            <li>Craigslist posts linked back to Airbnb, funneling users to their platform.</li>
            <li>Aggressive tactics included scraping Craigslist for potential renters and direct outreach.</li>
          </ul>
          <span style={{ fontSize: '0.85em', color: '#718096' }}>
            Source: <a href="https://gufy.com.au/airbnb-growth-hack-craigslist/" target="_blank" rel="noopener noreferrer">Gufy.com.au</a>, <a href="https://startupstoic.com/airbnb-craigslist-growth-hack/" target="_blank" rel="noopener noreferrer">Startup Stoic</a>
          </span>
        </li>
        <li>
          <strong>Timeleft's "Critical Mass" Strategy (Question #2):</strong> Timeleft, an app organizing dinners for strangers,
          solved the cold start by creating scarcity and ensuring viability before launch.
          <ul>
            <li>Set a membership threshold (e.g., 151 sign-ups) before launching in a new city.</li>
            <li>This created exclusivity and encouraged sign-ups, guaranteeing enough users to form viable dinner groups.</li>
          </ul>
          <span style={{ fontSize: '0.85em', color: '#718096' }}>
            Source: <a href="https://startupspells.com/timeleft-business-model-how-timeleft-works/" target="_blank" rel="noopener noreferrer">Startup Spells</a>
          </span>
        </li>
      </ul>
    </Section>
  )
}
