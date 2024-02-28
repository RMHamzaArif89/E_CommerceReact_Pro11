import React, { useState } from 'react'
import './Popular.css'
import { PopularData } from '../NewData'
import Item from '../item/Item'
import Heading from '../heading.jsx/heading'

function Popular() {
    const[data,setData]=useState(PopularData)
    // data.map((i)=>{console.log(i.h1)})
  return (
    <>
 <div className="popular">
 <Heading heading='These are the popular Propduct of us'/>
   <div className="item">
   {
       data.map((i)=>{
       return <Item img={i.img} h1={i.h1} price={i.price} h2={i.h2}/>
       })
    }
   </div>
 </div>
    </>
  )
}

export default Popular