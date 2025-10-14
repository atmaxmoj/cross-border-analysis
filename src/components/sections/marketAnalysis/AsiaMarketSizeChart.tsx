'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const eastAsiaData = [
  {
    name: 'China',
    verified: 0,
    estimated: 70000,
    display: '40,000-100,000 teachers (est.)',
    color: '#667eea',
    note: 'Industry estimates: 12,000 hired/year, 40-100K total working. Post-2021 regulations drastically reduced market.',
    source: 'Multiple industry sources 2024'
  },
  {
    name: 'S. Korea',
    verified: 13443,
    estimated: 0,
    display: '13,443 teachers (verified)',
    color: '#48bb78',
    note: 'E-2 visa holders (foreign language instructors) as of Dec 2024',
    source: 'Korea Immigration Service Dec 2024'
  },
  {
    name: 'Japan',
    verified: 5933,
    estimated: 14000,
    display: '5,933 verified + 14,000 est.',
    color: '#f56565',
    note: '5,933 JET Program (verified). Estimated 15,000-25,000 total including eikaiwa schools, ALT dispatch, int\'l schools.',
    source: 'JET Programme 2025 (verified); Industry estimates for total'
  },
  {
    name: 'Taiwan',
    verified: 0,
    estimated: 4000,
    display: '3,000-5,000 teachers (est.)',
    color: '#ed8936',
    note: 'Ministry recruits 1,096 new teachers annually. Estimated 3,000-5,000 total working.',
    source: 'Taiwan Ministry of Education 2024 recruitment data'
  },
]

const southeastAsiaData = [
  {
    name: 'Thailand',
    verified: 6129,
    estimated: 0,
    display: '6,129 teachers (2021 data)',
    color: '#4299e1',
    note: 'Last available government data from 2021: 6,129 foreign teachers across 922 schools',
    source: 'Thai government statistics 2021'
  },
  {
    name: 'Hong Kong',
    verified: 800,
    estimated: 0,
    display: '~800 teachers (verified)',
    color: '#b794f4',
    note: 'NET (Native-speaking English Teacher) Scheme in public schools only. Excludes private schools.',
    source: 'South China Morning Post April 2024'
  },
  {
    name: 'Vietnam',
    verified: 2157,
    estimated: 2000,
    display: '2,157 verified + ~2,000 est.',
    color: '#9f7aea',
    note: 'Verified: 2,157 foreign teachers in Hanoi + HCMC language centers (2024-25). Estimated additional 2,000+ in other cities, int\'l schools, universities.',
    source: 'Vietnam.vn & British Council 2024 data for Hanoi/HCMC; ISC Research for int\'l schools'
  },
  {
    name: 'Malaysia',
    verified: 0,
    estimated: 4500,
    display: '3,500-5,500 teachers (est.)',
    color: '#38b2ac',
    note: '287 int\'l schools with ~10,710 teachers (ISC Research 2020). Est. 35-45% are native English speakers = 3,750-4,820. Additional language centers add ~1,000.',
    source: 'ISC Research 2020 & Education Destination Malaysia data'
  },
  {
    name: 'Indonesia',
    verified: 0,
    estimated: 2000,
    display: '1,500-3,000 teachers (est.)',
    color: '#ecc94b',
    note: '195 int\'l schools with est. ~2,000-3,000 foreign teachers. Language centers (EF: 77 schools) add more. Work visa restricted to 7 countries.',
    source: 'ISC Research & EF Indonesia data 2024'
  },
  {
    name: 'Singapore',
    verified: 0,
    estimated: 4500,
    display: '3,600-5,500 teachers (est.)',
    color: '#fc8181',
    note: '69 int\'l schools serving 63,000+ students. Est. 4,500 teachers with 80-95% being foreign/native English speakers. Minimal ESL market (English official language).',
    source: 'ISC Research & International Schools Database 2024-25'
  },
  {
    name: 'Cambodia',
    verified: 0,
    estimated: 1500,
    display: '1,000-2,000 teachers (est.)',
    color: '#63b3ed',
    note: '68 int\'l schools in Phnom Penh. ACE Cambodia alone has 300 teachers (6 campuses). Est. 1,000-2,000 foreign teachers across schools & language centers.',
    source: 'International Schools Database & ACE Cambodia 2024'
  },
  {
    name: 'Philippines',
    verified: 0,
    estimated: 0,
    display: '~0 (exports teachers)',
    color: '#f6ad55',
    note: 'English-speaking country. Exports ~1,500 teachers/year. Minimal foreign teacher imports.'
  },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div style={{
        background: 'white',
        border: `2px solid ${data.color}`,
        padding: '10px 15px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        minWidth: '250px',
        maxWidth: '350px'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: data.color, fontSize: '14px' }}>{data.name}</p>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>{data.display}</p>
        {data.note && <p style={{ margin: '5px 0 0 0', fontSize: '11px', color: '#718096', fontStyle: 'italic' }}>{data.note}</p>}
        {data.source && <p style={{ margin: '5px 0 0 0', fontSize: '10px', color: '#a0aec0' }}>Source: {data.source}</p>}
      </div>
    )
  }
  return null
}

