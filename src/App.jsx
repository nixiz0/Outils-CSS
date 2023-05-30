import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components//footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'


function App() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium Outils CSS</title>
        </Helmet>
        <Navbar />
        <article>
            <div>
                <h1> Welcome </h1>
            </div>
            <div>
                <p> Ce site répertorie différents liens d'outils en CSS.
                    Que ça soit au niveau d'animations avec des Keyframes, 
                    mais aussi des styles de textes avec des shadows et autres...    
                </p>
        
                <p> Vous trouverez beaucoup d'outils en ligne vous permettant de fabriquer des styles fantastiques ! </p>
                <h4> Votre Créativité Sera La Seule Limite ! </h4>
            </div>
        </article>
        <Footer />
      </>
    )
  }
  
  export default App