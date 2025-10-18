import Section from '../../../layout/Section'
import SolutionBox from '../../../ui/SolutionBox'
import InfoBox from '../../../ui/InfoBox'

export default function CompleteBusinessModel() {
  return (
    <>
      <Section id="revenue-model" title="Revenue Model">
        <h4>Primary Revenue Stream (Year 1):</h4>
        <p><strong>Job Posting Fees</strong></p>

        <SolutionBox>
          <strong>Pricing Tiers:</strong><br />
          <div className="tree-structure">{`├── Basic Post: $75/post (1 month, unverified)
├── Verified Post: $99/post (1 month, basic badge)
└── Featured Post: $149/post (1 month, top placement)`}</div>
          <br />
          <strong>Volume Assumptions (Conservative):</strong><br />
          <div className="tree-structure">{`├── Month 1-3: 5 posts/month = $450-750/month
├── Month 4-6: 15 posts/month = $1,125-1,875/month
├── Month 7-9: 30 posts/month = $2,250-3,750/month
└── Month 10-12: 50 posts/month = $3,750-6,250/month`}</div>
          <br />
          <strong>Year 1 Total:</strong> $20,000-35,000
        </SolutionBox>

        <h4>Secondary Revenue Stream (Year 1, Q4):</h4>
        <p><strong>Subscription Model</strong></p>

        <SolutionBox>
          <strong>Pricing:</strong><br />
          <div className="tree-structure">{`├── Monthly: $99/month (unlimited basic posts)
├── Quarterly: $249/quarter ($83/month, 16% savings)
└── Annual: $899/year ($75/month, 25% savings)`}</div>
          <br />
          <strong>Target:</strong><br />
          └── Convert 5-10 high-frequency schools by end of Year 1
        </SolutionBox>

        <h4>Additional Revenue Streams (Year 2+):</h4>
        <ol>
          <li>Featured Placement Upgrades: $50/week</li>
          <li>School Profile Enhancements: $29/month</li>
          <li>Applicant Tracking System: $199/month (enterprise)</li>
          <li>Teacher Resume Access: $49/month (schools)</li>
          <li>Recruitment Analytics: $79/month</li>
          <li>Affiliate Marketing: Commission-based (visa services, TEFL courses)</li>
          <li>Sponsored Content: $500/newsletter (10K+ subscribers)</li>
        </ol>
      </Section>

      <Section id="unit-economics" title="Unit Economics">
        <h4>Customer Acquisition Cost (CAC):</h4>
        <div className="phase-box">
          <strong>Channels:</strong><br />
          <div className="tree-structure">{`├── SEO/Content: $0-5 per customer (organic)
├── Facebook Ads: $20-50 per customer
├── LinkedIn Ads: $100-200 per customer
└── Direct outreach: $50-100 per customer`}</div>
          <br />
          <strong>Target Blended CAC:</strong> $50-75 per school
        </div>

        <h4>Lifetime Value (LTV):</h4>
        <SolutionBox>
          <strong>Average School Customer:</strong><br />
          <div className="tree-structure">{`├── ARPU: $1,188/year
├── Retention: 70% year 2, 80% year 3+
├── Avg Lifetime: 3.5 years
└── LTV: $1,188 × 3.5 = $4,158`}</div>
          <br />
          <strong>LTV:CAC Ratio:</strong> $4,158 / $75 = 55:1 (excellent)
        </SolutionBox>

        <h4>Contribution Margin:</h4>
        <InfoBox>
          <strong>Revenue per school:</strong> $1,188/year<br />
          <strong>Costs:</strong><br />
          <div className="tree-structure">{`├── Payment processing (2.5%): -$30
├── Hosting/infrastructure: -$10
├── Customer support (10% of revenue): -$119
└── Verification costs (human review): -$50`}</div>
          <br />
          <strong>Contribution Margin:</strong> $979 (82%)
        </InfoBox>
      </Section>

      <Section id="pricing-strategy" title="Pricing Strategy">
        <h4>Penetration Pricing (Months 1-6):</h4>
        <div className="phase-box">
          <strong>Goal:</strong> Acquire first 20 customers<br />
          <strong>Strategy:</strong><br />
          <div className="tree-structure">{`├── Offer 50% off first 3 months
├── "Early adopter" branding
└── Flexible payment terms`}</div>
          <br />
          <strong>Example:</strong><br />
          └── $99 post normally → $49 for first 3 posts
        </div>

        <h4>Value-Based Pricing (Months 7+):</h4>
        <SolutionBox>
          <strong>Pricing based on school type:</strong><br />
          <div className="tree-structure">{`├── Training centers (high volume): Subscription model
├── International schools (low volume): Pay-per-post
└── Recruiters (very high volume): Enterprise pricing`}</div>
          <br />
          <strong>Price increases:</strong><br />
          └── Raise prices 10% annually after PMF
        </SolutionBox>
      </Section>
    </>
  )
}
