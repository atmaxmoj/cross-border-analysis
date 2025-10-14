import Section from '../../layout/Section'
import InfoBox from '../../ui/InfoBox'
import ProblemBox from '../../ui/ProblemBox'
import InsightBox from '../../ui/InsightBox'

export default function Discovery2() {
  return (
    <Section id="discovery-2" title="Discovery #2: Verification of School Legitimacy is Technically Feasible">
      <p><strong>What prompted this investigation:</strong> Discovery #1 revealed that trust, not technology, drives success in this market. The canonical next question: can we actually verify school legitimacy at scale? Having lived in China, I knew this should be surprisingly feasible—the Chinese government's tendency to control and document everything means comprehensive business and education registries exist. This creates an opportunity: what if we could programmatically verify what Dave's ESL Cafe has never bothered to check?</p>

      <h4>Government Data Sources Available:</h4>
      <InfoBox>
        <strong>Primary Sources:</strong><br />
        <div className="tree-structure">
          ├── Chinese Ministry of Education<br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://www.moe.gov.cn/" target="_blank" rel="noopener noreferrer">MOE.gov.cn</a> - Official portal<br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://zwfw.moe.gov.cn/" target="_blank" rel="noopener noreferrer">教育部政务服务平台</a> - Government service platform<br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://www.chsi.com.cn/" target="_blank" rel="noopener noreferrer">学信网 (CHSI)</a> - Higher education verification<br />
          │&nbsp;&nbsp;&nbsp;└── <a href="https://cnhsi.com.cn/" target="_blank" rel="noopener noreferrer">民办教育信息网</a> - Private school registry<br />
          ├── Provincial Education Bureaus - Licensed institution lists <span style={{fontSize: '0.75em', color: '#718096'}}>(All 28 provinces/municipalities)</span><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jw.beijing.gov.cn/" target="_blank" rel="noopener noreferrer">Beijing (北京市教育委员会)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://edu.sh.gov.cn/" target="_blank" rel="noopener noreferrer">Shanghai (上海市教育委员会)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jy.tj.gov.cn/" target="_blank" rel="noopener noreferrer">Tianjin (天津市教育委员会)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jw.cq.gov.cn/" target="_blank" rel="noopener noreferrer">Chongqing (重庆市教育委员会)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://edu.gd.gov.cn/" target="_blank" rel="noopener noreferrer">Guangdong (广东省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.jiangsu.gov.cn/" target="_blank" rel="noopener noreferrer">Jiangsu (江苏省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.zj.gov.cn/" target="_blank" rel="noopener noreferrer">Zhejiang (浙江省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://edu.sc.gov.cn/" target="_blank" rel="noopener noreferrer">Sichuan (四川省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.henan.gov.cn/" target="_blank" rel="noopener noreferrer">Henan (河南省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://edu.shandong.gov.cn/" target="_blank" rel="noopener noreferrer">Shandong (山东省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.hunan.gov.cn/" target="_blank" rel="noopener noreferrer">Hunan (湖南省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.hubei.gov.cn/" target="_blank" rel="noopener noreferrer">Hubei (湖北省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.shaanxi.gov.cn/" target="_blank" rel="noopener noreferrer">Shaanxi (陕西省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.shanxi.gov.cn/" target="_blank" rel="noopener noreferrer">Shanxi (山西省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.hebei.gov.cn/" target="_blank" rel="noopener noreferrer">Hebei (河北省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.ah.gov.cn/" target="_blank" rel="noopener noreferrer">Anhui (安徽省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.fujian.gov.cn/" target="_blank" rel="noopener noreferrer">Fujian (福建省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.jiangxi.gov.cn/" target="_blank" rel="noopener noreferrer">Jiangxi (江西省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.ln.gov.cn/" target="_blank" rel="noopener noreferrer">Liaoning (辽宁省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.jl.gov.cn/" target="_blank" rel="noopener noreferrer">Jilin (吉林省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.hlj.gov.cn/" target="_blank" rel="noopener noreferrer">Heilongjiang (黑龙江省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://edu.hainan.gov.cn/" target="_blank" rel="noopener noreferrer">Hainan (海南省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.guizhou.gov.cn/" target="_blank" rel="noopener noreferrer">Guizhou (贵州省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.yn.gov.cn/" target="_blank" rel="noopener noreferrer">Yunnan (云南省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.gansu.gov.cn/" target="_blank" rel="noopener noreferrer">Gansu (甘肃省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://jyt.qinghai.gov.cn/" target="_blank" rel="noopener noreferrer">Qinghai (青海省教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;├── <a href="http://jyt.gxzf.gov.cn/" target="_blank" rel="noopener noreferrer">Guangxi (广西教育厅)</a><br />
          │&nbsp;&nbsp;&nbsp;└── <a href="https://jyt.nmg.gov.cn/" target="_blank" rel="noopener noreferrer">Inner Mongolia (内蒙古教育厅)</a><br />
          ├── Business Registration Portals<br />
          │&nbsp;&nbsp;&nbsp;├── <a href="https://www.qcc.com/" target="_blank" rel="noopener noreferrer">Qichacha (企查查)</a><br />
          │&nbsp;&nbsp;&nbsp;└── <a href="https://www.tianyancha.com/" target="_blank" rel="noopener noreferrer">Tianyancha (天眼查)</a><br />
          └── Gaode Map (<a href="https://www.amap.com/" target="_blank" rel="noopener noreferrer">高德地图</a>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;└── Physical location verification, business info, and user reviews
        </div>
      </InfoBox>

      <h4>Specific Verification Requirements for Training Centers/Camps:</h4>
      <ProblemBox>
        <strong>Why Training Centers Need Special Attention:</strong><br />
        Training centers and language camps are where most ESL scams occur. Unlike public schools, private training institutions must hold multiple licenses to legally operate and hire foreign teachers. Many fraudulent "schools" are simply unregistered businesses.
      </ProblemBox>

      <InfoBox>
        <strong>Required Documentation for Training Centers to Hire Foreigners:</strong><br />
        <div className="tree-structure">
          1. Business License (营业执照)<br />
          &nbsp;&nbsp;&nbsp;├── Issued by: Administration for Market Regulation<br />
          &nbsp;&nbsp;&nbsp;├── <strong>Verifiable via:</strong><br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── Official: <a href="http://www.gsxt.gov.cn/" target="_blank" rel="noopener noreferrer">National Enterprise Credit System (全国企业信用信息公示系统)</a><br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── Third-party: <a href="https://www.qcc.com/" target="_blank" rel="noopener noreferrer">Qichacha (企查查)</a><br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── Third-party: <a href="https://www.tianyancha.com/" target="_blank" rel="noopener noreferrer">Tianyancha (天眼查)</a><br />
          &nbsp;&nbsp;&nbsp;└── Shows: Registration date, legal representative, business scope, credit status<br />
          <br />
          2. Private Education License (民办学校办学许可证)<br />
          &nbsp;&nbsp;&nbsp;├── Issued by: Provincial/Local Education Bureau<br />
          &nbsp;&nbsp;&nbsp;├── <strong>Verifiable via: Provincial education bureau websites</strong><br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── Example: <a href="https://mbjy.edu.sh.gov.cn/mbjyw_sh/ssearch.aspx" target="_blank" rel="noopener noreferrer">Shanghai Private Education Network</a><br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── Beijing: Check via Beijing Education Commission<br />
          &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── Other provinces: Each has verification system on their education bureau site<br />
          &nbsp;&nbsp;&nbsp;├── Required for: All private educational institutions<br />
          &nbsp;&nbsp;&nbsp;└── Note: Decentralized system - must check institution&apos;s local bureau<br />
          <br />
          3. Foreign Work Permit Authorization (外国人来华工作许可)<br />
          &nbsp;&nbsp;&nbsp;├── Previously: Foreign Expert License (外国专家单位资格) - now integrated<br />
          &nbsp;&nbsp;&nbsp;├── Managed by: Ministry of Science and Technology (MOST)<br />
          &nbsp;&nbsp;&nbsp;├── <strong>System:</strong> <a href="https://fuwu.most.gov.cn/lhgzweb/" target="_blank" rel="noopener noreferrer">Management System of Foreigners Working in China</a><br />
          &nbsp;&nbsp;&nbsp;├── Required to: Legally sponsor work permits and hire foreigners<br />
          &nbsp;&nbsp;&nbsp;├── Verification: Institution must be registered in MOST system to sponsor foreign employees<br />
          &nbsp;&nbsp;&nbsp;└── <strong>Red flag:</strong> If institution lacks authorization, they CANNOT legally hire you
        </div>
      </InfoBox>

      <h4>Verification Approach:</h4>
      <ol>
        <li><strong>Cross-reference institution names</strong> against official government databases</li>
        <li><strong>Verify business registration</strong> using Qichacha/Tianyancha (checks Business License)</li>
        <li><strong>Check education licensing</strong> through provincial education bureau records (Private Education License)</li>
        <li><strong>Verify foreign hiring authorization</strong> - Training centers must explicitly state they have Foreign Expert License</li>
        <li><strong>Physical location check</strong> using Gaode Map (confirms actual existence, not just paper registration)</li>
        <li><strong>Automated scraping</strong> to maintain data freshness across all sources</li>
      </ol>

      <InsightBox>
        <strong>Key Insight:</strong> The fact that training centers need <em>multiple verifiable licenses</em> to hire foreigners legally is our competitive advantage. We can programmatically cross-check:
        <ul style={{ marginTop: '10px' }}>
          <li>Business License + Private Education License = Legally operating school</li>
          <li>Business License + NO Education License = Unregistered training center (scam risk)</li>
          <li>Has licenses + NO Foreign Expert authorization = Cannot legally hire you</li>
        </ul>
        This 3-tier verification is what Dave's ESL Cafe has never implemented in 30 years.
      </InsightBox>
    </Section>
  )
}
