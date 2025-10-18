'use client'

import { useState } from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts'

// Shared radar data structure - all competitors share the same dimensions
const radarData = [
  { dimension: 'Verification', "Dave's ESL Cafe": 10, LinkedIn: 40, SeriousTeachers: 30, "Teach Away": 70, HiredChina: 35, "ISS/Search": 80, "Hays/M.Page": 75 },
  { dimension: 'Community', "Dave's ESL Cafe": 15, LinkedIn: 60, SeriousTeachers: 40, "Teach Away": 50, HiredChina: 55, "ISS/Search": 65, "Hays/M.Page": 45 },
  { dimension: 'Jobs Listed', "Dave's ESL Cafe": 85, LinkedIn: 95, SeriousTeachers: 35, "Teach Away": 55, HiredChina: 70, "ISS/Search": 60, "Hays/M.Page": 50 },
  { dimension: 'Candidate Pool', "Dave's ESL Cafe": 90, LinkedIn: 100, SeriousTeachers: 45, "Teach Away": 50, HiredChina: 60, "ISS/Search": 55, "Hays/M.Page": 70 },
  { dimension: 'Technology', "Dave's ESL Cafe": 15, LinkedIn: 90, SeriousTeachers: 70, "Teach Away": 65, HiredChina: 60, "ISS/Search": 55, "Hays/M.Page": 70 },
  { dimension: 'Company Size', "Dave's ESL Cafe": 30, LinkedIn: 100, SeriousTeachers: 20, "Teach Away": 50, HiredChina: 25, "ISS/Search": 60, "Hays/M.Page": 95 },
]

// Competitor metadata (colors and evidence)
const competitors = [
  {
    name: "Dave's ESL Cafe",
    dataKey: "Dave's ESL Cafe",
    color: '#4299e1',
    evidence: {
      verification: "Zero school verification, '90% fake listings' claims (r/ChinaJobs)",
      community: "Ghost town effect - urgent questions get zero replies (validated 1,316 posts)",
      jobsListed: "47 China jobs scraped (Oct 2025), highest volume among competitors",
      candidatePool: "60% market share (mention frequency), dominant SEO (ranks #1 for 'ESL jobs China')",
      technology: "1995-era platform, desktop-only, no modern filters, forum-based",
      companySize: "Private, small team, 30 years legacy brand (founded 1995)"
    }
  },
  {
    name: "LinkedIn",
    dataKey: "LinkedIn",
    color: '#0077b5',
    evidence: {
      verification: "Endorsements/recommendations, but no school-specific verification for ESL market",
      community: "Active professional networking, but not ESL teaching-focused",
      jobsListed: "Massive volume (1B+ users, 67M+ companies), not teaching-specific",
      candidatePool: "1B+ users globally, 250M+ APAC, 62M+ China",
      technology: "Advanced filtering, InMail, company pages, mobile apps",
      companySize: "$15.7B revenue (2023), 21K employees, Microsoft subsidiary"
    }
  },
  {
    name: "SeriousTeachers",
    dataKey: "SeriousTeachers",
    color: '#ed8936',
    evidence: {
      verification: "Some job filtering features, but no systematic school verification",
      community: "Smaller community than Dave's ESL (15% market share mention frequency)",
      jobsListed: "10 jobs scraped (Oct 2025), ~4-5x less volume than Dave's ESL",
      candidatePool: "15% market share (2nd most mentioned platform in our UGC analysis)",
      technology: "Modern interface, job filtering features (better than Dave's ESL)",
      companySize: "Private company, small team, no public revenue data"
    }
  },
  {
    name: "Teach Away",
    dataKey: "Teach Away",
    color: '#9f7aea',
    evidence: {
      verification: "Full-service recruiter vets schools (placement model), but limited to their network",
      community: "Recruiter-led support, not community-driven",
      jobsListed: "Curated listings (recruiter model), not high-volume marketplace",
      candidatePool: "8% market share (4th most mentioned), LinkedIn shows 50+ countries",
      technology: "Modern platform, recruiter tools, founded 2003",
      companySize: "LinkedIn: 200+ employees, recruits for 50+ countries, established brand"
    }
  },
  {
    name: "HiredChina",
    dataKey: "HiredChina",
    color: '#38b2ac',
    evidence: {
      verification: "Work permit guidance (Category A/B/C explained), but no school reputation verification",
      community: "Expat forums, networking events, WeChat groups (active community building)",
      jobsListed: "Largest cross-border job board, 1K-5K job listings (all sectors, not just teaching)",
      candidatePool: "10K-50K monthly job seekers (estimated), China-focused expat platform",
      technology: "Bilingual platform, comprehensive guides, modern interface",
      companySize: "Small team, bootstrapped/angel-funded, $1M-5M revenue (estimated)"
    }
  },
  {
    name: "ISS/Search",
    dataKey: "ISS/Search",
    color: '#805ad5',
    evidence: {
      verification: "Teacher credential verification (validates licenses, degrees), ISS-managed schools have standards",
      community: "Job fair networking, professional development, career coaching",
      jobsListed: "Job fair model (200-400+ schools attend), not real-time marketplace",
      candidatePool: "ISS: 3K-5K placements/year, Search: 10K members, 4K-6K placements/year",
      technology: "Job fair + online platforms, virtual recruitment (TIE pioneered), traditional model",
      companySize: "ISS: 100-150 employees, nonprofit $20M-40M; Search: 50-80 employees, $15M-30M"
    }
  },
  {
    name: "Hays/M.Page",
    dataKey: "Hays/M.Page",
    color: '#718096',
    evidence: {
      verification: "Candidate vetting (interviews, reference checks, skills assessments), employer consultation",
      community: "White-glove service (one-on-one consultants), not community platform",
      jobsListed: "Executive search model (not job board), curated high-end placements",
      candidatePool: "Hays: 12.5K employees, 10K+ Asia placements/year; Michael Page: 7K employees, 8K-12K Asia placements",
      technology: "Professional recruitment platforms, advanced candidate databases, market intelligence",
      companySize: "Hays: £1.3B revenue, 12.5K employees (LSE: HAS); Michael Page: £1.1B revenue, 7K employees (LSE: PAGE)"
    }
  },
]

