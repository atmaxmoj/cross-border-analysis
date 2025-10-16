import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function ExpertVerification() {
  return (
    <Section id="expert-verification" title="The Expert Verification Model (Wirecutter)">
      <h4>Overview:</h4>
      <p>
        Wirecutter, a product review website, builds trust through rigorous, independent, and transparent product evaluations,
        primarily funded by affiliate marketing.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Trust as a Moat through Rigorous Methodology (Question #5, #7):</strong> Wirecutter's primary competitive
          advantage is the trust it builds with readers through its transparent, independent, and expert-driven testing process.
          They are seen as the "expert who did the homework for you."
          <InfoBox>
            <strong>Wirecutter's Testing Methodology:</strong>
            <ul>
              <li>Extensive research (starting with hundreds of products).</li>
              <li>Hands-on testing in real-world scenarios by dedicated experts.</li>
              <li>User-centric focus (recommending "best" items for quality/price balance).</li>
              <li>Transparency about methodology and regular updates.</li>
              <li>Editorial independence from commercial influence.</li>
            </ul>
            <span style={{ fontSize: '0.85em', color: '#718096' }}>
              Source: <a href="https://en.wikipedia.org/wiki/Wirecutter" target="_blank" rel="noopener noreferrer">Wikipedia</a>, <a href="https://www.nytimes.com/wirecutter/our-process/" target="_blank" rel="noopener noreferrer">Wirecutter.com</a>
            </span>
          </InfoBox>
        </li>
        <li>
          <strong>Monetizing Trust (Question #3):</strong> Their affiliate marketing model is successful because readers trust their recommendations, leading to purchases.
        </li>
      </ul>
    </Section>
  )
}
