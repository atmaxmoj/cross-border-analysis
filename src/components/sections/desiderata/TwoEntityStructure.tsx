import InfoBox from '../../ui/InfoBox'

export default function TwoEntityStructure() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.10 Edge/Client Entity Split (Local Market Optimization)</h4>
      <InfoBox>
        <strong>Addresses:</strong> Payment friction + regulatory constraints + platform protection across ALL markets<br/>
        <strong>Solves Pain Point:</strong> Local schools need local payments &amp; invoicing (RMB in China, KRW in Korea, JPY in Japan),
        but global platform needs legal protection for scraping, uncensored reviews, Discord usage, and
        event organization without local bureaucratic approvals. Applies to China, Korea, Japan, Vietnam - any regulated market.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>LinkedIn China, Airbnb China:</strong> All international platforms monetizing in China use
          two-entity structure - foreign parent controls tech/IP, Chinese subsidiary only handles payments/invoicing.</li>
          <li><strong>Payment friction:</strong> Chinese schools prefer Alipay/WeChat Pay (RMB). International
          wire transfers have high fees ($30-$50 per transaction) + slow processing (3-5 days). Without fapiao,
          most schools (especially public/international schools) cannot pay legally for accounting purposes.</li>
          <li><strong>Regulatory constraints on single Chinese entity:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Content regulation: Schools could sue Chinese entity in Chinese courts for negative reviews → forced takedowns</li>
              <li>Discord ban: Cannot use Discord for B.3 Community Forum (forced to use censored WeChat groups)</li>
              <li>Event permits: C.6 Weekly Teacher Meetups require police registration, venue approvals, extensive bureaucracy</li>
              <li>Scraping risk: Chinese Anti-Unfair Competition Law (反不正当竞争法) applies to Chinese entities scraping Chinese platforms</li>
            </ul>
          </li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li><strong>Architecture: One Edge Entity + Multiple Client Entities</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li><strong>Edge Entity (Singapore/US - Global Platform):</strong>
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>Serves teachers (supply side) - platform is FREE for teachers</li>
                  <li>Runs all platform tech, scraping infrastructure (AWS Singapore), data storage</li>
                  <li>Controls IP, codebase, teacher verification, reviews database</li>
                  <li>Can scrape US platforms freely (hiQ v. LinkedIn: public data scraping legal in US)</li>
                  <li>Discord for community forum (B.3) - banned in China, but foreign entity uses freely</li>
                  <li>Hosts uncensored school reviews (B.1) - Chinese courts have no jurisdiction</li>
                  <li>Organizes teacher events (C.6) as "informal expat gatherings" - less regulatory burden</li>
                  <li>Protected from Chinese legal/regulatory risks</li>
                </ul>
              </li>
              <li><strong>Client Entities (One per Market - China, Korea, Japan, etc.):</strong>
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>Serves schools (demand side) - schools are PAYING customers</li>
                  <li>ONLY handles: B2B sales, payment collection, local invoicing</li>
                  <li>Accepts local payments:
                    <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                      <li>China WFOE: RMB via Alipay/WeChat Pay, issues fapiao (发票)</li>
                      <li>Korea: KRW via Naver Pay/KakaoPay, issues 세금계산서 (tax invoices)</li>
                      <li>Japan KK: JPY via bank transfer, issues 請求書 (invoices)</li>
                      <li>Vietnam: VND via local banks, issues hóa đơn (invoices)</li>
                    </ul>
                  </li>
                  <li>Local sales team for face-to-face school relationships</li>
                  <li>Does NOT touch: platform operations, scraping, data storage, tech development</li>
                  <li>If one market shuts down → doesn't kill global platform or other markets</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Revenue Flow (Per Market):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Schools pay Client Entity (local) in local currency for job postings, premium features</li>
              <li>Client Entity pays Edge Entity for "technology licensing/platform services"</li>
              <li>Profits extracted from local market legally as service fees (minus local withholding tax: ~10% China, ~20% Korea, ~20% Japan)</li>
              <li>Service agreement between Edge + each Client entity defines revenue split</li>
              <li>Edge Entity accumulates profits from ALL markets in Singapore/US (low tax jurisdiction)</li>
            </ul>
          </li>
          <li><strong>Features This Structure Enables:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li><strong>B.1 School Reviews:</strong> Foreign entity hosts reviews → Chinese schools cannot sue for takedowns in Chinese courts</li>
              <li><strong>B.3 Community Forum (Discord):</strong> Discord banned in China, but foreign entity uses it freely (teachers access via VPN)</li>
              <li><strong>C.1 AI Scam Detection:</strong> Flagging Chinese schools as "scam risk" → defamation lawsuits can't reach foreign entity</li>
              <li><strong>C.6 Weekly Teacher Meetups:</strong> Foreign entity organizes = "informal gatherings" without Chinese event permits/police registration</li>
              <li><strong>C.7 Escrow &amp; EOR Service:</strong> Foreign entity with international bank account = simpler escrow, can partner with Deel/Skuad (international EOR providers)</li>
              <li><strong>A.1 Job Aggregator:</strong> Foreign entity scrapes US platforms (Dave's ESL, SeriousTeachers) under US law (hiQ precedent), no Chinese legal risk</li>
            </ul>
          </li>
        </ul>
        <strong>Rollout Timeline (Scalable Pattern):</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>Stage 1-2 (Months 1-18): Edge Entity Only (China Focus)</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Teachers use platform for free</li>
              <li>Early China schools pay via international wire transfer (accept payment friction for MVP validation)</li>
              <li>Revenue &lt; $10K MRR, not worth client entity setup costs</li>
            </ul>
          </li>
          <li><strong>Stage 3 (Month 19+): Add China Client Entity</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Setup cost: $10K-$20K (legal, registration, business license, accounting setup)</li>
              <li>Annual compliance: $5K-$10K/year (accounting, tax filings, annual inspections)</li>
              <li>Unlocks: RMB payments, fapiao, local sales team, school trust</li>
              <li>When to trigger: $30K+ MRR, 50-100+ China schools wanting to pay</li>
            </ul>
          </li>
          <li><strong>Year 3-4: Add Korea Client Entity (Geographic Expansion)</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Same pattern: Edge Entity scrapes/operates, Korea entity handles KRW payments + 세금계산서</li>
              <li>Setup cost similar: $10K-$15K (Korea business registration simpler than China)</li>
              <li>When to trigger: Korea market at $10K+ MRR (lower threshold than first market)</li>
            </ul>
          </li>
          <li><strong>Year 4-5: Add Japan, Vietnam Entities</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>Repeatable playbook: Edge Entity remains core, add client entities per market</li>
              <li>Each new market = $10K-$20K setup, $5K-$10K/year compliance</li>
              <li>D.5 Geographic Expansion enabled by this architecture (83-85% feature transferability)</li>
            </ul>
          </li>
        </ul>
        <strong>Why This Matters:</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          This isn't just regulatory compliance - it's <strong>strategic competitive advantage AND geographic expansion enabler.</strong>
          Dave's ESL Cafe operates as single US entity - can scrape freely but struggles with local payments in EVERY Asian market.
          Local competitors (Zhaopin in China, Saramin in Korea, Rikunabi in Japan) have easy local payments but face censorship +
          can't scrape international platforms. <strong>Edge/Client split gives us best of both worlds EVERYWHERE:</strong> scrape
          like a US company, monetize like a local company in each market, while protecting platform features (reviews, Discord, events)
          from local regulatory reach. The separation isn't just legal protection - it's <strong>D.5 Geographic Expansion infrastructure</strong>
          built into B-tier. Add new market = add new client entity ($10K-$20K), Edge Entity scales to support it. Korea, Japan, Vietnam,
          Thailand - same playbook. Competitors locked into single jurisdiction can't replicate this multi-market arbitrage.
        </p>
      </InfoBox>
    </div>
  )
}
