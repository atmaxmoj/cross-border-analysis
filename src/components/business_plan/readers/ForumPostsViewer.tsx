'use client'

import { useState } from 'react'

interface ForumPost {
  title?: string
  author?: string
  date?: string
  content?: string
  body?: string
  url?: string
  upvotes?: number
  replies?: number
  [key: string]: any
}

interface ForumPostsViewerProps {
  posts: ForumPost[]
  filename: string
}

export default function ForumPostsViewer({ posts, filename }: ForumPostsViewerProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 20

  // Filter posts based on search
  const filteredPosts = posts.filter(post => {
    const searchLower = searchTerm.toLowerCase()
    return (
      post.title?.toLowerCase().includes(searchLower) ||
      post.content?.toLowerCase().includes(searchLower) ||
      post.body?.toLowerCase().includes(searchLower) ||
      post.author?.toLowerCase().includes(searchLower)
    )
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>
          📝 {filename}
        </h1>
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>
          Total: <strong>{posts.length}</strong> posts
          {filteredPosts.length !== posts.length && ` | Filtered: ${filteredPosts.length} posts`}
        </p>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search posts by title, content, or author..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1) // Reset to first page on search
          }}
          style={{
            width: '100%',
            padding: '12px 20px',
            fontSize: '1em',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#4299e1'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </div>

      {/* Posts */}
      {currentPosts.map((post, index) => {
        const actualIndex = indexOfFirstPost + index
        const content = post.content || post.body || 'No content'
        const truncatedContent = content.length > 500 ? content.substring(0, 500) + '...' : content

        return (
          <div key={actualIndex} style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '15px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
          }}>
            {/* Post Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <div>
                <span style={{
                  background: '#4299e1',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.9em',
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}>
                  #{actualIndex + 1}
                </span>
                {post.author && (
                  <span style={{
                    color: '#718096',
                    fontSize: '0.9em'
                  }}>
                    👤 {post.author}
                  </span>
                )}
              </div>
              {post.date && (
                <span style={{
                  color: '#a0aec0',
                  fontSize: '0.85em'
                }}>
                  📅 {post.date}
                </span>
              )}
            </div>

            {/* Post Title */}
            {post.title && (
              <h3 style={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                color: '#2d3748',
                marginBottom: '10px'
              }}>
                {post.title}
              </h3>
            )}

            {/* Post Content */}
            <div style={{
              fontSize: '0.95em',
              lineHeight: '1.7',
              color: '#4a5568',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {truncatedContent}
            </div>

            {/* Post Metadata */}
            <div style={{
              marginTop: '15px',
              paddingTop: '10px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              gap: '20px',
              fontSize: '0.85em',
              color: '#718096'
            }}>
              {post.upvotes !== undefined && (
                <span>⬆️ {post.upvotes} upvotes</span>
              )}
              {post.replies !== undefined && (
                <span>💬 {post.replies} replies</span>
              )}
              {post.url && (
                <a href={post.url} target="_blank" rel="noopener noreferrer" style={{
                  color: '#4299e1',
                  textDecoration: 'underline'
                }}>
                  🔗 View original
                </a>
              )}
            </div>
          </div>
        )
      })}

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '30px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={{
              padding: '10px 20px',
              background: currentPage === 1 ? '#e2e8f0' : '#4299e1',
              color: currentPage === 1 ? '#a0aec0' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            ← Previous
          </button>
          <span style={{
            padding: '10px 20px',
            background: '#f7fafc',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={{
              padding: '10px 20px',
              background: currentPage === totalPages ? '#e2e8f0' : '#4299e1',
              color: currentPage === totalPages ? '#a0aec0' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
