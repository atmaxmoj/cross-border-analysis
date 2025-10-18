import ForumPostsViewer from '@/components/business_plan/readers/ForumPostsViewer'
import fs from 'fs'
import path from 'path'

export default function DavesESLDataPage() {
  const contentPath = path.join(process.cwd(), 'public', 'data', 'daves_esl_content.json')
  const threadsPath = path.join(process.cwd(), 'public', 'data', 'daves_esl_threads.json')

  const contentData = JSON.parse(fs.readFileSync(contentPath, 'utf-8'))
  const threadsData = JSON.parse(fs.readFileSync(threadsPath, 'utf-8'))

  // Combine both datasets
  const allPosts = [...contentData, ...threadsData]

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
      <ForumPostsViewer posts={allPosts} filename="Dave's ESL Cafe Raw Data (Combined)" />
    </div>
  )
}
