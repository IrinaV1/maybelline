import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/global.css'


function Links({  activeLink }) {


  return (
    <div className="links__home">
    <NavLink exact to="/" className={`links__home-home ${activeLink === 0 ? 'link_active' : ''}`}  >Home</NavLink> 
    <NavLink to="/menu" className={`links__home-menu ${activeLink === 1 ? 'link_active' : ''}`} > / Menu</NavLink>
    <NavLink to="/newsletter" className={`links__home-newsletter ${activeLink === 2 ? 'link_active' : ''}`}  > / Newsletter</NavLink>
 </div>
  )
}

export default Links
