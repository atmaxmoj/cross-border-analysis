import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'

export default function AppendixBVerification() {
  return (
    <Section id="appendix-b" title="B. Verification Data Sources">
      <p>
        This appendix documents all primary data sources we can use to verify hiring party legitimacy across China and Asia expansion markets.
      </p>

      <h3 style={{ marginTop: '30px' }}>China Verification Sources</h3>

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
          <li><strong>Cost:</strong> Free (public database)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>2. Ministry of Education - International Schools List</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="http://www.moe.gov.cn" target="_blank" rel="noopener noreferrer">http://www.moe.gov.cn</a></li>
          <li><strong>Authority:</strong> Ministry of Education (MOE)</li>
          <li><strong>Coverage:</strong> Licensed international schools and training centers authorized to hire foreign teachers</li>
          <li><strong>Data Available:</strong> School name, license number, authorized hiring quota, expiration date</li>
          <li><strong>Access Method:</strong> Web scraping + manual verification</li>
          <li><strong>Cost:</strong> Free</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>3. Tianyancha (天眼查) - Business Intelligence Platform</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.tianyancha.com" target="_blank" rel="noopener noreferrer">https://www.tianyancha.com</a></li>
          <li><strong>Coverage:</strong> 300+ million Chinese companies with deep verification data</li>
          <li><strong>Data Available:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Business license verification</li>
              <li>Court cases and legal disputes</li>
              <li>Tax compliance status</li>
              <li>Shareholding structure</li>
              <li>Credit rating and risk score</li>
              <li>Employee count verification</li>
            </ul>
          </li>
          <li><strong>Access Method:</strong> Commercial API available</li>
          <li><strong>Cost:</strong> ¥10,000-¥30,000/year (~$1,400-$4,200) for API access</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>4. Qichacha (企查查) - Alternative Business Intelligence</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.qcc.com" target="_blank" rel="noopener noreferrer">https://www.qcc.com</a></li>
          <li><strong>Coverage:</strong> Similar to Tianyancha, 200+ million companies</li>
          <li><strong>Data Available:</strong> Business registration, legal cases, credit rating, operational status</li>
          <li><strong>Access Method:</strong> Commercial API</li>
          <li><strong>Cost:</strong> ¥8,000-¥25,000/year (~$1,100-$3,500)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>5. China Judgements Online (中国裁判文书网)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://wenshu.court.gov.cn" target="_blank" rel="noopener noreferrer">https://wenshu.court.gov.cn</a></li>
          <li><strong>Authority:</strong> Supreme People's Court</li>
          <li><strong>Coverage:</strong> All published court judgements in China</li>
          <li><strong>Data Available:</strong> Labor disputes, contract violations, fraud cases involving schools</li>
          <li><strong>Access Method:</strong> Web scraping (public database)</li>
          <li><strong>Cost:</strong> Free</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>6. Baidu Maps API / Gaode Maps API - Address Verification</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URLs:</strong> <a href="https://lbsyun.baidu.com" target="_blank" rel="noopener noreferrer">Baidu LBS</a>, <a href="https://lbs.amap.com" target="_blank" rel="noopener noreferrer">Gaode Maps</a></li>
          <li><strong>Coverage:</strong> POI (Point of Interest) verification for schools</li>
          <li><strong>Data Available:</strong> Address geocoding, business verification, photos, reviews</li>
          <li><strong>Access Method:</strong> Official API</li>
          <li><strong>Cost:</strong> Free tier (10,000 calls/day), paid tier ¥200-¥500/month (~$30-$70)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>7. ISC Research - International School Database</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.iscresearch.com" target="_blank" rel="noopener noreferrer">https://www.iscresearch.com</a></li>
          <li><strong>Coverage:</strong> 13,000+ international schools globally, including China</li>
          <li><strong>Data Available:</strong> School profiles, enrollment data, curriculum, accreditation status</li>
          <li><strong>Access Method:</strong> Subscription database</li>
          <li><strong>Cost:</strong> $1,500-$3,000/year for institutional access</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Provincial-Level Verification Sources (China)</h3>

      <InfoBox>
        <strong>8. Provincial Education Bureaus (省级教育厅/局)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Examples:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Beijing Education Commission: <a href="http://jw.beijing.gov.cn" target="_blank" rel="noopener noreferrer">jw.beijing.gov.cn</a></li>
              <li>Shanghai Education Commission: <a href="http://edu.sh.gov.cn" target="_blank" rel="noopener noreferrer">edu.sh.gov.cn</a></li>
              <li>Guangdong Education Department: <a href="http://edu.gd.gov.cn" target="_blank" rel="noopener noreferrer">edu.gd.gov.cn</a></li>
              <li>Zhejiang Education Department: <a href="http://jyt.zj.gov.cn" target="_blank" rel="noopener noreferrer">jyt.zj.gov.cn</a></li>
            </ul>
          </li>
          <li><strong>Coverage:</strong> Provincial-level licensed schools, training centers, foreign teacher work permit quotas</li>
          <li><strong>Data Available:</strong> School operating licenses, teacher hiring permits, annual inspection results, violation records</li>
          <li><strong>Access Method:</strong> Web scraping (varies by province, some have searchable databases)</li>
          <li><strong>Cost:</strong> Free (public databases)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>9. Provincial Market Regulation Bureaus (省级市场监督管理局)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Examples:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Beijing Market Regulation: <a href="http://scjgj.beijing.gov.cn" target="_blank" rel="noopener noreferrer">scjgj.beijing.gov.cn</a></li>
              <li>Shanghai Market Regulation: <a href="http://scjgj.sh.gov.cn" target="_blank" rel="noopener noreferrer">scjgj.sh.gov.cn</a></li>
              <li>Guangdong Market Regulation: <a href="http://amr.gd.gov.cn" target="_blank" rel="noopener noreferrer">amr.gd.gov.cn</a></li>
            </ul>
          </li>
          <li><strong>Coverage:</strong> Provincial business registration supplements, administrative penalties, consumer complaints</li>
          <li><strong>Data Available:</strong> Business license details, violation history, blacklist entries, complaint records</li>
          <li><strong>Access Method:</strong> Web scraping + provincial GSXT portals</li>
          <li><strong>Cost:</strong> Free</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>10. Provincial Human Resources & Social Security Bureaus (省级人社厅/局)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Examples:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Beijing HRSS: <a href="http://rsj.beijing.gov.cn" target="_blank" rel="noopener noreferrer">rsj.beijing.gov.cn</a></li>
              <li>Shanghai HRSS: <a href="http://rsj.sh.gov.cn" target="_blank" rel="noopener noreferrer">rsj.sh.gov.cn</a></li>
            </ul>
          </li>
          <li><strong>Coverage:</strong> Foreign work permit database, labor dispute mediation records</li>
          <li><strong>Data Available:</strong> Work permit applications, employer labor violations, wage arrears blacklist</li>
          <li><strong>Access Method:</strong> Web scraping + some provinces offer query APIs</li>
          <li><strong>Cost:</strong> Free</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>11. Municipal/District-Level Education Bureaus (市级/区级教育局)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Examples:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Chaoyang District (Beijing): School licensing for specific districts</li>
              <li>Pudong District (Shanghai): Training center permits</li>
              <li>Nanshan District (Shenzhen): International school approvals</li>
            </ul>
          </li>
          <li><strong>Coverage:</strong> District-level school operating permits, annual review results</li>
          <li><strong>Data Available:</strong> Detailed school compliance records, parent complaint history</li>
          <li><strong>Access Method:</strong> Web scraping (highly fragmented, 300+ municipalities)</li>
          <li><strong>Cost:</strong> Free</li>
          <li><strong>Note:</strong> Only scrape for high-priority cities (Beijing, Shanghai, Shenzhen, Guangzhou) in Stage 1-2</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Asia Expansion Verification Sources</h3>

      <InfoBox>
        <strong>South Korea</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>National Tax Service Business Registration:</strong> <a href="https://www.hometax.go.kr" target="_blank" rel="noopener noreferrer">hometax.go.kr</a> - Business registration number (사업자등록번호) verification</li>
          <li><strong>Ministry of Education School Info:</strong> <a href="https://www.schoolinfo.go.kr" target="_blank" rel="noopener noreferrer">schoolinfo.go.kr</a> - Licensed schools database</li>
          <li><strong>Supreme Court Case Search:</strong> Court case verification for labor disputes</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Japan</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Corporate Number System:</strong> <a href="https://www.houjin-bangou.nta.go.jp" target="_blank" rel="noopener noreferrer">houjin-bangou.nta.go.jp</a> - 13-digit corporate number verification</li>
          <li><strong>MEXT (Ministry of Education):</strong> Licensed schools database</li>
          <li><strong>JET Programme Official List:</strong> Government-verified schools hiring ALTs</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Thailand</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>DBD Business Registration:</strong> <a href="https://www.dbd.go.th" target="_blank" rel="noopener noreferrer">dbd.go.th</a> - Department of Business Development company registry</li>
          <li><strong>OPEC School Licensing:</strong> Office of the Private Education Commission verified schools</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Vietnam</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>National Business Portal:</strong> <a href="https://dangkykinhdoanh.gov.vn" target="_blank" rel="noopener noreferrer">dangkykinhdoanh.gov.vn</a> - Business registration verification</li>
          <li><strong>MOET (Ministry of Education):</strong> Licensed international schools</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Singapore</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>ACRA (Accounting & Corporate Regulatory Authority):</strong> <a href="https://www.acra.gov.sg" target="_blank" rel="noopener noreferrer">acra.gov.sg</a> - BizFile+ API for business verification</li>
          <li><strong>MOE (Ministry of Education):</strong> Registered schools database</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Hong Kong</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Companies Registry:</strong> <a href="https://www.cr.gov.hk" target="_blank" rel="noopener noreferrer">cr.gov.hk</a> - Cybersearch API for company verification</li>
          <li><strong>EDB (Education Bureau):</strong> School profiles and registration</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Third-Party Verification Services</h3>

      <InfoBox>
        <strong>1. OpenCorporates</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://opencorporates.com" target="_blank" rel="noopener noreferrer">opencorporates.com</a></li>
          <li><strong>Coverage:</strong> 200+ million companies globally across 140+ jurisdictions</li>
          <li><strong>Access Method:</strong> API available</li>
          <li><strong>Cost:</strong> Free tier + paid API ($500-$2,000/month for commercial use)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>2. Dun & Bradstreet (D-U-N-S Number)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.dnb.com" target="_blank" rel="noopener noreferrer">dnb.com</a></li>
          <li><strong>Coverage:</strong> 500+ million businesses worldwide with credit ratings</li>
          <li><strong>Access Method:</strong> Commercial API</li>
          <li><strong>Cost:</strong> Enterprise pricing ($5,000-$15,000/year)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>3. Google Places API</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://developers.google.com/maps/documentation/places" target="_blank" rel="noopener noreferrer">Google Places API</a></li>
          <li><strong>Coverage:</strong> Global POI verification, photos, reviews, operating hours</li>
          <li><strong>Access Method:</strong> Official API</li>
          <li><strong>Cost:</strong> $0.017 per request (first $200/month free)</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Recommended Verification Workflow</h3>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
        <strong>Stage 1: Automated Basic Verification (Months 1-18)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>Scrape GSXT for business license verification (free)</li>
          <li>Baidu/Gaode Maps API for address verification ($30-$70/month)</li>
          <li>Manual spot-check for top 20% of schools by posting volume</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
        <strong>Stage 2: Enhanced Verification (Months 19-36)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>Subscribe to Tianyancha API ($1,400-$4,200/year)</li>
          <li>Scrape China Judgements Online for court cases (free)</li>
          <li>ISC Research subscription for international schools ($1,500-$3,000/year)</li>
          <li>Automated flagging of high-risk schools (lawsuits, penalties)</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
        <strong>Stage 3: Human-in-the-Loop for Edge Cases (Year 3+)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>Manual verification for flagged schools (VA support at $10K+ MRR)</li>
          <li>Teacher-reported fraud investigation workflow</li>
          <li>Partnership with local verification services in expansion markets</li>
        </ul>
      </div>

      <h3 style={{ marginTop: '30px' }}>Cost Analysis</h3>

      <table style={{ fontSize: '0.85em', width: '100%', marginTop: '15px' }}>
        <thead>
          <tr style={{ background: '#edf2f7' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Stage</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Services</th>
            <th style={{ padding: '10px' }}>Annual Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px' }}>Stage 1-2</td>
            <td style={{ padding: '8px' }}>GSXT scraping + Baidu/Gaode Maps API</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$360-$840/year</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Stage 3</td>
            <td style={{ padding: '8px' }}>+ Tianyancha API + ISC Research</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$3,300-$8,000/year</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Stage 4 (expansion)</td>
            <td style={{ padding: '8px' }}>+ OpenCorporates + country-specific APIs</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$5,000-$15,000/year</td>
          </tr>
          <tr style={{ background: '#f0fff4', fontWeight: 'bold' }}>
            <td style={{ padding: '10px' }} colSpan={2}>ROI at 100 premium schools ($149/mo)</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>3-9x ROI</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: '0.9em', marginTop: '15px', color: '#2d3748', lineHeight: '1.8' }}>
        <strong>Key Insight:</strong> Verification infrastructure costs $5K-$15K/year at scale, but creates 2-3 year competitive moat.
        Even with 100 premium schools ($149/mo = $178K ARR), verification costs are only 3-8% of revenue.
      </p>
    </Section>
  )
}
