# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **planning & strategy repository** for the **YouTeacher ESL Recruitment Platform** - a business that protects ESL teachers from scam schools while providing superior job discovery compared to outdated competitors like Dave's ESL Cafe (1995-era platforms that dominate the market despite terrible UX).

**Repository Purpose:** Strategic analysis, business planning, and documentation for validating and launching the YouTeacher platform.

**Your Role:** Act as a Principal Product Manager helping with strategic analysis, documentation, and planning work.

## Project Context

### The Team
- **Pete Wilcox**: Domain expert with 6 years ESL teaching experience in China, understands market pain points intimately
- **Mojo (Sijie Wang)**: Technical lead, fast developer, will build scrapers and platform automation

### The Business Opportunity
Pete had a late-night epiphany: platforms like Dave's ESL Cafe and SeriousTeachers.org have been unchanged for 19 years despite horrific UI/UX. They survive on **trust and network effects**, not technology superiority.

The project involves analyzing the ESL teacher recruitment market, identifying opportunities, and developing a strategy to enter this space.

## Key Files & Their Relationships

### Conversation History (Downloads folder)
- `Claude _ chat1.html` - Pete's original vision and brainstorm
- `Claude_chat2.html` - Critical analysis identifying contradictions and risks
- `Claude _ Claude.html` - Synthesizing analysis into comprehensive business plan

### Strategy Documents
- `esl-platform-analysis.html` (13KB)
  - Initial strategic analysis focusing on Trust Over Tech and Chicken & Egg problems
  - Simplified visualization of key insights

- `youteacher-business-plan.html` (21KB)
  - Intermediate version of business plan
  - Partial sections only

- `youteacher-complete-plan.html` (97KB) **← PRIMARY DOCUMENT**
  - Complete 45-page business plan converted to HTML
  - All 12 sections plus executive summary, conclusion, appendix
  - Professional styling with color-coded boxes
  - CSS Grid-based visualizations (e.g., vicious cycle diagram)
  - Self-contained single-page HTML with embedded CSS

## Working with HTML Documents

### HTML Document Architecture
The business plan HTML files use:
- **Self-contained design**: No external dependencies, all CSS embedded
- **Color-coded information boxes**:
  - `.solution-box` - Green background for solutions/recommendations
  - `.problem-box` - Red background for problems/contradictions
  - `.info-box` - Blue background for insights
  - `.phase-box` - Colored boxes for project phases
- **CSS Grid layouts** for complex diagrams (see vicious cycle visualization)
- **Tree structures** using monospace fonts for hierarchical data
- **Gradient headers** with dark blue background (`#2d3748` to `#1a202c`)
- **Responsive design** that works across devices

### Design Principles

When editing HTML documents:

1. **Always read the file first** - Required by Edit tool
2. **Preserve exact content** - Every word from source unless explicitly instructed to change
3. **Color consistency** - Use established color palette:
   - Headers: Dark blue gradient
   - Accent: Purple gradient (`#667eea` to `#764ba2`)
   - Problem boxes: Light red (`#fff5f5`) with red border (`#fc8181`)
   - Solution boxes: Light green (`#f0fff4`) with green border (`#68d391`)
   - Info boxes: Light blue (`#ebf8ff`) with blue border (`#4299e1`)
4. **CSS Grid for diagrams** - Don't use absolute positioning, use grid for alignment
5. **Professional tone** - These are business plan documents

## Multi-Project Workspace Note

This `projects` directory contains multiple independent projects. YouTeacher planning documents are in the root. Other subdirectories include:
- `ashgrove_web/` - Separate project (web development)
- `collect_n8n/` - Separate project (n8n automation)
- `drowning-dog/` - Separate project
- etc.

When working on YouTeacher, focus on root-level HTML files and PDF. Do not confuse with other projects.

## File Commands

No build commands needed - these are static HTML documents.

**To view:** Open HTML files in any browser.

**To edit:** Use the Edit tool after reading the file with the Read tool.
