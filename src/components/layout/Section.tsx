import React from 'react'

interface SectionProps {
  id?: string
  title?: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}
