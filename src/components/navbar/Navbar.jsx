import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <header>
        <div class="main_title">
            <h1><Link to="/"> Outils CSS </Link></h1>
        </div>
        <div class="sous_title">
            <h2><Link class="txt_sous_nav" to="/animations"> Animations </Link></h2>
            <h2><Link class="txt_sous_nav" to="/styles"> Styles </Link></h2>
            <h2><Link class="txt_sous_nav" to="/seo"> SEO </Link></h2>
            <h2><Link class="txt_sous_nav" to="/others"> Autres </Link></h2>
        </div>
    </header>
  )
}

export default Navbar