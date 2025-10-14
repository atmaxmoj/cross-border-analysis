import React from 'react'

interface InsightBoxProps {
  children: React.ReactNode
}

export default function InsightBox({ children }: InsightBoxProps) {
  return <div className="insight-box">{children}</div>
}
