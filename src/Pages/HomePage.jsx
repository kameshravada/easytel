import React from 'react'
import HeroSection from '../HomeComponents/HeroSection'
import ServicesSection from '../HomeComponents/ServicesSection'
import AboutEasytel from '../HomeComponents/AboutEasytel'
import FAQSection from '../HomeComponents/FAQSection'
import ClientsMessages from '../HomeComponents/ClientsMessages'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection/>
        <AboutEasytel />
        <FAQSection />
        <ClientsMessages/>
    </div>
  )
}

export default HomePage