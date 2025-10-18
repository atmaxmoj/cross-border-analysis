import Chapter from '../../layout/Chapter'
import InfoBox from '../../ui/InfoBox'

export default function Overview() {
  return (
    <Chapter id="overview" title="1. Overview">
      <InfoBox>
        <strong>YouTeacher Platform - Technical Architecture</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em' }}>
          This playbook documents the technical architecture, implementation details, and development guidelines
          for the YouTeacher ESL recruitment platform. The platform consists of 5 microservices designed for
          scalability, security, and AI-assisted development.
        </p>
      </InfoBox>

      <h3>System Architecture</h3>
      <p>
        YouTeacher is built as a microservices architecture with the following services:
      </p>
      <ul>
        <li><strong>youteacher-web</strong> - Next.js frontend with SSR for SEO</li>
        <li><strong>youteacher-auth</strong> - Authentication & authorization service</li>
        <li><strong>youteacher-jobs</strong> - Job management service (posting, applications, etc.)</li>
        <li><strong>youteacher-scraper</strong> - Job board scraping service</li>
      </ul>

      <h3>Technology Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14, React, TypeScript, Tailwind CSS</li>
        <li><strong>Backend:</strong> Python, FastAPI, PostgreSQL</li>
        <li><strong>Scraper:</strong> Python, BeautifulSoup4</li>
        <li><strong>Infrastructure:</strong> Docker, Docker Compose</li>
      </ul>

      <div className="section-divider"></div>
    </Chapter>
  )
}
