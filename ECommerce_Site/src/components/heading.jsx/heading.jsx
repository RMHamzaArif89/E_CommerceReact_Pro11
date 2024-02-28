import React from 'react'
import './heading.css'

function Heading(props) {
  return (
    <div className='heading'>
      {props.heading}
    </div>
  )
}
 
export default Heading
