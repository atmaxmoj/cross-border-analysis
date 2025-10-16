import Chapter from '../layout/Chapter'
import Section from '../layout/Section'
import InfoBox from '../ui/InfoBox'
import SchoolVerification from '../sections/desiderata/SchoolVerification'
import JobSearch from '../sections/desiderata/JobSearch'
import TransparentListings from '../sections/desiderata/TransparentListings'
import DirectApplication from '../sections/desiderata/DirectApplication'
import SchoolReviews from '../sections/desiderata/SchoolReviews'
import CredentialVerification from '../sections/desiderata/CredentialVerification'
import CommunityForum from '../sections/desiderata/CommunityForum'
import RealTimeChat from '../sections/desiderata/RealTimeChat'
import DataInsights from '../sections/desiderata/DataInsights'
import AIScamDetection from '../sections/desiderata/AIScamDetection'
import ContractReview from '../sections/desiderata/ContractReview'
import RegionalChampion from '../sections/desiderata/RegionalChampion'
import TeacherStories from '../sections/desiderata/TeacherStories'
import B2BRecruiterService from '../sections/desiderata/B2BRecruiterService'

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

        <SchoolVerification />
        <JobSearch />
        <TransparentListings />
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

      <div className="section-divider"></div>
    </Chapter>
  )
}
