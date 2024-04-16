import React from 'react'
import '../assets/body.css'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Hero />
      <span className='font-bold text-2xl ml-2 mt-4'>Featured Courses</span>
      <Courses />
      
    </>
  )
}

export default HomePage