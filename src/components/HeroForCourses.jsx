import React from 'react'
import { FaSearch } from 'react-icons/fa'
const HeroForCourses = () => {
  return (
    <div className="bg-blue-700 text-white text-center py-4">
          <h1 className="text-3xl font-bold">Explore Our Courses</h1>
      <div className='mt-5 '>
        <input type="text" className='outline-none text-black pl-2 rounded-md ' />
        <button className='bg-blue-700'>
          <FaSearch className='ml-4 bg-blue-700'/>
        </button>
          
      </div>
    </div>
  )
}

export default HeroForCourses