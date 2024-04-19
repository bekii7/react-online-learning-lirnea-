import React, { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'

const AddCourse = () => {
  const [name,setName] = useState('')
  const [instructor,setInstructor] = useState('')
  const [fee,setFee] = useState('')
  const [dis,setDis] = useState('')

  const newCourse = {
    Name: name,
    Dis: dis,
    instructor:instructor,
    fee: fee
  }
  const submit = (e)=>{
    e.preventDefault()
    console.log(newCourse)
    fetch("http://localhost:3000/courses",{
      method:"POST",
      headers: {"content-type": "application/json"},
      body : JSON.stringify(newCourse)
    }).then(
      alert('course added')

    )
  }
  return (
    <body className="bg-gray-100 h-screen flex justify-center items-center">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Course</h2>
        <form action="/submit_course" onSubmit={submit} method="post">
            <div className="mb-4">
                <label for="course_name" className="block text-sm font-medium text-gray-700">Course Name:</label>
                <input type="text" id="course_name" name="course_name" required value={name} 
                onChange={(e)=>setName(e.target.value)} autoComplete='off'
                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none text-xl p-2"/>
            </div>
            
            <div className="mb-4">
                <label for="instructor_name" className="block text-sm font-medium text-gray-700">Instructor Name:</label>
                <input type="text" id="instructor" name="instructor" required value={instructor} onChange={(e)=>setInstructor(e.target.value)} autoComplete='off'
                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none text-xl p-2"></input>
            </div>
            <div className="mb-4">
                <label for="instructor_name" className="block text-sm font-medium text-gray-700">Course Fee :</label>
                <input type="text" id="fee" name="fee" required value={fee} onChange={(e)=>setFee(e.target.value)} autoComplete='off'
                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none text-xl p-2"></input>
            </div>
            <div className="mb-4">
                <label for="instructor_name" className="block text-sm font-medium text-gray-700">Description:</label>
                <textarea  id='Dis' name="Dis" required value={dis}
                onChange={(e)=>setDis(e.target.value)} autoComplete='off'
                       className="mt-1 block w-96 h-32 border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none text-xl pb-12 pl-2 overflow-scroll"/>
            </div>
            

            <button type="submit"
                    className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Add Course
            </button>
        </form>
    </div>
</body>
  )
}

export default AddCourse