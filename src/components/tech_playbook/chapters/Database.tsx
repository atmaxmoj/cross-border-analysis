import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'

export default function Database() {
  return (
    <Chapter id="database" title="3. Database Schema">
      <Section id="auth-db" title="3.1 Auth Database">
        <p>
          Placeholder for auth database schema (auth_credentials, teachers, schools).
        </p>
      </Section>

      <Section id="jobs-db" title="3.2 Jobs Database">
        <p>
          Placeholder for jobs database schema (jobs, applications, saved_jobs).
        </p>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
