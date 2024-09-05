"use client"
import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import UpdateTask from './UpdateTask'


const Task = (props) => {

    const {_id,title,description,status}=props
    const {DeleteTask}=useContext(UserContext)
    const handleDelete=()=>{
      DeleteTask(_id)
    }
  return (
    <>
   
        <div className={status==='pending'?'bg-gray-500 text-white w-3/4 p-2 m-3  shadow-lg shadow-blue-400':'bg-green-500 text-white w-3/4 p-2 m-3  shadow-lg shadow-blue-400'} >
      <div className="flex justify-between">
      <h1 className='text-2xl'>{title}</h1>
      <span><button className='bg-red-600 text-white p-1 text-sm rounded-xl hover:bg-red-500 active:bg-red-700' type='button' onClick={handleDelete}>Delete</button></span>
      </div>
      <p>{description}</p>
      <div className="flex justify-between items-end font-semibold mt-1">
      <p>{status.toUpperCase()}</p>
     <UpdateTask _id={_id} {...props}/>
      </div>
    </div>
    </>

  )
}

export default Task
