import React, { useState } from 'react'
import './Tabs.css'

const Tabs = ({ children, defaultTab = 1 }) => {

  const [activeTab, setActiveTab] = useState(defaultTab)

  const tabs = [...children]
  const tabsTitles = tabs.map(t => t.props.title || '')
  const tabsContent = tabs.map(t => t.props.children)

  return (
    <div className="tabs">
      <div className="tabs_titles">

        {tabsTitles.map((title, ix) => (

          <div key={`tab-title-${ix + 1}`} className={`tab_title ${activeTab === (ix + 1) ? 'active' : ''}`}
            onClick={() => setActiveTab(ix + 1)}>
            {title}
          </div>
        ))}

      </div>

      <div className="tab_content">
        {tabsContent[activeTab - 1]}
      </div>
    </div>
  )
}

export default Tabs