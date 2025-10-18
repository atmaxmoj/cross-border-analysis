import InfoBox from '../../../ui/InfoBox'

export default function SchoolReviews() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.1 School Reviews &amp; Ratings System</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #8 (Community quality vs volume)<br/>
        <strong>Solves Pain Point:</strong> Teachers desperately seek information: "What's it like to work at [School X]?"
        "Anyone taught at this school before?" Dave's ESL forums are "ghost towns" with no recent posts.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Glassdoor:</strong> Company reviews created $8.1B business. Teachers need the same for schools.
          Reviews provide trust and information that job listings cannot.</li>
          <li><strong>Amazon Trust Flywheel:</strong> Buyer reviews increased trust, increased sales, increased
          selection, created virtuous cycle. School reviews can do the same for teacher confidence.</li>
          <li><strong>Stack Overflow:</strong> Community-driven content quality (voting, moderation) beats paywalls
          and spam. But balance needed—over-moderation kills engagement (SO's 2014+ decline).</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Only verified teachers (confirmed employment via contract upload or admin verification) can review schools</li>
          <li>Structured review format: Salary accuracy, contract honoring, management quality, teaching conditions,
          work-life balance (5-star ratings + written review)</li>
          <li>Community moderation: Flag inappropriate reviews, upvote/downvote for helpfulness</li>
          <li>Schools can respond to reviews (like Glassdoor), but cannot remove negative reviews</li>
        </ul>
      </InfoBox>
    </div>
  )
}
