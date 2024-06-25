import React from 'react'
import {Article, Brand,CTA, Feature,Navbar} from './components/index'
import {Blog,Features,WhatGPT3,Footer,Header,Possibility} from './container/index'
import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
            
        </div>
        <Brand/>
        <WhatGPT3/>

        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>

  )
}
export default App
