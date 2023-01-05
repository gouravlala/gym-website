import React from 'react'
import "./Header.css"
import Logo from "../../gymAssets/logo.png"
const Header = () => {
  return (
   <div className="header">
    <img src={Logo} alt="bs" className='logo'/>
    <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
    </ul>
   </div>
  )
}

export default Header