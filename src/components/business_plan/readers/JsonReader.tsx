'use client'

interface JsonReaderProps {
  data: any
  filename: string
}

export default function JsonReader({ data, filename }: JsonReaderProps) {
  // Handle array of posts/content
  if (Array.isArray(data)) {
    return (
      <div>
        <div style={{
          background: '#f7fafc',
          padding: '15px',
          borderRadius: '4px',
          marginBottom: '20px',
          borderLeft: '4px solid #4299e1'
        }}>
          <p style={{ fontSize: '1.1em', fontWeight: 'bold', marginBottom: '5px' }}>
            {filename}
          </p>
          <p style={{ color: '#718096' }}>
            Total entries: <strong>{data.length}</strong>
          </p>
        </div>

        {data.map((item: any, index: number) => (
          <div key={index} style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '4px',
            padding: '20px',
            marginBottom: '15px'
          }}>
            <div style={{
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '10px',
              marginBottom: '15px'
            }}>
              <span style={{
                background: '#4299e1',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '0.9em',
                fontWeight: 'bold'
              }}>
                Entry #{index + 1}
              </span>
            </div>

            {Object.entries(item).map(([key, value]: [string, any]) => (
              <div key={key} style={{ marginBottom: '12px' }}>
                <div style={{
                  fontSize: '0.85em',
                  fontWeight: 'bold',
                  color: '#2d3748',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '5px'
                }}>
                  {key}:
                </div>
                <div style={{
                  fontSize: '0.95em',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}>
                  {typeof value === 'object' ? (
                    <pre style={{
                      background: '#f7fafc',
                      padding: '10px',
                      borderRadius: '4px',
                      fontSize: '0.85em',
                      overflow: 'auto'
                    }}>
                      {JSON.stringify(value, null, 2)}
                    </pre>
                  ) : (
                    value?.toString() || 'N/A'
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  // Handle single object
  return (
    <div>
      <div style={{
        background: '#f7fafc',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '20px',
        borderLeft: '4px solid #4299e1'
      }}>
        <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          {filename}
        </p>
      </div>

      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '4px',
        padding: '20px'
      }}>
        {Object.entries(data).map(([key, value]: [string, any]) => (
          <div key={key} style={{ marginBottom: '15px' }}>
            <div style={{
              fontSize: '0.85em',
              fontWeight: 'bold',
              color: '#2d3748',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '5px'
            }}>
              {key}:
            </div>
            <div style={{
              fontSize: '0.95em',
              color: '#4a5568',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {typeof value === 'object' ? (
                <pre style={{
                  background: '#f7fafc',
                  padding: '10px',
                  borderRadius: '4px',
                  fontSize: '0.85em',
                  overflow: 'auto'
                }}>
                  {JSON.stringify(value, null, 2)}
                </pre>
              ) : (
                value?.toString() || 'N/A'
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
