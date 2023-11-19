import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components//footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'
import opus from './0-ressources/ia/opus.png'
import ideogram from './0-ressources/ia/ideogram.png'
import adobe from './0-ressources/ia/adobe.png'
import kome from './0-ressources/ia/kome.png'
import perplexity from './0-ressources/ia/perplexity.png'
import hugging from './0-ressources/ia/hugging-face.png'
import erase_bg from './0-ressources/ia/erase-bg.png'
import stable_diffu from './0-ressources/ia/stable-diffu-online.png'
import ai_quizz from './0-ressources/ia/ai-quizz-maker.png'


function Ia() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium Outils IA</title>
        </Helmet>
        <Navbar />
        <div class="title_page">
            <h1 class="h1_page"> Outils IA </h1>
        </div>

        <div class="main_all">
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.opus.pro/" target="_blank" rel="noreferrer"> Opus </a></h3>
                  </div>
                  <a href="https://www.opus.pro/" target="_blank" rel="noreferrer"> <img class="img_site" src={opus} alt="textshadow" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://ideogram.ai/login" target="_blank" rel="noreferrer"> Ideogram </a></h3>
                  </div>
                  <a href="https://ideogram.ai/login" target="_blank" rel="noreferrer"> <img class="img_site" src={ideogram} alt="markodenic" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.adobe.com/fr/sensei/generative-ai/firefly.html" target="_blank" rel="noreferrer"> Adobe Firefly </a></h3>
                  </div>
                  <a href="https://www.adobe.com/fr/sensei/generative-ai/firefly.html" target="_blank" rel="noreferrer"> <img class="img_site" src={adobe} alt="cssgrid" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://chromewebstore.google.com/detail/hidkfmpdopckdjpogoencckkbngdfggf?hl=fr&utm_source=ext_sidebar" target="_blank" rel="noreferrer"> Plugin Kome </a></h3>
                  </div>
                  <a href="https://chromewebstore.google.com/detail/hidkfmpdopckdjpogoencckkbngdfggf?hl=fr&utm_source=ext_sidebar" target="_blank" rel="noreferrer"> <img class="img_site" src={kome} alt="textshadow" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.perplexity.ai/" target="_blank" rel="noreferrer"> Perplexity </a></h3>
                  </div>
                  <a href="https://www.perplexity.ai/" target="_blank" rel="noreferrer"> <img class="img_site" src={perplexity} alt="markodenic" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://huggingface.co/" target="_blank" rel="noreferrer"> Hugging-Face </a></h3>
                  </div>
                  <a href="https://huggingface.co/" target="_blank" rel="noreferrer"> <img class="img_site" src={hugging} alt="cssgrid" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.erase.bg/fr" target="_blank" rel="noreferrer"> Erase-bg </a></h3>
                  </div>
                  <a href="https://www.erase.bg/fr" target="_blank" rel="noreferrer"> <img class="img_site" src={erase_bg} alt="textshadow" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://stablediffusionweb.com/" target="_blank" rel="noreferrer"> Stable-Diffu-Online </a></h3>
                  </div>
                  <a href="https://stablediffusionweb.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={stable_diffu} alt="markodenic" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.fillout.com/ai-quiz-maker" target="_blank" rel="noreferrer"> AI-Quizz </a></h3>
                  </div>
                  <a href="https://www.fillout.com/ai-quiz-maker" target="_blank" rel="noreferrer"> <img class="img_site" src={ai_quizz} alt="cssgrid" /> </a>
              </div>
          </div>

        </div>
        <Footer />
      </>
    )
  }
  
  export default Ia