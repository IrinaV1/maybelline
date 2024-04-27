import '../../styles/global.css'


function Footer() {
    
return(
  <>
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
</>
)}

export default Footer;