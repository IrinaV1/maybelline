import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="component--hero">
    <div className="hero__wrapper">
<div className="hero__content">
<h2 className="hero__title">STAY IN THE  KNOW</h2>
<p className="hero__subtitle">Sign up for the latest news on product launches, makeup tips and trends, sweepstakes and more.</p>
<Link className="hero__link" to="/Newsletter">SIGN UP</Link>
</div>
<div className="hero__video">
<img className="hero__video-image" src="./images/footer/1.jpg" alt="footer_image" />
</div>
    </div>
   </div>
  )
}

export default Hero
