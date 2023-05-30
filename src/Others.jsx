import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

import './css-style/style.css'

import icon from './0-ressources/icon.png'
import readme from './0-ressources/meta/readme.png'
import envoyerdonnees from './0-ressources/meta/envoyer-donnees.png'
import correcteurlangues from './0-ressources/meta/correcteur-langues.png'
import testjs from './0-ressources/meta/test-js.png'
import questionsposer from './0-ressources/meta/questions-poser.png'
import freemusic from './0-ressources/meta/free-music.png'
import simulateurfacture from './0-ressources/meta/simulateur-facture.png'
import chercheurprospects from './0-ressources/meta/chercheur-prospects.png'
import photoprofile from './0-ressources/meta/photo-profile.png'
import textaigenerator from './0-ressources/meta/text-ai-generator.png'
import metaaddsdata from './0-ressources/meta/meta-adds-data.png'
import templatepowerpoint from './0-ressources/meta/template-powerpoint.png'
import companiesapi from './0-ressources/meta/companies-api.png'
import findentreprisedata from './0-ressources/meta/find-entreprise-data.png'
import templatespage from './0-ressources/meta/templates-page.png'

function Others() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Retrouvez pleins d'outils indispensables pour améliorer votre rapidité et efficacité lors de votre programmation web !"/>
          <meta name="keywords" content="Outils CSS CSS Tools-CSS" />
          <title>Initium Autres...</title>
        </Helmet>
        <Navbar />
        <div class="title_page">
            <h1 class="h1_page"> Meta CSS & Autres... </h1>
        </div>

        <div class="main_all">
            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.swisstransfer.com/fr-fr" target="_blank" rel="noreferrer"> Envoyer Documents (free) </a></h3>
                    </div>
                    <a href="https://www.swisstransfer.com/fr-fr" target="_blank" rel="noreferrer"> <img class="img_site" src={envoyerdonnees} alt="envoyer-donnees" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://readme.so/fr" target="_blank" rel="noreferrer"> Générateur de ReadMe </a></h3>
                    </div>
                    <a href="https://readme.so/fr" target="_blank" rel="noreferrer"> <img class="img_site" src={readme} alt="readme" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://onepagelove.com/" target="_blank" rel="noreferrer"> Templates Page </a></h3>
                    </div>
                    <a href="https://onepagelove.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={templatespage} alt="templates-page" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.reverso.net/orthographe/correcteur-francais/" target="_blank" rel="noreferrer"> Correcteur de langues </a></h3>
                    </div>
                    <a href="https://www.reverso.net/orthographe/correcteur-francais/" target="_blank" rel="noreferrer"> <img class="img_site" src={correcteurlangues} alt="correcteur-langues" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.jsv9000.app/" target="_blank" rel="noreferrer"> Tester son JS </a></h3>
                    </div>
                    <a href="https://www.jsv9000.app/" target="_blank" rel="noreferrer"> <img class="img_site" src={testjs} alt="test-js" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://answerthepublic.com/" target="_blank" rel="noreferrer"> Questions des gens </a></h3>
                    </div>
                    <a href="https://answerthepublic.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={questionsposer} alt="questions-poser" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.unminus.com/" target="_blank" rel="noreferrer"> Free Music </a></h3>
                    </div>
                    <a href="https://www.unminus.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={freemusic} alt="free-music" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://simulateurs.shine.fr/" target="_blank" rel="noreferrer"> Simulateur Facture </a></h3>
                    </div>
                    <a href="https://simulateurs.shine.fr/" target="_blank" rel="noreferrer"> <img class="img_site" src={simulateurfacture} alt="simulateur-facture" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://parsinator.pharow.com/" target="_blank" rel="noreferrer"> Trouver Prospects </a></h3>
                    </div>
                    <a href="https://parsinator.pharow.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={chercheurprospects} alt="chercheur-prospects" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://pfpmaker.com/" target="_blank" rel="noreferrer"> Photo Profil Pro </a></h3>
                    </div>
                    <a href="https://pfpmaker.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={photoprofile} alt="photoprofile" /> </a>
                </div>
            </div>
            
            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://rytr.me/" target="_blank" rel="noreferrer"> Text AI generator </a></h3>
                    </div>
                    <a href="https://rytr.me/" target="_blank" rel="noreferrer"> <img class="img_site" src={textaigenerator} alt="text-ai-generator" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=FR&media_type=all" target="_blank" rel="noreferrer"> Adds Data Meta </a></h3>
                    </div>
                    <a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=FR&media_type=all" target="_blank" rel="noreferrer"> <img class="img_site" src={metaaddsdata} alt="meta-adds-data" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://slidesgo.com/" target="_blank" rel="noreferrer"> Template PowerPoint </a></h3>
                    </div>
                    <a href="https://slidesgo.com/" target="_blank" rel="noreferrer"> <img class="img_site" src={templatepowerpoint} alt="template-powerpoint" /> </a>
                </div>
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.pappers.fr/" target="_blank" rel="noreferrer"> Find Companies Data </a></h3>
                    </div>
                    <a href="https://www.pappers.fr/" target="_blank" rel="noreferrer"> <img class="img_site" src={findentreprisedata} alt="find-entreprise-data" /> </a>
                </div>
            </div>

            <div class="main_content">
                <div>
                    <div class="titre_article">
                        <h3><a class="txt_content" href="https://www.thecompaniesapi.com/fr/" target="_blank" rel="noreferrer"> Companies API </a></h3>
                    </div>
                    <a href="https://www.thecompaniesapi.com/fr/" target="_blank" rel="noreferrer"> <img class="img_site" src={companiesapi} alt="companies-api" /> </a>
                </div>
                    
            </div>

        </div>
        <Footer />
      </>
    )
  }
  
  export default Others