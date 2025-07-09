import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Cards from './Components/Cards'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='  w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar />
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div >
  )
}

export default App;