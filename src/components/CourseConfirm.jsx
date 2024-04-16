import React from 'react'
import { loadData } from './Courses'
import {Link} from 'react-router-dom'

const CourseConfirm = () => {
  const loaded = loadData()
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center `}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Confirm Enrollment</h2>
        <p className="text-sm mb-4">You are about to Enroll:</p>
        <div className='grid mb-5'>

          <span>{loaded.courseName}</span> 
          <span>{loaded.instructor}</span> 
          <span>for {loaded.fee}</span>
        </div>
        
        <div className="flex justify-end">
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            to='/course'
          >
            Confirm
          </Link>
          <a
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            href='/courses'
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseConfirm