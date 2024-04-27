import React, { useState } from 'react'

import '../../styles/global.css'

function Header() {
const [nav, setNav] = useState(false)
 function Toggle () {
setNav(!nav)
 }
  return (
    <header className='header'>

    <div className="header_wrapper">
        <div className="header_content">
            <div className="header_logo"> <a href="/"><img className='logo_img' src="https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/master/demo/logos-logo-small.svg?rev=-1" width="155" height="24" alt="Maybelline New York | Go to Home Page" /></a></div>
     
          <button onClick={Toggle}  className="header__burger"> 
         
          <img className={`header__burger_menu ${!nav ? 'header__close_menu' : ' hidden'}`} src="images/burger1.png" alt="brg" /> 
          <img className={`header__close_menu ${!nav ? 'hidden' : ''} `} src="images/Close-2.png" alt="close" /> 
        </button>
        
            <div className={`header_nav ${nav ? 'open' : ''}`}>

                <ul className='nav_li'>
                  <li className='nav_l1'><a href="menu.html"> VIRTUAL BEAUTY STUDIO </a></li>
            <li className='nav_l1'><a href="menu.html"> NEW</a></li>
            <li className='nav_l1'> <a href="menu.html">COLLECTIONS</a></li>
            <li className='nav_l1'><a href="menu.html">EYE MAKEUP </a></li>
            <li className='nav_l1'><a href="menu.html">FACE MAKEUP </a></li>
            <li className='nav_l1'><a href="menu.html">LIP MAKEUP</a></li>
            <li className='nav_l1'><a href="menu.html">MAKEUP TIPS</a></li>
            <li className='nav_l1'><a href="menu.html">BRAVE TOGETHER</a></li>

 
                </ul>
         
            </div>
          
        </div>
        </div>
        <nav className={` ${nav ? 'close' : 'aside'}`}>
          <ul className='aside__nav_li'>
            <li className='aside__nav_l1'><a href="menu.html"> VIRTUAL BEAUTY STUDIO </a></li>
            <li className='aside__nav_l1'><a href="menu.html"> NEW</a></li>
            <li className='aside__nav_l1'> <a href="menu.html">COLLECTIONS</a></li>
            <li className='aside__nav_l1'><a href="menu.html">EYE MAKEUP </a></li>
            <li className='aside__nav_l1'><a href="menu.html">FACE MAKEUP </a></li>
            <li className='aside__nav_l1'><a href="menu.html">LIP MAKEUP</a></li>
            <li className='aside__nav_l1'><a href="menu.html">MAKEUP TIPS</a></li>
            <li className='aside__nav_l1'><a href="menu.html">BRAVE TOGETHER</a></li>

          </ul>
        </nav>
      </header>

    
  )
}

export default Header;
