import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components//footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'
import animista from './0-ressources/animations/animista.png'
import webcode from './0-ressources/animations/webcode.png'
import wwebddev from './0-ressources/animations/wwebdev.png'
import theappguruz from './0-ressources/animations/theappguruz.png'
import angrytools from './0-ressources/animations/angrytools.png'
import kristofferandreasen from './0-ressources/animations/kristofferandreasen.png'
import keyframes from './0-ressources/animations/keyframes-app.png'
import multipleanim from './0-ressources/animations/multiple-anim.png'
import calligrapher from './0-ressources/animations/calligrapher-anim-text.png'
import AOS from './0-ressources/animations/AOS.png'


function Animations() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium Animations CSS</title>
        </Helmet>
        <Navbar />
        <div class="title_page">
            <h1 class="h1_page"> Animations CSS (keyframes) </h1>
        </div>

        <div class="main_all">
            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://animista.net/" target="_blank" rel="noreferrer"> Animation blocks & Texts </a></h3>
                    </div>
                    <a href="https://animista.net/" target="_blank" rel="noreferrer"> <img class="img_site" src={animista} alt="animista"/> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://webcode.tools/generators/css/keyframe-animation" target="_blank" rel="noreferrer"> Animation blocks </a></h3>
                    </div>
                    <a href="https://webcode.tools/generators/css/keyframe-animation" target="_blank" rel="noreferrer"> <img class="img_site" src={webcode} alt="webcode"/> </a>
                </div>
            </div>
  
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://wweb.dev/resources/animated-css-background-generator/" target="_blank" rel="noreferrer"> Fiew background animate </a></h3>
                  </div>
                  <a href="https://wweb.dev/resources/animated-css-background-generator/" target="_blank" rel="noreferrer"> <img class="img_site" src={wwebddev} alt="wwebdev"/> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.theappguruz.com/tag-tools/web/CSSAnimations/" target="_blank" rel="noreferrer"> Effects slide </a></h3>
                  </div>
                  <a href="https://www.theappguruz.com/tag-tools/web/CSSAnimations/" target="_blank" rel="noreferrer"> <img class="img_site" src={theappguruz} alt="theappguruz"/> </a>
              </div>
          </div>
  
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://angrytools.com/css/animation/" target="_blank" rel="noreferrer"> Animation kit </a></h3>
                  </div>
                  <a href="https://angrytools.com/css/animation/" target="_blank" rel="noreferrer"> <img class="img_site" src={angrytools} alt="angrytools"/> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://kristofferandreasen.github.io/wickedCSS/#" target="_blank" rel="noreferrer"> Image animations </a></h3>
                  </div>
                  <a href="https://kristofferandreasen.github.io/wickedCSS/#" target="_blank" rel="noreferrer"> <img class="img_site" src={kristofferandreasen} alt="kristofferandreasen"/> </a>
              </div>
          </div>
  
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://keyframes.app/" target="_blank" rel="noreferrer"> Keyframes app </a></h3>
                  </div>
                  <a href="https://keyframes.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={keyframes} alt="keyframesapp"/> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.doozytools.com/dev-tools/css-animation-generator" target="_blank" rel="noreferrer"> Mutliple Animations </a></h3>
                  </div>
                  <a href="https://www.doozytools.com/dev-tools/css-animation-generator" target="_blank" rel="noreferrer"> <img class="img_site" src={multipleanim} alt="multiple-anim"/> </a>
              </div>
          </div>
  
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.calligrapher.ai/" target="_blank" rel="noreferrer"> Calligrapher Animation </a></h3>
                  </div>
                  <a href="https://www.calligrapher.ai/" target="_blank" rel="noreferrer"> <img class="img_site" src={calligrapher} alt="calligrapher"/> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://michalsnik.github.io/aos/" target="_blank" rel="noreferrer"> Animate On Scroll </a></h3>
                  </div>
                  <a href="https://michalsnik.github.io/aos/" target="_blank" rel="noreferrer"> <img class="img_site" src={AOS} alt="AOS"/> </a>
              </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  
  export default Animations