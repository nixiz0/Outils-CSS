import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components//footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'
import textshadow from './0-ressources/styles/text-shadow.png'
import markodenic from './0-ressources/styles/markodenic.png'
import cssgrid from './0-ressources/styles/cssgrid.png'
import waves from './0-ressources/styles/waves.png'
import borderradius from './0-ressources/styles/border-radius.png'
import colorpalette from './0-ressources/styles/color-palette.png'
import qrcodegenerator from './0-ressources/styles/qrcode-generator.png'
import cssgenerator from './0-ressources/styles/css-generator.png'
import cssgeneratormultiple from './0-ressources/styles/css-generator-multiple.png'
import inspirationdesign from './0-ressources/styles/inspiration-design.png'
import inspirationwebsite from './0-ressources/styles/inspiration-website.png'
import colorspalettesite from './0-ressources/styles/colors-palette-site.png'
import supprimerbackground from './0-ressources/styles/supprimer-background.png'
import Photosfree from './0-ressources/styles/Photos free.png'
import photocompression from './0-ressources/styles/photo-compression.png'
import emojifreesite from './0-ressources/styles/emoji-free-site.png'
import designlogosemoji from './0-ressources/styles/design-logos-emoji.png'
import freeemojilogos from './0-ressources/styles/free-emoji-logos.png'
import UICSScode from './0-ressources/styles/UI-CSS-code.png'
import checklistdesign from './0-ressources/styles/checklist-design.png'
import palettenuance from './0-ressources/styles/palette-nuance.png'
import AIcolorgenerator from './0-ressources/styles/AI-color-generator.png'
import generatorbackground from './0-ressources/styles/generator-background.png'
import originalpolice from './0-ressources/styles/original-police.png'
import responsiveview from './0-ressources/styles/responsive-view.png'
import cssgradient from './0-ressources/styles/css-gradient.png'
import artgen from './0-ressources/styles/art-gen.png'
import csslayout from './0-ressources/styles/css-layout.png'
import smallcode from './0-ressources/styles/small-code.png'
import icons_svg from './0-ressources/styles/icons_svg.png'


