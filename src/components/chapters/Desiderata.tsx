import Chapter from '../layout/Chapter'
import Section from '../layout/Section'
import InfoBox from '../ui/InfoBox'

export default function Desiderata() {
  return (
    <Chapter id="desiderata" title="6. Desiderata: Hunch-Free Product Features">
      <p>
        Based on our market analysis, strategic questions, and case study evidence, we derive the following product
        features. Each feature is not a "hunch" but a logical conclusion from verified pain points, proven case studies,
        and strategic imperatives. This chapter applies the Kano Model to categorize features into Must-Haves (basic
        expectations), Performance Features (differentiation), and Delighters (competitive moats).
      </p>

      <Section id="basic-desiderata" title="A. Basic Desiderata (Must-Haves)">
        <p>
          <strong>Kano Category: Basic/Must-Be Features</strong> - These features are table stakes. Their absence causes
          immediate dissatisfaction, but their presence alone does not differentiate us. However, they must be executed
          flawlessly to compete.
        </p>

        <div style={{ marginTop: '30px' }}>
          <h4>A.1 School Verification System</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
            <strong>Solves Pain Point:</strong> From 6,195 teacher posts, top concern is "fake schools" and "contract fraud."
            Teachers report losing money to scam recruiters, arriving to find nonexistent jobs, and having contracts
            changed after arrival.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Glassdoor:</strong> Company reviews and ratings created trust through transparency, enabling
              $8.1B valuation. Verification prevents fake employers from posting jobs.</li>
              <li><strong>Amazon Trust Flywheel:</strong> Seller verification + buyer reviews created self-reinforcing
              trust cycle. Schools must be verified before posting jobs.</li>
            </ul>
            <strong>Implementation:</strong> Multi-step verification process:
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Business license verification (China: 营业执照, other countries: equivalent)</li>
              <li>Physical address verification</li>
              <li>School accreditation checks (where applicable)</li>
              <li>Verification badge displayed prominently on all job listings</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>A.2 Job Search & Filtering</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #7 (SEO vs community-first growth)<br/>
            <strong>Solves Pain Point:</strong> Teachers report Dave's ESL has poor search functionality, no filtering
            by location/salary/visa support. "I have to scroll through hundreds of irrelevant jobs."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Indeed Aggregation Model:</strong> Won by making job discovery easy—search, filter, save jobs.
              Basic functionality but executed better than competitors.</li>
              <li><strong>Boss Zhipin:</strong> AI-powered recommendation algorithm made job discovery effortless,
              contributing to 28 min/day engagement (vs competitors' 18 min/day).</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Advanced filters: Location, salary range, school type (training center vs international school),
              visa sponsorship, contract length, housing provided</li>
              <li>Save searches, receive alerts for new matching jobs</li>
              <li>Mobile-first design (majority of teachers search on phones)</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>A.3 Transparent Job Listings</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
            <strong>Solves Pain Point:</strong> Teachers complain about "bait and switch"—salaries advertised online
            differ from actual contracts. "Listing said 20K RMB, contract offered 12K."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Glassdoor:</strong> Salary transparency (crowdsourced salary data) built trust and traffic.
              Users valued knowing real compensation before applying.</li>
              <li><strong>Stack Overflow Jobs:</strong> Transparent salary ranges in job listings reduced application
              friction and increased match quality.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Require schools to post: Base salary, housing allowance, flight reimbursement, contract bonuses,
              working hours, class sizes</li>
              <li>Display salary in multiple currencies (RMB, USD, EUR) for international teachers</li>
              <li>Flag listings with incomplete information (penalize in search ranking)</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>A.4 Direct Application System</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #9 (Role of recruitment agents)<br/>
            <strong>Solves Pain Point:</strong> Teachers report agent fraud: "Agent disappeared after I paid placement
            fee." "Agent took my documents and I never heard back." Teachers want to apply directly to schools.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Boss Zhipin:</strong> "Talk to the boss directly" eliminated HR/agent intermediaries for
              mid-level hiring. Became China's #1 platform by MAU with direct chat model.</li>
              <li><strong>Redfin Lesson:</strong> While Redfin failed to eliminate agents in real estate (high-stakes,
              unique transactions), ESL teaching jobs are more standardized—teachers WANT to bypass agents due to fraud.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>One-click apply with saved resume/credentials</li>
              <li>Track application status (submitted, reviewed, interview scheduled, offer)</li>
              <li>In-platform messaging between teachers and schools (no need to share personal contact info immediately)</li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="performance-desiderata" title="B. Performance Desiderata (Differentiators)">
        <p>
          <strong>Kano Category: Performance/One-Dimensional Features</strong> - Satisfaction scales linearly with quality.
          These features differentiate us from competitors. The better we execute, the more teachers choose YouTeacher
          over alternatives.
        </p>

        <div style={{ marginTop: '30px' }}>
          <h4>B.1 School Reviews & Ratings System</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #8 (Community quality vs volume)<br/>
            <strong>Solves Pain Point:</strong> Teachers desperately seek information: "What's it like to work at [School X]?"
            "Anyone taught at this school before?" Dave's ESL forums are "ghost towns" with no recent posts.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Glassdoor:</strong> Company reviews created $8.1B business. Teachers need the same for schools.
              Reviews provide trust and information that job listings cannot.</li>
              <li><strong>Amazon Trust Flywheel:</strong> Buyer reviews increased trust, increased sales, increased
              selection, created virtuous cycle. School reviews can do the same for teacher confidence.</li>
              <li><strong>Stack Overflow:</strong> Community-driven content quality (voting, moderation) beats paywalls
              and spam. But balance needed—over-moderation kills engagement (SO's 2014+ decline).</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Only verified teachers (confirmed employment via contract upload or admin verification) can review schools</li>
              <li>Structured review format: Salary accuracy, contract honoring, management quality, teaching conditions,
              work-life balance (5-star ratings + written review)</li>
              <li>Community moderation: Flag inappropriate reviews, upvote/downvote for helpfulness</li>
              <li>Schools can respond to reviews (like Glassdoor), but cannot remove negative reviews</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>B.2 Credential Verification for Teachers</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
            <strong>Solves Pain Point:</strong> Schools complain about fake credentials. Teachers complain about tedious
            re-submission of documents to every school. "I've uploaded my degree 20 times to different platforms."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Glassdoor:</strong> Verified employees (company email verification) could post reviews,
              building trust in content authenticity.</li>
              <li><strong>Expert Verification (concept from research):</strong> Platforms that verify professionals
              (e.g., LinkedIn verification, Upwork skills tests) reduce fraud and increase match quality.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Upload once: Degree, TEFL/TESOL certificate, passport, background check, teaching license (if applicable)</li>
              <li>Admin review + verification badge on teacher profile</li>
              <li>Schools can see verified credentials without teachers re-uploading for every application</li>
              <li>Optional: Teachers can choose which credentials to show publicly vs only to schools they apply to (privacy control)</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>B.3 Community Forum & Q&amp;A</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #8 (Community quality vs volume)<br/>
            <strong>Solves Pain Point:</strong> Teachers have questions beyond job search: visa processes, cultural adaptation,
            city recommendations, contract negotiation tips. Dave's ESL forums are outdated and inactive.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Stack Overflow:</strong> Free Q&amp;A content attracted 28.7M users, monetized via job listings.
              Teachers need Q&amp;A for ESL-specific questions (visa, teaching tips, city guides).</li>
              <li><strong>Stack Overflow Warning:</strong> Balance community quality with accessibility. Over-moderation
              (2014+ decline) killed engagement. New users must feel welcome.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Reddit-style forum: Upvote/downvote, threaded comments, topic tags (Visa, Teaching, City Life, etc.)</li>
              <li>Reputation system: Earn points for helpful answers, unlock moderation privileges</li>
              <li>Welcoming to newcomers: No harsh "duplicate question" closures like Stack Overflow (avoid SO's mistake)</li>
              <li>SEO-optimized: Questions and answers indexed by Google, driving organic traffic</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>B.4 Real-Time Chat Between Teachers &amp; Schools</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #1 (Beating incumbents), Question #9 (Agent disintermediation)<br/>
            <strong>Solves Pain Point:</strong> Teachers report slow response times on Dave's ESL: "I emailed a school
            2 weeks ago, no reply." Teachers want instant communication to gauge school responsiveness and seriousness.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Boss Zhipin:</strong> Direct instant messaging between job seekers and hiring managers drove
              50%+ higher engagement (28 min/day vs 18 min/day). Real-time chat eliminates email lag and builds rapport.</li>
              <li><strong>Marketplace Cold Start:</strong> Direct communication reduces friction and speeds up matching,
              helping overcome chicken-and-egg problem.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>In-platform messaging (like Boss Zhipin): Teachers and schools can chat in real-time after teacher applies or school shows interest</li>
              <li>Mobile push notifications for new messages</li>
              <li>Schools can initiate chat if they find a teacher profile interesting (proactive recruiting)</li>
              <li>Message templates for common questions (salary, visa, housing) to speed up conversations</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>B.5 Data-Driven School Insights</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #5 (Data flywheel acceleration)<br/>
            <strong>Solves Pain Point:</strong> Teachers want objective data: "What's the average salary for international
            schools in Shanghai?" "How many teachers at this school are on their second contract?" No platform provides this.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Zillow Data-First:</strong> Zestimate (home value algorithm) attracted 36M MAU. Data created
              unique value that traditional platforms couldn't replicate. Schools need equivalent transparency.</li>
              <li><strong>Glassdoor:</strong> Salary data and CEO approval ratings provided unique insights, driving traffic
              and building moat.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>School profile pages show: Average salary (aggregated from reviews), contract renewal rate (% of teachers
              who renew), average review rating, response time to applications, number of open positions (trend)</li>
              <li>Market insights: Salary heatmaps by city and school type, visa processing time averages, hiring season trends</li>
              <li>Data flywheel: More teachers = more reviews = better data = more teachers attracted to platform</li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="excitement-desiderata" title="C. Excitement Desiderata (Delighters)">
        <p>
          <strong>Kano Category: Excitement/Delighter Features</strong> - These features are unexpected and create high
          satisfaction. Their absence doesn't hurt us, but their presence creates competitive moats and viral word-of-mouth.
          Delighters often become tomorrow's must-haves as competitors copy them.
        </p>

        <div style={{ marginTop: '30px' }}>
          <h4>C.1 AI-Powered Scam Detection</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
            <strong>Solves Pain Point:</strong> Even with verification, some scams slip through. Teachers report: "Job seemed
            legit until I arrived and found no school." "Contract had hidden clauses in Chinese I didn't understand."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Amazon Trust Flywheel:</strong> Fraud detection algorithms (seller verification, review
              authenticity checks) maintained trust at scale. Schools need similar protection.</li>
              <li><strong>Platform Discrimination:</strong> Proactive moderation prevents low-quality actors from degrading
              platform trust.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>ML model trained on scam patterns: Unrealistic salaries, vague job descriptions, pressure tactics
              ("apply now or lose the job"), schools with zero reviews and multiple job postings</li>
              <li>Flag suspicious listings for manual review before going live</li>
              <li>Teacher-side warnings: "This job listing has characteristics similar to reported scams. Proceed with caution."</li>
              <li>Continuous learning: As teachers report scams, model improves</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>C.2 Contract Review &amp; Comparison Tool</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #6 (Platform discrimination and scam prevention)<br/>
            <strong>Solves Pain Point:</strong> Teachers report: "I didn't understand the contract, turns out I couldn't
            leave for 2 years." "My contract had a clause where they could dock my pay for any reason."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Glassdoor:</strong> Transparency in contracts (via reviews mentioning contract terms) helped
              teachers make informed decisions.</li>
              <li><strong>Expert Verification:</strong> Providing tools that help users evaluate offers builds trust and
              increases platform stickiness.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Contract upload &amp; parsing: OCR + NLP extracts key terms (salary, working hours, termination clauses,
              penalties, bonuses)</li>
              <li>Red flag detection: Highlight concerning clauses (e.g., "employer can terminate without notice," "teacher
              must pay for flight if leaving early")</li>
              <li>Comparison tool: Upload multiple contract offers, see side-by-side comparison of terms</li>
              <li>Community wisdom: "85% of teachers found this clause problematic" (crowdsourced contract analysis)</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>C.3 Regional Champion Program</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #10 (Asia expansion strategy - depth vs breadth)<br/>
            <strong>Solves Pain Point:</strong> Each Asian country has unique regulations (visa, work permits, tax).
            Teachers need local expertise: "How do I get a work visa in Thailand?" "What's the tax situation for
            foreigners in Vietnam?"<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Seek Regional Champion:</strong> Dominated Australia/NZ first, then expanded to Asia with
              local partnerships. Depth-first strategy (master one region) before breadth.</li>
              <li><strong>Boss Zhipin:</strong> China-only focus until complete market dominance (28.7M MAU). LinkedIn
              China failed due to lack of localization.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Start with China (54% of Asia's ESL jobs): Build comprehensive guides for visa, work permits, taxes,
              city-specific info</li>
              <li>Recruit "Regional Champions": Experienced teachers in each city (Beijing, Shanghai, Guangzhou, Chengdu,
              etc.) who answer questions, write guides, moderate forums</li>
              <li>Compensate champions: Free premium features, revenue share from teacher referrals, or small stipend</li>
              <li>Expand to other markets (Vietnam, Thailand, Korea, Japan) only after China dominance established</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>C.4 Teacher Success Stories &amp; Cohort Building</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #2 (Chicken-and-egg cold start)<br/>
            <strong>Solves Pain Point:</strong> Teaching abroad is isolating. Teachers want community: "I wish I knew
            other teachers in my city." "I arrived in China knowing no one."<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Stack Overflow:</strong> Community identity (reputation, badges, belonging) drove engagement
              beyond job search. Teachers need similar sense of belonging.</li>
              <li><strong>Marketplace Cold Start:</strong> Build community BEFORE building marketplace. Community attracts
              users, marketplace monetizes them.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Featured teacher stories: Interviews with successful teachers (how they found their job, challenges
              overcome, city recommendations)</li>
              <li>Cohort building: "Teachers arriving in Beijing in September 2026"—group chat, meetup coordination</li>
              <li>City-specific groups: Beijing ESL Teachers, Shanghai Teachers, etc. (like Facebook Groups but integrated
              into platform)</li>
              <li>Gamification: Badges for milestones (first job applied, first review written, 100 forum posts, 1-year
              teaching anniversary)</li>
            </ul>
          </InfoBox>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>C.5 B2B Data Service for Legitimate Recruiters</h4>
          <InfoBox>
            <strong>Addresses:</strong> Question #9 (Three-sided marketplace with agents)<br/>
            <strong>Solves Pain Point:</strong> Not all recruiters are scammers—some provide legitimate value (visa
            expertise, contract negotiation, cultural mediation). But teachers can't distinguish good from bad.<br/>
            <strong>Evidence:</strong>
            <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
              <li><strong>Liepin Headhunter Model:</strong> Three-sided marketplace (teachers + schools + recruiters)
              generated 96.5% revenue from business customers. Recruiters paid for access to verified candidate database.</li>
              <li><strong>Zillow:</strong> Worked WITH agents (not against them) via Premier Agent program. Agents paid
              for leads, Zillow monetized without alienating intermediaries.</li>
              <li><strong>Redfin:</strong> Failed by trying to eliminate agents. Hybrid approach (work with legitimate
              agents, eliminate bad ones) may be optimal.</li>
            </ul>
            <strong>Implementation:</strong>
            <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
              <li>Verified recruiter program: Recruiters must pass background checks, provide references, maintain high
              ratings from teachers</li>
              <li>Recruiters pay subscription fee for access to verified teacher profiles (like Liepin model)</li>
              <li>Teachers choose visibility: "Visible to schools only" or "Visible to schools + verified recruiters"</li>
              <li>Transparency: Teachers see recruiter ratings and reviews before engaging</li>
              <li>Revenue stream: Subscription fees from recruiters (answer Question #3: Monetization without charging teachers)</li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="desiderata-summary" title="Summary: From Evidence to Features">
        <InfoBox>
          <strong>Key Takeaways:</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Every feature is evidence-backed:</strong> Not hunches, but conclusions from 6,195 teacher posts,
            strategic questions, and case studies of $1.8B-$15B companies.</li>
            <li><strong>Kano categorization guides prioritization:</strong> Must-Haves (A.1-A.4) must launch first.
            Performance features (B.1-B.5) differentiate us. Delighters (C.1-C.5) create moats.</li>
            <li><strong>Traceability ensures strategic alignment:</strong> Each feature maps to specific questions,
            pain points, and case study evidence—no feature is arbitrary.</li>
            <li><strong>MVP = Basic + Select Performance Features:</strong> Launch with A.1-A.4 (verification, search,
            transparency, direct apply) + B.1 (reviews) + B.3 (community forum). Add others post-launch based on data.</li>
            <li><strong>Excitement features build moats:</strong> AI scam detection (C.1), contract review tool (C.2),
            and B2B recruiter service (C.5) are defensible advantages competitors cannot easily copy.</li>
          </ul>
        </InfoBox>
      </Section>
    </Chapter>
  )
}
