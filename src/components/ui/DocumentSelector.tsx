'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type DocumentType = 'business-plan' | 'tech-playbook'

interface DocumentSelectorProps {
  currentDoc: DocumentType
}

export default function DocumentSelector({ currentDoc }: DocumentSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const documents = [
    { id: 'business-plan' as DocumentType, label: 'Business Plan', icon: '📋', path: '/businessplan' },
    { id: 'tech-playbook' as DocumentType, label: 'Tech Playbook', icon: '🛠️', path: '/techplaybook' },
  ]

  const current = documents.find(d => d.id === currentDoc)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          backgroundColor: '#2d3748',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <span>{current?.icon}</span>
        <span>{current?.label}</span>
        <span style={{ marginLeft: '4px', fontSize: '12px' }}>▼</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            minWidth: '200px',
            zIndex: 1000,
          }}
        >
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => {
                router.push(doc.path)
                setIsOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                padding: '12px 16px',
                backgroundColor: doc.id === currentDoc ? '#f7fafc' : 'white',
                border: 'none',
                borderBottom: '1px solid #e2e8f0',
                cursor: 'pointer',
                fontSize: '14px',
                textAlign: 'left',
                fontWeight: doc.id === currentDoc ? '600' : '400',
              }}
            >
              <span>{doc.icon}</span>
              <span>{doc.label}</span>
              {doc.id === currentDoc && <span style={{ marginLeft: 'auto', color: '#4299e1' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
