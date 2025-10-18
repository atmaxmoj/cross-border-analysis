import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function AppendixB() {
  return (
    <Chapter id="appendix-b" title="Appendix B: Verification Data Sources">
      <p>
        This appendix documents all primary sources available for verifying hiring parties (schools, training centers, companies)
        in China and across Asia. These sources form the foundation of our B.6 School Verification System and demonstrate
        technical feasibility of building a verification moat.
      </p>

      <Section id="china-verification" title="China Verification Sources">
        <InfoBox>
          <strong>1. National Enterprise Credit Information Publicity System (国家企业信用信息公示系统)</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="http://www.gsxt.gov.cn" target="_blank" rel="noopener noreferrer">http://www.gsxt.gov.cn</a></li>
            <li><strong>Authority:</strong> State Administration for Market Regulation (SAMR)</li>
            <li><strong>Coverage:</strong> All registered businesses in China (including schools, training centers)</li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Unified Social Credit Code (统一社会信用代码) - 18-digit identifier</li>
                <li>Business license number (营业执照号)</li>
                <li>Legal representative name</li>
                <li>Registration date and capital</li>
                <li>Business scope (经营范围)</li>
                <li>Address verification</li>
                <li>Annual report filing status</li>
                <li>Administrative penalties and violations</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Web scraping (no official API), requires CAPTCHA solving</li>
            <li><strong>Update Frequency:</strong> Real-time government database</li>
            <li><strong>Cost:</strong> Free (public database)</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>2. Ministry of Education - List of Approved International Schools</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="http://www.moe.gov.cn" target="_blank" rel="noopener noreferrer">http://www.moe.gov.cn</a></li>
            <li><strong>Authority:</strong> Ministry of Education (教育部)</li>
            <li><strong>Coverage:</strong> International schools with foreign curriculum approval</li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>School license number</li>
                <li>Curriculum approval (IB, British, American)</li>
                <li>Foreign teacher hiring permit status</li>
                <li>Accreditation history</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Manual lookup via ministry website, some data in annual reports</li>
            <li><strong>Limitation:</strong> Not all international schools publish data publicly</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>3. Tianyancha (天眼查) - Business Intelligence Platform</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://www.tianyancha.com" target="_blank" rel="noopener noreferrer">https://www.tianyancha.com</a></li>
            <li><strong>Type:</strong> Commercial aggregator of government data + proprietary analysis</li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Unified Social Credit Code lookup</li>
                <li>Company relationship graphs (shareholders, subsidiaries)</li>
                <li>Court cases and litigation history</li>
                <li>Patent and trademark filings</li>
                <li>Risk assessment scores</li>
                <li>Contact information and address verification</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Paid API ($3,000-$10,000/year depending on query volume)</li>
            <li><strong>Advantage:</strong> Aggregates multiple government sources + adds risk scoring</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>4. Qichacha (企查查) - Alternative Business Intelligence Platform</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://www.qcc.com" target="_blank" rel="noopener noreferrer">https://www.qcc.com</a></li>
            <li><strong>Type:</strong> Commercial aggregator (competitor to Tianyancha)</li>
            <li><strong>Data Available:</strong> Similar to Tianyancha (business registration, litigation, risk scores)</li>
            <li><strong>Access Method:</strong> Paid API (similar pricing to Tianyancha)</li>
            <li><strong>Use Case:</strong> Fallback if Tianyancha API unavailable or for data cross-validation</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>5. China Judgements Online (中国裁判文书网)</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://wenshu.court.gov.cn" target="_blank" rel="noopener noreferrer">https://wenshu.court.gov.cn</a></li>
            <li><strong>Authority:</strong> Supreme People's Court</li>
            <li><strong>Coverage:</strong> Court judgments and legal cases (labor disputes, contract violations)</li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Search by company name or Unified Social Credit Code</li>
                <li>Labor dispute history (unpaid wages, contract violations)</li>
                <li>Case outcomes and penalties</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Web scraping (requires CAPTCHA solving)</li>
            <li><strong>Use Case:</strong> Flag schools with history of teacher lawsuits or unpaid wages</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>6. Baidu Maps / Gaode Maps (百度地图 / 高德地图) - Address Verification</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URLs:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Baidu Maps API: <a href="https://lbsyun.baidu.com" target="_blank" rel="noopener noreferrer">https://lbsyun.baidu.com</a></li>
                <li>Gaode Maps API: <a href="https://lbs.amap.com" target="_blank" rel="noopener noreferrer">https://lbs.amap.com</a></li>
              </ul>
            </li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>Address geocoding (convert text address to lat/long)</li>
                <li>Reverse geocoding (lat/long to address)</li>
                <li>POI (Point of Interest) verification - check if school exists at address</li>
                <li>Street view imagery (if available)</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Official API (both free tier + paid)</li>
            <li><strong>Cost:</strong> Free for &lt;10K queries/day, then ¥0.01-0.05 per query</li>
            <li><strong>Use Case:</strong> Verify school address matches business registration address</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>7. ISC Research - International School Database</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://iscresearch.com" target="_blank" rel="noopener noreferrer">https://iscresearch.com</a></li>
            <li><strong>Type:</strong> Commercial research firm (UK-based)</li>
            <li><strong>Coverage:</strong> 1,106-1,124 international schools in China (2024 data)</li>
            <li><strong>Data Available:</strong>
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>School name, address, contact info</li>
                <li>Curriculum type (IB, British, American)</li>
                <li>Student enrollment numbers</li>
                <li>Tuition fees</li>
                <li>Accreditation status</li>
              </ul>
            </li>
            <li><strong>Access Method:</strong> Paid subscription ($2,000-$5,000/year for database access)</li>
            <li><strong>Use Case:</strong> Pre-populate verified international school list, cross-reference with government data</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="asia-verification" title="Asia Expansion Verification Sources">
        <InfoBox>
          <strong>South Korea</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> National Tax Service Business Registration System
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.nts.go.kr" target="_blank" rel="noopener noreferrer">https://www.nts.go.kr</a></li>
                <li>Data: 사업자등록번호 (Business Registration Number), company name, address</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Ministry of Education School Information
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.moe.go.kr" target="_blank" rel="noopener noreferrer">https://www.moe.go.kr</a></li>
                <li>Data: Licensed schools, foreign teacher hiring permits</li>
              </ul>
            </li>
            <li><strong>Court Records:</strong> Supreme Court Case Search
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.scourt.go.kr" target="_blank" rel="noopener noreferrer">https://www.scourt.go.kr</a></li>
                <li>Data: Labor disputes, contract violations</li>
              </ul>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>Japan</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> National Tax Agency Corporate Number System
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.houjin-bangou.nta.go.jp" target="_blank" rel="noopener noreferrer">https://www.houjin-bangou.nta.go.jp</a></li>
                <li>Data: 法人番号 (Corporate Number), 登記事項証明書 (Corporate registration certificate)</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Ministry of Education, Culture, Sports, Science and Technology (MEXT)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.mext.go.jp" target="_blank" rel="noopener noreferrer">https://www.mext.go.jp</a></li>
                <li>Data: Licensed educational institutions, international school accreditation</li>
              </ul>
            </li>
            <li><strong>JET Programme Database:</strong> Official JET participant schools
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://jetprogramme.org" target="_blank" rel="noopener noreferrer">https://jetprogramme.org</a></li>
                <li>Data: Schools participating in JET (5,933 teachers, 2025)</li>
              </ul>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>Thailand</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> Department of Business Development, Ministry of Commerce
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.dbd.go.th" target="_blank" rel="noopener noreferrer">https://www.dbd.go.th</a></li>
                <li>Data: Company registration number, business details</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Office of the Private Education Commission (OPEC)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: Ministry of Education licensing database</li>
                <li>Data: Licensed international schools (249 schools, 2024)</li>
              </ul>
            </li>
            <li><strong>Manual Verification:</strong> Limited API access, requires manual verification protocols</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>Vietnam</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> National Business Registration Portal
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://dangkykinhdoanh.gov.vn" target="_blank" rel="noopener noreferrer">https://dangkykinhdoanh.gov.vn</a></li>
                <li>Data: Enterprise registration code, tax code, business details</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Ministry of Education and Training (MOET)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://moet.gov.vn" target="_blank" rel="noopener noreferrer">https://moet.gov.vn</a></li>
                <li>Data: Licensed international schools (120+ schools, 42% growth since 2019)</li>
              </ul>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>Singapore</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> Accounting and Corporate Regulatory Authority (ACRA)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.acra.gov.sg" target="_blank" rel="noopener noreferrer">https://www.acra.gov.sg</a></li>
                <li>Data: UEN (Unique Entity Number), company details, financial statements</li>
                <li>API: BizFile+ API (paid, well-documented)</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Ministry of Education (MOE)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.moe.gov.sg" target="_blank" rel="noopener noreferrer">https://www.moe.gov.sg</a></li>
                <li>Data: Licensed international schools (69 schools)</li>
              </ul>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>Hong Kong</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Business Registration:</strong> Companies Registry (CR)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.cr.gov.hk" target="_blank" rel="noopener noreferrer">https://www.cr.gov.hk</a></li>
                <li>Data: Company registration number, directors, registered address</li>
                <li>API: Cybersearch API (paid, HK$50-100 per query)</li>
              </ul>
            </li>
            <li><strong>School Verification:</strong> Education Bureau (EDB)
              <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
                <li>URL: <a href="https://www.edb.gov.hk" target="_blank" rel="noopener noreferrer">https://www.edb.gov.hk</a></li>
                <li>Data: Licensed international schools (53 schools)</li>
              </ul>
            </li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="third-party-services" title="Third-Party Verification Services">
        <InfoBox>
          <strong>1. OpenCorporates</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://opencorporates.com" target="_blank" rel="noopener noreferrer">https://opencorporates.com</a></li>
            <li><strong>Coverage:</strong> 200+ million companies globally (including China, Asia)</li>
            <li><strong>Data:</strong> Company registration data aggregated from government sources</li>
            <li><strong>API:</strong> RESTful API, free tier + paid ($500-$2,000/month)</li>
            <li><strong>Use Case:</strong> Quick lookup for international verification</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>2. Dun & Bradstreet (D&B)</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://www.dnb.com" target="_blank" rel="noopener noreferrer">https://www.dnb.com</a></li>
            <li><strong>Coverage:</strong> 400+ million businesses globally</li>
            <li><strong>Data:</strong> D-U-N-S Number, credit scores, risk assessment</li>
            <li><strong>API:</strong> Enterprise API (expensive, $10K-$50K/year)</li>
            <li><strong>Use Case:</strong> Financial risk assessment for large schools/companies</li>
          </ul>
        </InfoBox>

        <InfoBox>
          <strong>3. Google Places API</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>URL:</strong> <a href="https://developers.google.com/maps/documentation/places" target="_blank" rel="noopener noreferrer">https://developers.google.com/maps/documentation/places</a></li>
            <li><strong>Coverage:</strong> Global POI database</li>
            <li><strong>Data:</strong> Business name, address, phone, reviews, photos</li>
            <li><strong>API:</strong> $0.017 per Place Details request</li>
            <li><strong>Use Case:</strong> Cross-verify address + read Google reviews for additional signals</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="verification-workflow" title="Recommended Verification Workflow">
        <InfoBox>
          <strong>Stage 1: Automated Verification (Basic Tier - Free/Low Cost)</strong>
          <ol style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
            <li><strong>Step 1:</strong> Scrape National Enterprise Credit Information Publicity System (GSXT) using school name or Unified Social Credit Code
              <ul style={{ marginLeft: '20px' }}>
                <li>Cost: $0 (public database, requires CAPTCHA solving)</li>
                <li>Time: 5-10 seconds per query</li>
                <li>Output: Business license validation, registration date, legal rep, business scope</li>
              </ul>
            </li>
            <li><strong>Step 2:</strong> Verify address using Baidu Maps or Gaode Maps API
              <ul style={{ marginLeft: '20px' }}>
                <li>Cost: Free (&lt;10K queries/day) or ¥0.01-0.05 per query</li>
                <li>Time: 1-2 seconds per query</li>
                <li>Output: Geocoded address, POI verification</li>
              </ul>
            </li>
            <li><strong>Step 3:</strong> Flag if address mismatch OR business not found → Manual review required</li>
          </ol>
        </InfoBox>

        <InfoBox>
          <strong>Stage 2: Enhanced Verification (Premium Tier - Paid APIs)</strong>
          <ol style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
            <li><strong>Step 4:</strong> Query Tianyancha or Qichacha API for risk assessment
              <ul style={{ marginLeft: '20px' }}>
                <li>Cost: $0.10-0.30 per query (depending on volume)</li>
                <li>Time: 2-3 seconds per query</li>
                <li>Output: Court cases, litigation history, shareholder relationships, risk score</li>
              </ul>
            </li>
            <li><strong>Step 5:</strong> Search China Judgements Online for labor disputes
              <ul style={{ marginLeft: '20px' }}>
                <li>Cost: $0 (public database, requires scraping)</li>
                <li>Time: 10-15 seconds per query</li>
                <li>Output: Flag if school has history of teacher lawsuits or unpaid wages</li>
              </ul>
            </li>
            <li><strong>Step 6:</strong> Assign verification badge based on combined data
              <ul style={{ marginLeft: '20px' }}>
                <li>✅ Verified: Business registered + address verified + no red flags</li>
                <li>⚠️ Caution: Business registered but has court cases or address issues</li>
                <li>❌ Unverified: Cannot verify business registration or major red flags</li>
              </ul>
            </li>
          </ol>
        </InfoBox>

        <InfoBox>
          <strong>Stage 3: Human-in-the-Loop Verification (Cases Requiring Manual Review)</strong>
          <ol style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
            <li>School not found in government database (may be newly registered or typo in name)</li>
            <li>Address mismatch between business registration and job posting</li>
            <li>Recent litigation or administrative penalties flagged</li>
            <li>International school claims but not in ISC Research database</li>
          </ol>
          <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
            <strong>Manual Review Process:</strong> Assign to Pete or trained VA (15 minutes per case) - check school website,
            call phone number, cross-reference with teacher community knowledge, request documentation.
          </p>
        </InfoBox>
      </Section>

      <Section id="cost-analysis" title="Cost Analysis (Verification Infrastructure)">
        <table style={{ fontSize: '0.85em', marginTop: '15px', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Data Source</th>
              <th style={{ padding: '10px' }}>Access Method</th>
              <th style={{ padding: '10px' }}>Cost</th>
              <th style={{ padding: '10px' }}>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>China GSXT</td>
              <td style={{ padding: '8px' }}>Web scraping</td>
              <td style={{ padding: '8px' }}>$0 (free)</td>
              <td style={{ padding: '8px' }}>Basic business license verification</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Baidu/Gaode Maps</td>
              <td style={{ padding: '8px' }}>API</td>
              <td style={{ padding: '8px' }}>$0-$50/month</td>
              <td style={{ padding: '8px' }}>Address verification</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Tianyancha API</td>
              <td style={{ padding: '8px' }}>Paid API</td>
              <td style={{ padding: '8px' }}>$3K-$10K/year</td>
              <td style={{ padding: '8px' }}>Risk assessment + litigation</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>ISC Research</td>
              <td style={{ padding: '8px' }}>Database subscription</td>
              <td style={{ padding: '8px' }}>$2K-$5K/year</td>
              <td style={{ padding: '8px' }}>Pre-verified international schools</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>China Judgements</td>
              <td style={{ padding: '8px' }}>Web scraping</td>
              <td style={{ padding: '8px' }}>$0 (free)</td>
              <td style={{ padding: '8px' }}>Labor dispute flagging</td>
            </tr>
            <tr style={{ background: '#f0fff4', fontWeight: 'bold' }}>
              <td style={{ padding: '10px' }} colSpan={2}>Total Annual Cost (Stage 3+)</td>
              <td style={{ padding: '10px' }}>$5K-$15K/year</td>
              <td style={{ padding: '8px' }}>Break-even at 100-300 premium schools</td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: '0.9em', marginTop: '15px', lineHeight: '1.8' }}>
          <strong>Key Insight:</strong> Verification infrastructure costs $5K-$15K/year (Tianyancha + ISC Research).
          With 100 premium schools paying $149/post × 3 posts/year = $44,700 revenue, verification ROI = 3-9x.
          This creates defensible moat: competitors must replicate data infrastructure AND build verification algorithms.
        </p>
      </Section>
    </Chapter>
  )
}
