'use client'

import { useEffect, useState } from 'react'

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')

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
  }, [])

  const tocItems = [
    { id: 'executive-summary', title: 'Executive Summary', subsections: [] },
    {
      id: 'project-genesis',
      title: 'Project Genesis',
      subsections: [
        { id: 'the-spark', title: 'The Spark' },
        { id: 'initial-hypothesis', title: 'Initial Hypothesis' },
        { id: 'original-model', title: "Pete's Original Business Model" },
      ],
    },
    {
      id: 'core-discoveries',
      title: 'Core Discoveries',
      subsections: [
        { id: 'discovery-1', title: 'Discovery #1: Trust Over Tech' },
        { id: 'discovery-2', title: 'Discovery #2: Verification Feasibility' },
        { id: 'discovery-3', title: 'Discovery #3: Schools Will Pay' },
        { id: 'discovery-4', title: 'Discovery #4: Aggregation Strategy' },
        { id: 'discovery-5', title: 'Discovery #5: Regional Focus Strategy' },
      ],
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      subsections: [
        { id: 'market-size', title: 'Market Size & Segmentation' },
        { id: 'pain-points', title: 'Pain Points Analysis' },
        { id: 'competitive-landscape', title: 'Competitive Landscape' },
        { id: 'barriers', title: 'Barriers to Entry' },
      ],
    },
    {
      id: 'strategic-questions',
      title: 'Strategic Questions',
      subsections: [
        { id: 'question-1', title: 'How do we compete when the incumbent\'s advantage is not technology?' },
        { id: 'question-2', title: 'How do we solve the \'chicken and egg\' problem?' },
        { id: 'question-3', title: 'How do we monetize a value proposition for a non-paying audience?' },
        { id: 'question-4', title: 'What is our true ambition: a profitable niche business or a scalable global platform?' },
        { id: 'question-5', title: 'How do we signal trust before we have a reputation?' },
        { id: 'question-6', title: 'What is our platform\'s stance on discrimination in the market?' },
        { id: 'question-7', title: 'How do we build a durable, non-technical moat?' },
      ],
    },
    {
      id: 'solution-toolkit',
      title: 'A Toolkit of Analogues and Case Studies',
      subsections: [
        { id: 'glassdoor-playbook', title: 'The Glassdoor Playbook' },
        { id: 'marketplace-cold-starts', title: 'Marketplace Cold-Starts' },
        { id: 'seek-regional-champion', title: 'The Regional Champion Model (Seek.com)' },
        { id: 'platform-discrimination', title: 'Combating Platform Discrimination' },
        { id: 'zillow-data-first', title: 'Zillow\'s Data-First Cold Start' },
        { id: 'expert-verification', title: 'The Expert Verification Model' },
        { id: 'amazon-trust-flywheel', title: 'Amazon\'s Trust-Building Flywheel' },
        { id: 'indeed-aggregation-model', title: 'Indeed\'s Aggregation Model' },
        { id: 'esl-internal-cases', title: 'Internal Case Studies from the ESL Market' },
      ],
    },
    { id: 'business-model', title: 'Business Model', subsections: [] },
    { id: 'risks', title: 'Risk Assessment', subsections: [] },
    {
      id: 'comparison',
      title: "Pete's Original Plan vs. Enhanced Strategy",
      subsections: [
        { id: 'comparison-table', title: 'Side-by-Side Comparison' },
        { id: 'strategic-shifts', title: 'Key Strategic Shifts' },
      ],
    },
  ]

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
