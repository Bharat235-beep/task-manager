"use client"
import Spinner from '@/components/Spinner'
import UserContext from '@/context/userContext'
import React, { useContext, useEffect, useState } from 'react'

function AddTask() {
  const [loading,setLoading]=useState(false)
  const {AddTask,isLogin}=useContext(UserContext)
    const [task,setTask]=useState({
        title:"",
        description:"",
        status:""
    })
    const handleOnChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const handleAddTask=async(e)=>{
      e.preventDefault();
      setLoading(true)
    await AddTask(task)
      setTask({
        title:"",
        description:"",
        status:""
      })
      setLoading(false)
    }
    const handleGetUser=async()=>{
      setLoading(true)
     await getUser().catch(err=>console.log(err.message))
     setLoading(false)
    if(!isLogin){
      router.push('/login')
    }
    }
    useEffect(()=>{
      setLoading(true)
      handleGetUser()
      setLoading(false)
    },[isLogin])
  return (
    <>
    {loading && <Spinner/>}
    <div className=' min-w-full min-h-screen'>
        <h1 className='title text-white text-center text-3xl font-semibold'>Add Your Task Here</h1>
        <div className=" grid grid-cols-12 ">
      <form className='col-span-6 col-start-4'onSubmit={handleAddTask}>
        <div className='mb-2'>
        <label className='block mb-1 text-lg font-medium text-gray-900' htmlFor="title">Title</label>
        <input onChange={handleOnChange} value={task.title} name='title' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-600 block w-full p-2.5' type="text" id='title' required />
        </div>
        <div className='mb-2'>
        <label className='block mb-1 text-lg font-medium text-gray-900' htmlFor="title">Description</label>
        <textarea onChange={handleOnChange} value={task.description} name='description' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-600 block w-full p-2.5 '  id="description" rows="10" required></textarea>
        </div>
        <div className="mb-2">
        <label className='block mb-1 text-lg font-medium text-gray-900' htmlFor="title">Status</label>
            <select   value={task.status} onChange={handleOnChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-600 block w-full p-2.5' name="status" id="" required>
                <option value="" className='text-center' >------Select------</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
        </div>
        <div className="mb-2 flex flex-wrap justify-around">
            <button className='bg-blue-600 m-2 text-white w-7/12 rounded-xl p-1.5 active:bg-blue-400 active:relative active:bottom-0.5' type='submit'>Add Task</button>
            {/* <button className='bg-blue-600 m-2 text-white w-28 rounded-xl p-1.5 active:bg-blue-400 active:relative active:bottom-0.5' type='reset'>Clear</button> */}
            {/* <button className='bg-red-600 m-2 text-white w-28 rounded-xl p-1.5 active:bg-red-400 active:relative active:bottom-0.5' type='reset'>Reset</button> */}
        </div>
      </form>
      </div>
    </div>
    </>
  )
  
}

export default AddTask
