import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../assets/api'

const EnrolledCourse = () => {
  useEffect(()=>{
    const fetch = async ()=>{
      const data = api.get('/enrolled')
    }
  },[])
  return (
    <div >
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4">
        <div className='flex justify-between'>
           <h3 className="text-lg font-semibold mb-2 text-neutral-100">Intro to web dev</h3>
          <NavLink to="/course" 
          className='inline-block bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Resume</NavLink>
          </div>
        <p className="text-neutral-300 mb-2">Progress: 50%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `50%` }}
          ></div>
        </div>
      </div>
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4">

          <div className='flex justify-between'>
           <h3 className="text-lg font-semibold mb-2 text-neutral-100">Data Science Essentials</h3>
          <NavLink to="/course" 
          className='inline-block bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Resume</NavLink>
          </div>

        <p className="text-neutral-300 mb-2">Progress: 20%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `20%` }}
          ></div>
        </div>
      </div>
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4 mb-4">
        <div className='flex justify-between'>
           <h3 className="text-lg font-semibold mb-2 text-neutral-100">Digital Marketing Fundamentals</h3>
          <NavLink to="/course" 
          className='inline-block bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Resume</NavLink>
          </div>
        <p className="text-neutral-300 mb-2">Progress: 80%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `80%` }}
          ></div>
        </div>
      </div>

    </div>
  )
}

export default EnrolledCourse