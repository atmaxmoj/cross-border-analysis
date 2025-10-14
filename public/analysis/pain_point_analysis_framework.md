# Pain Point Analysis Framework - YouTeacher Job Board

## Goal
Discover pain points from raw scraped data and score by BUSINESS IMPACT from a job board perspective.

## Scoring Framework (Job Board Business Impact)

### 10/10 - PLATFORM KILLER
- Prevents users from trusting the platform at all
- "I'll never use a job board again because I got scammed"
- **Business impact:** Users won't sign up or immediately churn
- **Example:** Scam listings destroy trust in the entire marketplace

### 9/10 - TRANSACTION BLOCKER
- Users engage but transactions never complete
- "I found a job but couldn't seal the deal because [problem]"
- **Business impact:** High engagement but zero revenue/matches
- **Example:** Schools can't verify teachers → won't hire through platform

### 8/10 - MID-FUNNEL CHURN
- Users start process but abandon before matching
- "I gave up searching after 2 weeks because [problem]"
- **Business impact:** High acquisition cost, low conversion
- **Example:** Search UX so bad users abandon before applying

### 7/10 - POST-MATCH FAILURE
- Match happens but fails shortly after (damages reputation)
- "I got hired but quit after 1 month because [problem]"
- **Business impact:** Platform gets blamed, negative reviews, refund requests
- **Example:** Contract fraud that happens after job board facilitated match

### 6/10 - FRICTION THAT REDUCES VELOCITY
- Slows down matching but doesn't prevent it
- "This was annoying but I eventually found a job"
- **Business impact:** Longer time-to-match, lower throughput
- **Example:** Slow application process, communication delays

### 5/10 - TOLERABLE INCONVENIENCE
- Users complain but doesn't affect platform success metrics
- "This sucks but whatever"
- **Business impact:** Low/no impact on conversions or retention
- **Example:** Minor UI quirks, aesthetic complaints

## Critical Questions for Analysis

For each pain point, determine:

1. **WHERE does it impact the funnel?**
   - Pre-platform (stops sign-up)
   - During search/browse (causes abandonment)
   - During application/matching (prevents transaction)
   - Post-match (damages platform reputation)

2. **DOES IT STOP THE TRANSACTION?**
   - Yes → Score 9-10
   - Slows it down → Score 6-8
   - Just annoying → Score 5-6

3. **CAN YOUTEACHER SOLVE IT?**
   - If yes + high impact → PRIORITY
   - If no → OUT OF SCOPE (note but deprioritize)

4. **WHAT'S THE BUSINESS DAMAGE?**
   - Lost user forever = 10
   - User tries once more elsewhere = 9
   - User completes but unhappy = 7
   - User completes and doesn't care = 5

## Agent Analysis Instructions

### STEP 1: READ & EXTRACT
- Read all posts/threads assigned to you
- Look for problems teachers/schools actually complain about
- Focus on CONSEQUENCES not just complaints
  ✓ "I lost $5,000 and got deported" = HIGH IMPACT
  ✗ "The website is ugly" = LOW IMPACT (unless it causes abandonment)

### STEP 2: IDENTIFY PAIN POINTS
For each problem you find, ask:
- What specifically went wrong?
- What were the CONSEQUENCES? (lost money? lost time? legal trouble? safety risk?)
- Did this problem BLOCK the transaction or just annoy them?
- How many people reported similar issues?

### STEP 3: ANALYZE FROM JOB BOARD BUSINESS PERSPECTIVE

When you find a pain point, ask:

1. **Funnel Impact:** Where does this problem hit?
   □ Prevents sign-up (pre-platform)
   □ Causes search abandonment (on-platform)
   □ Blocks match/transaction (conversion)
   □ Creates post-match failure (retention/reputation)

2. **Transaction Impact:**
   □ Stops transaction entirely (9-10/10)
   □ User abandons platform mid-process (8/10)
   □ Slows down but completes (6-7/10)
   □ Annoying but no impact (5/10)

3. **Evidence of Business Damage:**
   - "I'll never use [platform] again" = Platform-level churn
   - "I gave up and went direct" = Disintermediation
   - "I found 20 jobs but all were scams" = Trust destruction
   - "The UX was bad but I got hired" = Low impact

4. **Can YouTeacher Solve This?**
   - If NO → Mention but note "OUT OF SCOPE"
   - If YES → This is a differentiation opportunity

### SCORING EXAMPLES:
- ✓ "Scam listings made me waste 3 months" = 10/10 (platform trust destroyed)
- ✓ "Visa complexity scared me away" = 8/10 (pre-match abandonment)
- ✓ "Got ghosted by 50 schools" = 7/10 (frustration but keeps trying)
- ✓ "Mobile site is ugly" = 5/10 (aesthetic issue, no abandonment proof)

## Output Format

```markdown
# Pain Point Discovery Report - [Source Name]

## Pain Points Found (Ranked by Impact Score):

### 1. [Pain Point Name]
- **Impact Score:** X/10
- **Funnel Stage:** [Pre-platform / Search / Matching / Post-match]
- **Transaction Impact:** [Stops / Slows / Annoying]
- **Why This Score:** [Explain based on business consequences, not frequency]
- **Evidence Count:** X people/posts
- **Worst Case:** [Most severe consequence found]
- **Typical Case:** [What usually happens]
- **Can YouTeacher Solve?** [Yes/No + brief explanation]
- **Key Quotes:**
  1. "[Quote showing consequence]"
  2. "[Quote showing consequence]"
  3. "[Quote showing consequence]"

### 2. [Next Pain Point...]
[Continue for all pain points found, ranked by impact]

## New/Unexpected Findings:
[Anything surprising or not covered in typical ESL discussions]

## Out of Scope Pain Points:
[Problems found but YouTeacher can't solve - note for awareness]
```

## Data Sources

### Reddit (10 sources):
1. r/TEFL (1,506 posts) - reddit_exploratory_evidence.json
2. r/China (900 posts) - reddit_exploratory_evidence.json
3. r/internationalteachers (577 posts) - reddit_exploratory_evidence.json
4. r/chinalife (472 posts) - reddit_exploratory_evidence.json
5. r/ChinaJobs (360 posts) - reddit_exploratory_evidence.json
6. r/TEFLteachers (303 posts) - reddit_exploratory_evidence.json
7. r/IWantOut (291 posts) - reddit_exploratory_evidence.json
8. r/expats (207 posts) - reddit_exploratory_evidence.json
9. r/ESL (33 posts) - reddit_exploratory_evidence.json
10. r/teachabroad (32 posts) - reddit_exploratory_evidence.json

### Forums (1 combined source):
11. TEFL.net + Chinese-Forums (198 posts) - tefl_net_content.json + chinese_forums_content.json

**Total: 4,929 pieces of content**
