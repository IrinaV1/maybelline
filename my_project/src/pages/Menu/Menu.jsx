import React from 'react'
import '../../styles/global.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import Links from '../Links/Links'

function Menu() {
  return (
       <div className="wrapper">

 <Header />

              <main className="main">
                <div className="content_container">
<Links />
<div className="menu__main">
<h1>Stay on top of new products, promotions, events and more.</h1>
</div>

</div>
              </main>

<Footer />
      
              </div>
  )
}

export default Menu
