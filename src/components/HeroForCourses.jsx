import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import api from '../assets/api'
const HeroForCourses = () => {

  const searchCourse = async (value)=>{
    const search = await api.get('/courses')
    const items = search.data
    items.forEach(item=>{
      if(value !== '' && item.instructor.includes(value)){
          console.log(item.instructor) 
      }
    })
  }

  return (
    <div className="bg-blue-700 text-white text-center py-4">
          <h1 className="text-3xl font-bold">Explore Courses</h1>
      <div className='mt-5 '>
        <input type="text" className='outline-none text-black pl-2 rounded-md w-80' onChange={(e)=>{
        searchCourse(e.target.value)
          }} placeholder='Search for courses or instructors'/>
        <button className='bg-blue-700'>
          <FaSearch className='ml-4 bg-blue-700'/>
        </button>
          
      </div>
    </div>
  )
}

export default HeroForCourses