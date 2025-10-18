import Section from '../../../layout/Section'

export default function ComparisonTable() {
  return (
    <Section id="comparison-table" title="Side-by-Side Comparison">
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Pete's Original Vision</th>
            <th>Enhanced Strategy (Evidence-Based Plan)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Market Entry</strong></td>
            <td>Free job posting for schools from Day 1</td>
            <td><strong>Stage 1 (Months 1-6): Job aggregation only</strong> - scrape Dave's ESL, SeriousTeachers, ESLCafe. Build 10K MAU before monetizing (like Indeed 2004-2007)</td>
          </tr>
          <tr>
            <td><strong>Community Strategy</strong></td>
            <td>Build custom forum (4-8 weeks dev time)</td>
            <td><strong>Use Discord from Day 1</strong> - free, zero dev time, better UX than Dave's ESL forum. Integrate widget in Stage 2.</td>
          </tr>
          <tr>
            <td><strong>Cold Start Problem</strong></td>
            <td>Free posting for 50 founding schools (chicken-egg problem)</td>
            <td><strong>Aggregation solves cold start</strong> - 50K+ jobs from Day 1 without needing schools to post. Teachers come for content, schools come later for audience.</td>
          </tr>
          <tr>
            <td><strong>Differentiation</strong></td>
            <td>Better UI/UX + filtering (easily copied)</td>
            <td><strong>Stage 3 (Months 19-36): Verification moat</strong> - B.6 School Verification (Chinese business license), B.1 Reviews, C.1 AI Scam Detection, C.8 Advanced Badge System</td>
          </tr>
          <tr>
            <td><strong>Revenue Timeline</strong></td>
            <td>9 revenue sources from Day 1</td>
            <td><strong>4-stage revenue growth:</strong><br/>
            - Stage 1: $0 (build traffic)<br/>
            - Stage 2 (Months 7-18): $5K-$15K/mo (pay-per-post $49)<br/>
            - Stage 3 (Months 19-36): $37K/mo (premium tiers $149)<br/>
            - Stage 4 (Year 3-4): $64K-$104K/mo (moat + expansion)</td>
          </tr>
          <tr>
            <td><strong>Geography Expansion</strong></td>
            <td>China → Korea → Japan → SE Asia → MENA → LatAm in 18 months</td>
            <td><strong>ESL China-only until Year 3</strong>, then:<br/>
            - Year 3 Q3-Q4: <strong>Vertical expansion</strong> (all foreign jobs in China, 11x market)<br/>
            - Year 4: <strong>Horizontal expansion</strong> (Korea Q1-Q2, Japan Q3-Q4)</td>
          </tr>
          <tr>
            <td><strong>Market Scope</strong></td>
            <td>ESL teaching only (12K teachers/year in China)</td>
            <td><strong>Stage 4 expands to:</strong><br/>
            - Engineers, designers, consultants (131,500 foreign workers/year in China = 11x market)<br/>
            - Teaching in Korea (13K teachers), Japan (6K JET + international schools)</td>
          </tr>
          <tr>
            <td><strong>Revenue Projection</strong></td>
            <td>Not specified (focus on traffic)</td>
            <td><strong>Evidence-based projections:</strong><br/>
            - Year 3: $769K ARR (ESL China only, realistic ceiling)<br/>
            - Year 4: $1.25M ARR (+ vertical $250K + horizontal $230K)<br/>
            - ESL alone cannot sustain $1M+ ARR → expansion required</td>
          </tr>
          <tr>
            <td><strong>Cost Structure</strong></td>
            <td>Assumed low costs</td>
            <td><strong>$100/month servers</strong> (scraping + hosting)<br/>
            Sunk costs: $600 (Stage 1), $1.8K (Stage 2), $3.6K (Stage 3)<br/>
            Hire at milestones: VA at $10K MRR, marketer at $25K MRR</td>
          </tr>
          <tr>
            <td><strong>Team Size</strong></td>
            <td>2 people (Pete + Mojo), unclear bandwidth</td>
            <td><strong>2-person team with sustainability strategy:</strong><br/>
            - 40-50 hour weeks (no 80-hour weeks)<br/>
            - Ruthless prioritization (say NO to 90% of features)<br/>
            - Automation over hiring (Discord, PostHog, Mixpanel)<br/>
            - Kill criteria if burnout &gt;7/10 for 2+ months</td>
          </tr>
          <tr>
            <td><strong>Competitive Moat</strong></td>
            <td>Better tech, UI/UX</td>
            <td><strong>C-tier excitement features create moats:</strong><br/>
            - C.1 AI Scam Detection (ML model, improves with data)<br/>
            - C.6 Weekly Meetups (community relationships, uncopyable)<br/>
            - C.7 Escrow/EOR (legal infrastructure, high barrier)<br/>
            - C.8 Badge System (government data scraping + AI analysis)</td>
          </tr>
          <tr>
            <td><strong>Risk Management</strong></td>
            <td>Not explicitly addressed</td>
            <td><strong>Evidence-based risk assessment:</strong><br/>
            - 28 identified risks across 4 stages<br/>
            - Multi-layer mitigation (Plans A/B/C/D)<br/>
            - Kill criteria to avoid zombie startup (shutdown if &lt;$20K MRR by Month 36)<br/>
            - Founder burnout protocols (weekly check-ins, mandatory vacations)</td>
          </tr>
          <tr>
            <td><strong>Success Metric</strong></td>
            <td>50% of Dave's ESL traffic (vanity metric)</td>
            <td><strong>Revenue-focused milestones:</strong><br/>
            - Month 6: 10K MAU, 50K jobs aggregated<br/>
            - Month 18: 100+ paying schools, $10K+ MRR<br/>
            - Month 36: 500+ schools, $30K+ MRR<br/>
            - Year 4: $1.25M ARR with expansion validated</td>
          </tr>
          <tr>
            <td><strong>Feature Prioritization</strong></td>
            <td>Build everything (9 revenue streams)</td>
            <td><strong>Kano Model categorization:</strong><br/>
            - A-tier (Must-Haves): A.1-A.5 only in Stage 1-2<br/>
            - B-tier (Performance): B.1-B.9 in Stage 3<br/>
            - C-tier (Excitement): C.1-C.8 in Stage 4<br/>
            - D-tier (Disruptive): D.1-D.5 are 5-10 year vision, NOT Year 1-3</td>
          </tr>
          <tr>
            <td><strong>Expansion Trigger</strong></td>
            <td>18 months to global expansion</td>
            <td><strong>PMF-gated expansion:</strong><br/>
            - Stage 3 validation required before Stage 4<br/>
            - Vertical expansion FIRST (leverage China verification infrastructure)<br/>
            - Horizontal expansion SECOND (requires new regulatory/banking setup per country)<br/>
            - 85% feature transferability (vertical) vs 83% (horizontal)</td>
          </tr>
        </tbody>
      </table>

      <h3 id="key-changes">Key Strategic Shifts</h3>
      <ol>
        <li><strong>Market Entry (Critical Change):</strong> Aggregation-first solves chicken-egg problem. Pete's approach requires both teachers AND schools from Day 1. Enhanced strategy: scrape 50K+ jobs, build 10K teacher audience, THEN monetize schools to reach that audience. Evidence: Indeed (2004-2007), Airbnb (scraped Craigslist).</li>

        <li><strong>Realistic Revenue Ceiling:</strong> Enhanced strategy acknowledges ESL China alone caps at $700K-$900K ARR (12,000 teachers/year, ~1,500 schools). Pete's vision didn't address this ceiling. Solution: bake expansion into Stage 4 (vertical 11x market + horizontal 2-3x per country) to reach $1.25M ARR by Year 4.</li>

        <li><strong>Differentiation Moat:</strong> Pete focused on UI/UX (easily copied in 2-3 months). Enhanced strategy: verification infrastructure (Chinese business license system, 6-12 months to replicate) + AI models trained on proprietary data (C.1, C.2, C.8) + community relationships (C.6 meetups). Competitors cannot copy in &lt;2 years.</li>

        <li><strong>Expansion Strategy:</strong> Pete's 18-month global expansion spreads team too thin. Enhanced strategy: vertical BEFORE horizontal. Year 3 Q3-Q4 expand to engineers/consultants in China (reuse SAME business license verification), THEN Year 4 expand to Korea/Japan teaching (new regulatory setup). 85% feature transferability vertical vs 83% horizontal.</li>

        <li><strong>Founder Bandwidth Reality:</strong> Pete's plan assumed 2-person team could execute 9 revenue streams + global expansion simultaneously. Enhanced strategy: ruthless prioritization (A-tier only in Stages 1-2), automation over hiring (Discord not custom forum, PostHog not custom dashboards), kill criteria if burnout &gt;7/10 for 2+ months, phased hiring at revenue milestones ($10K MRR → VA, $25K MRR → marketer).</li>

        <li><strong>Risk-Aware Planning:</strong> Pete's vision optimistic, no explicit risk management. Enhanced strategy: 28 identified risks, multi-layer mitigations (Plans A/B/C/D), kill criteria to avoid zombie startup (shutdown if &lt;50 schools by Month 18), founder burnout protocols, regulatory monitoring (China "Double Reduction" risk), payment processing contingency (Ping++ if Alipay blocked).</li>

        <li><strong>Evidence-Based Validation:</strong> Enhanced strategy grounds every decision in evidence: 6,195 teacher posts analyzed, 12 pain points validated across 12 platforms, case studies of $1.8B-$15B companies (Indeed, Glassdoor, Boss Zhipin), competitor analysis (Dave's ESL $75/post pricing, GaijinPot Japan dominance), government data (12,000 teachers/year hiring volume, 131,500 foreign workers/year in China).</li>

        <li><strong>Success Metrics Shift:</strong> Pete measured success by traffic ("50% of Dave's ESL"). Enhanced strategy: revenue-focused milestones tied to kill criteria. Month 6: &lt;5K MAU → shutdown (Sunk: $600). Month 18: &lt;50 schools → shutdown (Sunk: $1.8K). Month 36: &lt;$20K MRR → shutdown (Sunk: $3.6K). Prevents "just 6 more months" trap.</li>
      </ol>

      <h3 id="what-stayed-same">What Stayed the Same (Pete Was Right)</h3>
      <ul style={{ fontSize: '0.9em', lineHeight: '1.8', marginTop: '15px' }}>
        <li><strong>Market opportunity:</strong> Pete correctly identified that Dave's ESL (1995-era UX) dominates despite terrible experience. "Trust Over Tech" insight = foundation of entire strategy.</li>
        <li><strong>Pain point:</strong> "Can't verify school legitimacy" validated across 12/12 sources in our analysis. Pete's lived experience = accurate market read.</li>
        <li><strong>2-person team:</strong> Enhanced strategy keeps Pete's constraint, builds around it (automation, outsourcing, kill criteria) rather than assuming we can hire.</li>
        <li><strong>China-first focus:</strong> Pete's beachhead market choice correct. 12,000 teachers/year, regulatory familiarity, Pete's 6 years domain expertise = competitive advantage.</li>
        <li><strong>Verification as moat:</strong> Pete's core insight (trust/verification &gt; tech) correct. Enhanced strategy systematizes it (B.6, C.1, C.8) and quantifies defensibility (2-3 year replication time).</li>
      </ul>
    </Section>
  )
}
