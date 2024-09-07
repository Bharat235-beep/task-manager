"use client"
import Spinner from '@/components/Spinner'
import Task from '@/components/Task'
import UserContext from '@/context/userContext'
import React, { useContext, useEffect, useState } from 'react'

const ShowTasks = () => {
 const [loading,setLoading]=useState(true)
  const {GetTasks,getUser,user,tasks,setTasks,isLogin}=useContext(UserContext)
 const handleGetTask=async()=>{
await GetTasks()
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
  useEffect(()=>{
    setLoading(true)
    handleGetTask()
    setLoading(false)
  },[])
  return (
    <>
{loading && <Spinner/>}
    <div className=' flex flex-col flex-wrap justify-center items-center'>
      <h1 className='title text-center text-3xl font-semibold m-2 text-white '>You have {tasks.length} Tasks</h1>
    {
  tasks &&    tasks.map((task)=>{
        return <Task key={task._id} {...task} />
      })
    }
    </div>
    </>
  )
}

export default ShowTasks
