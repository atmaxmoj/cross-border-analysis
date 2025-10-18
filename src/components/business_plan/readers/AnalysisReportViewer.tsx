'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface AnalysisReportProps {
  content: string
}

export default function AnalysisReportViewer({ content }: AnalysisReportProps) {
  // Parse markdown into structured sections
  const sections = content.split(/^## /m).filter(Boolean)

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>
          📊 Pain Point Analysis Report
        </h1>
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>
          Structured analysis of user-generated content identifying platform pain points
        </p>
      </div>

      {/* Render each section */}
      {sections.map((section, index) => {
        const lines = section.split('\n')
        const title = lines[0].replace(/#/g, '').trim()
        const body = lines.slice(1).join('\n')

        // Detect pain point sections
        const isPainPoint = title.toLowerCase().includes('pain point')
        const isEvidence = title.toLowerCase().includes('evidence') || title.toLowerCase().includes('quote')
        const isFrequency = title.toLowerCase().includes('frequency') || title.toLowerCase().includes('severity')

        return (
          <div key={index} style={{
            background: '#ffffff',
            border: isPainPoint ? '2px solid #fc8181' : '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '25px',
            marginBottom: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5em',
              marginBottom: '15px',
              color: isPainPoint ? '#e53e3e' : '#2d3748',
              borderBottom: '2px solid #e2e8f0',
              paddingBottom: '10px'
            }}>
              {isPainPoint && '🚨 '}{isEvidence && '💬 '}{isFrequency && '📈 '}
              {title}
            </h2>
            <div style={{
              fontSize: '0.95em',
              lineHeight: '1.8',
              color: '#4a5568'
            }}
            className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({node, ...props}) => <a {...props} style={{ color: '#4299e1', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" />,
                  ul: ({node, ...props}) => <ul {...props} style={{ marginLeft: '20px', marginBottom: '15px' }} />,
                  ol: ({node, ...props}) => <ol {...props} style={{ marginLeft: '20px', marginBottom: '15px' }} />,
                  li: ({node, ...props}) => <li {...props} style={{ marginBottom: '8px' }} />,
                  blockquote: ({node, ...props}) => <blockquote {...props} style={{ background: '#f7fafc', borderLeft: '4px solid #4299e1', padding: '15px 20px', margin: '15px 0', fontStyle: 'italic' }} />,
                  code: ({node, className, ...props}) => {
                    const isInline = !className
                    return isInline
                      ? <code {...props} style={{ background: '#f7fafc', padding: '2px 6px', borderRadius: '3px', fontSize: '0.9em' }} />
                      : <code {...props} className={className} style={{ background: '#2d3748', color: '#f7fafc', padding: '15px', borderRadius: '6px', display: 'block', overflow: 'auto', fontSize: '0.85em' }} />
                  },
                  p: ({node, ...props}) => <p {...props} style={{ marginBottom: '12px' }} />,
                  strong: ({node, ...props}) => <strong {...props} style={{ fontWeight: 'bold', color: '#2d3748' }} />,
                  h3: ({node, ...props}) => <h3 {...props} style={{ fontSize: '1.2em', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', color: '#2d3748' }} />,
                  h4: ({node, ...props}) => <h4 {...props} style={{ fontSize: '1.1em', fontWeight: 'bold', marginTop: '15px', marginBottom: '10px', color: '#4a5568' }} />,
                }}
              >
                {body}
              </ReactMarkdown>
            </div>
          </div>
        )
      })}
    </div>
  )
}
