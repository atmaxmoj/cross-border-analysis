import Chapter from '../layout/Chapter'
import Section from '../layout/Section'
import InfoBox from '../ui/InfoBox'
import JobAggregator from '../sections/desiderata/JobAggregator'
import JobSearch from '../sections/desiderata/JobSearch'
import TransparentListings from '../sections/desiderata/TransparentListings'
import SchoolVerification from '../sections/desiderata/SchoolVerification'
import DirectApplication from '../sections/desiderata/DirectApplication'
import SchoolReviews from '../sections/desiderata/SchoolReviews'
import CredentialVerification from '../sections/desiderata/CredentialVerification'
import CommunityForum from '../sections/desiderata/CommunityForum'
import RealTimeChat from '../sections/desiderata/RealTimeChat'
import DataInsights from '../sections/desiderata/DataInsights'
import SchoolVerificationSystem from '../sections/desiderata/SchoolVerificationSystem'
import AdvancedSearch from '../sections/desiderata/AdvancedSearch'
import TransparentListingRequirements from '../sections/desiderata/TransparentListingRequirements'
import DirectApplicationTracking from '../sections/desiderata/DirectApplicationTracking'
import AIScamDetection from '../sections/desiderata/AIScamDetection'
import ContractReview from '../sections/desiderata/ContractReview'
import RegionalChampion from '../sections/desiderata/RegionalChampion'
import TeacherStories from '../sections/desiderata/TeacherStories'
import B2BRecruiterService from '../sections/desiderata/B2BRecruiterService'
import WeeklyTeacherMeetups from '../sections/desiderata/WeeklyTeacherMeetups'
import EscrowEORService from '../sections/desiderata/EscrowEORService'
import AdvancedBadgeSystem from '../sections/desiderata/AdvancedBadgeSystem'

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
          <strong>Kano Category: Basic/Must-Be Features</strong> - These are the absolute bare minimum to have a functioning
          job board. Critical insight: START with job aggregator (like Indeed) to solve the chicken-and-egg problem. Their absence
          means we don't have a product at all. Their presence alone does NOT differentiate us—every job board has these.
          This is the MVP foundation.
        </p>

        <JobAggregator />
        <JobSearch />
        <TransparentListings />
        <SchoolVerification />
        <DirectApplication />
      </Section>

      <Section id="performance-desiderata" title="B. Performance Desiderata (Differentiators)">
        <p>
          <strong>Kano Category: Performance/One-Dimensional Features</strong> - Satisfaction scales linearly with quality.
          These features differentiate us from competitors. The better we execute, the more teachers choose YouTeacher
          over alternatives.
        </p>

        <SchoolReviews />
        <CredentialVerification />
        <CommunityForum />
        <RealTimeChat />
        <DataInsights />
        <SchoolVerificationSystem />
        <AdvancedSearch />
        <TransparentListingRequirements />
        <DirectApplicationTracking />
      </Section>

      <Section id="excitement-desiderata" title="C. Excitement Desiderata (Delighters)">
        <p>
          <strong>Kano Category: Excitement/Delighter Features</strong> - These features are unexpected and create high
          satisfaction. Their absence doesn't hurt us, but their presence creates competitive moats and viral word-of-mouth.
          Delighters often become tomorrow's must-haves as competitors copy them.
        </p>

        <AIScamDetection />
        <ContractReview />
        <RegionalChampion />
        <TeacherStories />
        <B2BRecruiterService />
        <WeeklyTeacherMeetups />
        <EscrowEORService />
        <AdvancedBadgeSystem />
      </Section>

      <Section id="desiderata-summary" title="Summary: From Evidence to Features">
        <InfoBox>
          <strong>Key Takeaways:</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Every feature is evidence-backed:</strong> Not hunches, but conclusions from 6,195 teacher posts,
            strategic questions, and case studies of $1.8B-$15B companies.</li>
            <li><strong>Kano categorization guides prioritization:</strong> Must-Haves (A.1-A.5) must launch first.
            Performance features (B.1-B.9) differentiate us. Delighters (C.1-C.8) create moats.</li>
            <li><strong>Traceability ensures strategic alignment:</strong> Each feature maps to specific questions,
            pain points, and case study evidence—no feature is arbitrary.</li>
            <li><strong>MVP = Aggregator First (Solve Chicken-Egg):</strong> Launch with ONLY A.1-A.5. Critical: START with job aggregator (A.1) like Indeed did—scrape Dave's ESL, SeriousTeachers, etc. to have thousands of jobs from day 1. THEN add browse/search (A.2), contact (A.3), and eventually direct posting (A.4) and accounts (A.5). This solves the cold start problem. Add Performance features (B.1-B.9) AFTER validating aggregator drives traffic.</li>
            <li><strong>Performance features moved from Basic:</strong> School verification (B.6), advanced search (B.7), transparent listing requirements (B.8), and application tracking (B.9) are valuable but NOT minimum viable—they differentiate us AFTER we have traction.</li>
            <li><strong>Excitement features build moats:</strong> AI scam detection (C.1), contract review tool (C.2), weekly teacher meetups (C.6), escrow/EOR service (C.7), and advanced badge system (C.8) are defensible advantages competitors cannot easily copy. C.8's multi-dimensional school evaluation (government data scraping + AI analysis + proprietary scoring) creates the strongest moat - requires data infrastructure competitors cannot replicate without massive investment. These transform us from \"job board\" to \"full-service teacher employment & community platform.\"</li>
          </ul>
        </InfoBox>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
