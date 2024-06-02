import React from 'react'
import '../../styles/global.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Forms from './Forms'
import Links from '../Links/Links'

function Newsletter() {

  return (
<div className="wrapper">
<Header />
              <main className="main">
                <div className="content_container">
<Links activeLink={2}/>
<div className="head">
    <img className="head-image" src="./images/newsletter/backgroundImage.jpg" alt="backgroundImage" />
    <h2 className="head-text">KEEP UP WITH THE HUSTLE</h2>
</div>
<div className="component__content">
    <p className="component__content">Stay on top of new products, promotions, events and more.</p>
</div>
<Forms />
</div>
</main>
<Footer />
 </div>

)}

export default Newsletter
