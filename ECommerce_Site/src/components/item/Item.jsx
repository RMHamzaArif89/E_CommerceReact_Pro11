import React from 'react'
import './item.css'


function Item(props) {
  return (
   
        <div className="card">
            <img src={props.img} className='img' alt="" />
            <div className="h1">{props.h1}</div>
            <div className="price">{props.price}</div>
            <div className="h2">{props.h2}</div>
        </div>
  )
}

export default Item
