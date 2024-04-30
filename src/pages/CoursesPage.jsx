import React, { useEffect, useState } from 'react'
import HeroForCourses from '../components/HeroForCourses'
import Courses from '../components/Courses'
import api from '../assets/api'

const CoursesPage = () => {
  const [logged,setLogged] = useState(false)
  const [search,setSearch] = useState(null)
  const [send,setSend] = useState(false)
  useEffect(()=>{
    const fetch = async ()=>{
      const Log = await api.get('/logged')
      setLogged(Log)
    }
    fetch()
  },[])

  const getData = (item)=>{

    setSearch(item)
    setSend(true)
  }
  return (
    <>
      <HeroForCourses getData = {getData}/>
    {!send ? 
      <Courses /> :
      <Courses search={search}/> 
      
    }
      </>
  )
}

export default CoursesPage