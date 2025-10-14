import React from 'react'

interface ChapterProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Chapter({ id, title, children }: ChapterProps) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
