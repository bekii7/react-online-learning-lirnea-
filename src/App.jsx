import { Router,Route,createBrowserRouter,createRoutesFromElements,RouterProvider,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import api from './assets/api'
import './App.css'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayOuts'
import CoursesPage from './pages/CoursesPage'
import CourseConfirm from './components/CourseConfirm'
import Signin from './pages/Signin.'
import AddCoursePage from './pages/AddCoursePage'
import ProfilePage from './pages/ProfilePage'
import Enrolledpage from './pages/Enrolledpage'
import MainCoursePage from './pages/MainCoursePage'

function App() {
 
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element = {<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path ='/courses' element={<CoursesPage />}/>
          <Route path ='/signin' element={<Signin />}/>
          <Route path ='/AddCourses' element={<AddCoursePage />}/>
          <Route path ='/profile' element={<ProfilePage/>}/>
          <Route path ='/Enrolled' element={<Enrolledpage/>}/>
          <Route path= '/course' element= {<MainCoursePage/>}/>
        </Route>
      )
    )
  return <RouterProvider router = {router} />
  }

export default App
