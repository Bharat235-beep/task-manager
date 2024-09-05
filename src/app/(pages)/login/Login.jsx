'use client'
import Spinner from '@/components/Spinner'
import UserContext from '@/context/userContext'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const Login = () => {
  const router=useRouter()
  const [loading,setLoading]=useState(false)
  const {login}=useContext(UserContext)
    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const handleLogIn=async()=>{
     setLoading(true)
     await login(user).then(()=>{
   setLoading(false)
        setUser({
          email:'',
          password:''
        })
        router.push('/')
      })
      return true
    }
    const handleOnChange=(e)=>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
    }
   
  return (
    <>
    {loading && <Spinner/>}
    <h1 className='title text-white text-center text-3xl mb-3 mt-10'>LogIn To Your Account</h1>
    <div className='flex flex-col place-items-center '>
      <form onSubmit={async(e)=>{
        e.preventDefault()
      await  handleLogIn();
      }}
       className='flex flex-col place-items-center border border-red-200  w-3/5'>
        
        <div className=' w-4/5 mb-4'>
            <label className='block mb-1 font-medium text-lg' htmlFor="username">Email Address</label>
            <input onChange={handleOnChange} placeholder='Demo-Email:bharat1@gmail.com' required value={user.email} type="email" name='email' className='bg-gray-100 w-full p-2 outline-gray-500 focus:outline-blue-300 focus-visible:ring-blue-800 rounded-xl' />
        </div>
        <div className=' w-4/5 mb-4'>
            <label className='block mb-1 font-medium text-lg' htmlFor="username">Password</label>
            <input onChange={handleOnChange} placeholder='Demo-Password:bharat' required value={user.password} type="password" name='password' className='bg-gray-100 w-full p-2 outline-gray-500 focus:outline-blue-300 focus-visible:ring-blue-800 rounded-xl' />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
            <button className='bg-green-600 text-white p-1.5 m-2 rounded-2xl hover:bg-green-500 active:bg-green-700' type="submit">Login To Account</button>
            <Link className='text-blue-500 underline m-1' href={'/create-account'}>Not have account?</Link>

        </div>
      </form>
    </div>
    </>
  )
}

export default Login
