import React from 'react'
import {Link} from "react-router-dom"
import '../styles/ChoicePage.css'

function ChoicePage() {
  return (
    <div id='user-choices-container'>
        <Link className='user-choice' reloadDocument key='12' to={`12`}>User 1</Link>
        <Link className='user-choice' reloadDocument key='18' to={`18`}>User 2</Link>
    </div>

  )
}

export default ChoicePage