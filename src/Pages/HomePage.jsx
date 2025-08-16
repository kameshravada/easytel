import React from 'react'
import HeroSection from '../HomeComponents/HeroSection'
import ServicesSection from '../HomeComponents/ServicesSection'
import AboutEasytel from '../HomeComponents/AboutEasytel'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection/>
        <AboutEasytel />
    </div>
  )
}

export default HomePage