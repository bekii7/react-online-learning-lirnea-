import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import { useState } from 'react'
import {Nav} from '../components/Nav'
import Footer from '../components/Footer'


const MainLayout = () => {
  const noNavigation = useLocation()
  
  let navbar= true
  if(noNavigation.pathname == '/signin')
  {
    console.log('ya')
    navbar = false
  }else{
    console.log('no')
  } 

  
  return (
    <div>
    {navbar?
    <>
    <Nav />
    <Outlet/>
     <Footer/>
     </> :
     <Outlet/>
     }
    

     
    
    </div>
  )
}

export default MainLayout