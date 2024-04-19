
import {useState,useEffect} from 'react'
import '../assets/body.css'; 
import React from 'react';
import Cliploader from 'react-spinners/ClipLoader'
import { FaSalesforce } from 'react-icons/fa';
import { NavLink, useLocation,useNavigation } from 'react-router-dom';

let logged = false
const Signin = () => {
 let [create,setCreate] = useState(false)
  const [firstName,setFirstName] = useState('')
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [userNameLog,setUserNameLog] = useState('')
  const [passwordLog,setPasswordLog] = useState('')
  const [loading,setloading] = useState(false)
  const [lessWord,setLessWord] = useState(false)
  const [takenUser,setTakenUser] = useState(false)
  const [correctPass,setCorrectPass] = useState(false)
  const [passMatch,setPassMatch] = useState(true)
  const [passAndCon,setPassAndCon] = useState(true)

 const signToLog = (e)=>{
  setCreate(prevstate => !prevstate)
 }
 const verify = async (e)=>{
  e.preventDefault()
  if(password !== confirmPassword){
    console.log("not working")
    setPassAndCon(false)
  }else{

  
  if(userName.length<5){
    setLessWord(true)
    
  }else{
  const response = await fetch("http://localhost:3000/accounts")
  const result = await response.json()
  console.log(result)
  result.forEach(user => {
    
    if( user.uName == userName.toString()){
      setTakenUser(true)
      setUserName('')
    }
    else{
      createAcc()
    }
  });}}
 }
 //create account
 const createAcc = (e)=>{
  setloading(true)

  const newAcc = {
    fName: firstName,
    uName: userName,
    pass: password
  }
  fetch('http://localhost:3000/accounts',{
    method: 'POST',
    headers: {"content-type":"application/json"},
    body: JSON.stringify(newAcc)
  }).then(()=>{
     console.log('new acc added')
    setloading(false)
  }
   
  ).catch((error)=>{
    console.log(error)
  })
  window.location.href = "/"
  alert('new account created')
 }
//login
 const verifyLog = async (e)=>{
  e.preventDefault()
  const response = await fetch("http://localhost:3000/accounts")
  const result = await response.json()
  result.forEach(user => {
    
    if( passwordLog.toString() == user.pass && user.uName == userNameLog.toString()){
      logged = true
      window.location.pathname = ("/")
      alert("you login was succsesful")
    }else{
      setPassMatch(false)
    }
  });
 }

useEffect(()=>{
 setCreate(false)
},[])
  return (
    <>

      <div className="min-h-screen bg-gray-900 text-white">
        <section className="w-4/5 h-auto bg-slate-800 ml-20  p-8 rounded-lg          shadow-lg">
          {create ? <div className="flex flex-col items-center justify-center h-full mt-32">
          {!passAndCon ?<h3 className='absolute top-0 bg-red-100 text-red-600 text-xl'>The passwords doesn't match</h3>: null}
            <h2 className='absolute right-32 top-32 hover:cursor-pointer' onClick={signToLog}>Already have account?</h2>
            <h1 className="text-3xl font-bold mb-6">Create Account</h1>
            <form onSubmit={verify}
            className="w-full max-w-sm">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-lg font-medium" >First Name</label>
                <input
                  id="firstName"
                  type="text"
                  autoComplete='off'
                  className="text-black mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm outline-none sm:text-lg "
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-lg font-medium" >User Name</label>
                <input
                  id="userName"
                  type="text"
                  autoComplete='off'
                  className="mt-1 outline-none p-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={userName}
                  onChange={(e)=> setUserName(e.target.value)}
                />
                {lessWord ?
                  <span 
                  >&#x2022;it should be atleast 5 words</span>: null}<br />{takenUser ?<span>&#x2022;This user name is taken</span>: null}
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-lg font-medium" >Password </label>
                <input
                  id="password"
                  type="text"
                  autoComplete='off'
                  className="mt-1 block outline-none p-1 text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" 
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                {correctPass? <span>Password should contain uppercase and special character</span>: null}
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-lg font-medium" >Confirm password</label>
                <input
                  id="confirmPassword"
                  type="text"
                  autoComplete='off'
                  className="mt-1 block text-black outline-none p-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </div>

              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                 {!loading ? "Create":
               <Cliploader className=""/>}
                </button>
              </div>
            </form>
          </div>: 
//login

         <div className="flex flex-col items-center justify-center h-full mt-32">
          {!passMatch ?<h3 className='absolute top-0 bg-red-100 text-red-600 text-xl'>The password and username doesn't match</h3>: null}
         <h2 className='absolute right-32 top-32 hover:cursor-pointer' onClick={signToLog}>Create account?</h2>
         <h1 className="text-3xl font-bold mb-6">Sign in</h1>
         <form onSubmit={verifyLog} 
         className="w-full max-w-sm">
           <div className="mb-4">
             <label className="block text-lg font-medium">User Name</label>
             <input
               id="userNameLog"
               type="text"
               autoComplete='off'
               className="mt-1 block outline-none p-1 text-black w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
               value={userNameLog}
              onChange={(e)=> setUserNameLog(e.target.value)}
             />
           </div>
           <div className="mb-4">
             <label  className="block text-lg font-medium">Password </label>
             <input
               id="firstNamePass"
               type="password"
               autoComplete='off'
               className="mt-1 block text-black outline-none p-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
               value={passwordLog}
                onChange={(e)=> setPasswordLog(e.target.value)}
             />
           </div>

           
           <div className="flex justify-end">
             <NavLink
             to='/'
               type="submit"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             >
               {!loading ?"Log in":
               <Cliploader className="ml-[500px] mt-[100px]"/>}
             </NavLink>
           </div>
         </form>
       </div> }
        </section>
      </div>
    </>
  );
};

export {Signin as default,  logged}
