import React from 'react'
import {Link} from "react-router-dom"
import '../styles/ErrorPage.css'

function ErrorPage() {
  return (
    <div id='error-message-container'>
          <h1 id='error-message'>Cette page n'existe pas...</h1>
          <Link id='error-back-home' reloadDocument key='error-home' to={`/`}>Revenir à l'accueil</Link>
    </div>

  )
}

export default ErrorPage