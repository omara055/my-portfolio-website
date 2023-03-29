import React from 'react'
import About from '../components/About'
import Carousel from '../components/ui/Carousel'
import Skill from '../components/ui/Skill'
import Footer from '../components/layout/Footer'


const Index = () => {
  return (
    <div className="relative h-screen">
    <Carousel/>
    <About/>
    <Skill/>
    <Footer/>
    
    </div>
  )
}

export default Index