import InfoBox from '../../ui/InfoBox'

export default function TeacherStories() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.4 Teacher Success Stories &amp; Cohort Building</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #2 (Chicken-and-egg cold start)<br/>
        <strong>Solves Pain Point:</strong> Teaching abroad is isolating. Teachers want community: "I wish I knew
        other teachers in my city." "I arrived in China knowing no one."<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Stack Overflow:</strong> Community identity (reputation, badges, belonging) drove engagement
          beyond job search. Teachers need similar sense of belonging.</li>
          <li><strong>Marketplace Cold Start:</strong> Build community BEFORE building marketplace. Community attracts
          users, marketplace monetizes them.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Featured teacher stories: Interviews with successful teachers (how they found their job, challenges
          overcome, city recommendations)</li>
          <li>Cohort building: "Teachers arriving in Beijing in September 2026"—group chat, meetup coordination</li>
          <li>City-specific groups: Beijing ESL Teachers, Shanghai Teachers, etc. (like Facebook Groups but integrated
          into platform)</li>
          <li>Gamification: Badges for milestones (first job applied, first review written, 100 forum posts, 1-year
          teaching anniversary)</li>
        </ul>
      </InfoBox>
    </div>
  )
}
