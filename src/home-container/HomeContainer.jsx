import React from 'react'
import Home from './Home'
import About from './About'
import Features from './Features'
import Menu from './menu/Menu'
import Review from './Review'
import Contact from './Contact'
import Footer from '../components/footer/Footer'


const HomeContainer = () => {
  return (
    <>
      {/* <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Review/>
      <Contact/>
      <Footer/> */}


       <div>
        <div id="home">
        <Home />
        </div>
        
        <div id="About">
        <About />
        </div>
        
        <div id="features">
        <Features />
        </div>
        
        <div id="menu">
        <Menu />
        </div>
        
        <div id="review">
        <Review />
        </div>
        
        <div id="contact">
        <Contact />
        </div>
         <Footer />
        </div> 
    </>
  )
}

export default HomeContainer
