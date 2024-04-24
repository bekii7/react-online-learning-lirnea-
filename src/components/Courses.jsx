import React, { useEffect, useState } from 'react'
import CourseConfirm from './CourseConfirm'
import ClipLoader from 'react-spinners/ClipLoader'
import { useLocation } from 'react-router-dom'
import api from '../assets/api'

const user = "bereket123"
const Courses = () => {
  const [confirm,setConfirm] = useState(false)
  const [courses,setCourses] = useState([])
  const [loading,setLoading] = useState(true)
  const [wishlist,setWishlist] = useState('')
  const [limit,setLimit] = useState(3)
  const location = useLocation()
  
  
  useEffect(()=>{
    const fetchApi = async ()=>{
      try{
        const response = await api.get('/courses')
        setCourses(response.data)
        setLoading(false)
        const dataLength = response.data.length
        if(location.pathname !== '/'){
          setLimit(dataLength)
        }
      } catch(err){
        console.log(err)
      }
  }
  fetchApi()
  },[])

  const addWish = async (wishJson)=>{
  try{
    const post = await api.post('/wishList',
      wishJson
    )
  }catch(error){
    console.log(error)
  }
}
  const setSeteWish = (wish)=>{
    const wishJson = {
      userName: 'bereket77',
      courseId: wish
    }
    addWish(wishJson)
  

  }
  return (
    <>
     <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {!loading ? courses.slice(0,limit).map((course) => (
                <div key={course.key} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{course.Name}</h2>
                        <p className="text-gray-600 mb-2">{course.dis}</p>
                        <p className='mb-2 text-gray-600'>Instructor: <span>{course.instructor}</span></p>
                        <p className='mb-2 text-gray-600'>Duration: <span>{course.duration}</span></p>
                        <p className='mb-3 text-gray-600'>Fee:$<span>{course.fee}</span></p>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full ml-8 lg:ml-[150px]"
                            onClick={() => setConfirm(true)}
                        >
                            Enroll Now
                        </button>
                        <button 
                        onClick={()=>{
                          const wish = course.id
                          setSeteWish(wish)
                          }}
                        className='bg-neutral-200 shadow-sm rounded-md w-20 ml-4 py-2 px-2'>
                            Wish list
                        </button>
                    </div>
                </div>
            )) : <ClipLoader className='ml-96 w-96 h-96 mt-8'/>}
        </div>
    </div>
    {confirm && <CourseConfirm />} {/* Render CourseConfirm component conditionally */}
</>
  )
}
const loadData = ()=>{
  const data = {
    courseName:'Introduction to Web Development',
    courseDis: 'Learn the fundamentals of building websites.',
    instructor: 'Bereket Dereje',
    fee: '$12.99'
}

return data
}

/* const noNav = ()=>{
  const noNavigation = true
  return noNavigation
} */

export {Courses as default,loadData}