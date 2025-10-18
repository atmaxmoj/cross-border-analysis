import MarkdownReader from '@/components/business_plan/readers/MarkdownReader'
import fs from 'fs'
import path from 'path'

export default function PainPointAnalysisFrameworkPage() {
  const filePath = path.join(process.cwd(), 'public', 'analysis', 'pain_point_analysis_framework.md')
  const content = fs.readFileSync(filePath, 'utf-8')

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <a href="/" style={{
          color: '#4299e1',
          textDecoration: 'underline',
          fontSize: '1.1em',
          fontWeight: 'bold'
        }}>
          ← Back to Business Plan
        </a>
      </div>
      <MarkdownReader content={content} filename="pain_point_analysis_framework.md" />
    </div>
  )
}
