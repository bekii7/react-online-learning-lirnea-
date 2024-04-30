import React, { useEffect, useState } from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import {Nav} from '../components/Nav'
import Footer from '../components/Footer'
import api from '../assets/api'


const MainLayout = () => {
  const location = useLocation()
  const [navScroll,setNavScroll] = useState(false)
  const [navbar,setNavbar] = useState(true)
  const [logged,setLogged] = useState(null)
  const [dataFetched,setDataFetched] = useState(false)

  useEffect( ()=>{

    const fetch = async ()=>{
      const Log = await api.get('/log')
      setLogged(Log.data)
      setDataFetched(true)
    
    }
    fetch()
  },[location.pathname])
  
  useEffect(()=>{
    if(location.pathname == '/signin')
    {
      console.log('hello')
      setNavbar(false)
    } 
    return ()=>{
      if(location.pathname == '/signin')
      {
        console.log('hello')
        setNavbar(true)
      } 
    }
    
  },[location.pathname])



  
  return (
    <div>

    {dataFetched ?navbar?
    <>
    <Nav log={logged} />
    <Outlet context={logged}/>
     <Footer/>
     </> :
     <Outlet fetch={logged}/>
    :null }
    

     
    
    </div>
  )
}

export default MainLayout