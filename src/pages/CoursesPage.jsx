import React from 'react'
import HeroForCourses from '../components/HeroForCourses'
import Courses from '../components/Courses'
import CourseConfirm from '../components/CourseConfirm'

const CoursesPage = () => {
  const bere = 1
  return (
    <>
      <HeroForCourses />
      <Courses bere = {bere}/>
    </>
  )
}

export default CoursesPage