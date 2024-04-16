import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="bg-gray-800 text-white py-8 text-center grid-gap-3">
    <div className="container mx-auto grid ">
        <p>&copy; 2024 Lirnea - An Online Learning Platform. All rights reserved.</p>
        <Link to='/' className='text-white text-xl mt-5'>
          About Lirnea
        </Link>
        <Link to='/' className='text-white text-xl'>
          Contact
        </Link>

    </div>
  </footer>
  )
}

export default Footer