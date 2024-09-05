"use client"
import UserContext from '@/context/userContext'
import 'react-responsive-modal/styles.css';
import React, { useContext, useState } from 'react'
import Modal from 'react-responsive-modal'

function UpdateTask(props) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  const {UpdateTask}=useContext(UserContext)
  const {_id,title,description,status}=props
    const [task,setTask]=useState({
        title:title,
        description:description,
        status:status
    })
    const handleOnChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const handleUpdateTask=async(e)=>{
      e.preventDefault();
     await UpdateTask(_id,task)
    console.log(task)
    console.log(_id)
     setOpen(false)
    }
  return (
    <div className=''>
          <button className='bg-blue-500 rounded-xl text-white p-1 text-sm hover:bg-blue-400 active:bg-blue-800' onClick={onOpenModal}>Edit</button>
        <Modal open={open}  onClose={onCloseModal} center>
        <div className=" flex flex-col justify-center w-80">
        <h1 className='text-center text-2xl font-semibold'>Update Task Here</h1>
      <form className=''onSubmit={handleUpdateTask}>
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
            <button className='bg-blue-600 m-2 text-white w-7/12 rounded-xl p-1.5 active:bg-blue-400 active:relative active:bottom-0.5' type='submit'>Update Task</button>
            {/* <button className='bg-blue-600 m-2 text-white w-28 rounded-xl p-1.5 active:bg-blue-400 active:relative active:bottom-0.5' type='reset'>Clear</button> */}
            {/* <button className='bg-red-600 m-2 text-white w-28 rounded-xl p-1.5 active:bg-red-400 active:relative active:bottom-0.5' type='reset'>Reset</button> */}
        </div>
      </form>
      </div>
      </Modal>
    </div>
  )
  
}

export default UpdateTask
