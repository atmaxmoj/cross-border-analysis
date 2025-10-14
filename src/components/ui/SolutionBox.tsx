import React from 'react'

interface SolutionBoxProps {
  children: React.ReactNode
}

export default function SolutionBox({ children }: SolutionBoxProps) {
  return <div className="solution-box">{children}</div>
}
