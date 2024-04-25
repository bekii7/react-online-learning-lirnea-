import React, { useState,useEffect } from 'react'
import { NavLink,useLocation} from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
 

const Nav = ({log}) => {

  const {logged,userName} = log
  console.log(log)
  
  
   const login = logged
   const user = userName 
  
  return (
  <nav className="bg-blue-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-2">
        <span className="text-2xl font-bold">LIRNEA </span>
        <div>
            <NavLink to='/' className={({isActive})=> isActive ?"text-white hover:text-white hover:cursor-pointer  mx-2" :"text-gray-400 hover:text-white hover:cursor-pointer  mx-2"} onClick={active("Home")}>Home</NavLink>
            <NavLink to='/courses' className={({isActive})=> isActive ?"text-white hover:text-white hover:cursor-pointer  mx-2" :"text-gray-400 hover:text-white hover:cursor-pointer  mx-2"}onClick={active("Courses")}>Courses</NavLink>
            <NavLink to='/AddCourses' className={({isActive})=> isActive ?"text-white hover:text-white hover:cursor-pointer  mx-2" :"text-gray-400 hover:text-white hover:cursor-pointer  mx-2"} onClick={active("Add_courses")}>Add Courses</NavLink >
              {login ?<NavLink to="/profile">
                <p className='inline-block text-base text-white font-bold h-8 pt-1 ml-2 p-3 bg-blue-800 w-10 h-10 rounded hover:cursor-pointer'> { user.charAt(0).toUpperCase() } </p>
                 </NavLink>:
              //change the logged in letter
              <NavLink to="/signin"><BsPerson  className='inline-block text-base text-white font-bold h-8 pt-1 ml-2 mr-2 bg-blue-800 w-10 h-10 rounded hover:cursor-pointer'/></NavLink>}
            
            <NavLink to='/Enrolled' className={({isActive})=> isActive ?"text-white hover:text-white hover:cursor-pointer  mx-2" :"text-gray-400 hover:text-white hover:cursor-pointer  mx-2"} onClick={active("Enrolled")}>Enrolled</NavLink>
        </div>
    </div>
  </nav>
  )
}
const active = (activePage)=>{
  return activePage
}

export {Nav,active}