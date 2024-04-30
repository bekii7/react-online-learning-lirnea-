import React, { useDebugValue, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const CourseConfirm = ({course}) => {
  const {Name,instructor,fee} = course
  console.log(course)

  const [enrolled,setEnrolled] = useState(null)
    const fetch = ()=>{
      console.log()
    }

  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center `}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Confirm Enrollment</h2>
        <p className="text-sm mb-4">You are about to Enroll:</p>
        <div className='grid mb-5'>

          <span>{Name}</span> 
          <span>{instructor}</span> 
          <span>for {fee}</span>
        </div>
        
        <div className="flex justify-end">
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            to='/course'
            onClick={fetch()}
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