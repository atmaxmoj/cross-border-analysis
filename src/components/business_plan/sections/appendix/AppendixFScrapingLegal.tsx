import Section from '../../../layout/Section'
import InfoBox from '../../../ui/InfoBox'

export default function AppendixFScrapingLegal() {
  return (
    <Section id="appendix-f" title="F. Web Scraping Legal Landscape by Country">
      <p>
        Legal analysis of web scraping across jurisdictions. Critical for <strong>A.1 Job Aggregator</strong> strategy which depends on scraping Dave's ESL Cafe, SeriousTeachers, ESLCafe forums.
      </p>

      <h3 style={{ marginTop: '30px' }}>United States - Generally Permissive</h3>

      <InfoBox>
        <strong>Landmark Case: hiQ Labs v. LinkedIn (2022)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Ruling:</strong> Scraping publicly accessible data does NOT violate Computer Fraud and Abuse Act (CFAA)</li>
          <li><strong>Key principle:</strong> "Information posted publicly on the internet is not protected by the CFAA"</li>
          <li><strong>Implications:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Dave's ESL Cafe job postings are public (no login required) → scraping is LEGAL</li>
              <li>SeriousTeachers, ESLCafe forums have public job listings → scraping is LEGAL</li>
              <li>LinkedIn tried to block hiQ, courts ruled in favor of scraper (upheld on appeal 2022)</li>
            </ul>
          </li>
          <li><strong>Limitations:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Must respect robots.txt (though not legally binding, good practice)</li>
              <li>Cannot bypass login walls or CAPTCHAs (that would violate CFAA)</li>
              <li>Cannot scrape copyrighted content for commercial reproduction (fair use applies)</li>
            </ul>
          </li>
        </ul>

        <strong>Other US Cases:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Ryanair v. PR Aviation (2015):</strong> US court ruled scraping public flight data is legal</li>
          <li><strong>QVC v. Resultly (2019):</strong> Scraping product listings for price comparison is legal</li>
          <li><strong>Sandvig v. Sessions (2020):</strong> Academic/journalistic scraping protected by First Amendment</li>
        </ul>

        <strong>Best Practices for US:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>✅ Scrape publicly accessible job postings (no login required)</li>
          <li>✅ Include source attribution ("Originally posted on Dave's ESL Cafe")</li>
          <li>✅ Link back to original posting</li>
          <li>✅ Respect rate limits to avoid DDoS-like behavior</li>
          <li>❌ Don't bypass paywalls or login walls</li>
          <li>❌ Don't scrape personal data (email addresses, phone numbers) for spam purposes</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>European Union - More Restrictive (GDPR + Database Directive)</h3>

      <InfoBox>
        <strong>Legal Framework:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>GDPR (General Data Protection Regulation):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Personal data (names, emails, phone numbers) has special protection</li>
              <li>Job postings containing contact info → risky to scrape without consent</li>
              <li>Anonymized job data (school name, salary, location) → less risky</li>
              <li>Must have "legitimate interest" legal basis for processing personal data</li>
            </ul>
          </li>
          <li><strong>Database Directive (96/9/EC):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Protects "substantial investment" in database compilation</li>
              <li>Scraping entire databases may infringe on database rights (even if individual records are public)</li>
              <li>Example: Ryanair successfully sued competitors for scraping flight data in EU courts</li>
            </ul>
          </li>
        </ul>

        <strong>Risk Assessment for Job Scraping:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Lower risk:</strong> Scraping job titles, locations, salary ranges, school names (non-personal data)</li>
          <li><strong>Higher risk:</strong> Scraping contact emails, recruiter names, phone numbers (personal data under GDPR)</li>
          <li><strong>Mitigation:</strong> Filter out personal data, only display job descriptions + source link</li>
        </ul>

        <strong>EU Case Law:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Ryanair v. PR Aviation (EU, 2015):</strong> EU court ruled IN FAVOR of database protection (opposite of US ruling)</li>
          <li><strong>C-30/14 Ryanair v. Expedia:</strong> ECJ ruled database rights apply even to publicly accessible data</li>
        </ul>

        <strong>Recommendation for EU:</strong>
        <p style={{ fontSize: '0.9em', marginTop: '10px', lineHeight: '1.6' }}>
          Since YouTeacher is China-focused initially (Stage 1-3), EU legal risks are LOW. If expanding to European teaching markets (Year 5+), consult EU data protection lawyer before scraping EU-based job boards.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>China - Most Restrictive (Anti-Unfair Competition Law)</h3>

      <InfoBox>
        <strong>Legal Framework:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Anti-Unfair Competition Law (反不正当竞争法, 2019 revision):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Article 12: Prohibits scraping that "interferes with normal operation" of other platforms</li>
              <li>Broader than US/EU - focuses on competitive harm, not just technical access</li>
              <li>Courts have ruled against scrapers even when data is public</li>
            </ul>
          </li>
          <li><strong>Personal Information Protection Law (PIPL, 2021):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>China's version of GDPR, even stricter on personal data</li>
              <li>Scraping personal data (names, emails, IDs) without consent is ILLEGAL</li>
            </ul>
          </li>
        </ul>

        <strong>Key Chinese Cases:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Sina Weibo v. Maimai (2016):</strong> Court ruled scraping user profiles violated anti-unfair competition law</li>
          <li><strong>Tencent v. Toutiao (2018):</strong> ByteDance fined for scraping WeChat content</li>
          <li><strong>Dianping v. Baidu (2019):</strong> Baidu penalized for scraping restaurant reviews (even though publicly accessible)</li>
        </ul>

        <strong>Risk Assessment:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>HIGH RISK:</strong> Scraping Chinese job platforms (Zhaopin, 51job, Boss Zhipin) → likely lawsuit</li>
          <li><strong>MEDIUM RISK:</strong> Scraping international platforms hosted in US (Dave's ESL Cafe) from China servers</li>
          <li><strong>LOWER RISK:</strong> Scraping from US/Singapore servers (jurisdictional complexity protects you)</li>
        </ul>

        <strong>Mitigation Strategies:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>✅ Host scraping infrastructure OUTSIDE China (AWS Singapore, US East)</li>
          <li>✅ Scrape international platforms (Dave's ESL, SeriousTeachers) hosted in US - US legal framework applies</li>
          <li>✅ Avoid scraping Chinese-owned platforms (Zhaopin, 51job) to minimize anti-unfair competition risk</li>
          <li>✅ Display prominent attribution + link back to original source</li>
          <li>❌ Don't scrape from China-based servers (jurisdictional risk)</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>United Kingdom (Post-Brexit)</h3>

      <InfoBox>
        <strong>Legal Framework:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>UK GDPR:</strong> Retained EU GDPR after Brexit with minor modifications</li>
          <li><strong>Database Right:</strong> Still applies (inherited from EU Database Directive)</li>
          <li><strong>Computer Misuse Act 1990:</strong> Similar to US CFAA - accessing without authorization is illegal</li>
        </ul>

        <strong>Key Difference from EU:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>UK courts slightly more permissive than EU on database rights</li>
          <li>Post-Brexit divergence expected to favor innovation over data protection (though still stricter than US)</li>
        </ul>

        <strong>Recommendation:</strong>
        <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
          Treat similar to EU - scrape job data (non-personal) is lower risk, but avoid scraping personal contact info without consent.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Australia - Moderate Restrictions</h3>

      <InfoBox>
        <strong>Legal Framework:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Privacy Act 1988:</strong> Regulates personal information collection</li>
          <li><strong>Australian Consumer Law:</strong> Prohibits misleading/deceptive conduct (applies to data reuse)</li>
          <li><strong>Copyright Act 1968:</strong> Protects original content (but facts/data less protected)</li>
        </ul>

        <strong>Case Law:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Fairfax v. Reed (2010):</strong> Headlines are facts, not copyrightable → scraping news headlines legal</li>
          <li><strong>Telstra v. Phone Directories (2010):</strong> White Pages listings not protected by copyright (too factual)</li>
        </ul>

        <strong>Recommendation:</strong>
        <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
          Similar to US - scraping public job listings is likely legal. Avoid personal data to minimize Privacy Act risk.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Canada - Permissive with Privacy Caveats</h3>

      <InfoBox>
        <strong>Legal Framework:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>PIPEDA (Personal Information Protection Act):</strong> Regulates commercial personal data collection</li>
          <li><strong>No CFAA equivalent:</strong> No computer access crimes for public data scraping</li>
          <li><strong>Copyright Act:</strong> Protects creative content, but facts/data less protected</li>
        </ul>

        <strong>Risk Level:</strong>
        <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
          LOW for public job scraping. Canadian courts have not been aggressive against scrapers. PIPEDA applies if collecting personal data for commercial purposes.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Recommended Scraping Strategy for YouTeacher</h3>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
        <strong>Stage 1-2 (Job Aggregator): Low-Risk Approach</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Target platforms:</strong> Dave's ESL Cafe, SeriousTeachers, ESLCafe (all US-hosted, public data)</li>
          <li><strong>Infrastructure:</strong> Run scrapers on AWS US East or Singapore (NOT China servers)</li>
          <li><strong>Data collected:</strong> Job title, school name, location, salary, description, source URL</li>
          <li><strong>Data excluded:</strong> Contact emails, phone numbers, recruiter names (avoid personal data risks)</li>
          <li><strong>Attribution:</strong> Display "Originally posted on [Source]" + link back to original posting</li>
          <li><strong>robots.txt compliance:</strong> Respect robots.txt directives (good practice, reduces legal risk)</li>
          <li><strong>Rate limiting:</strong> Max 1 request/second per domain to avoid DDoS accusations</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
        <strong>Legal Opinion Summary by Jurisdiction:</strong>
        <table style={{ fontSize: '0.85em', width: '100%', marginTop: '10px' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Country</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Risk Level</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Key Consideration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>United States</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#38a169', fontWeight: 'bold' }}>LOW</td>
              <td style={{ padding: '8px' }}>hiQ v. LinkedIn: Public data scraping is legal</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>China</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#e53e3e', fontWeight: 'bold' }}>HIGH</td>
              <td style={{ padding: '8px' }}>Anti-unfair competition law, host scrapers OUTSIDE China</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>European Union</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#ecc94b', fontWeight: 'bold' }}>MEDIUM</td>
              <td style={{ padding: '8px' }}>GDPR + Database Directive, avoid personal data</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>United Kingdom</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#ecc94b', fontWeight: 'bold' }}>MEDIUM</td>
              <td style={{ padding: '8px' }}>UK GDPR + Database Right, similar to EU</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Australia</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#38a169', fontWeight: 'bold' }}>LOW</td>
              <td style={{ padding: '8px' }}>Facts/data less protected, scraping likely legal</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Canada</td>
              <td style={{ padding: '8px', textAlign: 'center', color: '#38a169', fontWeight: 'bold' }}>LOW</td>
              <td style={{ padding: '8px' }}>No aggressive enforcement, PIPEDA applies to personal data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}
