import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>

      <div className="logo">
        <img src="/images/logo.jpg" alt="" />
         <div className="text">RM Shoping</div>
      </div>

      <ul>
        {/* <li><Link to='home'>Home</Link></li>
        <li><Link to='men'>Men</Link></li>
        <li><Link to='women'>Womens</Link></li>
        <li><Link to='kids'>Kids</Link></li> */}
      </ul>



      <div className="det">
        <button className='login'>Login</button>
        <div className="cart">cart</div>

      </div>
    </div>
  )
}

export default Nav
