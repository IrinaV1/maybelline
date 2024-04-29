import React from 'react'
import '../../styles/global.css'

function Menu() {
  return (
       <div className="wrapper">

        <header className='header'>
       
            <div className="header_wrapper">
                <div className="header_content">
                    <div className="header_logo"> <a href="/"><img className='logo_img' src="https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/master/demo/logos-logo-small.svg?rev=-1" width="155" height="24" alt="Maybelline New York | Go to Home Page" /></a></div>
                   
              <button type="button" className="header__burger"> 
                <img className="header__burger_menu" src="./images/burger1.png" alt="brg" />
             
             <img className="header__close_menu hidden" src="./images/Close-2.png" alt="close" /> 
           </button>
                    <div className="header_nav">
        
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
                <nav className="aside close">
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

              <main className="main">
                <div className="content_container">
<div className="links__home">
   <a className="links__home-home" href="index.html">Home</a> 
   <a className="links__home-menu link_active" href="menu.html"> / Menu</a>
   <a className="links__home-newsletter"  href="/newsletter.html"> / Newsletter</a>
</div>
<div className="menu__main">
<h1>Stay on top of new products, promotions, events and more.</h1>
</div>

</div>
              </main>


              <footer className="footer">
                <div className="footer_links">
                  <div className="footer__main-links">
                  <ul className="footer_li">
                    <li className="footer_l1"> <a href="./menu.html">ABOUT MAYBELLINE </a></li>
                    <li  className="footer_l1"> <a href="./menu.html">CONSCIOUS TOGETHER</a></li>
                    <li  className="footer_l1"><a href="./menu.html"> COLLEGE TOUR</a></li>
                    <li  className="footer_l1"> <a href="./menu.html">SAFETY PROMISE</a></li>
                    <li  className="footer_l1"><a href="./menu.html">FAQ/CONTACT US </a></li>
                    <li  className="footer_l1"><a href="./menu.html">SITEMAP </a></li>
                  </ul>
                </div>
                <div className="footer__other-links">
                  <ul className="footer_li2">
                    <li className="footer_l2">Privacy Policy</li>
                    <li className="footer_l2">Accessibility Statement</li>
                    <li className="footer_l2">Terms Of Use</li>
                    <li className="footer_l2">Ad Choices</li>
                    <li className="footer_l2">Cookie Settings</li>
                    <li className="footer_l2">Content Permission Terms</li>
                    <li className="footer_l2">Notice At Collection</li>
                    <li className="footer_l2">Your Privacy Choices </li>
                  </ul>
                </div>
              </div>


                <div className="footer__social">
                  <ul className="footer_li3">
                    <li className="footer_l3"> <a href="https://www.tiktok.com/@maybelline"> <img className="footer_image" src="images/tik-tok.png" alt="tik-tok" /> </a></li>
                    <li className="footer_l3"> <a href="https://www.instagram.com/maybelline/"> <img className="footer_image" src="images/instagram.png" alt="instagram" /> </a> </li>
                    <li className="footer_l3"> <a href="https://www.facebook.com/maybelline/"> <img className="footer_image" src="images/facebook.png" alt="facebook" /> </a> </li>
                    <li className="footer_l3"> <a href="https://www.youtube.com/channel/UCq7EY7H2XF6TV7Z5mLv-aNg"> <img className="footer_image" src="images/youtube.png" alt="youtube" /> </a> </li>
                    <li className="footer_l3"> <a href="https://twitter.com/Maybelline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> <img className="footer_image" src="images/twitter.png" alt="twitter" /> </a></li>
            
                  </ul>
                </div>
                <div className="footer__disclaimer">
                  <span>© 2024 Maybelline New York</span>
                 This site is intended for US consumers. 
                  Cookies and related technology are used for advertising. 
                  To learn more or opt-out,
                   visit AdChoices and our Privacy Policy.
               
                    </div>
                
              </footer>
      
              </div>
  )
}

export default Menu
