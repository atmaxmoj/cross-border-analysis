import Section from '../../layout/Section'
import ProblemBox from '../../ui/ProblemBox'
import SolutionBox from '../../ui/SolutionBox'

export default function Stage3Risks() {
  return (
    <Section id="stage-3-risks" title="Stage 3 Risks: Differentiation (Months 19-36)">
      <p>
        <strong>Stage Goal:</strong> Premium tier uptake (Features B.6-B.9). Target: 30% schools upgrade. Revenue: $37K/month.
      </p>

      <h4>Risk 3.1: Schools Don't Upgrade to Premium Tier (Features B.6-B.9)</h4>
      <ProblemBox>
        <strong>Risk:</strong> Schools continue paying $49/post (Standard tier) but refuse to upgrade to $149/post Premium
        tier for verification badges, advanced features, and application tracking.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Revenue stuck at ~$15K/month (Stage 2 level) instead of $37K/month target</li>
          <li>Cannot build defensible moat (verification data doesn't scale)</li>
          <li>Vulnerable to Dave's ESL copying our features</li>
          <li>No path to Stage 4 excitement features (need Stage 3 revenue to fund development)</li>
        </ul>

        <strong>Probability: 🟡 Medium (30%)</strong><br/>
        <strong>Evidence:</strong> Freemium conversion benchmarks are 2-5% typically. We target 30% (aggressive).
        Risk is schools may not value verification enough to pay 3x more ($149 vs $49).
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation Strategy:</strong><br/><br/>

        <strong>Validation BEFORE Building Premium Features:</strong>
        <div className="tree-structure">{`├── Month 12: Survey 100 schools posting on our platform
├── Question: "Would you pay $149 (vs $49) to get verified badge + 3x more applications?"
├── Show mockups of verification badge on listings
├── Success criteria: 40%+ say "yes, I'd pay $149 for that"
└── If <25% interest → Don't build B.6-B.9, focus on volume growth instead`}</div>
        <br/>

        <strong>Launch Strategy (Month 19):</strong>
        <div className="tree-structure">{`├── Offer free 30-day Premium trial to all Standard tier schools
├── During trial, track metrics:
│   ├── Verified schools get 3x more applications (target: prove this empirically)
│   ├── Application quality scores higher (teachers apply to verified schools first)
│   └── Time-to-hire reduces 20% (due to direct chat feature)
├── End of trial: Send data report "Your listing got 47 applications (vs platform avg 16)"
└── Conversion goal: 30% of trial users convert to Premium at end of 30 days`}</div>
        <br/>

        <strong>Upsell Tactics:</strong>
        <div className="tree-structure">{`├── Competitive pressure: "78% of teachers only apply to verified schools" (show data)
├── Scarcity: "Only 50 Premium verification slots available in Beijing market"
├── Loss aversion: "Your competitor Shanghai High School just got verified - now ranking above you"
├── ROI calculator: "$149/post ÷ 45 applications = $3.31 per applicant (cheapest recruitment channel)"
└── Payment plans: "Pay $299/month for unlimited Premium posts (saves money at 2+ posts/month)"`}</div>
        <br/>

        <strong>Alternative Revenue Path (If Premium Fails):</strong><br/>
        If &lt;15% upgrade rate by Month 24:
        <div className="tree-structure">{`├── Pivot to volume strategy: Keep price at $49, target 1,000+ schools posting
│   └── 1,000 schools × $49 × 2 posts/month = $98K/month (exceeds $37K target)
├── Evidence: Dave's ESL has 500-700 schools posting monthly at $75
├── Our advantage: $49 price + better UX = easier to reach 1,000 schools
└── Trade-off: No premium moat, but volume creates network effects moat instead`}</div>
        <br/>

        <strong>Kill Criteria:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li><strong>Month 24:</strong> If Premium tier uptake &lt;10% → Abandon tiered pricing, focus on volume</li>
          <li><strong>Month 30:</strong> If total revenue &lt;$25K/month → Cannot fund Stage 4 features, reassess whether to continue or exit</li>
        </ul>
      </SolutionBox>

      <h4>Risk 3.2: Verification System Liability Lawsuit (Feature B.6)</h4>
      <ProblemBox>
        <strong>Risk:</strong> A "verified" school commits fraud (non-payment, visa fraud, contract violation).
        Teacher sues YouTeacher for $100K+ damages, claiming verification badge was misleading.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Legal defense costs: $50K-$200K even if we win</li>
          <li>Settlement costs: $50K-$500K if we lose or settle to avoid trial</li>
          <li>Reputational damage: "YouTeacher verified a scam school" destroys trust</li>
          <li>Platform abandonment: Teachers stop using platform, revenue collapses</li>
        </ul>

        <strong>Probability: 🟢 Low (10%)</strong><br/>
        <strong>Evidence:</strong> Glassdoor, Yelp, TripAdvisor verify businesses and haven't faced systematic liability.
        Proper disclaimers + E&O insurance provide protection.
      </ProblemBox>

      <SolutionBox>
        <strong>Legal Protection (Implement Before Launch of B.6):</strong><br/><br/>

        <strong>1. Clear Disclaimers (Everywhere):</strong>
        <div className="tree-structure">{`├── On verification badge: "Verified business license only. Not a guarantee of employment terms."
├── Terms of Service: "Platform not liable for school behavior. Verification checks documents, not conduct."
├── Teacher onboarding: Pop-up before first job application explaining verification scope
└── Email footer: "Always review contracts independently. Verification ≠ endorsement."`}</div>
        <br/>

        <strong>2. Errors & Omissions Insurance:</strong>
        <div className="tree-structure">{`├── Coverage: $1M-$2M liability protection
├── Cost: ~$1,200-$2,500/year (1-2% of Stage 3 revenue)
├── Vendor: Hiscox, CNA, Chubb (standard E&O providers)
└── Purchase before verifying first school`}</div>
        <br/>

        <strong>3. Verification Process Documentation:</strong>
        <div className="tree-structure">{`├── Public transparency page: "What verification includes/excludes"
│   ├── Includes: Business license, registered address, contact verification
│   └── Excludes: Employment contract terms, salary guarantees, working conditions
├── Audit trail: Document every verification check (screenshots, dates, validator name)
├── Revocation process: If fraud reported, remove badge within 24 hours
└── Public changelog: "School X badge revoked on 2025-03-15 due to contract fraud reports"`}</div>
        <br/>

        <strong>4. Continuous Monitoring:</strong>
        <div className="tree-structure">{`├── Weekly scan: Check if verified schools have new fraud complaints (Reddit, forums)
├── Quarterly re-verification: Confirm business license still valid
├── Teacher feedback: "Report this school" button on every verified listing
├── Threshold: 3+ fraud reports → immediate investigation, temporary badge suspension
└── Community moderation: Let teachers vote on badge revocation (transparency builds trust)`}</div>
        <br/>

        <strong>Crisis Response Plan (If Lawsuit Occurs):</strong>
        <div className="tree-structure">{`├── Immediate: Contact E&O insurance provider, engage lawyer
├── Public statement: "We take this seriously. Badge revoked. Investigating verification process."
├── Transparency: Publish incident report explaining what went wrong, how we'll prevent recurrence
├── Compensation (optional): Offer affected teacher $500-$1,000 goodwill payment (no admission of guilt)
└── System improvements: Update verification checklist to catch similar cases`}</div>
        <br/>

        <strong>Probability Reduction:</strong> With above safeguards, probability drops from 10% to &lt;5%. Cost: $3K-$5K/year (insurance + legal setup).
      </SolutionBox>

      <h4>Risk 3.3: Verification Data Quality Issues</h4>
      <ProblemBox>
        <strong>Risk:</strong> As we scale verification (target: 1,000+ schools by Month 36), quality degrades.
        Inconsistent verification standards, outdated business licenses, fake documents accepted.<br/><br/>

        <strong>Impact (if occurs):</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Verification badge loses credibility with teachers</li>
          <li>Schools stop paying Premium tier ($149) if badge doesn't differentiate them</li>
          <li>Competitor attacks: "YouTeacher verification is a scam"</li>
        </ul>

        <strong>Probability: 🟡 Medium (25%)</strong>
      </ProblemBox>

      <SolutionBox>
        <strong>Mitigation:</strong><br/>
        <div className="tree-structure">{`├── Standardized checklist: Pete creates 15-point verification SOP document
├── Verification dashboard: Track turnaround time, rejection rate, re-verification dates
├── Quality audits: Monthly random sample of 20 verified schools → re-check all documents
├── Hire verification specialist at $50K/year when verify >500 schools/year
├── Automation: Use AI to detect fake business licenses (OCR + government database cross-check)
└── Community QA: Teachers can flag "This school doesn't match address on verification" → triggers re-check`}</div>
      </SolutionBox>
    </Section>
  )
}
