import React from 'react'

interface ChapterProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Chapter({ id, title, children }: ChapterProps) {
  return (
    <div id={id} className="chapter" data-type="chapter">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
