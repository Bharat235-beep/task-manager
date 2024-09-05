'use client'
import UserContext from '@/context/userContext'
import { httpAxios } from '@/helper/httpAxios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const CreateUser = () => {
  const router=useRouter()
  const {createUser}=useContext(UserContext)
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })
    const handleCreateUser=async(e)=>{
      e.preventDefault()
     await createUser(user)
      setUser({
        name:'',
        email:'',
        password:''
      })
      router.push('/')
    }
    const handleOnChange=(e)=>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
    }
  return (
    <div className='flex flex-col'>
    <h1 className='title text-center text-3xl mb-3 text-white mt-10'>Create Your New Account</h1>
    <div className='flex flex-col place-items-center  '>
      <form onSubmit={handleCreateUser} className='flex flex-col place-items-center border border-red-200 w-4/5'>
        <div className=' w-4/5 mb-4'>
            <label className='block mb-1 font-medium text-lg' htmlFor="name">UserName</label>
            <input required onChange={handleOnChange} value={user.name} type="text" name='name' className='bg-gray-100 w-full p-2 border-gray-500 focus:outline-blue-300 focus-visible:ring-blue-800 rounded-xl' id='name' />
        </div>
        <div className=' w-4/5 mb-4'>
            <label className='block mb-1 font-medium text-lg' htmlFor="username">Email Address</label>
            <input required onChange={handleOnChange} value={user.email} type="email" name='email' className='bg-gray-100 w-full p-2 outline-gray-500 focus:outline-blue-300 focus-visible:ring-blue-800 rounded-xl' />
        </div>
        <div className=' w-4/5 mb-4'>
            <label className='block mb-1 font-medium text-lg' htmlFor="username">Password</label>
            <input required onChange={handleOnChange} value={user.password} type="password" name='password' className='bg-gray-100 w-full p-2 outline-gray-500 focus:outline-blue-300 focus-visible:ring-blue-800 rounded-xl' />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
            <button className='bg-green-600 text-white p-1.5 m-2 rounded-2xl hover:bg-green-500 active:bg-green-700' type="submit">Create Account</button>
            <Link className='text-blue-500 underline m-1' href={'/login'}>Already have account?</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreateUser
