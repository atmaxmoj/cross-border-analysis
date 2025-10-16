
import Chapter from '../layout/Chapter'
import Section from '../layout/Section'

export default function StrategicQuestions() {
  return (
    <Chapter id="strategic-questions" title="4. Strategic Questions">
      <p>
        A rigorous analysis of the ESL recruitment market reveals seven fundamental questions. Our ability to answer these
        questions will determine our success. The solutions we develop in the next chapter will be our proposed answers.
      </p>

      <Section id="question-1" title="How do we compete when the incumbent's advantage is not technology?">
        <p>
          <strong>The Finding:</strong> The <code>CompetitiveLandscape</code> analysis shows the market leader, Dave's ESL
          Cafe, is technologically inferior but dominates through a 30-year-old brand and deep-seated user habits.
        </p>
        <p>
          <strong>The Strategic Question:</strong> Since a <strong>technologically superior</strong> product is not guaranteed to win, what is our strategy to
          break the market's ingrained habits? How do we capture the trust of users who are loyal to an inferior but
          familiar brand?
        </p>
      </Section>

      <Section id="question-2" title="How do we solve the 'chicken and egg' problem?">
        <p>
          <strong>The Finding:</strong> The analysis of the incumbent's network effects shows the power of a two-sided
          marketplace lock-in. A new platform starts with neither side.
        </p>
        <p>
          <strong>The Strategic Question:</strong> How do we solve the fundamental "chicken and egg" problem for a two-sided
          product with limited resources? Which side of the marketplace—schools (supply) or teachers (demand)—do we
          focus on acquiring first, and what specific, non-capital-intensive strategies can we use to build initial
          momentum and escape the "empty marketplace" failure mode?
        </p>
      </Section>

      <Section id="question-3" title="How do we monetize a value proposition for a non-paying audience?">
        <p>
          <strong>The Finding:</strong> The <code>PainPointsAnalysis</code> shows our core value—verification and safety—is
          for teachers. However, teachers are accustomed to free tools and are not our paying customers.
        </p>
        <p>
          <strong>The Strategic Question:</strong> What business model can we design that successfully convinces schools to
          pay a premium for a benefit that is primarily experienced by our non-paying users?
        </p>
      </Section>

      <Section id="question-4" title="What is our true ambition: a profitable niche business or a scalable global platform?">
        <p>
          <strong>The Finding:</strong> The <code>MarketSize</code> analysis shows the China ESL market is a focused niche,
          perfect for a small team to build a profitable business. However, the data also shows the broader expat market
          is orders of magnitude larger.
        </p>
        <p>
          <strong>The Strategic Question:</strong> We must make an early decision on our ultimate ambition. Are we building a
          profitable "lifestyle" business, or a large, scalable venture? This choice has immediate consequences for our
          branding, technical architecture, and long-term strategy.
        </p>
      </Section>

      <Section id="question-5" title="How do we signal trust before we have a reputation?">
        <p>
          <strong>The Finding:</strong> The <code>Barriers to Entry</code> analysis highlights a "High Trust Threshold for
          New Platforms" due to the prevalence of scams.
        </p>
        <p>
          <strong>The Strategic Question:</strong> As a new platform, we start with zero trust. What tangible signals of
          trustworthiness and concrete launch strategies can we implement to overcome initial user skepticism and prove
          our value before we have the benefit of a long-term reputation?
        </p>
      </Section>

      <Section id="question-6" title="What is our platform's stance on discrimination in the market?">
        <p>
          <strong>The Finding:</strong> The <code>PainPointsAnalysis</code> identifies "Racial/Appearance Discrimination" as a
          top-tier, 10/10 severity problem in the market.
        </p>
        <p>
          <strong>The Strategic Question:</strong> We will inevitably encounter discriminatory job postings. What is our
          official policy? How will we balance the ethical imperative to create a fair marketplace against the business
          reality of how many schools currently operate? This is a fundamental decision about our brand's identity and
          values.
        </p>
      </Section>

      <Section id="question-7" title="How do we build a durable, non-technical moat?">
        <p>
          <strong>The Finding:</strong> Our initial market entry strategy relies on a significant technological advantage
          in data aggregation and AI-powered verification. However, in an era of rapid AI advancement, any purely
          technical moat is at risk of being replicated.
        </p>
        <p>
          <strong>The Strategic Question:</strong> Assuming we achieve market leadership through our technology, what is our
          long-term strategy for building a <em>durable, non-technical</em> moat? What second-layer advantages—such as
          brand, network effects, exclusive data, or community—can we build on top of our initial market position to
          ensure we are not easily displaced by the next wave of technology?
        </p>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
