import React from 'react'
import '../styles/NavX.css'
import logo from '../assets/logo.svg'
import {Link} from "react-router-dom"

function NavX() {
  return (
    <nav id='nav-x'>
      <ul>
        <Link id='logo-li' reloadDocument key='home' to={`/`}><img src={logo} alt="" /></Link>
        <Link reloadDocument key='home1' to={`/`}>Accueil</Link>
        <Link reloadDocument key='home2' to={`soon`}>Profil</Link>
        <Link reloadDocument key='home3' to={`soon`}>Réglages</Link>
        <Link reloadDocument key='home4' to={`soon`}>Communauté</Link>

      </ul>
    </nav>
  )
}

export default NavX