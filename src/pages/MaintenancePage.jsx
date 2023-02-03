import React from 'react'
import '../styles/MaintenancePage.css'
import {Link} from "react-router-dom"

function MaintenancePage() {
  return (
    <div id='maintenance-message-container'>
        <h1 id='maintenance-message'>Cette page est en cours de développement</h1>
        <Link id='maintenance-back-home' reloadDocument key='maintenance-home' to={`/`}>Revenir à l'accueil</Link>
    </div>
  )
}

export default MaintenancePage