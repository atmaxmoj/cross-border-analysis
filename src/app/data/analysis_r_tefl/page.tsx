import AnalysisReportViewer from '@/components/readers/AnalysisReportViewer'
import fs from 'fs'
import path from 'path'

export default function AnalysisRTEFLPage() {
  const filePath = path.join(process.cwd(), 'public', 'analysis', 'analysis_r_tefl.md')
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
      <AnalysisReportViewer content={content} />
    </div>
  )
}
