import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'

export default function AppendixHForeignTeacherLicensing() {
  return (
    <Section id="appendix-h-licensing" title="Appendix H: China Foreign Teacher Employment Licensing Requirements">
      <InfoBox>
        <strong>⚠️ Critical Regulatory Context:</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          This appendix provides essential background on China&apos;s foreign teacher employment licensing system, which directly
          impacts our market segmentation strategy. Understanding these requirements explains
          why ~70% of small training centers cannot legally hire foreign teachers, and why our banking verification + badge
          system creates defensible competitive moats.
        </p>
      </InfoBox>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Overview: Who Can Legally Hire Foreign Teachers in China?</h3>

      <div style={{ padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #ecc94b', borderRadius: '8px', marginBottom: '20px' }}>
        <strong style={{ fontSize: '1.1em' }}>Two-Layer Licensing System</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em' }}>
          Schools/institutions must have BOTH licenses to legally employ foreign teachers:
        </p>
        <ol style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          <li><strong>办学许可证 (School Operation Permit)</strong> - Issued by Education Bureau/Labor Bureau</li>
          <li><strong>聘请外国文教专家单位资格认可证书 (Authorization to Employ Foreign Cultural/Educational Experts)</strong> - Issued by Foreign Expert Bureau</li>
        </ol>
      </div>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Requirements for Foreign Teacher Employment Authorization</h3>

      <table style={{ width: '100%', marginTop: '15px', fontSize: '0.9em', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#dbeafe', borderBottom: '2px solid #3b82f6' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Requirement</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Details</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Why This Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>1. Independent Legal Entity</strong></td>
            <td style={{ padding: '10px' }}>Must have business license with independent legal person status</td>
            <td style={{ padding: '10px' }}>Blocks individual tutors or informal groups</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>2. Industry Qualification</strong></td>
            <td style={{ padding: '10px' }}>办学许可证 (School Operation Permit) from Education/Labor Bureau</td>
            <td style={{ padding: '10px' }}>Only licensed educational institutions qualify</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>3. Physical Space</strong></td>
            <td style={{ padding: '10px' }}>≥500 square meters teaching space</td>
            <td style={{ padding: '10px' }}>Eliminates home-based tutoring operations</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>4. Operating History</strong></td>
            <td style={{ padding: '10px' }}>Must operate 1+ year with stable enrollment before applying</td>
            <td style={{ padding: '10px' }}>Prevents fly-by-night operations</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>5. Dedicated Staff</strong></td>
            <td style={{ padding: '10px' }}>Must have foreign affairs office with dedicated personnel</td>
            <td style={{ padding: '10px' }}>Requires organizational maturity</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>6. Management Systems</strong></td>
            <td style={{ padding: '10px' }}>Written foreign expert management policies and procedures</td>
            <td style={{ padding: '10px' }}>Ensures institutional capability</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>7. Financial Capacity</strong></td>
            <td style={{ padding: '10px' }}>Demonstrated ability to pay foreign expert salaries</td>
            <td style={{ padding: '10px' }}>Prevents exploitation</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}><strong>8. Living Facilities</strong></td>
            <td style={{ padding: '10px' }}>Housing/housing allowance, basic living support</td>
            <td style={{ padding: '10px' }}>Protects teacher welfare</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Market Impact: Who Has Authorization vs. Who Doesn&apos;t</h3>

      <table style={{ width: '100%', marginTop: '15px', fontSize: '0.9em', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#dcfce7', borderBottom: '2px solid #22c55e' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Institution Type</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Estimated Count</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Has Authorization?</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
            <td style={{ padding: '10px' }}><strong>International Schools</strong></td>
            <td style={{ padding: '10px' }}>800-1,000</td>
            <td style={{ padding: '10px' }}>✅ ~95%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
            <td style={{ padding: '10px' }}><strong>Public School International Departments</strong></td>
            <td style={{ padding: '10px' }}>500-800</td>
            <td style={{ padding: '10px' }}>✅ ~90%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
            <td style={{ padding: '10px' }}><strong>Major Training Chains</strong></td>
            <td style={{ padding: '10px' }}>300-500</td>
            <td style={{ padding: '10px' }}>✅ ~85%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #fecaca', backgroundColor: '#fef2f2' }}>
            <td style={{ padding: '10px' }}><strong>Small Training Centers</strong></td>
            <td style={{ padding: '10px' }}>5,000-10,000</td>
            <td style={{ padding: '10px' }}>❌ ~10%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #fecaca', backgroundColor: '#fef2f2' }}>
            <td style={{ padding: '10px' }}><strong>Newly Established Schools</strong></td>
            <td style={{ padding: '10px' }}>500-1,000/year</td>
            <td style={{ padding: '10px' }}>❌ 0%</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fef3c7', border: '2px solid #ecc94b', borderRadius: '8px' }}>
        <strong style={{ fontSize: '1.1em' }}>Market Segmentation Insight</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          <strong>Authorized institutions: ~2,000-3,000 (30% of market)</strong><br/>
          These are our target customers for verified badge system.
        </p>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          <strong>Unauthorized institutions: ~5,000-10,000 (70% of market)</strong><br/>
          These include small training centers and newly established schools.
        </p>
      </div>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Implications for YouTeacher Platform Strategy</h3>

      <table style={{ width: '100%', marginTop: '15px', fontSize: '0.9em', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#dbeafe', borderBottom: '2px solid #3b82f6' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Strategic Decision</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Rationale</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>Open Platform Access</strong></td>
            <td style={{ padding: '10px' }}>Maximize TAM - don&apos;t reject 70% of market</td>
            <td style={{ padding: '10px' }}>All schools can post jobs</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>Differentiated Badging</strong></td>
            <td style={{ padding: '10px' }}>Create premium value for authorized schools</td>
            <td style={{ padding: '10px' }}>Three-tier badge system</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #bfdbfe' }}>
            <td style={{ padding: '10px' }}><strong>Teacher Education</strong></td>
            <td style={{ padding: '10px' }}>Protect teachers from legal risk</td>
            <td style={{ padding: '10px' }}>Community messaging about verification</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}><strong>Premium Upsell Path</strong></td>
            <td style={{ padding: '10px' }}>Authorized schools see 3x application rate</td>
            <td style={{ padding: '10px' }}>Premium tier $149/post for verified badge</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '8px' }}>
        <strong>Key Takeaway:</strong>
        <p style={{ margin: '10px 0', fontSize: '0.9em', lineHeight: '1.6' }}>
          Understanding China&apos;s foreign teacher licensing requirements explains why <strong>banking verification + manual badge
          verification creates a defensible moat</strong>. The three-tier system matches regulatory reality while maximizing
          platform TAM and monetization.
        </p>
      </div>
    </Section>
  )
}
