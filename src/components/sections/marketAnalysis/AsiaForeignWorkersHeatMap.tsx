'use client'

import { useState } from 'react'

const asiaWorkersData = [
  {
    country: 'China',
    teaching: 70000,
    totalWorkers: 384000,
    teachingGrowth: 'Post-2021 decline (-60-75%)',
    totalGrowth: '+12% since 2021',
    source: 'MOE 2020: 17,693 in higher ed (official). Xinhua 2017: 400K total (pre-Double Reduction). Current est: 50-150K post-2021. NIA 2023: 384K total work permits. ISC Research 2025: 1,106 int\'l schools'
  },
  {
    country: 'Japan',
    teaching: 19933,
    totalWorkers: 2048675,
    teachingGrowth: 'Stable',
    totalGrowth: 'First time >2M (Oct 2023)',
    source: 'JET Programme 2025 (5,933) + industry est. 14,000, MHLW Oct 2023'
  },
  {
    country: 'S. Korea',
    teaching: 13443,
    totalWorkers: 165000,
    teachingGrowth: 'Stable (verified)',
    totalGrowth: 'Peak 2024, -21% in 2025',
    source: 'Korea Immigration Service Dec 2024 (E-2 visas), E-9 visa program'
  },
  {
    country: 'Taiwan',
    teaching: 4000,
    totalWorkers: 937178,
    teachingGrowth: 'Stable',
    totalGrowth: 'Growing steadily',
    source: 'Taiwan Ministry of Education 2024 (3-5K est.), MOL 2024'
  },
  {
    country: 'Thailand',
    teaching: 6129,
    totalWorkers: 5300000,
    teachingGrowth: 'Stable (2021 data)',
    totalGrowth: '+8% (2024)',
    source: 'Thai Ministry of Education 2021 (verified), OPEC 2024, IOM Report'
  },
  {
    country: 'Singapore',
    teaching: 4500,
    totalWorkers: 1600000,
    teachingGrowth: 'Stable',
    totalGrowth: 'Declining slightly',
    source: 'ISC Research 2024-25 (69 int\'l schools, 3.6-5.5K est.), MOM Dec 2024'
  },
  {
    country: 'Malaysia',
    teaching: 4500,
    totalWorkers: 2470000,
    teachingGrowth: 'Stable',
    totalGrowth: 'At 15% workforce cap',
    source: 'ISC Research 2020 (287 int\'l schools, 3.5-5.5K est.), WRP 2.0'
  },
  {
    country: 'Hong Kong',
    teaching: 800,
    totalWorkers: 1060000,
    teachingGrowth: 'Stable (verified)',
    totalGrowth: 'Recovering to 2024',
    source: 'South China Morning Post Apr 2024 (NET scheme), Immigration Dept'
  },
  {
    country: 'Vietnam',
    teaching: 3310,
    totalWorkers: 100000,
    teachingGrowth: 'Growing (HCMC verified only)',
    totalGrowth: 'Growing (2022 data)',
    source: 'Vietnam.vn 2024-25: 1,310 verified (HCMC language centers only). ISC Research: 362 int\'l schools (est. +2,000 teachers). Total est: 3,310. GSO 2022: 100K total foreign workers'
  },
  {
    country: 'Philippines',
    teaching: 0,
    totalWorkers: 153651,
    teachingGrowth: 'Exports teachers',
    totalGrowth: '+13% (2024)',
    source: 'Exports ~1,500/year (bworldonline), DepEd 2024, BI 2024'
  },
  {
    country: 'Indonesia',
    teaching: 2000,
    totalWorkers: null,
    teachingGrowth: 'Growing',
    totalGrowth: 'No public data',
    source: 'ISC Research 2024 (195 int\'l schools, 1.5-3K est.), EF Indonesia data'
  },
  {
    country: 'Cambodia',
    teaching: 1500,
    totalWorkers: null,
    teachingGrowth: 'Growing',
    totalGrowth: '10% quota limit',
    source: 'Int\'l Schools Database 2024 (68 schools), ACE Cambodia (1-2K est.)'
  },
]

const getColorIntensity = (value: number | null, max: number, isTeaching: boolean) => {
  if (value === null) return '#f7fafc'
  const intensity = value / max
  if (isTeaching) {
    // Purple gradient for teaching
    if (intensity > 0.7) return '#6b46c1'
    if (intensity > 0.4) return '#9f7aea'
    if (intensity > 0.2) return '#b794f4'
    if (intensity > 0.1) return '#d6bcfa'
    return '#e9d8fd'
  } else {
    // Green gradient for total workers
    if (intensity > 0.7) return '#2f855a'
    if (intensity > 0.4) return '#48bb78'
    if (intensity > 0.2) return '#68d391'
    if (intensity > 0.1) return '#9ae6b4'
    return '#c6f6d5'
  }
}

const formatNumber = (num: number | null) => {
  if (num === null) return 'N/A'
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}

