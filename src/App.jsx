import { Router,Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayOuts'
import CoursesPage from './pages/CoursesPage'
import CourseConfirm from './components/CourseConfirm'
import Signin from './pages/Signin.'
import AddCoursePage from './pages/AddCoursePage'

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element = {<MainLayout/>}>
          <Route index element={<HomePage />}/>
          <Route path ='/courses' element={<CoursesPage />}/>
          <Route path ='/signin' element={<Signin />}/>
          <Route path ='/AddCourses' element={<AddCoursePage />}/>
        </Route>
      )
    )
  return <RouterProvider router = {router} />
  }

export default App
