import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function AmazonTrustFlywheel() {
  return (
    <Section id="amazon-trust-flywheel" title="Amazon's Trust-Building Flywheel (Scaling a Two-Sided Market)">
      <h4>Overview:</h4>
      <p>
        Amazon's marketplace successfully scaled by building trust between buyers and sellers through a multi-faceted approach
        centered on customer experience and robust systems.
      </p>

      <h4>Key Learnings for YouTeacher:</h4>
      <ul>
        <li>
          <strong>Customer-Centricity as a Foundation (Question #5):</strong> Amazon's relentless focus on the customer
          from its inception was crucial for building confidence in online transactions.
        </li>
        <li>
          <strong>Comprehensive Feedback Systems (Question #5, #7):</strong> Amazon implemented a seller rating system
          (1-5 stars, written feedback) and product reviews. This public feedback system incentivizes good behavior and
          builds trust in anonymous transactions, creating a data moat.
          <InfoBox>
            <strong>Amazon's Trust Mechanisms:</strong>
            <ul>
              <li>Seller rating system (star ratings, written feedback).</li>
              <li>Public display of feedback on seller profiles.</li>
              <li>Product reviews.</li>
              <li>Investment in reliable fulfillment and logistics (Fulfillment by Amazon - FBA).</li>
              <li>Transparency and detailed product information.</li>
            </ul>
            <span style={{ fontSize: '0.85em', color: '#718096' }}>
              Source: <a href="https://www.ecomengine.com/blog/amazon-seller-feedback-vs-product-reviews" target="_blank" rel="noopener noreferrer">EcomEngine</a>, <a href="https://signalytics.ai/blog/amazon-business-model/" target="_blank" rel="noopener noreferrer">Signalytics</a>
            </span>
          </InfoBox>
        </li>
        <li>
          <strong>Scaling a Two-Sided Market (Question #2):</strong> By prioritizing customer experience and building robust systems for trust and fulfillment, Amazon created a flywheel effect that attracted both buyers and sellers.
        </li>
      </ul>
    </Section>
  )
}
