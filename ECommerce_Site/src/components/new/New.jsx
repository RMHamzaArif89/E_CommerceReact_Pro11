import React, { useState } from 'react'
import './new.css'
import Data from '../NewData'
import Item from '../item/Item'
import Heading from '../heading.jsx/heading'

function New() {
  const [data, setData] = useState(Data)
  // data.map((i)=>{console.log(i.h1)})
  return (
    <>
      <div className="new">
      <Heading heading='New Products just arrive' />
        <div className="item">

          {
            data.map((i) => {
              return <Item img={i.img} h1={i.h1} price={i.price} h2={i.h2} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default New
