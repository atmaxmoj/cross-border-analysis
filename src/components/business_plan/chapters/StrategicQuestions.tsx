
import Chapter from '../../layout/Chapter'
import Section from '../../layout/Section'

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

      <Section id="question-8" title="Community vs Volume: Which do we prioritize first?">
        <p>
          <strong>The Finding:</strong> The <code>CompetitorHexagonChart</code> reveals a critical trade-off. Dave's ESL
          Cafe has the highest job volume (85/100, 60% market share) but a dead community (15/100 - "ghost town" validated
          across 1,316 posts). HiredChina has active community engagement (55/100 - expat forums, WeChat groups, networking
          events) but moderate volume (70/100 - 1K-5K listings). No competitor excels at both.
        </p>
        <p>
          <strong>The Strategic Question:</strong> Which dimension do we prioritize during our launch phase: building an
          active, engaged community (slow but sticky) or maximizing job listing volume (fast growth but shallow engagement)?
          Can we achieve both simultaneously with limited resources, or must we make a sequential choice? Dave's ESL proves
          you can dominate with volume alone despite zero community, but our pain point analysis shows teachers desperately
          need community for school verification. What is our community-volume strategy for months 1-12?
        </p>
      </Section>

      <Section id="question-9" title="What role do recruitment agents play, and why do they exist on job boards?">
        <p>
          <strong>The Finding:</strong> Our web scraping of Dave's ESL Cafe reveals a significant pattern: many job postings
          are not from schools directly, but from recruitment agents acting as intermediaries. Traditional job board design
          assumes a two-sided marketplace (employers and candidates), but the ESL market appears to operate as a three-sided
          marketplace with agents as a critical third participant. The <code>CompetitiveLandscape</code> also documents
          established recruitment agencies like Teach Away (200+ employees), Hays/Michael Page (20-30% placement fees), and
          ISS/Search Associates (job fair model).
        </p>
        <p>
          <strong>The Strategic Question:</strong> Why do these agents exist in the first place? What value do they provide
          to schools that makes schools willing to pay them (often 20-30% of first-year salary) rather than hiring directly?
          What value do they provide to teachers that makes teachers accept intermediation rather than applying to schools directly?
          Do agents solve different problems for each side, or is there a common value proposition? If we design YouTeacher as
          a traditional two-sided marketplace (schools ↔ teachers), are we ignoring a fundamental market structure? Should we
          explicitly design for agents as a third side of the marketplace, and if so, what role should they play in our platform?
          Or does our verification capability eliminate the need for agents entirely?
        </p>
      </Section>

      <Section id="question-10" title="Asia expansion strategy: Deep in China or horizontal across 12 markets?">
        <p>
          <strong>The Finding:</strong> The <code>AsiaForeignWorkersHeatMap</code> and <code>MarketSize</code> analysis reveals
          12 Asia markets with 130K+ foreign teachers annually: China (70K teachers, 18% of 384K total foreign workers), Japan
          (20K - JET Programme + eikaiwa), South Korea (13K E-2 visa holders), Thailand (6K), Singapore (4.5K), Malaysia (4.5K),
          Taiwan (4K), Vietnam (3.3K), Indonesia (2K), Cambodia (1.5K), Hong Kong (800), Philippines (exports teachers). China
          represents 54% of the Asia teaching market but is undergoing post-2021 regulatory decline. Japan/Korea are stable but
          saturated with local platforms (GaijinPot, Saramin).
        </p>
        <p>
          <strong>The Strategic Question:</strong> Do we pursue a <strong>depth-first</strong> strategy (dominate China's 70K
          teacher market, 1,106 international schools, establish verification database as unassailable moat before expanding) or
          a <strong>breadth-first</strong> strategy (launch across multiple Asia markets simultaneously to capture first-mover
          advantage in verification across the region)? China offers the largest beachhead and our team's domain expertise (Pete's
          6 years teaching experience), but China-only focus risks being perceived as niche. Multi-country launch builds
          "Asia-wide" brand positioning but spreads resources thin and requires localization (languages, visa systems, school types).
          What is our 18-month geographic expansion roadmap?
        </p>
      </Section>

      <div className="section-divider"></div>
    </Chapter>
  )
}
