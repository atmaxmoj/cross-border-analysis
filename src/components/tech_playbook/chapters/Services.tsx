import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'

export default function Services() {
  return (
    <Chapter id="services" title="4. Services">
      <Section id="frontend-service" title="4.1 Frontend Service (youteacher-web)">
        <p>
          Placeholder for frontend service documentation.
        </p>
      </Section>

      <Section id="auth-service" title="4.2 Auth Service">
        <p>
          Placeholder for auth service API endpoints and implementation.
        </p>
      </Section>

      <Section id="jobs-service" title="4.3 Jobs Service">
        <p>
          Placeholder for jobs service API endpoints and implementation.
        </p>
      </Section>

      <Section id="scraper-service" title="4.4 Scraper Service">
        <p>
          Placeholder for scraper service implementation and scheduling.
        </p>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
