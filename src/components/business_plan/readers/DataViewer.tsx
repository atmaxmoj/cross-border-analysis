'use client'

import { useState } from 'react'

interface DataViewerProps {
  title: string
  dataUrl: string
  type: 'json' | 'markdown'
  description?: string
}

export default function DataViewer({ title, dataUrl, type, description }: DataViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const loadData = async () => {
    if (isOpen) {
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(dataUrl)
      const text = await response.text()

      if (type === 'json') {
        const json = JSON.parse(text)
        setContent(JSON.stringify(json, null, 2))
      } else {
        setContent(text)
      }
      setIsOpen(true)
    } catch (error) {
      setContent(`Error loading data: ${error}`)
      setIsOpen(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
      <button
        onClick={loadData}
        style={{
          background: '#4299e1',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9em',
          fontWeight: 'bold'
        }}
      >
        {isLoading ? 'Loading...' : isOpen ? `▼ Hide ${title}` : `▶ View ${title}`}
      </button>

      {description && (
        <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#718096' }}>
          {description}
        </span>
      )}

      {isOpen && (
        <div style={{
          marginTop: '10px',
          background: '#f7fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '15px',
          maxHeight: '500px',
          overflow: 'auto'
        }}>
          <pre style={{
            margin: 0,
            fontSize: '0.75em',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}>
            {content}
          </pre>
        </div>
      )}
    </div>
  )
}