export default function AsiaForeignWorkersHeatMap() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

  const maxTeaching = Math.max(...asiaWorkersData.map(d => d.teaching || 0))
  const maxTotal = Math.max(...asiaWorkersData.map(d => d.totalWorkers || 0))

  return (
    <div style={{ width: '100%', background: '#ffffff', padding: '20px', borderRadius: '8px', marginTop: '30px', marginBottom: '30px', border: '2px solid #e2e8f0' }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#2d3748', fontSize: '1.2em', textAlign: 'center' }}>
        🌏 Foreign Workers Across Asia: Teaching vs. Total Market (2024)
      </h3>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Country</th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Teaching/ESL<br/><span style={{ fontSize: '0.8em', opacity: 0.9 }}>(Schools & Programs)</span></th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Total Foreign Workers<br/><span style={{ fontSize: '0.8em', opacity: 0.9 }}>(All Sectors)</span></th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Market Dynamics</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', fontSize: '0.85em' }}>Data Source</th>
            </tr>
          </thead>
          <tbody>
            {asiaWorkersData.map((row, index) => (
              <tr key={row.country} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', background: '#f7fafc' }}>{row.country}</td>
                <td
                  style={{
                    padding: '12px',
                    textAlign: 'center',
                    background: getColorIntensity(row.teaching, maxTeaching, true),
                    color: (row.teaching || 0) > maxTeaching * 0.4 ? 'white' : '#2d3748',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: hoveredCell === `${row.country}-teaching` ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredCell(`${row.country}-teaching`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  {formatNumber(row.teaching)}
                  {hoveredCell === `${row.country}-teaching` && row.teaching && (
                    <div style={{ fontSize: '0.8em', opacity: 0.9 }}>{row.teachingGrowth}</div>
                  )}
                </td>
                <td
                  style={{
                    padding: '12px',
                    textAlign: 'center',
                    background: getColorIntensity(row.totalWorkers, maxTotal, false),
                    color: (row.totalWorkers || 0) > maxTotal * 0.4 ? 'white' : '#2d3748',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: hoveredCell === `${row.country}-total` ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredCell(`${row.country}-total`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  {formatNumber(row.totalWorkers)}
                  {hoveredCell === `${row.country}-total` && row.totalWorkers && (
                    <div style={{ fontSize: '0.8em', opacity: 0.9 }}>{row.totalGrowth}</div>
                  )}
                </td>
                <td style={{ padding: '12px', fontSize: '0.85em' }}>
                  <div><strong>Teaching:</strong> {row.teachingGrowth}</div>
                  <div style={{ marginTop: '3px' }}><strong>Total:</strong> {row.totalGrowth}</div>
                </td>
                <td style={{ padding: '12px', fontSize: '0.75em', color: '#718096' }}>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#faf5ff', padding: '15px', borderRadius: '8px', border: '2px solid #9f7aea' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#6b46c1', fontSize: '0.95em' }}>📚 Teaching/ESL Market Legend</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#6b46c1', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>High (&gt;40K)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#9f7aea', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>Medium (10K-40K)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#e9d8fd', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>Low (&lt;10K)</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#f0fff4', padding: '15px', borderRadius: '8px', border: '2px solid #48bb78' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2f855a', fontSize: '0.95em' }}>💼 Total Workers Legend</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#2f855a', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>High (&gt;3.5M)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#48bb78', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>Medium (1M-3.5M)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: 20, height: 20, background: '#c6f6d5', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '0.8em' }}>Low (&lt;1M)</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '8px', border: '2px solid #f59e0b' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#92400e', fontSize: '1em' }}>📊 Key Insights</h4>
        <ul style={{ margin: '5px 0', paddingLeft: '20px', fontSize: '0.85em', lineHeight: '1.8', color: '#78350f' }}>
          <li><strong>China dominates teaching market</strong> (70K teachers, 40-100K range) despite post-2021 regulatory decline</li>
          <li><strong>Japan is 2nd largest teaching market</strong> (19,933 teachers: 5,933 JET + 14K estimated in eikaiwa/ALT)</li>
          <li><strong>S. Korea has most verified data</strong> (13,443 E-2 visa holders as of Dec 2024)</li>
          <li><strong>Thailand leads total foreign workers</strong> (5.3M) but teaching represents only 0.1% of workforce</li>
          <li><strong>Total native English teachers in Asia: ~130K</strong> across 12 countries tracked (verified + estimated)</li>
          <li><strong>Teaching represents &lt;1-2% of total foreign workers</strong> in most countries (exception: China at ~18%)</li>
        </ul>
      </div>

      <p style={{ fontSize: '0.75em', color: '#718096', marginTop: '15px', fontStyle: 'italic', lineHeight: '1.6' }}>
        Sources: Government statistics bureaus, immigration departments, and international organizations (2024 data unless noted). Hover over cells for growth rates. Teaching/ESL numbers include international schools, language training centers, and government programs (JET, buxibans, hagwons). Total workers include all work permit categories and foreign employment passes.
      </p>
    </div>
  )
}
