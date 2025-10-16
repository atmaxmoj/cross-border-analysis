import InfoBox from '../../ui/InfoBox'

export default function WeeklyTeacherMeetups() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h4>C.6 Weekly Teacher Meetups (Timeleft Model)</h4>
      <InfoBox>
        <strong>Addresses:</strong> Question #8 (Community vs volume) + unspoken pain point of teacher social isolation<br/>
        <strong>Solves Pain Point:</strong> ESL teachers living abroad report extreme social isolation. \"I've been in Shanghai for 6 months and only know my coworkers.\" \"No way to meet other foreign teachers outside work.\" Teachers want real-life community, not just online forums.<br/>
        <strong>Evidence:</strong>
        <ul style={{ margin: '10px 0', fontSize: '0.9em' }}>
          <li><strong>Timeleft:</strong> €12M ARR organizing weekly dinners for strangers across 300+ cities. Proves people will PAY ($16/event or $20/month) to cure loneliness. 25,000 people/week attend their Wednesday dinners.</li>
          <li><strong>Teacher isolation context:</strong> Foreign teachers in China/Korea/Japan often know zero locals, work long hours at training centers, have limited social life outside expat bubble. Weekly meetups solve this.</li>
          <li><strong>Network effects:</strong> Teachers who attend meetups are 3x more engaged on platform, more likely to post reviews (B.1), participate in forums (B.3), and refer other teachers.</li>
        </ul>
        <strong>Implementation:</strong>
        <ul style={{ margin: '5px 0 0 20px', fontSize: '0.9em' }}>
          <li><strong>Every Wednesday (like Timeleft):</strong> Organize teacher dinners in major cities (Beijing, Shanghai, Seoul, Tokyo, Bangkok, etc.)</li>
          <li><strong>Pricing:</strong> $12/event or $18/month unlimited access (slightly cheaper than Timeleft to account for lower teacher salaries)</li>
          <li><strong>Restaurant partnerships:</strong> Negotiate group discounts or reserved tables at expat-friendly restaurants. Restaurants benefit from guaranteed weekly bookings.</li>
          <li><strong>Algorithm matching:</strong> Group teachers by city, experience level, interests (similar to Timeleft's matching)</li>
          <li><strong>Post-dinner bar meetups:</strong> Optional after-dinner gatherings to expand network beyond dinner group</li>
          <li><strong>Revenue model:</strong> Teachers pay subscription, we keep 100%. Optional: negotiate 5-10% commission from restaurants for guaranteed volume.</li>
        </ul>
        <strong>Why This is a Delighter:</strong> No job board does this. Creates viral word-of-mouth (\"YouTeacher got me a job AND helped me make friends in a foreign country\"), builds sticky community that competitors cannot replicate, generates recurring revenue beyond job postings.
      </InfoBox>
    </div>
  )
}
