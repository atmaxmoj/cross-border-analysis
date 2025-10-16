'use client'

import { useEffect, useState } from 'react'

interface TocSubsection {
  id: string
  title: string
}

interface TocItem {
  id: string
  title: string
  subsections: TocSubsection[]
}

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')
  const [tocItems, setTocItems] = useState<TocItem[]>([])

  // Auto-detect chapters and sections from DOM
  useEffect(() => {
    const buildTocFromDOM = () => {
      const items: TocItem[] = []

      // Find all chapter elements
      const chapters = document.querySelectorAll('.chapter')

      chapters.forEach((chapter) => {
        const chapterId = chapter.id
        const chapterTitle = chapter.querySelector('h2')?.textContent || ''

        // Find all section elements within this chapter
        const sections = chapter.querySelectorAll('section')
        const subsections: TocSubsection[] = []

        sections.forEach((section) => {
          const sectionId = section.id
          const sectionTitle = section.querySelector('h3')?.textContent || ''

          if (sectionId && sectionTitle) {
            subsections.push({
              id: sectionId,
              title: sectionTitle
            })
          }
        })

        if (chapterId && chapterTitle) {
          items.push({
            id: chapterId,
            title: chapterTitle,
            subsections
          })
        }
      })

      setTocItems(items)
    }

    // Build TOC after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(buildTocFromDOM, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const navLinks = document.querySelectorAll('.sidebar-toc a')

    function getAbsoluteOffsetTop(element: HTMLElement): number {
      let offsetTop = 0
      let currentElement: HTMLElement | null = element
      while (currentElement) {
        offsetTop += currentElement.offsetTop
        currentElement = currentElement.offsetParent as HTMLElement | null
      }
      return offsetTop
    }

    function highlightNavigation() {
      let current = ''
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

      // Find all sections with IDs that match TOC links
      const sections: Array<{ id: string; top: number }> = []
      navLinks.forEach((link) => {
        const id = link.getAttribute('href')?.substring(1)
        if (id) {
          const section = document.getElementById(id)
          if (section) {
            sections.push({
              id: id,
              top: getAbsoluteOffsetTop(section),
            })
          }
        }
      })

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition + 150 >= sections[i].top) {
          current = sections[i].id
          break
        }
      }

      setActiveSection(current)
    }

    // Smooth scroll for TOC links
    navLinks.forEach((link) => {
      const handleClick = (e: Event) => {
        e.preventDefault()
        const anchor = e.currentTarget as HTMLAnchorElement
        const targetId = anchor.getAttribute('href')?.substring(1)
        const targetSection = targetId ? document.getElementById(targetId) : null

        if (targetSection) {
          const offsetTop = getAbsoluteOffsetTop(targetSection)
          window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth',
          })
        }
      }
      link.addEventListener('click', handleClick)
    })

    // Initial highlight
    highlightNavigation()

    // Update on scroll with throttling for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          highlightNavigation()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  return (
    <nav className="sidebar-toc">
      <h3>Table of Contents</h3>
      <ol>
        {tocItems.map((item) => {
          const isParentActive = activeSection === item.id
          const hasActiveChild = item.subsections.some((sub) => sub.id === activeSection)
          const shouldExpand = isParentActive || hasActiveChild

          return (
            <li key={item.id} className={shouldExpand ? 'has-active' : ''}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.title}
              </a>
              {item.subsections.length > 0 && (
                <ol className="subsections">
                  {item.subsections.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        className={activeSection === sub.id ? 'active' : ''}
                      >
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
