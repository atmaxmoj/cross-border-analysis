import Chapter from '../layout/Chapter'
import Discovery1 from '../sections/coreDiscoveries/Discovery1'
import Discovery2 from '../sections/coreDiscoveries/Discovery2'
import Discovery3 from '../sections/coreDiscoveries/Discovery3'
import Discovery4 from '../sections/coreDiscoveries/Discovery4'
import Discovery5 from '../sections/coreDiscoveries/Discovery5'

export default function CoreDiscoveries() {
  return (
    <Chapter id="core-discoveries" title="2. Core Discoveries">
      <p>Through systematic research and critical analysis, we made four key discoveries that fundamentally challenged Pete's original assumptions:</p>

      <Discovery1 />
      <Discovery2 />
      <Discovery3 />
      <Discovery4 />
      <Discovery5 />

      <div className="section-divider"></div>
    </Chapter>
  )
}
