import React from 'react'
import './home.css'
import Header from '../header/header'
import New from '../new/New'
import Popular from '../popular/Popular'

function Home() {
  document.title='home'
  return (
    <div className='home'>
      <Header/>
      <New/>
      <Popular/>
    </div>
  )
}

export default Home
