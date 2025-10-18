'use client'

interface MarkdownReaderProps {
  content: string
  filename: string
}

export default function MarkdownReader({ content, filename }: MarkdownReaderProps) {
  // Simple markdown-to-HTML parser
  const parseMarkdown = (text: string) => {
    let html = text

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>')

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
    html = html.replace(/_(.*?)_/g, '<em>$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #4299e1; text-decoration: underline;">$1</a>')

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>')
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')

    // Wrap consecutive <li> items in <ul>
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      return '<ul style="margin-left: 20px; line-height: 1.8;">' + match + '</ul>'
    })

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre style="background: #f7fafc; padding: 15px; border-radius: 4px; overflow: auto; border-left: 4px solid #4299e1;"><code>$1</code></pre>')

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code style="background: #f7fafc; padding: 2px 6px; border-radius: 3px; font-family: monospace; font-size: 0.9em;">$1</code>')

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote style="border-left: 4px solid #e2e8f0; padding-left: 15px; color: #718096; margin: 10px 0;">$1</blockquote>')

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr style="border: none; border-top: 2px solid #e2e8f0; margin: 20px 0;" />')
    html = html.replace(/^\*\*\*$/gim, '<hr style="border: none; border-top: 2px solid #e2e8f0; margin: 20px 0;" />')

    // Paragraphs (line breaks)
    html = html.split('\n\n').map(para => {
      if (para.startsWith('<') || para.trim() === '') return para
      return `<p style="margin-bottom: 15px; line-height: 1.7;">${para}</p>`
    }).join('\n')

    return html
  }

  return (
    <div>
      <div style={{
        background: '#f7fafc',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '20px',
        borderLeft: '4px solid #48bb78'
      }}>
        <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          📄 {filename}
        </p>
      </div>

      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '4px',
        padding: '30px',
        fontSize: '0.95em',
        lineHeight: '1.7',
        color: '#2d3748'
      }}>
        <style>{`
          h1 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #1a202c;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
          }
          h2 {
            font-size: 1.5em;
            margin-top: 30px;
            margin-bottom: 15px;
            color: #2d3748;
          }
          h3 {
            font-size: 1.2em;
            margin-top: 20px;
            margin-bottom: 10px;
            color: #2d3748;
          }
        `}</style>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
      </div>
    </div>
  )
}
