import React from 'react'
import '../styles/NavY.css'
import ActivityCard from './ActivityCard'
import meditationLogo from '../assets/meditation-logo.svg'
import swimLogo from '../assets/swim-logo.svg'
import bikeLogo from '../assets/bike-logo.svg'
import workoutLogo from '../assets/workout-logo.svg'
import {Link} from "react-router-dom"

function NavY() {
  return (
    <nav id='nav-y'>
      <ul>
        <Link reloadDocument key='homeY1' to={`soon`}><ActivityCard logo={meditationLogo} /></Link>
        <Link reloadDocument key='homeY2' to={`soon`}><ActivityCard logo={swimLogo} /></Link>
        <Link reloadDocument key='homeY3' to={`soon`}><ActivityCard logo={bikeLogo} /></Link>
        <Link reloadDocument key='homeY4' to={`soon`}><ActivityCard logo={workoutLogo} /></Link>
      </ul>
      <small id='copyright'>Copyright, SportSee 2020</small>
    </nav>
  )
}

export default NavY