import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function OriginalModel() {
  return (
    <Section id="original-model" title="Pete's Original Business Model">
      <h4>Go-to-Market Strategy:</h4>
      <ol>
        <li><strong>"Founding 50 Schools" Program</strong> - Convince 50 schools to post jobs for free initially</li>
        <li><strong>Attract Teachers</strong> - Use superior UI/UX, social media marketing, and paid ads to drive teacher traffic</li>
        <li><strong>Monetization Trigger</strong> - Once traffic reaches 50% of Dave's average, start charging schools</li>
        <li><strong>Charge Model</strong> - 50% of average placement fees, justified by traffic results</li>
      </ol>

      <h4>Revenue Streams:</h4>
      <ul>
        <li><strong>Primary:</strong> Job posting fees from schools ($75-200/month)</li>
        <li><strong>Secondary:</strong>
          <ul>
            <li>Resume database access ($49-99/month)</li>
            <li>Email newsletter sponsorships ($300-500 per send)</li>
            <li>Amazon KDP books linking to platform</li>
            <li>Affiliate marketing (TEFL courses, relocation insurance, visa services)</li>
            <li>Skool community (paid membership + ESL games)</li>
            <li>YouTube channel (ad revenue + partnerships)</li>
            <li>Webinars and online events</li>
            <li>Verified employer badges ($149/year)</li>
          </ul>
        </li>
        <li><strong>Future:</strong> AI automation services to warm leads from teacher database</li>
      </ul>

      <h4>Expansion Plan:</h4>
      <InfoBox>
        <strong>Phase 1:</strong> China (validation market)<br />
        <strong>Phase 2:</strong> Korea (2nd largest ESL market)<br />
        <strong>Phase 3:</strong> Japan<br />
        <strong>Phase 4:</strong> Southeast Asia, Middle East, Latin America, Europe<br />
        <strong>Timeline:</strong> 18 months to global presence
      </InfoBox>

      <h4>Partnerships Strategy:</h4>
      <ul>
        <li><strong>TESOL Training Schools</strong> - Refer graduates to platform in exchange for visibility/discounts</li>
        <li><strong>Content Network</strong> - Build YouTube network with contributing ESL teachers (revenue share model like Meidas Touch)</li>
        <li><strong>Cross-promotion</strong> - Books link to platform, platform links to books, creating virtuous cycle</li>
      </ul>
    </Section>
  )
}
