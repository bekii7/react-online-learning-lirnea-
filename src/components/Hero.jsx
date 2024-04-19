import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
  <section className="bg-blue-800 text-white py-24">
    <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Unlock Your Potential with Online Courses</h1>
        <p className="text-lg mb-8">Explore our wide range of courses taught by industry experts.</p>
        <a href="/" className="bg-white text-blue-800 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide">Get Started</a>
    </div>
  </section>
  )
}

export default Hero