'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

// Profession breakdown based on available data:
// - Teaching: 12,000 confirmed (HiredChina 2025)
// - Beijing data (22,000 workers): 30% teaching/admin, 13% engineering
// - Applied Beijing percentages to nationwide 384,000 permits (requires validation)
// - Engineering: ~50,000 (13% of 384K based on Beijing sample)
// - Business/Consulting: ~77,000 (20% estimate from regional comparisons)
// - Management: ~73,000 (19% estimate from regional data)
// - Tech/IT: ~60,000 (high-demand sector, estimate based on industry reports)
// - Other professions: ~112,000 (finance, healthcare, manufacturing, etc.)
const chinaExpatData = [
  { category: 'Business/Consulting', value: 77000, display: '~77,000', color: '#48bb78', description: 'Advisors, consultants, business professionals' },
  { category: 'Management', value: 73000, display: '~73,000', color: '#ed8936', description: 'Managers, directors, executives' },
  { category: 'Tech/IT', value: 60000, display: '~60,000', color: '#4299e1', description: 'Software engineers, IT professionals' },
  { category: 'Engineering', value: 50000, display: '~50,000', color: '#667eea', description: 'Engineers (civil, mechanical, aerospace)' },
  { category: 'Other Professions', value: 112000, display: '~112,000', color: '#a0aec0', description: 'Finance, healthcare, manufacturing, etc.' },
  { category: 'Teaching', value: 12000, display: '12,000', color: '#9f7aea', description: 'ESL/foreign teachers (beachhead)' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div style={{
        background: 'white',
        border: `2px solid ${data.color}`,
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        minWidth: '200px'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: data.color, fontSize: '14px' }}>{data.category}</p>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px', fontWeight: 'bold' }}>{data.display} workers</p>
        <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#718096' }}>{data.description}</p>
      </div>
    )
  }
  return null
}

export default function ExpatJobsChart() {
  return (
    <div style={{ width: '100%', background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '20px', marginBottom: '20px' }}>
      <h4 style={{ marginTop: 0, marginBottom: '15px', color: '#2d3748', fontSize: '1.1em', textAlign: 'center' }}>
        China Foreign Workers by Profession (384,000 Total in 2024)
      </h4>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chinaExpatData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="category"
            angle={-45}
            textAnchor="end"
            height={90}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            label={{ value: 'Number of Workers', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chinaExpatData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p style={{ fontSize: '0.75em', color: '#718096', marginTop: '15px', fontStyle: 'italic', textAlign: 'center', lineHeight: '1.6' }}>
        <strong>Note:</strong> Profession breakdown estimated from Beijing sample data (22,000 workers: 30% teaching/admin, 13% engineering) applied to nationwide 384,000 work permits. Teaching (12,000 workers) is confirmed from industry sources and represents YouTeacher's beachhead market - just 3% of China's total foreign worker market. Business/consulting, management, tech/IT, and engineering sectors represent primary expansion opportunities totaling ~260,000 professionals.
      </p>

      <div style={{ marginTop: '15px', padding: '12px', background: '#fff5f5', borderLeft: '4px solid #fc8181', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '0.85em', color: '#2d3748', lineHeight: '1.6', marginBottom: '8px' }}>
          <strong>⚠️ Data Limitations:</strong> Comprehensive nationwide profession breakdown not publicly available. Estimates based on:
        </p>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.8em', lineHeight: '1.6' }}>
          <li>Beijing data: 30% teaching/admin, 13% engineering (22,000 worker sample)</li>
          <li>Regional comparisons: Indonesia (52% professional, 20% consultants, 19% managers)</li>
          <li>Industry reports: Tech, finance, engineering identified as high-demand sectors</li>
          <li>Teaching: 12,000 confirmed (HiredChina 2025)</li>
        </ul>
      </div>

      <div style={{ marginTop: '15px', padding: '12px', background: '#f0fff4', borderLeft: '4px solid #48bb78', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '0.85em', color: '#2d3748', lineHeight: '1.6' }}>
          <strong>💡 Market Expansion Opportunity:</strong> YouTeacher's school verification methodology for ESL teachers (beachhead) can be extended to verify ALL employers hiring foreign workers in China - a 30x larger market using the same verification infrastructure.
        </p>
      </div>
    </div>
  )
}
