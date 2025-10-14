import ForumPostsViewer from '@/components/readers/ForumPostsViewer'
import fs from 'fs'
import path from 'path'

export default function RedditExploratoryEvidencePage() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'reddit_exploratory_evidence.json')
  const content = fs.readFileSync(filePath, 'utf-8')
  const posts = JSON.parse(content)

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
      <ForumPostsViewer posts={posts} filename="reddit_exploratory_evidence.json" />
    </div>
  )
}
