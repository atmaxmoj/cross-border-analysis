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
import TwoEntityStructure from '../sections/desiderata/TwoEntityStructure'
import D1SuperApp from '../sections/desiderata/D1SuperApp'
import D2SchoolSaaS from '../sections/desiderata/D2SchoolSaaS'
import D3PredictiveMatching from '../sections/desiderata/D3PredictiveMatching'
import D4TeacherCollectives from '../sections/desiderata/D4TeacherCollectives'
import D5GeographicExpansion from '../sections/desiderata/D5GeographicExpansion'

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
        <TwoEntityStructure />
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

      <Section id="disruptive-desiderata" title="D. Disruptive/Transformative Desiderata (Industry Transformation)">
        <p>
          <strong>Beyond Kano: D-Tier Features</strong> - These features don't just create competitive moats, they fundamentally
          TRANSFORM the industry structure. D-tier changes market category definition, shifts power dynamics, or creates new business
          models. Think WeChat (messaging → super-app), Workday (on-prem HR → cloud SaaS), LinkedIn (recruitment → professional network).
        </p>
        <p>
          <strong>Characteristics of D-Tier:</strong> Winner-take-all network effects, 10x+ TAM expansion, impossible to achieve without
          platform/technology enabling coordination at scale. These are 5-10 year visions, not Year 1-3 features.
        </p>

        <D1SuperApp />
        <D2SchoolSaaS />
        <D3PredictiveMatching />
        <D4TeacherCollectives />
        <D5GeographicExpansion />
      </Section>

      <Section id="desiderata-summary" title="Summary: From Evidence to Features">
        <InfoBox>
          <strong>Key Takeaways:</strong>
          <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
            <li><strong>Every feature is evidence-backed:</strong> Not hunches, but conclusions from 6,195 teacher posts,
            strategic questions, and case studies of $1.8B-$15B companies.</li>
            <li><strong>Kano categorization guides prioritization:</strong> Must-Haves (A.1-A.5) must launch first.
            Performance features (B.1-B.10) differentiate us. Delighters (C.1-C.8) create moats. Disruptive features (D.1-D.5) transform the industry (5-10 year vision).</li>
            <li><strong>Traceability ensures strategic alignment:</strong> Each feature maps to specific questions,
            pain points, and case study evidence—no feature is arbitrary.</li>
            <li><strong>MVP = Aggregator First (Solve Chicken-Egg):</strong> Launch with ONLY A.1-A.5. Critical: START with job aggregator (A.1) like Indeed did—scrape Dave's ESL, SeriousTeachers, etc. to have thousands of jobs from day 1. THEN add browse/search (A.2), contact (A.3), and eventually direct posting (A.4) and accounts (A.5). This solves the cold start problem. Add Performance features (B.1-B.10) AFTER validating aggregator drives traffic.</li>
            <li><strong>Performance features differentiate us:</strong> School verification (B.6), advanced search (B.7), transparent listing requirements (B.8), application tracking (B.9), and two-entity structure (B.10) are valuable but NOT minimum viable—they differentiate us AFTER we have traction. B.10 (late B-tier, Stage 3) enables monetization in China while protecting platform features from regulatory constraints.</li>
            <li><strong>Excitement features build moats:</strong> AI scam detection (C.1), contract review tool (C.2), weekly teacher meetups (C.6), escrow/EOR service (C.7), and advanced badge system (C.8) are defensible advantages competitors cannot easily copy. C.8's multi-dimensional school evaluation (government data scraping + AI analysis + proprietary scoring) creates the strongest moat - requires data infrastructure competitors cannot replicate without massive investment. These transform us from \"job board\" to \"full-service teacher employment & community platform.\"</li>
            <li><strong>Disruptive features (D-tier) = industry transformation:</strong> Super-app (D.1), School SaaS (D.2), Predictive Matching (D.3), Teacher Collectives (D.4), and Geographic Expansion (D.5) represent 5-10 year vision. Each fundamentally changes market structure: D.1 = WeChat-level ecosystem lock-in, D.2 = Workday-level recurring revenue, D.3 = Bloomberg Terminal-level data moat, D.4 = labor union-level power shift, D.5 = LinkedIn-level category expansion. These are NOT Year 1-3 priorities, but define long-term strategic direction and ultimate market potential ($100M-$1B+ ARR).</li>
          </ul>
        </InfoBox>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
