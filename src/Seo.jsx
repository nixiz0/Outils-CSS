import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components//footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'
import outilsmeta from './0-ressources/seo/outils-meta.png'
import optiseo from './0-ressources/seo/opti-seo.png'
import contentopti from './0-ressources/seo/content-opti.png'
import freeseotools from './0-ressources/seo/free-seo-tools.png'
import minifycss from './0-ressources/seo/minify-css.png'
import minifyjs from './0-ressources/seo/minify-js.png'
import photocompression from './0-ressources/seo/photo-compression.png'

function Seo() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium SEO Website</title>
        </Helmet>
        <Navbar />
        <div class="title_page">
            <h1 class="h1_page"> SEO Optimisation </h1>
        </div>

        <div class="main_all">
            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="http://www.outils-referencement.com/outils/pages-web/balises-meta" target="_blank" rel="noreferrer"> Générateur Meta Balise </a></h3>
                    </div>
                    <a href="http://www.outils-referencement.com/outils/pages-web/balises-meta" target="_blank" rel="noreferrer"> <img class="img_site" src={outilsmeta} alt="animista"/> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer"> SEO Optimisation </a></h3>
                    </div>
                    <a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer"> <img class="img_site" src={optiseo} alt="webcode"/> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://gtmetrix.com/" target="_blank" rel="noreferrer"> Content Optimisation </a></h3>
                    </div>
                    <a href="https://gtmetrix.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={contentopti} alt="animista"/> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://ahrefs.com/free-seo-tools" target="_blank" rel="noreferrer"> Free SEO Tools </a></h3>
                    </div>
                    <a href="https://ahrefs.com/free-seo-tools" target="_blank" rel="noreferrer"> <img class="img_site" src={freeseotools} alt="webcode"/> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://cssminifier.org/" target="_blank" rel="noreferrer"> Minify CSS </a></h3>
                    </div>
                    <a href="https://cssminifier.org/" target="_blank" rel="noreferrer"> <img class="img_site" src={minifycss} alt="animista"/> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://codebeautify.org/minify-js" target="_blank" rel="noreferrer"> Minify JS </a></h3>
                    </div>
                    <a href="https://codebeautify.org/minify-js" target="_blank" rel="noreferrer"> <img class="img_site" src={minifyjs} alt="webcode"/> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://tinypng.com/" target="_blank" rel="noreferrer"> Photo Compression </a></h3>
                    </div>
                    <a href="https://tinypng.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={photocompression} alt="animista"/> </a>
                </div>

            </div>

        </div>
        <Footer />
      </>
    )
  }
  
  export default Seo