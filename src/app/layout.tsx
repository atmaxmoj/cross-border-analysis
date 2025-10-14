import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouTeacher ESL Recruitment Platform - Strategic Analysis & Business Plan',
  description: 'Comprehensive business plan for YouTeacher ESL recruitment platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
