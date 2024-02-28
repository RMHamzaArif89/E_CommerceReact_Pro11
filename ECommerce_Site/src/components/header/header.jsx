import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='header'>
      <div className="text">
        <div className="heading1">
         {props.h1}
        </div>
        <div className="btn">
          Explore More
        </div>
      </div>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Header
