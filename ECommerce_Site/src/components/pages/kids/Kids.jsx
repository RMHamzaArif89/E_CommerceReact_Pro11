import React, { useState } from 'react'
import './kids.css'
import Header from '../../header/header'
import Item from '../../item/Item'
import { KidsData } from '../../NewData'


function Kids() {
    let[data,setData]=useState(KidsData)
    document.title='Kids'
  return (
    <div className='kids'>
      <Header h1='All new kids products' img='/images/kids.jpg'/>
<div className="item">
{
    data.map((i)=>{
      return <Item 
       img={i.img}
       price={i.price}
       h1={i.h1}
       h2={i.h2}
       /> 
    })
   }
</div>
    </div>
  )
}

export default Kids
