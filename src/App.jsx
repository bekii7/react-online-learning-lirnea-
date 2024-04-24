import { Router,Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
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

function App() {
  const [logged,setLogged] = useState(false)
  useEffect(()=>{
    const fetch = async ()=>{
      const Log = await api.get('/logged')
      setLogged(Log.data.logged)
      console.log(Log.data.logged)
    }
    fetch()
  },[])
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element = {<MainLayout logged={logged}/>}>
          <Route index element={<HomePage />}/>
          <Route path ='/courses' element={<CoursesPage />}/>
          <Route path ='/signin' element={<Signin logged={logged}/>}/>
          <Route path ='/AddCourses' element={<AddCoursePage />}/>
          <Route path ='/profile' element={<ProfilePage/>}/>
          <Route path ='/Enrolled' element={<Enrolledpage/>}/>
        </Route>
      )
    )
  return <RouterProvider router = {router} />
  }

export default App