export default function AsiaMarketSizeChart() {
  return (
    <div style={{ width: '100%', background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '20px', marginBottom: '20px' }}>
      <h4 style={{ marginTop: 0, marginBottom: '20px', color: '#2d3748', fontSize: '1.1em', textAlign: 'center' }}>
        Native English Teachers in Asia (Verified Data vs Estimates)
      </h4>

      {/* East Asia */}
      <h5 style={{ marginTop: '10px', marginBottom: '15px', color: '#4a5568', fontSize: '0.95em', fontWeight: 'bold' }}>
        East Asia Markets
      </h5>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={eastAsiaData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            label={{ value: 'Number of Teachers', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
          />
          <Bar dataKey="verified" stackId="a" name="Verified (Official Data)" fill="#48bb78" radius={[0, 0, 0, 0]} />
          <Bar dataKey="estimated" stackId="a" name="Estimated (Industry Sources)" fill="#a0aec0" radius={[8, 8, 0, 0]} fillOpacity={0.6} />
        </BarChart>
      </ResponsiveContainer>

      {/* Southeast Asia */}
      <h5 style={{ marginTop: '30px', marginBottom: '15px', color: '#4a5568', fontSize: '0.95em', fontWeight: 'bold' }}>
        Southeast Asia Markets
      </h5>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={southeastAsiaData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 11 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            label={{ value: 'Number of Teachers', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
          />
          <Bar dataKey="verified" stackId="a" name="Verified (Official Data)" fill="#48bb78" radius={[0, 0, 0, 0]} />
          <Bar dataKey="estimated" stackId="a" name="Estimated (Industry Sources)" fill="#a0aec0" radius={[8, 8, 0, 0]} fillOpacity={0.6} />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ fontSize: '0.75em', color: '#718096', marginTop: '20px', fontStyle: 'italic', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '10px' }}>
          <strong>Note:</strong> Charts show NATIVE English-speaking teachers working in each country. Green bars = VERIFIED official data (visa statistics, government reports). Gray bars = ESTIMATES from industry sources, international school data, and consulting firms.
        </p>

        <p style={{ marginBottom: '5px' }}><strong>Verified Data Sources:</strong></p>
        <ul style={{ marginTop: '5px', marginBottom: '10px', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>South Korea:</strong> <a href="https://www.immigration.go.kr/immigration_eng/index.do" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>Korea Immigration Service</a> reports 13,443 E-2 visa holders (foreign language instructors) as of Dec 2024</li>
          <li><strong>Thailand:</strong> <a href="https://www.moe.go.th/en/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>Thai Ministry of Education</a> statistics show 6,129 foreign teachers across 922 schools (2021, most recent published data)</li>
          <li><strong>Hong Kong:</strong> <a href="https://www.scmp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>South China Morning Post</a> reported ~800 teachers in NET (Native-speaking English Teacher) Scheme in public schools (April 2024)</li>
          <li><strong>Japan:</strong> <a href="https://jetprogramme.org/en/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>JET Programme</a> official data shows 5,933 participants (2025) + estimated 14,000 additional in eikaiwa schools, ALT dispatch, and international schools</li>
          <li><strong>Vietnam:</strong> <a href="https://www.vietnam.vn/en/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>Vietnam.vn</a> and <a href="https://www.britishcouncil.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>British Council</a> data show 2,157 foreign teachers in Hanoi + HCMC language centers (2024-25)</li>
        </ul>

        <p style={{ marginBottom: '5px' }}><strong>Estimated Data Sources:</strong></p>
        <ul style={{ marginTop: '5px', marginBottom: '10px', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>China:</strong> Multiple industry sources estimate 40,000-100,000 teachers post-2021 regulations (including <a href="https://www.thatsmags.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>That's Mag</a>, ESL recruitment platforms reporting ~12,000 hired/year)</li>
          <li><strong>Taiwan:</strong> <a href="https://english.moe.gov.tw/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>Taiwan Ministry of Education</a> recruits 1,096 new teachers annually; estimated 3,000-5,000 total working</li>
          <li><strong>Malaysia:</strong> <a href="https://iscresearch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>ISC Research 2020</a> reports 287 int'l schools with ~10,710 teachers; estimated 35-45% are native English speakers (3,750-4,820) plus ~1,000 in language centers = 3,500-5,500 total</li>
          <li><strong>Singapore:</strong> <a href="https://www.international-schools-database.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>International Schools Database</a> and <a href="https://iscresearch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>ISC Research</a> show 69 int'l schools serving 63,000+ students; estimated 3,600-5,500 teachers</li>
          <li><strong>Indonesia:</strong> <a href="https://iscresearch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>ISC Research</a> reports 195 int'l schools; <a href="https://www.ef.com/wwen/teach-abroad/teach-in-indonesia/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>EF Indonesia</a> operates 77 schools; estimated 1,500-3,000 native English teachers</li>
          <li><strong>Cambodia:</strong> <a href="https://www.international-schools-database.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>International Schools Database</a> lists 68 int'l schools in Phnom Penh; <a href="https://acecambodia.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>ACE Cambodia</a> alone employs 300 teachers; estimated 1,000-2,000 total</li>
          <li><strong>Vietnam (additional):</strong> <a href="https://iscresearch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>ISC Research</a> shows 362 int'l schools; estimated ~2,000 additional teachers in other cities, int'l schools, and universities</li>
          <li><strong>Philippines:</strong> English-speaking country that <a href="https://www.bworldonline.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'underline' }}>exports ~1,500 teachers/year</a> rather than imports foreign teachers</li>
        </ul>

        <p style={{ marginTop: '10px', marginBottom: '0' }}>
          <strong>Total Verified Market:</strong> ~28,000 teachers. <strong>Estimated Total Across All Markets:</strong> 125,000-175,000 native English teachers in Asia.
        </p>
      </div>
    </div>
  )
}
