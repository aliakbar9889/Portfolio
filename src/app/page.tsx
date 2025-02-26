import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import { Page4 } from '@/components/Page4'
import Skills from '@/components/Skill'
import { ThreeDCardDemo } from '@/components/Projects'
import { InfiniteMovingCardsDemo } from '@/components/Testimonials'
import Contact from '@/components/Contact'



const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Page4 />
      <ThreeDCardDemo />
      <InfiniteMovingCardsDemo />
      <Contact/>
       
      
      
   

    </div>
  )
}

export default page;