export default function CompetitorHexagonChart() {
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>(
    competitors.map(c => c.name) // All selected by default
  )

  const toggleCompetitor = (name: string) => {
    setSelectedCompetitors(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }

  const displayedCompetitors = competitors.filter(c => selectedCompetitors.includes(c.name))

  return (
    <div style={{ width: '100%', background: '#ffffff', padding: '20px', borderRadius: '12px', marginTop: '30px', border: '2px solid #3b82f6' }}>
      <h3 style={{ marginTop: 0, marginBottom: '10px', color: '#2d3748', fontSize: '1.2em', textAlign: 'center' }}>
        🎮 Competitive Hexagon Analysis (RPG-Style Character Stats)
      </h3>
      <p style={{ fontSize: '0.85em', color: '#718096', textAlign: 'center', marginBottom: '20px' }}>
        7 existing competitors compared across 6 critical dimensions (evidence-based scoring from competitive landscape research)
      </p>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {/* Legend List on Left - Interactive */}
        <div style={{ minWidth: '200px', padding: '15px', background: '#f7fafc', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 15px 0', fontSize: '0.95em', color: '#2d3748' }}>Competitors</h4>
          {competitors.map(comp => {
            const isSelected = selectedCompetitors.includes(comp.name)
            return (
              <div
                key={comp.name}
                onClick={() => toggleCompetitor(comp.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  padding: '5px 8px',
                  borderRadius: '6px',
                  background: isSelected ? '#ffffff' : 'transparent',
                  border: isSelected ? `2px solid ${comp.color}` : '2px solid transparent',
                  opacity: isSelected ? 1 : 0.4,
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  width: 16,
                  height: 16,
                  background: comp.color,
                  borderRadius: '50%',
                  border: isSelected ? 'none' : '2px solid #cbd5e0'
                }}></div>
                <span style={{ fontSize: '0.85em', color: '#2d3748', fontWeight: isSelected ? 'bold' : 'normal' }}>
                  {comp.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Hexagon Radar Chart */}
        <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#cbd5e0" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fontSize: 12, fontWeight: 'bold', fill: '#2d3748' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 10 }}
          />
          {displayedCompetitors.map(comp => (
            <Radar
              key={comp.name}
              name={comp.name}
              dataKey={comp.dataKey}
              stroke={comp.color}
              fill={comp.color}
              fillOpacity={0.25}
              strokeWidth={2}
            />
          ))}
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
      </div>

      {/* Dimension Explanations */}
      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>📋 Verification/Trust</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> School vetting capability, scam prevention, legitimacy checks<br />
            <strong>Evidence:</strong> Pain Points #1-3-5 (10/10 severity, 12/12 sources) - "Can't verify school legitimacy"<br />
            <strong>High scorers:</strong> ISS/Search (teacher credentials), Teach Away (recruiter vetting)
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>💬 Community Engagement</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> Active community, response rate, user-generated school reviews<br />
            <strong>Evidence:</strong> Dave's ESL "ghost town" (zero replies to urgent questions, validated 1,316 posts)<br />
            <strong>High scorers:</strong> ISS/Search (job fair networking), HiredChina (expat forums, WeChat), LinkedIn (professional networking)
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>📊 Jobs Listed (Supply)</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> Number of job postings, employer side of marketplace<br />
            <strong>Evidence:</strong> Dave's ESL 47 jobs scraped (Oct 2025), SeriousTeachers 10 jobs (4-5x difference)<br />
            <strong>High scorers:</strong> LinkedIn (massive volume), Dave's ESL (60% market share), HiredChina (1K-5K listings)
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>👥 Candidate Pool (Demand)</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> Traffic, active job seekers, teacher side of marketplace<br />
            <strong>Evidence:</strong> Dave's ESL 60% market share (mention frequency), LinkedIn 1B+ users globally<br />
            <strong>High scorers:</strong> LinkedIn (1B+ users), Dave's ESL (dominant SEO), Hays/Michael Page (extensive databases)
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>💻 Technology/UX</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> Platform modernity, UX quality, mobile responsiveness, filtering<br />
            <strong>Evidence:</strong> Dave's ESL (1995-era, desktop-only), SeriousTeachers (modern interface but only 15% share)<br />
            <strong>High scorers:</strong> LinkedIn (advanced filtering), SeriousTeachers (modern UI), Hays/Michael Page (professional platforms)
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '2px solid #cbd5e0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '0.95em' }}>🏢 Company Size/Resources</h4>
          <p style={{ margin: 0, fontSize: '0.8em', lineHeight: '1.6', color: '#4a5568' }}>
            <strong>What it measures:</strong> Team size, revenue, brand strength, resources for growth<br />
            <strong>Evidence:</strong> LinkedIn ($15.7B revenue, 21K employees), Hays (£1.3B, 12.5K employees)<br />
            <strong>High scorers:</strong> LinkedIn (Microsoft subsidiary), Hays/Michael Page (public companies), ISS/Search (decades of operations)
          </p>
        </div>
      </div>

      {/* Selected Competitors Evidence */}
      <div style={{ marginTop: '30px' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#2d3748', fontSize: '1em' }}>📊 Evidence for Selected Competitors</h4>
        {displayedCompetitors.map(comp => (
          <div key={comp.name} style={{
            background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            border: `2px solid ${comp.color}`
          }}>
            <h5 style={{ margin: '0 0 10px 0', color: comp.color, fontSize: '0.95em' }}>{comp.name}</h5>
            <div style={{ fontSize: '0.8em', lineHeight: '1.8', color: '#2d3748' }}>
              <p style={{ margin: '5px 0' }}><strong>Verification:</strong> {comp.evidence.verification}</p>
              <p style={{ margin: '5px 0' }}><strong>Community:</strong> {comp.evidence.community}</p>
              <p style={{ margin: '5px 0' }}><strong>Jobs Listed:</strong> {comp.evidence.jobsListed}</p>
              <p style={{ margin: '5px 0' }}><strong>Candidate Pool:</strong> {comp.evidence.candidatePool}</p>
              <p style={{ margin: '5px 0' }}><strong>Technology:</strong> {comp.evidence.technology}</p>
              <p style={{ margin: '5px 0' }}><strong>Company Size:</strong> {comp.evidence.companySize}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scoring Methodology - How Evidence Maps to Scores */}
      <div style={{ marginTop: '30px', padding: '20px', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', borderRadius: '8px', border: '2px solid #0284c7' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#0c4a6e', fontSize: '1em' }}>📐 Scoring Rubric: How Qualitative Evidence → Quantitative Scores (0-100)</h4>

        <div style={{ fontSize: '0.8em', lineHeight: '1.8', color: '#0c4a6e' }}>
          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Verification/Trust (School Vetting Capability):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> No verification, scam problems documented (Dave's ESL: 10 - "90% fake" claims, ghost town)</li>
            <li><strong>20-40:</strong> Basic guidance but no systematic checks (HiredChina: 35 - work permit info only; LinkedIn: 40 - endorsements but no school vetting; SeriousTeachers: 30 - filtering only)</li>
            <li><strong>40-60:</strong> Limited verification scope</li>
            <li><strong>60-80:</strong> Strong but partial verification (Teach Away: 70 - vets schools in their network; Hays/M.Page: 75 - employer consultation for placements only)</li>
            <li><strong>80-100:</strong> Systematic verification (ISS/Search: 80 - validates teacher credentials + ISS-managed school standards, but doesn't verify non-member schools)</li>
          </ul>

          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Community Engagement (Active Forums, Response Rates):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> Dead community (Dave's ESL: 15 - "ghost town," zero replies validated)</li>
            <li><strong>20-40:</strong> Limited community (SeriousTeachers: 40 - smaller than Dave's per UGC data)</li>
            <li><strong>40-60:</strong> Moderate community (Teach Away: 50 - recruiter support not peer-driven; HiredChina: 55 - expat forums + WeChat groups + networking events; Hays/M.Page: 45 - one-on-one consultants)</li>
            <li><strong>60-80:</strong> Strong community (LinkedIn: 60 - professional networking but not ESL-focused; ISS/Search: 65 - job fair networking + career coaching)</li>
            <li><strong>80-100:</strong> Thriving community with high engagement</li>
          </ul>

          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Jobs Listed (Supply Side Volume):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> Very few listings</li>
            <li><strong>20-40:</strong> Limited volume (SeriousTeachers: 35 - 10 jobs scraped)</li>
            <li><strong>40-60:</strong> Moderate volume (Hays/M.Page: 50 - curated high-end; Teach Away: 55 - recruiter model; ISS/Search: 60 - 200-400 schools at job fairs)</li>
            <li><strong>60-80:</strong> High volume (HiredChina: 70 - 1K-5K listings cross-border; Dave's ESL: 85 - 47 jobs scraped, 60% market share)</li>
            <li><strong>80-100:</strong> Massive volume (LinkedIn: 95 - 67M+ companies globally)</li>
          </ul>

          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Candidate Pool (Demand Side Traffic):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> Very low traffic</li>
            <li><strong>20-40:</strong> Limited pool</li>
            <li><strong>40-60:</strong> Moderate pool (SeriousTeachers: 45 - 15% market share; Teach Away: 50 - 8% share; ISS/Search: 55 - 3K-5K placements/year; HiredChina: 60 - 10K-50K monthly)</li>
            <li><strong>60-80:</strong> Large pool (Hays/M.Page: 70 - 10K+ Asia placements/year)</li>
            <li><strong>80-100:</strong> Dominant pool (Dave's ESL: 90 - 60% market share, #1 SEO; LinkedIn: 100 - 1B+ users globally)</li>
          </ul>

          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Technology/UX (Platform Modernity):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> Legacy platform (Dave's ESL: 15 - 1995-era, desktop-only, no filters)</li>
            <li><strong>20-40:</strong> Basic functionality</li>
            <li><strong>40-60:</strong> Modern but limited (ISS/Search: 55 - job fair + traditional online; HiredChina: 60 - bilingual, modern interface; Teach Away: 65 - recruiter tools)</li>
            <li><strong>60-80:</strong> Advanced features (SeriousTeachers: 70 - modern UI, filtering; Hays/M.Page: 70 - professional platforms)</li>
            <li><strong>80-100:</strong> Best-in-class (LinkedIn: 90 - advanced filtering, InMail, mobile apps)</li>
          </ul>

          <p style={{ margin: '10px 0 5px 0', fontWeight: 'bold' }}>Company Size/Resources (Team, Revenue, Brand):</p>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>0-20:</strong> Very small (SeriousTeachers: 20 - small team, no public data; HiredChina: 25 - bootstrapped, $1M-5M est.)</li>
            <li><strong>20-40:</strong> Small established (Dave's ESL: 30 - small team, 30-year brand)</li>
            <li><strong>40-60:</strong> Medium company (Teach Away: 50 - 200+ employees; ISS/Search: 60 - 100-150 employees, $20M-40M)</li>
            <li><strong>60-80:</strong> Large enterprise</li>
            <li><strong>80-100:</strong> Giant corporation (Hays/M.Page: 95 - £1.3B revenue, 12.5K employees; LinkedIn: 100 - $15.7B, 21K employees, Microsoft)</li>
          </ul>
        </div>
      </div>

      {/* Strategic Insights */}
      <div style={{ marginTop: '30px', padding: '20px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '8px', border: '2px solid #f59e0b' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#92400e', fontSize: '1em' }}>💡 Strategic Insights</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <li><strong>Dave's ESL dominance despite weakness:</strong> High volume (Jobs + Candidates) overcomes terrible Tech, dead Community, zero Verification</li>
          <li><strong>LinkedIn's universal presence but lack of focus:</strong> Maximum scale (Company Size, Candidate Pool, Jobs) but moderate Verification/Community for ESL market</li>
          <li><strong>No competitor excels at Verification:</strong> ISS/Search verify teachers (not schools), Teach Away/Hays vet for their placements only (not marketplace-wide)</li>
          <li><strong>Size doesn't guarantee success:</strong> SeriousTeachers has better Tech than Dave's ESL but only 15% market share (volume &gt; tech alone)</li>
          <li><strong>Market gap identified:</strong> No platform combines systematic school verification with active community engagement at scale</li>
        </ul>
      </div>

      <p style={{ fontSize: '0.75em', color: '#718096', marginTop: '20px', fontStyle: 'italic', lineHeight: '1.6' }}>
        <strong>Scoring Methodology:</strong> All scores (0-100) derived from competitive landscape research, market share analysis (6,195 teacher posts), web scraping data (57 jobs across platforms), and public company financials. See competitive_dimensions_analysis.md for full evidence and source citations. Scores represent relative positioning within ESL teaching job market, not absolute capabilities.
      </p>
    </div>
  )
}
