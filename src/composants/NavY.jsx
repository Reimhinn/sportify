import React from 'react'
import '../styles/NavY.css'
import ActivityCard from './ActivityCard'
import meditationLogo from '../assets/meditation-logo.svg'
import swimLogo from '../assets/swim-logo.svg'
import bikeLogo from '../assets/bike-logo.svg'
import workoutLogo from '../assets/workout-logo.svg'

function NavY() {
  return (
    <nav id='nav-y'>
      <ul>
        <li><ActivityCard logo={meditationLogo} /></li>
        <li><ActivityCard logo={swimLogo} /></li>
        <li><ActivityCard logo={bikeLogo} /></li>
        <li><ActivityCard logo={workoutLogo} /></li>
      </ul>
      <small id='copyright'>Copyright, SportSee 2020</small>
    </nav>
  )
}

export default NavY