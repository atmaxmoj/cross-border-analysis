import React from 'react'

interface ProblemBoxProps {
  children: React.ReactNode
}

export default function ProblemBox({ children }: ProblemBoxProps) {
  return <div className="problem-box">{children}</div>
}
