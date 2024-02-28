import React,{useState} from 'react'
import './women.css'
import Header from '../../header/header'

import { WomenData } from '../../NewData'
import Item from '../../item/Item'

function Women() {
    let[data,setData]=useState(WomenData)
    document.title='Women'
  return (
    <div className='women'>
      <Header h1='All New Women Products' img='/images/women.jpg'/>
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

export default Women