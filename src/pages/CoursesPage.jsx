import React, { useEffect, useState } from 'react'
import HeroForCourses from '../components/HeroForCourses'
import Courses from '../components/Courses'
import api from '../assets/api'

const CoursesPage = () => {
  const [logged,setLogged] = useState(false)
  useEffect(()=>{
    const fetch = async ()=>{
      const Log = await api.get('/logged')
      setLogged(Log)
    }
    fetch()
  },[])
  return (
    <>
      <HeroForCourses />
      <Courses/>
    </>
  )
}

export default CoursesPage