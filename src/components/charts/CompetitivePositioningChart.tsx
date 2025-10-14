'use client'

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from 'recharts'

const competitorData = [
  { name: "YouTeacher", tech: 95, trust: 90, size: 300, color: '#48bb78' },
  { name: "Dave's ESL", tech: 15, trust: 75, size: 200, color: '#4299e1' },
  { name: "Teach Away", tech: 55, trust: 80, size: 150, color: '#9f7aea' },
  { name: "SeriousTeachers", tech: 60, trust: 65, size: 130, color: '#ed8936' },
  { name: "TEFL.com", tech: 35, trust: 70, size: 120, color: '#ecc94b' },
  { name: "Other Boards", tech: 45, trust: 50, size: 100, color: '#a0aec0' },
  { name: "Recruiters", tech: 30, trust: 55, size: 110, color: '#718096' },
  { name: "Scam Sites", tech: 25, trust: 10, size: 140, color: '#fc8181' },
]

const CustomLabel = (props: any) => {
  const { x, y, value, fill } = props
  return (
    <text
      x={x}
      y={y - 15}
      fill={fill === '#48bb78' ? '#2d3748' : '#2d3748'}
      fontSize={fill === '#48bb78' ? 14 : 11}
      fontWeight={fill === '#48bb78' ? 'bold' : 'normal'}
      textAnchor="middle"
    >
      {value}
    </text>
  )
}

export default function CompetitivePositioningChart() {
  return (
    <div style={{ width: '100%', height: 600, background: '#f7fafc', padding: '20px', borderRadius: '12px', border: '2px solid #3b82f6' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 40, right: 40, bottom: 40, left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e0" />

          <XAxis
            type="number"
            dataKey="tech"
            name="Technology Level"
            domain={[0, 100]}
            label={{ value: 'Technology Level →', position: 'bottom', offset: 0, style: { fontSize: 14, fontWeight: 'bold' } }}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            type="number"
            dataKey="trust"
            name="Trust Level"
            domain={[0, 100]}
            label={{ value: '↑ Trust Level', angle: -90, position: 'left', offset: 10, style: { fontSize: 14, fontWeight: 'bold' } }}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <div style={{
                    background: 'white',
                    border: `2px solid ${data.color}`,
                    padding: '10px 15px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <p style={{ margin: 0, fontWeight: 'bold', color: data.color, fontSize: '14px' }}>{data.name}</p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>Technology: {data.tech}/100</p>
                    <p style={{ margin: '3px 0 0 0', fontSize: '12px' }}>Trust: {data.trust}/100</p>
                  </div>
                )
              }
              return null
            }}
          />

          {/* Reference lines for quadrants */}
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#cbd5e0" strokeWidth={2} strokeDasharray="5 5" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#cbd5e0" strokeWidth={2} strokeDasharray="5 5" />

          {/* Quadrant labels */}
          <text x="85%" y="15%" fontSize={14} fontWeight="bold" fill="#48bb78" textAnchor="middle">
            🎯 Target Zone
          </text>
          <text x="15%" y="95%" fontSize={14} fontWeight="bold" fill="#fc8181" textAnchor="middle">
            ⚠️ Danger Zone
          </text>

          <Scatter name="Competitors" data={competitorData} fill="#8884d8">
            {competitorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="name" content={<CustomLabel />} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      <div style={{ marginTop: '10px', fontSize: '0.85em', color: '#718096', textAlign: 'center' }}>
        YouTeacher positioned at cutting-edge technology (95/100) with high trust through verification, targeting the upper-right quadrant where established platforms like Dave's ESL have low technology but high legacy trust.
      </div>
    </div>
  )
}
