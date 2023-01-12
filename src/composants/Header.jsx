import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <h1 id='header-title'>Bonjour <span id='title-name'>Name</span></h1>
        <p id='header-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}

export default Header