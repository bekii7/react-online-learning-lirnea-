import React from 'react'
import Heroprofile from '../components/Heroprofile'
import EnrolledCourse from '../components/EnrolledCourse'

const ProfilePage = () => {
  return (
    <>
    <Heroprofile/>
    <p className='font-bold text-xl mt-4 ml-4'>Your courses</p>
    <EnrolledCourse />
    </>
    
  )
}

export default ProfilePage