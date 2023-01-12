import React from 'react'
import '../styles/NavX.css'
import logo from '../assets/logo.svg'

function NavX() {
  return (
    <nav id='nav-x'>
      <ul>
        <li id='logo-li'><img src={logo} alt="" /></li>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  )
}

export default NavX