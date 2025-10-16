import InfoBox from '../../ui/InfoBox'

export default function CommunityForum() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>B.3 Community Forum &amp; Q&amp;A</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #8 (Community quality vs volume)<br/>
        <strong>Solves Pain Point:</strong> Teachers have questions beyond job search: visa processes, cultural adaptation,
        city recommendations, contract negotiation tips. Dave's ESL forums are outdated and inactive.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Stack Overflow:</strong> Free Q&amp;A content attracted 28.7M users, monetized via job listings.
          Teachers need Q&amp;A for ESL-specific questions (visa, teaching tips, city guides).</li>
          <li><strong>Stack Overflow Warning:</strong> Balance community quality with accessibility. Over-moderation
          (2014+ decline) killed engagement. New users must feel welcome.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li>Reddit-style forum: Upvote/downvote, threaded comments, topic tags (Visa, Teaching, City Life, etc.)</li>
          <li>Reputation system: Earn points for helpful answers, unlock moderation privileges</li>
          <li>Welcoming to newcomers: No harsh "duplicate question" closures like Stack Overflow (avoid SO's mistake)</li>
          <li>SEO-optimized: Questions and answers indexed by Google, driving organic traffic</li>
        </ul>
      </InfoBox>
    </div>
  )
}
