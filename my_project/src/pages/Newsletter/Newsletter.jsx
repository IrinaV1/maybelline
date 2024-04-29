import React from 'react'
import '../../styles/global.css'

function Newsletter() {

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
   <a className="links__home-menu" href="menu.html"> / Menu</a>
   <a className="links__home-newsletter link_active"  href="/newsletter.html"> / Newsletter</a>
</div>
<div className="head">
    <img className="head-image" src="./images/newsletter/backgroundImage.jpg" alt="backgroundImage" />
    <h2 className="head-text">KEEP UP WITH THE HUSTLE</h2>
</div>

<div className="component__content">
    <p className="component__content">Stay on top of new products, promotions, events and more.</p>
</div>

<div className="content-form">
<div className="content-form__wrapper">
    <form className="form__newsletter" action="/">
      <div className="form__wrapper">
        <div className="content-name">
        <div className="content-form__name">
            <p className="content-form-p__name">First Name *</p>
            <input className="input-form__name" type="text" placeholder="First Name" required />
        </div>
        <div className="content-form__lastname">
            <p className="content-form-p__lastname">Last Name *</p>
            <input className="input-form__lastname" type="text" placeholder="Last Name" required />
        </div>
      </div>
        <div className="content-form__email">
            <p className="content-form-email">EMAIL *</p>
            <input className="input-form__email" type="email" placeholder="Email" required />
            </div>
<div className="date">
            <div className="label-month">
              <label for="month">
                <p className="label-month__m">Birth Month *</p>
              </label>
              <select name="month" id="month">
                <option value="Month">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august"> August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
         
           
       
          </div>
                                                                                                                                    
       
            <div className="label-day">
              <label for="day">
                <p className="label-day__d">Birth Day *</p>
              </label>
              <select name="day" id="day">
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
                <option value="1">11</option>
                <option value="1">12</option>
                <option value="1">13</option>
                <option value="1">14</option>
                <option value="1">15</option>
                <option value="1">16</option>
                <option value="1">17</option>
                <option value="1">18</option>
                <option value="1">19</option>
                <option value="1">20</option>
                <option value="1">21</option>
                <option value="1">22</option>
                <option value="1">23</option>
                <option value="1">24</option>
                <option value="1">25</option>
                <option value="1">26</option>
                <option value="1">27</option>
                <option value="1">28</option>
                <option value="1">29</option>
                <option value="1">30</option>
                <option value="1">31</option>
              </select>
         
           
       
          </div>
        
        
        </div>

<div className="label-retailer">
     
          <label for="retailer">
            <p className="label-retailer__p">PREFERRED RETAILER</p>
          </label>
  
      <select name="retailer" id="retailer">
      <option value="amazon">Amazon</option>
      <option value="amazon">Target</option>
      <option value="amazon">CVS</option>
      <option value="amazon">Ulta</option>
      </select>
    </div>
<div className="form-text">
  <p className="form-text__f">*Indicates mandatory field</p>
<br />
 

  <p className="form-text__t">  By submitting this form, I confirm I am a US resident, 16+, and (1) agree to Maybelline's Terms of Use  andto receive marketing and promotional communications from Maybelline's and other L'Oréal brands, and (2) have read and acknowledge the Maybelline's Privacy Notice and Notice of Financial Incentives. Maybelline uses personal information it collects and processes to provide you tailored and personalized content, advertisements, offers, and other marketing and promotional communications (including promotional emails) from Maybelline and other
     L'Oréal brands, including based on your beauty profile, and for other purposes listed in Maybelline's Privacy Policy.</p>
</div>
   
<div className="submit-btn">
    <button type="submit" className="input-submit_btn">SUBMIT</button>
  </div>
</div>

  </form>

      

    </div>
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

)}

export default Newsletter
