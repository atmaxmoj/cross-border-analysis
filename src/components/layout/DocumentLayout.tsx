'use client'

import TableOfContents from './TableOfContents'
import DocumentSelector from '../ui/DocumentSelector'

interface DocumentLayoutProps {
  currentDoc: 'business-plan' | 'tech-playbook'
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function DocumentLayout({ currentDoc, title, subtitle, children }: DocumentLayoutProps) {
  return (
    <>
      <div style={{ position: 'fixed', top: '20px', left: '300px', zIndex: 1001 }}>
        <DocumentSelector currentDoc={currentDoc} />
      </div>

      <div className="header-wrapper">
        <header>
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <div className="meta-info">
            <div className="meta-item">
              <strong>Project Overview:</strong> ESL teacher recruitment platform targeting the China market
            </div>
            <div className="meta-item">
              <strong>Team:</strong> Pete (Domain Expert) & Mojo (Technical Lead)
            </div>
            <div className="meta-item">
              <strong>Date:</strong> October 2025
            </div>
            <div className="meta-item">
              <strong>Status:</strong> Pre-Launch Strategic Planning
            </div>
          </div>
        </header>
      </div>

      <div className="page-wrapper">
        <TableOfContents />

        <div className="content-wrapper">
          <main className="container">
            <div className="content">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
