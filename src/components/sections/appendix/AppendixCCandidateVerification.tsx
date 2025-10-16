import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function AppendixCCandidateVerification() {
  return (
    <Section id="appendix-c" title="C. Candidate Verification Data Sources">
      <p>
        This appendix documents verification sources for teacher candidates - credentials, certifications, background checks, and professional qualifications.
      </p>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
        <strong>Pragmatic Verification Strategy (Cost-Benefit Optimized)</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          Our strategy is straightforward: <strong>automate what's free, defer what's expensive.</strong>
        </p>
        <ul style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>FREE verification sources</strong> (UK QTS, state teaching licenses, CELTA/Trinity, IB profiles):
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>✅ Automate lookups where possible (scraping public registries)</li>
              <li>✅ Build verification tools directly into platform (Stage 1-2)</li>
              <li>Example: UK teacher enters TRN → auto-verify via find-a-lost-trn.education.gov.uk</li>
            </ul>
          </li>
          <li><strong>PAID API services</strong> (WES, background checks, employment verification):
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>⏳ Defer to Stage 3-4 when volume justifies cost ($5K-$10K/year minimums)</li>
              <li>💰 Pass costs to candidates/schools ("Verified Teacher Badge" premium feature)</li>
            </ul>
          </li>
          <li><strong>MANUAL verification</strong> (everything else):
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', marginTop: '5px' }}>
              <li>📝 Candidate provides credential number + verification URL during signup</li>
              <li>🔗 Platform displays link: "Verify this teacher's credentials at [URL]"</li>
              <li>Schools click through to verify themselves (zero platform cost, schools trust their own verification)</li>
              <li>Example: "CELTA Certificate #12345 - <a href='#' style={{ color: '#3182ce' }}>Verify on Cambridge website</a>"</li>
            </ul>
          </li>
        </ul>
        <p style={{ margin: '10px 0 0 0', fontSize: '0.9em', lineHeight: '1.8', color: '#2d3748' }}>
          <strong>Cost Impact:</strong> Stage 1-2 verification cost = $0-$10 per candidate (VA spot-checks only).
          Schools appreciate transparency more than platform-verified badges in early stages.
        </p>
      </div>

      <h3 style={{ marginTop: '30px' }}>Education Credential Evaluation Services</h3>

      <InfoBox>
        <strong>1. WES (World Education Services)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.wes.org" target="_blank" rel="noopener noreferrer">https://www.wes.org</a></li>
          <li><strong>Coverage:</strong> Degree verification and equivalency evaluation for 200+ countries</li>
          <li><strong>Services:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Degree authentication (Bachelor's, Master's, PhD)</li>
              <li>Country equivalency reports (e.g., UK 2:1 = US 3.3-3.7 GPA)</li>
              <li>Course-by-course evaluation</li>
              <li>Direct institutional verification</li>
            </ul>
          </li>
          <li><strong>Integration:</strong> WES API for bulk verifications (enterprise accounts)</li>
          <li><strong>Cost:</strong> $100-$205 per evaluation (candidate pays), API access ~$5,000/year institutional</li>
          <li><strong>Timeline:</strong> 7-10 business days for standard evaluation</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>2. NACES Members (National Association of Credential Evaluation Services)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Alternative Services:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Educational Credential Evaluators (ECE): <a href="https://www.ece.org" target="_blank" rel="noopener noreferrer">ece.org</a></li>
              <li>International Education Research Foundation (IERF): <a href="https://www.ierf.org" target="_blank" rel="noopener noreferrer">ierf.org</a></li>
              <li>SpanTran: <a href="https://www.spantran.com" target="_blank" rel="noopener noreferrer">spantran.com</a></li>
            </ul>
          </li>
          <li><strong>Coverage:</strong> Similar to WES, NACES-accredited standards</li>
          <li><strong>Cost:</strong> $75-$150 per evaluation</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>3. China Academic Degrees and Graduate Education Development Center (CDGDC)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.cdgdc.edu.cn" target="_blank" rel="noopener noreferrer">https://www.cdgdc.edu.cn</a></li>
          <li><strong>Authority:</strong> Ministry of Education (China)</li>
          <li><strong>Coverage:</strong> Chinese degree verification (for Chinese citizens teaching abroad or returning)</li>
          <li><strong>Services:</strong> Degree authentication reports (学位认证报告), official English translation</li>
          <li><strong>Cost:</strong> ¥200-¥360 per verification (~$30-$50)</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Teaching Certifications & TEFL Credentials</h3>

      <InfoBox>
        <strong>4. Cambridge English - CELTA/DELTA Verification</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/celta/" target="_blank" rel="noopener noreferrer">Cambridge CELTA</a></li>
          <li><strong>Verification:</strong> Certificate verification service (candidate ID + center code)</li>
          <li><strong>Cost:</strong> Free verification via Cambridge website (manual check)</li>
          <li><strong>Note:</strong> CELTA is gold standard for ESL teaching (120 hours + teaching practice)</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>5. Trinity College London - CertTESOL/DipTESOL Verification</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>URL:</strong> <a href="https://www.trinitycollege.com/qualifications/teaching-english" target="_blank" rel="noopener noreferrer">Trinity TESOL</a></li>
          <li><strong>Verification:</strong> Certificate verification via Trinity College portal</li>
          <li><strong>Cost:</strong> Free verification</li>
          <li><strong>Note:</strong> CertTESOL equivalent to CELTA in UK/Europe</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>6. Online TEFL/TESOL Certificate Providers</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Common Providers:</strong> International TEFL Academy, i-to-i TEFL, TEFL.org, Premier TEFL</li>
          <li><strong>Challenge:</strong> No centralized verification database (unlike CELTA/Trinity)</li>
          <li><strong>Verification Method:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Request PDF certificate + course provider contact info from candidate</li>
              <li>Email provider to confirm authenticity (manual spot-check 10-20%)</li>
              <li>Red flags: &lt;100 hour courses, no teaching practice, suspicious design</li>
            </ul>
          </li>
          <li><strong>Cost:</strong> Manual verification (VA time: ~15 min per certificate)</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Background Checks & Criminal Records</h3>

      <InfoBox>
        <strong>7. National Criminal Background Check Services (by Country)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>USA - FBI Background Check:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Identity History Summary Check (fingerprint-based)</li>
              <li>Required for China work permits</li>
              <li>Apostille/authentication required for international use</li>
              <li>Cost: $18 (FBI) + $50-$100 (apostille service)</li>
            </ul>
          </li>
          <li><strong>UK - DBS Check (Disclosure and Barring Service):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Enhanced DBS for working with children</li>
              <li>Must be legalized by UK Foreign Office for China</li>
              <li>Cost: £44 (~$55)</li>
            </ul>
          </li>
          <li><strong>Canada - RCMP Criminal Record Check:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Certified Criminal Record Check (fingerprint-based)</li>
              <li>Cost: CAD $25 + fingerprinting fee (~$60-$80 total)</li>
            </ul>
          </li>
          <li><strong>Australia - National Police Check:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Australian Federal Police (AFP) check</li>
              <li>Cost: AUD $42 (~$28 USD)</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>8. Third-Party Background Check Providers</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Sterling Talent Solutions:</strong> Global background screening, API integration available</li>
          <li><strong>First Advantage:</strong> International education verification + criminal checks</li>
          <li><strong>HireRight:</strong> Multi-country background checks (90+ countries)</li>
          <li><strong>Cost:</strong> $50-$150 per candidate depending on depth (international checks more expensive)</li>
          <li><strong>Integration:</strong> API available for bulk checks (Stage 3-4 when volume justifies)</li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Professional References & Employment Verification</h3>

      <InfoBox>
        <strong>9. Employment Reference Verification Services</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Checkr:</strong> Employment verification API ($25-$40 per check)</li>
          <li><strong>Truework:</strong> Automated employment/income verification (API + HR integrations)</li>
          <li><strong>Manual Process (Stage 1-2):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Candidate provides 2-3 professional references</li>
              <li>Email + phone verification by VA (30 min per candidate)</li>
              <li>Red flags: Gmail/personal emails, phone numbers don't match school domain</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Micro-Credentials & Online Certifications</h3>

      <InfoBox>
        <strong>10. Digital Badge & Micro-Credential Platforms</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Coursera:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Verified certificates for MOOCs (e.g., TESOL specializations from Arizona State University)</li>
              <li>Verification: Certificate URL links to Coursera's verification system</li>
              <li>Cost: Free verification (certificates have unique verification codes)</li>
            </ul>
          </li>
          <li><strong>edX:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Verified certificates from universities (MIT, Harvard, etc.)</li>
              <li>MicroMasters and Professional Certificate programs</li>
              <li>Verification: Public certificate verification page</li>
            </ul>
          </li>
          <li><strong>Credly (Digital Badges):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Platform used by Microsoft, IBM, Google for digital credentials</li>
              <li>Blockchain-backed verification</li>
              <li>API available for badge verification</li>
            </ul>
          </li>
          <li><strong>LinkedIn Learning Certificates:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Shareable certificate links (auto-verify via LinkedIn)</li>
              <li>Not as valuable as university-backed credentials but shows professional development</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Teaching Credentials by English-Speaking Country</h3>

      <InfoBox>
        <strong>11. United Kingdom - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Qualified Teacher Status (QTS):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Most widely recognized UK teaching credential internationally</li>
              <li>Required for teaching in state schools in England</li>
              <li>Verification: <a href="https://find-a-lost-trn.education.gov.uk" target="_blank" rel="noopener noreferrer">Teacher Services - Find a Lost TRN</a></li>
              <li>Search by: Teacher Reference Number (TRN), National Insurance number, or personal details</li>
              <li>Cost: Free public verification</li>
              <li>International value: HIGH - widely accepted by British curriculum schools globally</li>
            </ul>
          </li>
          <li><strong>PGCE (Postgraduate Certificate in Education):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>University-level teaching qualification (often includes QTS)</li>
              <li>Verification: Contact issuing university directly</li>
              <li>International value: MEDIUM - recognized but QTS more important</li>
            </ul>
          </li>
          <li><strong>Scotland - GTCS Registration:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>General Teaching Council for Scotland registration</li>
              <li>Verification: <a href="https://www.gtcs.org.uk/web/FILES/about-gtcs/professional-update/register-of-teachers.aspx" target="_blank" rel="noopener noreferrer">GTCS Register</a></li>
              <li>Cost: Free verification</li>
            </ul>
          </li>
          <li><strong>Wales - EWC Registration:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Education Workforce Council registration</li>
              <li>Verification: <a href="https://www.ewc.wales" target="_blank" rel="noopener noreferrer">ewc.wales</a></li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>12. United States - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>State Teaching Licenses:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Each state has independent licensing system</li>
              <li>Common states with free public lookup:
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>California: <a href="https://www.ctc.ca.gov/credentials/lookup" target="_blank" rel="noopener noreferrer">CTC Credential Search</a></li>
                  <li>New York: <a href="https://eservices.nysed.gov/teach/certhelp/CpPersonSearchExternal.do" target="_blank" rel="noopener noreferrer">NYSED TEACH</a></li>
                  <li>Texas: <a href="https://tea.texas.gov/texas-educators/certification" target="_blank" rel="noopener noreferrer">Texas TEA</a></li>
                  <li>Florida: <a href="https://www.fldoe.org/teaching/certification" target="_blank" rel="noopener noreferrer">Florida DOE</a></li>
                  <li>Illinois: <a href="https://www.isbe.net/pages/educators.aspx" target="_blank" rel="noopener noreferrer">ISBE Educator Licensure</a></li>
                </ul>
              </li>
              <li>Verification: Free public lookup on state education department websites</li>
              <li>International value: MEDIUM - some international schools require, not universal</li>
              <li>Note: Only verify if school specifically requires (uncommon for ESL positions)</li>
            </ul>
          </li>
          <li><strong>NBCT (National Board Certification):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Advanced voluntary certification (highest level in US)</li>
              <li>Verification: <a href="https://www.nbpts.org/national-board-certification/verify-a-certification/" target="_blank" rel="noopener noreferrer">NBPTS Verification</a></li>
              <li>Cost: Free verification</li>
              <li>International value: LOW - rarely required by international schools</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>13. Canada - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Provincial Teaching Certificates:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Ontario College of Teachers (OCT):
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.oct.ca/public/professional-standards/find-a-teacher" target="_blank" rel="noopener noreferrer">Find a Teacher Registry</a></li>
                  <li>Verification: Free public search by name</li>
                  <li>Largest province, most common Canadian credential</li>
                </ul>
              </li>
              <li>British Columbia Teacher Regulation Branch:
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.bcteacherregulation.ca" target="_blank" rel="noopener noreferrer">bcteacherregulation.ca</a></li>
                  <li>Verification: Teacher registry search</li>
                </ul>
              </li>
              <li>Alberta Teachers' Association:
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.teachers.ab.ca" target="_blank" rel="noopener noreferrer">teachers.ab.ca</a></li>
                  <li>Verification: Member search available</li>
                </ul>
              </li>
              <li>Quebec - Permis d'enseigner:
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>French-language certification system</li>
                  <li>Less common for international hiring</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Cost:</strong> Free public verification</li>
          <li><strong>International value:</strong> MEDIUM - recognized by international schools, especially Commonwealth countries</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>14. Australia - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>State/Territory Teacher Registration:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>New South Wales - NESA (NSW Education Standards Authority):
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://educationstandards.nsw.edu.au/wps/portal/nesa/teacher-accreditation" target="_blank" rel="noopener noreferrer">NESA Teacher Accreditation</a></li>
                  <li>Verification: Teacher Accreditation search (restricted access)</li>
                </ul>
              </li>
              <li>Victoria - VIT (Victorian Institute of Teaching):
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.vit.vic.edu.au" target="_blank" rel="noopener noreferrer">vit.vic.edu.au</a></li>
                  <li>Verification: Teacher registration check</li>
                </ul>
              </li>
              <li>Queensland - QCT (Queensland College of Teachers):
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.qct.edu.au" target="_blank" rel="noopener noreferrer">qct.edu.au</a></li>
                  <li>Verification: Public register search</li>
                </ul>
              </li>
              <li>Western Australia - Teacher Registration Board:
                <ul style={{ marginLeft: '15px', fontSize: '0.95em' }}>
                  <li>URL: <a href="https://www.trb.wa.gov.au" target="_blank" rel="noopener noreferrer">trb.wa.gov.au</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Cost:</strong> Most states offer free public verification (some restricted)</li>
          <li><strong>International value:</strong> MEDIUM-HIGH - well-recognized in Asia-Pacific region</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>15. New Zealand - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Teaching Council of Aotearoa New Zealand:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>URL: <a href="https://teachingcouncil.nz" target="_blank" rel="noopener noreferrer">teachingcouncil.nz</a></li>
              <li>Teacher certification and practicing certificates</li>
              <li>Verification: <a href="https://teachingcouncil.nz/directory/" target="_blank" rel="noopener noreferrer">Teacher Directory Search</a></li>
              <li>Search by name, registration number, or email</li>
              <li>Cost: Free public verification</li>
              <li>International value: MEDIUM - recognized particularly in Asia-Pacific</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>16. Ireland - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Teaching Council (An Chomhairle Mhúinteoireachta):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>URL: <a href="https://www.teachingcouncil.ie" target="_blank" rel="noopener noreferrer">teachingcouncil.ie</a></li>
              <li>Statutory body regulating teaching profession in Ireland</li>
              <li>Verification: <a href="https://www.teachingcouncil.ie/en/publications/fitness-to-teach/register-of-teachers/" target="_blank" rel="noopener noreferrer">Register of Teachers</a></li>
              <li>Search by teacher registration number or name</li>
              <li>Cost: Free public verification</li>
              <li>International value: MEDIUM - recognized in EU and Commonwealth countries</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>17. South Africa - Teaching Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>SACE (South African Council for Educators):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>URL: <a href="https://www.sace.org.za" target="_blank" rel="noopener noreferrer">sace.org.za</a></li>
              <li>Professional council for all educators in South Africa</li>
              <li>Verification: Contact SACE directly (no public search available)</li>
              <li>Cost: Verification requires formal request</li>
              <li>International value: LOW-MEDIUM - less common in Asia, more common in Middle East/Africa</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>International School-Specific Credentials</h3>

      <InfoBox>
        <strong>18. IB, Cambridge & Other International Credentials</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>IB Educator Certificates (International Baccalaureate):</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Highly valued by international schools globally</li>
              <li>PYP (Primary Years), MYP (Middle Years), DP (Diploma Programme) certificates</li>
              <li>Verification: <a href="https://www.ibo.org" target="_blank" rel="noopener noreferrer">IB Educator Network</a> (public profile system)</li>
              <li>Cost: Free verification (schools can check IB educator database)</li>
              <li>International value: VERY HIGH - premium credential for international schools</li>
            </ul>
          </li>
          <li><strong>Cambridge International Examinations (CIE) Teaching Qualifications:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>Professional Development Qualifications (PDQs) for Cambridge schools</li>
              <li>Verification: Cambridge International portal</li>
              <li>Cost: Free verification</li>
              <li>International value: HIGH - British curriculum schools globally</li>
            </ul>
          </li>
          <li><strong>Subject-Specific International Certifications:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>CELTA/DELTA for English teaching (see #4, #5)</li>
              <li>TKT (Teaching Knowledge Test) - Cambridge English</li>
              <li>IELTS/TOEFL teaching certifications</li>
              <li>Montessori teaching credentials (AMI/AMS)</li>
              <li>International value: HIGH for ESL positions</li>
            </ul>
          </li>
        </ul>
      </InfoBox>

      <h3 style={{ marginTop: '30px' }}>Recommended Verification Workflow for Candidates</h3>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fff4', border: '2px solid #68d391', borderRadius: '4px' }}>
        <strong>Stage 1-2 (Basic Verification - Free/Low Cost)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Mandatory:</strong> Degree certificate upload (PDF) + TEFL certificate upload</li>
          <li><strong>Spot-check:</strong> 10-20% random verification via WES/university registrar for degrees</li>
          <li><strong>TEFL:</strong> Manual spot-check for suspicious certificates (VA email to provider)</li>
          <li><strong>References:</strong> Email verification for 2 professional references (VA handles)</li>
          <li><strong>Cost per candidate:</strong> ~$10 (VA time for manual checks)</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#ebf8ff', border: '2px solid #4299e1', borderRadius: '4px' }}>
        <strong>Stage 3 (Enhanced Verification for Premium Schools)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Premium School Feature:</strong> "Verified Teacher Badge" for candidates who pass enhanced verification</li>
          <li><strong>Services:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>WES credential evaluation (candidate pays $100-$200)</li>
              <li>Background check (candidate pays $50-$150 or school pays as premium feature)</li>
              <li>Employment verification for last 2 positions (Checkr/Truework API)</li>
            </ul>
          </li>
          <li><strong>Badge Display:</strong> "Verified Teacher" badge on profile = 3x higher apply rate (hypothesis)</li>
          <li><strong>Cost per candidate:</strong> $0-$50 (most costs passed to candidate/school)</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
        <strong>Stage 4 (Automated Verification at Scale)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>API Integrations:</strong>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em' }}>
              <li>WES API for bulk degree verification (enterprise account)</li>
              <li>Sterling/HireRight API for background checks</li>
              <li>Credly API for digital badge verification</li>
              <li>LinkedIn API for employment history cross-check</li>
            </ul>
          </li>
          <li><strong>Automated Flagging:</strong> ML model flags suspicious certificates (image analysis + pattern matching)</li>
          <li><strong>Cost per candidate:</strong> $5-$15 automated + $30-$50 for flagged candidates (human review)</li>
        </ul>
      </div>

      <h3 style={{ marginTop: '30px' }}>Cost-Benefit Analysis</h3>

      <table style={{ fontSize: '0.85em', width: '100%', marginTop: '15px' }}>
        <thead>
          <tr style={{ background: '#edf2f7' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Verification Level</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Services</th>
            <th style={{ padding: '10px' }}>Cost per Candidate</th>
            <th style={{ padding: '10px' }}>Value Proposition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px' }}>Basic (Stage 1-2)</td>
            <td style={{ padding: '8px' }}>Manual spot-checks (10-20%)</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$10</td>
            <td style={{ padding: '8px' }}>Baseline fraud prevention</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Enhanced (Stage 3)</td>
            <td style={{ padding: '8px' }}>WES + Background + Employment</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$50-$150<br/><span style={{ fontSize: '0.85em', color: '#718096' }}>(candidate/school pays)</span></td>
            <td style={{ padding: '8px' }}>"Verified Teacher" badge → 3x higher apply rate</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Automated (Stage 4)</td>
            <td style={{ padding: '8px' }}>API verification + ML flagging</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>$5-$15</td>
            <td style={{ padding: '8px' }}>Scale to 10K+ teachers, 95% automated</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: '0.9em', marginTop: '15px', color: '#2d3748', lineHeight: '1.8' }}>
        <strong>Key Insight:</strong> Candidate verification costs are mostly passed to teachers/schools (via "Verified Teacher" premium feature).
        Platform cost: $5-$15 per candidate in Stage 4 (automated), creates trust moat that competitors cannot easily replicate.
      </p>
    </Section>
  )
}
