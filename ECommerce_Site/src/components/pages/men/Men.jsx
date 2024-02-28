import React,{useState} from 'react'
import './men.css'
import Header from '../../header/header'
import { MenData } from '../../NewData'
import Item from '../../item/Item'

function Men() {
    let[data,setData]=useState(MenData)
    document.title='Men'
  return (
    <div className='men'>
      <Header h1='All New Mens Products' img='/images/men.jpg'/>
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

export default Men