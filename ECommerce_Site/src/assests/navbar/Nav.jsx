import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>

      <div className="logo">
        <img src="/images/logo.jpg" alt="" />
         <div className="text">RM Shoping</div>
      </div>

      <ul>
        <li>Home</li>
        <li>Mens</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>



      <div className="det">
        <button className='login'>Login</button>
        <div className="cart">cart</div>

      </div>
    </div>
  )
}

export default Nav