function Styles() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium Styles CSS</title>
        </Helmet>
        <Navbar />
        <div class="title_page">
          <h1 class="h1_page"> Styles CSS </h1>
        </div>
        <div class="main_all">
          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://html-css-js.com/css/generator/text-shadow/" target="_blank" rel="noreferrer"> Text / Box Shadow </a></h3>
                  </div>
                  <a href="https://html-css-js.com/css/generator/text-shadow/" target="_blank" rel="noreferrer"> <img class="img_site" src={textshadow} alt="textshadow" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://markodenic.com/tools/buttons-generator/" target="_blank" rel="noreferrer"> Button Generator </a></h3>
                  </div>
                  <a href="https://markodenic.com/tools/buttons-generator/" target="_blank" rel="noreferrer"> <img class="img_site" src={markodenic} alt="markodenic" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://cssgrid-generator.netlify.app/" target="_blank" rel="noreferrer"> Grid Generator </a></h3>
                  </div>
                  <a href="https://cssgrid-generator.netlify.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={cssgrid} alt="cssgrid" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://getwaves.io/" target="_blank" rel="noreferrer"> CSS Waves </a></h3>
                  </div>
                  <a href="https://getwaves.io/" target="_blank" rel="noreferrer"> <img class="img_site" src={waves} alt="waves" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://9elements.github.io/fancy-border-radius/" target="_blank" rel="noreferrer"> Border-Radius </a></h3>
                  </div>
                  <a href="https://9elements.github.io/fancy-border-radius/" target="_blank" rel="noreferrer"> <img class="img_site" src={borderradius} alt="borderradius" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://coolors.co/" target="_blank" rel="noreferrer"> Colors Palette </a></h3>
                  </div>
                  <a href="https://coolors.co/" target="_blank" rel="noreferrer"> <img class="img_site" src={colorpalette} alt="colorpalette" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://markodenic.com/tools/qr-code-generator/" target="_blank" rel="noreferrer"> QRCode Generator </a></h3>
                  </div>
                  <a href="https://markodenic.com/tools/qr-code-generator/" target="_blank" rel="noreferrer"> <img class="img_site" src={qrcodegenerator} alt="qrcodegenerator" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://css-generator.netlify.app/" target="_blank" rel="noreferrer"> CSS Generator Text </a></h3>
                  </div>
                  <a href="https://css-generator.netlify.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={cssgenerator} alt="cssgenerator" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.cssportal.com/css-generators.php" target="_blank" rel="noreferrer"> Multiple CSS generator </a></h3>
                  </div>
                  <a href="https://www.cssportal.com/css-generators.php" target="_blank" rel="noreferrer"> <img class="img_site" src={cssgeneratormultiple} alt="cssgeneratormultiple" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.behance.net/" target="_blank" rel="noreferrer"> Inspiration Design </a></h3>
                  </div>
                  <a href="https://www.behance.net/" target="_blank" rel="noreferrer"> <img class="img_site" src={inspirationdesign} alt="inspirationdesign" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://dribbble.com/" target="_blank" rel="noreferrer"> Inspiration Website </a></h3>
                  </div>
                  <a href="https://dribbble.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={inspirationwebsite} alt="inspirationwebsite" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.happyhues.co/palettes/10" target="_blank" rel="noreferrer"> Colors Palettes Site </a></h3>
                  </div>
                  <a href="https://www.happyhues.co/palettes/10" target="_blank" rel="noreferrer"> <img class="img_site" src={colorspalettesite} alt="colorspalettesite" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.remove.bg/fr" target="_blank" rel="noreferrer"> Supprimer background </a></h3>
                  </div>
                  <a href="https://www.remove.bg/fr" target="_blank" rel="noreferrer"> <img class="img_site" src={supprimerbackground} alt="supprimerbackground" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://unsplash.com/" target="_blank" rel="noreferrer"> Photos Free </a></h3>
                  </div>
                  <a href="https://unsplash.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={Photosfree} alt="Photosfree" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://squoosh.app/" target="_blank" rel="noreferrer"> Photos Compression </a></h3>
                  </div>
                  <a href="https://squoosh.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={photocompression} alt="photocompression" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://blush.design/collections/Cmj1b1g8ra2dN0R_36uh/goodies" target="_blank" rel="noreferrer"> Emoji Site (free) </a></h3>
                  </div>
                  <a href="https://blush.design/collections/Cmj1b1g8ra2dN0R_36uh/goodies" target="_blank" rel="noreferrer"> <img class="img_site" src={emojifreesite} alt="emojifreesite" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://illlustrations.co/" target="_blank" rel="noreferrer"> Emoji & Design logo </a></h3>
                  </div>
                  <a href="https://illlustrations.co/" target="_blank" rel="noreferrer"> <img class="img_site" src={designlogosemoji} alt="designlogosemoji" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://undraw.co/handcrafts" target="_blank" rel="noreferrer"> Free emoji logo </a></h3>
                  </div>
                  <a href="https://undraw.co/handcrafts" target="_blank" rel="noreferrer"> <img class="img_site" src={freeemojilogos} alt="freeemojilogos" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://neumorphism.io/#543131" target="_blank" rel="noreferrer"> UI-CSS code </a></h3>
                  </div>
                  <a href="https://neumorphism.io/#543131" target="_blank" rel="noreferrer"> <img class="img_site" src={UICSScode} alt="UICSScode" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.checklist.design/" target="_blank" rel="noreferrer"> Design Checklist </a></h3>
                  </div>
                  <a href="https://www.checklist.design/" target="_blank" rel="noreferrer"> <img class="img_site" src={checklistdesign} alt="checklistdesign" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://yeun.github.io/open-color/" target="_blank" rel="noreferrer"> Nuance Palette Colors </a></h3>
                  </div>
                  <a href="https://yeun.github.io/open-color/" target="_blank" rel="noreferrer"> <img class="img_site" src={palettenuance} alt="palettenuance" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://huemint.com/" target="_blank" rel="noreferrer"> AI Color Generator </a></h3>
                  </div>
                  <a href="https://huemint.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={AIcolorgenerator} alt="AIcolorgenerator" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://pocoloco.io/" target="_blank" rel="noreferrer"> Generator Background </a></h3>
                  </div>
                  <a href="https://pocoloco.io/" target="_blank" rel="noreferrer"> <img class="img_site" src={generatorbackground} alt="generatorbackground" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://velvetyne.fr/" target="_blank" rel="noreferrer"> Original Police </a></h3>
                  </div>
                  <a href="https://velvetyne.fr/" target="_blank" rel="noreferrer"> <img class="img_site" src={originalpolice} alt="originalpolice" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://responsively.app/" target="_blank" rel="noreferrer"> Responsive View </a></h3>
                  </div>
                  <a href="https://responsively.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={responsiveview} alt="responsiveview" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://cssgradient.io/" target="_blank" rel="noreferrer"> CSS Gradient </a></h3>
                  </div>
                  <a href="https://cssgradient.io/" target="_blank" rel="noreferrer"> <img class="img_site" src={cssgradient} alt="cssgradient" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="http://weavesilk.com/" target="_blank" rel="noreferrer"> Generate Art </a></h3>
                  </div>
                  <a href="http://weavesilk.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={artgen} alt="artgen" /> </a>
              </div>
          </div>

          <div class="main_content">
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://csslayout.io/" target="_blank" rel="noreferrer"> CSS Layout Generator </a></h3>
                  </div>
                  <a href="https://csslayout.io/" target="_blank" rel="noreferrer"> <img class="img_site" src={csslayout} alt="csslayout" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://www.30secondsofcode.org/" target="_blank" rel="noreferrer"> Small part Of Code </a></h3>
                  </div>
                  <a href="https://www.30secondsofcode.org/" target="_blank" rel="noreferrer"> <img class="img_site" src={smallcode} alt="smallcode" /> </a>
              </div>
              <div>
                  <div class="titre_article">
                      <h3><a class="txt_content" href="https://potlabicons.com/" target="_blank" rel="noreferrer"> Icons SVG </a></h3>
                  </div>
                  <a href="https://potlabicons.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={icons_svg} alt="icons_svg" /> </a>
              </div>
          </div>

        </div>
        <Footer />
      </>
    )
  }
  
  export default Styles