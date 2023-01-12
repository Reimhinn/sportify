import React from 'react'
import '../styles/ActivityCard.css'

function ActivityCard({logo}) {
  return (
    <div id='activity-card'>
      <img src={logo} alt={logo} />
    </div>
  )
}

export default ActivityCard