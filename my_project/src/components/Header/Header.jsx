import React, { useState } from 'react'

import '../../styles/global.css'
import { Link } from 'react-router-dom'

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
                  <li className='nav_l1'><Link to="/menu"> VIRTULinkL BEAUTY STUDIO </Link></li>
            <li className='nav_l1'><Link to="/menu"> NEW</Link></li>
            <li className='nav_l1'> <Link to="/menu">COLLECTIONS</Link></li>
            <li className='nav_l1'><Link to="/menu">EYE MAKEUP </Link></li>
            <li className='nav_l1'><Link to="/menu">FACE MAKEUP </Link></li>
            <li className='nav_l1'><Link to="/menu">LIP MAKEUP</Link></li>
            <li className='nav_l1'><Link to="/menu">MAKEUP TIPS</Link></li>
            <li className='nav_l1'><Link to="/menu">BRAVE TOGETHER</Link></li>

 
                </ul>
         
            </div>
          
        </div>
        </div>
        <nav className={` ${nav ? 'close' : 'aside'}`}>
          <ul className='aside__nav_li'>
            <li className='aside__nav_l1'><Link to="/menu"> VIRTUAL BEAUTY STUDIO </Link></li>
            <li className='aside__nav_l1'><Link to="/menu"> NEW</Link></li>
            <li className='aside__nav_l1'> <Link to="/menu">COLLECTIONS</Link></li>
            <li className='aside__nav_l1'><Link to="/menu">EYE MAKEUP </Link></li>
            <li className='aside__nav_l1'><Link to="/menu">FACE MAKEUP </Link></li>
            <li className='aside__nav_l1'><Link to="/menu">LIP MAKEUP</Link></li>
            <li className='aside__nav_l1'><Link to="/menu">MAKEUP TIPS</Link></li>
            <li className='aside__nav_l1'><Link to="/menu">BRAVE TOGETHER</Link></li>

          </ul>
        </nav>
      </header>

    
  )
}

export default Header;
