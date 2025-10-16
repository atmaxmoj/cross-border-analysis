import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function PlatformDiscrimination() {
  return (
    <Section id="platform-discrimination" title="Combating Platform Discrimination (Airbnb's Project Lighthouse)">
      <h4>Overview:</h4>
      <p>
        Airbnb's Project Lighthouse, launched in 2020, aims to identify, measure, and address racial discrimination and bias on its platform.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Ethical Stance and Business Impact (Question #6):</strong> Airbnb took a public stance against discrimination,
          investing in a privacy-centric methodology to analyze booking acceptance rates, reviews, and cancellations.
          This demonstrates that addressing discrimination can be a core part of platform development.
          <InfoBox>
            <strong>Project Lighthouse Methodology:</strong>
            <ul>
              <li>Privacy-centric: Third party reviews users' first names and profile photos to determine perceived race (in U.S.).</li>
              <li>Data is aggregated and anonymized; users can opt out.</li>
              <li>Insights informed over 535 platform updates, nearly halving booking success rate disparity for Black guests in 2021.</li>
              <li>Measures included delaying host display of guest photos until after booking.</li>
            </ul>
            <span style={{ fontSize: '0.85em', color: '#718096' }}>
              Source: <a href="https://news.airbnb.com/project-lighthouse-identifying-and-addressing-discrimination-on-airbnb/" target="_blank" rel="noopener noreferrer">Airbnb News</a>, <a href="https://www.floridapolitics.com/archives/469000-airbnb-project-lighthouse-aims-to-combat-discrimination/" target="_blank" rel="noopener noreferrer">Florida Politics</a>
            </span>
          </InfoBox>
        </li>
      </ul>
    </Section>
  )
}
