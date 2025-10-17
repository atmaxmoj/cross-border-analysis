import InfoBox from '../../ui/InfoBox'

export default function Stage4MoatBuilding() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>Stage 4: Moat Building + Expansion (Year 3-4)</h4>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fef5e7', border: '2px solid #ecc94b', borderRadius: '4px' }}>
        <strong>⚠️ Critical Insight: ESL China Alone Cannot Sustain $1M+ ARR</strong>
        <p style={{ fontSize: '0.9em', marginTop: '10px', lineHeight: '1.8' }}>
          China ESL market = 12,000 teachers/year, ~1,500-2,000 schools. Realistic ceiling = $700K-$900K ARR.
        </p>
        <p style={{ fontSize: '0.9em', marginTop: '10px', lineHeight: '1.8' }}>
          <strong>Stage 4 strategy:</strong> Launch excitement features (moat building) WHILE expanding market (vertical + horizontal).
          Don't wait until Year 5-6 - expansion happens in <strong>Year 3-4 simultaneously with moat features</strong>.
        </p>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '8px', marginBottom: '20px' }}>
        <strong style={{ fontSize: '1.1em', color: '#1e40af' }}>🎯 Stage 4 MVP Checklist (Phased Launch: Year 3-4)</strong>
        <table style={{ width: '100%', marginTop: '15px', fontSize: '0.85em', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbeafe', borderBottom: '2px solid #3b82f6' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Feature</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Build Time</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Owner</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Success Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #bfdbfe', backgroundColor: '#fef3c7' }}>
              <td colSpan={4} style={{ padding: '8px' }}><strong>C-Tier: Moat Features</strong></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>C.6 Weekly Meetups</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>Organize dinners in 10 cities</span></td>
              <td style={{ padding: '8px' }}>2 weeks<br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>(use Timeleft API)</span></td>
              <td style={{ padding: '8px' }}>Pete</td>
              <td style={{ padding: '8px' }}>200 attendees/week by Month 30</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>C.1 AI Scam Detection</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>Flag fraudulent jobs automatically</span></td>
              <td style={{ padding: '8px' }}>4 weeks</td>
              <td style={{ padding: '8px' }}>Mojo</td>
              <td style={{ padding: '8px' }}>Block 500+ scams/year</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>C.2 Contract Review</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>AI analyzes contracts for red flags</span></td>
              <td style={{ padding: '8px' }}>3 weeks</td>
              <td style={{ padding: '8px' }}>Mojo</td>
              <td style={{ padding: '8px' }}>500+ reviews/year, $29/review</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>C.7 Escrow/EOR</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>Partner with Deel/Skuad for payments</span></td>
              <td style={{ padding: '8px' }}>6 weeks<br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>(legal + integrations)</span></td>
              <td style={{ padding: '8px' }}>Pete + Mojo</td>
              <td style={{ padding: '8px' }}>50+ teachers using by Year 4</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>C.8 Advanced Badges</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>Multi-tier verification system</span></td>
              <td style={{ padding: '8px' }}>8 weeks<br/><span style={{ fontSize: '0.85em', color: '#dc2626' }}>(complex: data scraping)</span></td>
              <td style={{ padding: '8px' }}>Mojo</td>
              <td style={{ padding: '8px' }}>100+ schools with Excellence badge</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe', backgroundColor: '#fef3c7' }}>
              <td colSpan={4} style={{ padding: '8px' }}><strong>Market Expansion</strong></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>Vertical: All China Jobs</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>Tech, finance, edu admin positions</span></td>
              <td style={{ padding: '8px' }}>6 months<br/><span style={{ fontSize: '0.85em', color: '#64748b' }}>(research + scraping + community)</span></td>
              <td style={{ padding: '8px' }}>Pete + Mojo</td>
              <td style={{ padding: '8px' }}>$250K ARR by Year 4 end</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
              <td style={{ padding: '8px' }}><strong>Horizontal: Korea Teaching</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>EPIK program + hagwons</span></td>
              <td style={{ padding: '8px' }}>6 months</td>
              <td style={{ padding: '8px' }}>Pete</td>
              <td style={{ padding: '8px' }}>$150K ARR by Year 4 end</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><strong>Horizontal: Japan Teaching</strong><br/><span style={{ fontSize: '0.9em', color: '#64748b' }}>JET program + eikaiwas</span></td>
              <td style={{ padding: '8px' }}>4 months<br/><span style={{ fontSize: '0.85em', color: '#059669' }}>(faster with Korea learnings)</span></td>
              <td style={{ padding: '8px' }}>Pete</td>
              <td style={{ padding: '8px' }}>$120K ARR by Year 4 end</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#dcfce7', borderRadius: '4px' }}>
          <strong style={{ color: '#166534' }}>✅ Go/No-Go Decision (End of Year 4):</strong>
          <ul style={{ margin: '5px 0 0 0', fontSize: '0.9em', color: '#166534' }}>
            <li>✓ $1M+ ARR (China ESL $700K + Vertical $250K + Horizontal $270K)</li>
            <li>✓ 1,000+ schools posting monthly across all markets</li>
            <li>✓ Moat features driving retention (meetups, escrow, AI tools)</li>
            <li><strong>If YES:</strong> Continue geographic expansion (Vietnam, Thailand) or consider D-tier transformative features</li>
            <li><strong>If NO:</strong> Focus on profitability in existing markets, optimize unit economics before expanding further</li>
          </ul>
        </div>
      </div>

      <InfoBox>
        <strong>Part A: Excitement Features (C-Tier Moat Building)</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>C.1 AI Scam Detection</li>
          <li>C.2 Contract Review Tool</li>
          <li>C.3 Regional Champion Program</li>
          <li>C.4 Teacher Success Stories</li>
          <li>C.5 B2B Recruiter Marketplace</li>
          <li>C.6 Weekly Teacher Meetups</li>
          <li>C.7 Escrow & EOR Service</li>
          <li>C.8 Advanced Badge System</li>
        </ul>
        <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
          These features create defensible moats - competitors cannot easily copy AI models, escrow infrastructure, or community relationships.
        </p>
      </InfoBox>

      <InfoBox>
        <strong>Part B: Market Expansion (Year 3-4)</strong><br/><br/>

        <strong>Phase 1 (Year 3 Q3-Q4): Vertical Expansion - All Foreign Jobs in China</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Why vertical first:</strong> 85% feature transferability, SAME Chinese business license verification, 11x market size (131,500 foreign workers/year vs 12,000 teachers)</li>
          <li><strong>Target sectors:</strong> Tech (engineers, designers), finance (consultants, analysts), education (admins, curriculum designers)</li>
          <li><strong>Setup time:</strong> 6 months (domain research + scrape 51job/Zhaopin + engineer community)</li>
          <li><strong>Launch date:</strong> Year 3 Q3 (18 months after Stage 3 launch)</li>
          <li><strong>Revenue target:</strong> +$200K-$300K ARR by end of Year 4</li>
        </ul>

        <strong>Phase 2 (Year 4 Q1-Q4): Horizontal Expansion - Teaching in Korea/Japan</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Why Korea/Japan:</strong> 83% feature transferability, same vertical (teaching), large markets (Korea: 13K teachers, Japan: 6K JET + international schools)</li>
          <li><strong>Sequential launch:</strong> Korea Q1-Q2 (6 months), Japan Q3-Q4 (4 months, faster because Korea learnings transfer)</li>
          <li><strong>Setup per country:</strong> Regulatory research + business registration system integration + banking/EOR partnerships</li>
          <li><strong>Revenue target:</strong> Korea +$150K ARR, Japan +$120K ARR by end of Year 4</li>
        </ul>
      </InfoBox>

      <InfoBox>
        <strong>Part C: Additional Revenue Streams</strong>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#fff5f5', border: '1px solid #fc8181' }}>
          <strong>1. B2B Recruiter Marketplace (C.5):</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>Recruiters pay commission: 10-15% of first-year teacher salary (~$3,000-$5,000 per placement)</li>
            <li>Platform facilitates, takes 20% of recruiter commission ($600-$1,000 per placement)</li>
            <li>Target: 100 placements/year via recruiters = <strong>$60K-$100K/year</strong></li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#ebf8ff', border: '1px solid #4299e1' }}>
          <strong>2. AI Contract Review (C.2):</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>Teachers pay $29 for AI contract analysis (red flags, salary benchmarking, visa clause review)</li>
            <li>Freemium: Basic scan free, detailed analysis $29</li>
            <li>Target: 500 reviews/year × $29 = <strong>$14,500/year</strong></li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f0fff4', border: '1px solid #68d391' }}>
          <strong>3. Weekly Teacher Meetups (C.6):</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>Teachers pay: $12/event or $18/month subscription</li>
            <li>Organize dinners every Wednesday in 10+ cities (Beijing, Shanghai, Seoul, Tokyo, Bangkok, etc.)</li>
            <li>Target: 200 attendees/week × $12 = $2,400/week × 48 weeks = <strong>$115K/year</strong></li>
            <li>Additional: 5-10% commission from restaurants for guaranteed bookings = $10K-$20K/year</li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#fefcbf', border: '1px solid #ecc94b' }}>
          <strong>4. Escrow & EOR Service (C.7):</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>Escrow service: 3-5% of monthly salary (e.g., $60-100/month on $2,000 salary)</li>
            <li>EOR service (partner with Deel/Skuad): $200-300/teacher/month</li>
            <li>Target: 50 teachers using escrow × $80/month × 12 = $48K/year</li>
            <li>Target: 20 teachers using EOR × $250/month × 12 = <strong>$60K/year</strong></li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#e6fffa', border: '1px solid #81e6d9' }}>
          <strong>5. Data Products:</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>Salary benchmarking reports for schools: $199/report</li>
            <li>Market insights (hiring trends, demand by location, teacher supply analysis): $499/quarter</li>
            <li>Target: 50 schools × $499/quarter = <strong>$24,950/year</strong></li>
          </ul>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#faf5ff', border: '1px solid #b794f4' }}>
          <strong>6. Sponsored Content from Complementary Services:</strong>
          <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
            <li>TEFL certification providers sponsor "Get Certified" section: $3K-$5K/month</li>
            <li>Visa service providers sponsor "Visa Guide" section: $2K-$3K/month</li>
            <li>Insurance providers sponsor "Teacher Insurance" section: $1K-$2K/month</li>
            <li>Target: <strong>$60K-$120K/year</strong></li>
          </ul>
        </div>

        <strong>Revenue Projection Breakdown (Year 3-4):</strong>

        <table style={{ fontSize: '0.85em', marginTop: '15px', width: '100%' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Revenue Stream</th>
              <th style={{ padding: '10px' }}>Year 3<br/>(ESL China Only)</th>
              <th style={{ padding: '10px' }}>Year 4<br/>(+ Vertical + Horizontal)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>Direct job postings</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$444K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$600K<br/><span style={{ fontSize: '0.85em', color: '#718096' }}>(China ESL + eng + Korea + Japan)</span></td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>B2B recruiter marketplace</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$60K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$120K</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Weekly meetups</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$100K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$180K<br/><span style={{ fontSize: '0.85em', color: '#718096' }}>(+ Seoul, Tokyo meetups)</span></td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Escrow & EOR</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$80K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$180K<br/><span style={{ fontSize: '0.85em', color: '#718096' }}>(higher salaries for engineers)</span></td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Contract review</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$15K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$50K<br/><span style={{ fontSize: '0.85em', color: '#718096' }}>(engineers pay $49-$99)</span></td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Data products</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$20K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$40K</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Sponsored content</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$50K</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>$80K</td>
            </tr>
            <tr style={{ background: '#f0fff4', fontWeight: 'bold' }}>
              <td style={{ padding: '10px' }}>TOTAL ARR</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>$769K</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>$1.25M</td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: '0.9em', marginTop: '15px', color: '#2d3748', lineHeight: '1.8' }}>
          <strong>Key Insight:</strong> By combining moat features WITH expansion in Year 3-4, we break through the $1M ARR barrier.
          ESL China alone ($769K) + Vertical expansion ($250K) + Korea/Japan ($230K) = <strong>$1.25M ARR by end of Year 4</strong>.
        </p>

        <strong>Success Metrics:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li>1,000+ schools posting monthly</li>
          <li>100K+ monthly active teachers</li>
          <li>10,000+ verified schools</li>
          <li>50,000+ teacher reviews (critical mass for trust network effects)</li>
          <li>AI scam detection blocks 500+ fraudulent jobs/year (saves teachers from fraud)</li>
          <li>40%+ teachers use contract review tool before accepting offers</li>
          <li>2,000+ teachers attend weekly meetups across 10 cities</li>
          <li>100+ teachers using escrow/EOR service (proves concept for high-value placements)</li>
        </ul>

        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Stack Overflow:</strong> Community (Q&A) + jobs = $1.8B acquisition. Freemium model with multiple revenue streams.</li>
          <li><strong>AngelList:</strong> Started niche (investors), expanded to jobs/recruiting, reached $1B+ AUM. Multiple products = platform moat.</li>
          <li><strong>Boss Zhipin:</strong> AI matching + direct chat = $15.2B market cap. Network effects from quality matching.</li>
          <li><strong>Timeleft:</strong> €12M ARR from organizing weekly dinners. Proves teachers will pay for community/social connection.</li>
          <li><strong>EOR providers:</strong> Deel, Skuad charge $400-800/employee/month. Our partnership model = lower cost, revenue share.</li>
        </ul>

        <strong>Why These Features Create Moats:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Community (C.6):</strong> Teachers who attend meetups are 3x more engaged, create viral word-of-mouth, become brand advocates. Competitors cannot copy relationships.</li>
          <li><strong>Trust infrastructure (C.7):</strong> Escrow/EOR requires legal contracts, banking relationships, compliance expertise. High barrier to entry.</li>
          <li><strong>Data moat (C.1, C.2):</strong> 50K+ reviews + salary data = proprietary insights. AI scam detection gets better with more data.</li>
          <li><strong>Network effects:</strong> More teachers → more reviews → more schools trust platform → more teachers. Self-reinforcing cycle.</li>
        </ul>
      </InfoBox>
    </div>
  )
}
