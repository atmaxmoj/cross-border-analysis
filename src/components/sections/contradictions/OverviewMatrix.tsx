import Section from '../../layout/Section'

export default function OverviewMatrix() {
  return (
    <Section id="overview-matrix" title="Overview Matrix">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Contradiction</th>
            <th>Impact Level</th>
            <th>Addressed In Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Trust Over Tech</td>
            <td>🔴 Critical</td>
            <td>Yes - Verification system</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chicken & Egg</td>
            <td>🔴 Critical</td>
            <td>Yes - Aggregation approach</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Multi-Revenue Trap</td>
            <td>🟡 High</td>
            <td>Yes - Phased monetization</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Global vs. Local</td>
            <td>🟡 High</td>
            <td>Yes - China-first focus</td>
          </tr>
          <tr>
            <td>5</td>
            <td>B2C Dream vs. B2B Reality</td>
            <td>🟡 High</td>
            <td>Yes - Dual optimization</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Tech vs. Team</td>
            <td>🟡 High</td>
            <td>Acknowledged - Hire plan</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Moat Illusion</td>
            <td>🔴 Critical</td>
            <td>Yes - Defensible differentiation</td>
          </tr>
        </tbody>
      </table>
    </Section>
  )
}
