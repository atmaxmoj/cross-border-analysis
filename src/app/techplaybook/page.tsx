import DocumentLayout from '@/components/layout/DocumentLayout'

// Tech Playbook chapters
import PRD from '@/components/tech_playbook/chapters/PRD'
import TechArchitecture from '@/components/tech_playbook/chapters/Architecture'
import TechDatabase from '@/components/tech_playbook/chapters/Database'
import TechServices from '@/components/tech_playbook/chapters/Services'
import TechDeployment from '@/components/tech_playbook/chapters/Deployment'

export default function TechPlaybookPage() {
  return (
    <DocumentLayout
      currentDoc="tech-playbook"
      title="YouTeacher Tech Playbook"
      subtitle="Technical Architecture & Implementation Guide"
    >
      <PRD />
      <TechArchitecture />
      <TechDatabase />
      <TechServices />
      <TechDeployment />
    </DocumentLayout>
  )
}
