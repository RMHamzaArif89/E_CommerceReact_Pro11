import React from 'react'
import Heading from '../heading.jsx/heading'

function Nopage() {
    document.title='noPageFound'
  return (
    <div className='nopage'>
      <Heading heading='Sorry!404 error no Page found'/>
    </div>
  )
}

export default Nopage
