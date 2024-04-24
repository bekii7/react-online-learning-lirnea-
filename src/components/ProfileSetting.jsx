import React, { useState } from 'react'
import api from '../assets/api'

const ProfileSetting = () => {
  const [image,setImage] = useState(null)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(image)

    const setLogOut = ()=>{
      console.log("hello")
    }
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Update profile</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value=/* {profileData.name} */ "Bereket"
          /* onChange={handleInputChange} */
          className="text-black mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm outline-none sm:text-lg "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Name</label>
        <input
          type="text"
          id="email"
          name="email"
          value=/* {profileData.email} */"bereket123"
          /* onChange={handleInputChange} */
          className="text-black mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm outline-none sm:text-lg "
          required
        />
      </div>
      <div className="mb-4">
        <label  className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value=/* {profileData.password} */"bereket123"
          /* onChange={handleInputChange} */
          className="text-black mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm outline-none sm:text-lg "
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Changes
      </button>
      <label className="block text-sm font-medium text-gray-700 mt-4">Upload Profile Image</label>
      <input type='file' className='mt-4' onChange={(e)=>{
        setImage(e.target.files[0])
      }}/>
    </form>
      <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10' onClick={async ()=>{
        try{
          await api.put('/logged', 
          {logged: false});
            console.log(logged)
        }catch(err){
          console.log(err)
        }
        
      }}>logout</button>
  </div>
  )
}

export default ProfileSetting