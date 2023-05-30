import React from 'react'

import './footer.css'
import ytb_logo from '../../0-ressources/ytb.png'

function Footer() {
    return (
      <>
          <footer>
              <div class="footer_main">
                  <a href="https://www.youtube.com/channel/UCHvAE1TxZENLhmLb3ZJ9k6g/?sub_confirmation=1" target="_blank" rel="noreferrer"> 
                      <img class="ytb_logo" src={ytb_logo} alt="YouTube Logo"/>
                      <p style={{textDecoration: 'underline', color: 'rgb(11, 141, 235)'}}> Retrouvez moi sur YouTube </p>
                  </a>
              </div>
          </footer>
      </>
    )
  }
  
  export default Footer