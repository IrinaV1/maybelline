import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className="links__home">
    <Link to="/" className="links__home-home" >Home</Link> 
    <Link to="/menu" className="links__home-menu" > / Menu</Link>
    <Link to="/newsletter" className="links__home-newsletter link_active"  > / Newsletter</Link>
 </div>
  )
}

export default Links
