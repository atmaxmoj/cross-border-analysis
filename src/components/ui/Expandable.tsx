import React from 'react'

interface ExpandableProps {
  title: string
  count?: string
  children: React.ReactNode
}

export default function Expandable({ title, count, children }: ExpandableProps) {
  return (
    <details style={{ margin: '10px 0', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <summary style={{
        cursor: 'pointer',
        fontWeight: 'bold',
        padding: '12px 15px',
        background: 'linear-gradient(to right, #ebf8ff, #f7fafc)',
        borderRadius: '6px',
        listStyle: 'none',
        position: 'relative',
        paddingLeft: '35px',
        transition: 'background 0.2s'
      }}>
        <span style={{ position: 'absolute', left: '12px', color: '#4299e1', fontSize: '14px' }}>▶</span>
        {title} {count && <span style={{ color: '#718096', fontWeight: 'normal' }}>({count})</span>}
      </summary>
      <ul style={{ margin: '15px 15px 15px 35px', paddingLeft: 0 }}>
        {children}
      </ul>
    </details>
  )
}
