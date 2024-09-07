"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { httpAxios } from '@/helper/httpAxios'
import Swal from 'sweetalert2'


const UserProvider = ({ children }) => {
  const [user, setuser] = useState({})
  const [tasks, setTasks] = useState([])
  const [isLogin,setIsLogin ] = useState(false)

  const confirmChanges = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!"
    })
    return result
  }

  const getUser = async () => {
try {
    const result=await httpAxios.get('/api/users')
    setuser(result.data)
    setIsLogin(true)
    return (result.data)
  } catch (error) {
    console.log(err.message)
    setIsLogin(false)
}
    // return (
    //   await httpAxios.get('/api/users').then(result => {
    //     console.log("get user")
    //     setuser(result.data)
    //     setIsLogin(true)
    //     return (result.data)
    //   })
    // )
  }

  const createUser = async (user) => {
    try {
      const res = await httpAxios.post('/api/users', user)
      console.log(res)
      setIsLogin(true)
      Swal.fire({
        title: "Success",
        text: 'Account created successfully!!',
        icon: "success"
      });
      return res.data
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: error.message,
        icon: "error"
      });
      console.log(error)
    }
  }

  const logout = async () => {
    const res = await httpAxios.post('/api/logout')
    setIsLogin(false)
    return res
  }

  const login = async (data) => {
    try {
      console.log('From login',data)
      const res = await httpAxios.post('/api/login', data)
      Swal.fire({
        title: "Success",
        text: 'Login Successfull !!',
        icon: "success"
      });
      setIsLogin(true)
      console.log(res)
      return res.data
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: error.response.data.message,
        icon: "error"
      });
      console.log(error.response.data)
    }
  }

  const AddTask = async (task) => {
    await httpAxios.post('/api/users/' + user._id, task)
      .then((result) => {
        Swal.fire({
          title: "Success",
          text: "Your task added successfully!!",
          icon: "success"
        });
        console.log(result.data)
      })
      .catch((error)=>{
        Swal.fire({
          title: "Failed",
          text: error.response.data.message,
          icon: "error"
        });
        console.log(error.response.data)
      })
  }
  const DeleteTask = async (taskId) => {
    const result = await confirmChanges();
    if (result.isConfirmed) {
      await httpAxios.delete('/api/tasks/' + taskId)
        .then((result) => {
          setTasks(tasks.filter(val => { return val._id !== taskId }))
          console.log(result.data)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

        })
        .catch(err => console.log(err.message))
    }
  }
  const UpdateTask = async (taskId, data) => {
    const result = await confirmChanges();
    if (result.isConfirmed) {
      await httpAxios.put('/api/tasks/' + taskId, data)
        .then((result) => {
          console.log(result.data)
          Swal.fire({
            title: "Updated!",
            text: "Your file has been updated.",
            icon: "success"
          });
          setTasks(tasks.map((task) => {
            if (task._id === taskId) {
              task.title = data.title
              task.description = data.description
              task.status = data.status
            }
            return task
          }))
        })
        .catch(err => console.log(err.message))
    }
  }

  const GetTasks = async () => {
    try {
      const res = await getUser()
      console.log('Get Tasks', res)
      const result = await httpAxios.get('/api/users/' + res._id)
      console.log(result)
      setTasks(result.data)
      return result.data
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    // GetTasks()

  }, [])
  return (
    <>
      <UserContext.Provider value={{ user, tasks,isLogin, setTasks, getUser, logout, AddTask, setuser, GetTasks, DeleteTask, UpdateTask, login, createUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserProvider
