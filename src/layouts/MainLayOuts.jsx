import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import {Nav} from '../components/Nav'
import Footer from '../components/Footer'


const MainLayout = ({logged}) => {
  console.log(logged)
  const noNavigation = useLocation()
  
  let navbar= true
  if(noNavigation.pathname == '/signin')
  {
    navbar = false
  }

  
  return (
    <div>
    {navbar?
    <>
    <Nav logged={logged}/>
    <Outlet/>
     <Footer/>
     </> :
     <Outlet/>
     }
    

     
    
    </div>
  )
}

export default MainLayout