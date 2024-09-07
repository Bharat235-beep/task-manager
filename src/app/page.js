"use client"
import Spinner from "@/components/Spinner";
import UserContext from "@/context/userContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactTyped } from "react-typed";

export default function Home() {
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  const {getUser,isLogin}=useContext(UserContext)
  const [user,setuser]=useState({})
  const handleGetUser=async()=>{
    setLoading(true)
   await getUser().then((res)=>{setuser(res)})
   .catch(err=>console.log(err.message))
   setLoading(false)
  if(!isLogin){
    router.push('/login')
  }
  }
  useEffect(()=>{
 handleGetUser()
  },[isLogin])
  
  return (
    <>
    {loading &&  <Spinner/>}
 { user.name &&  <main className="flex  flex-col items-center justify-between p-24">
     {/* <TypeAnimation
     sequence={[`Hi,${user.name} <strong> Welcome to the</strong> Task-Manager.\n Here you can add your task`]}
     className="text-red-600 text-4xl"
     /> */}
   <ReactTyped
    strings={[`<strong>Hi,${user.name}</strong><br/> Welcome to the Task-Manager.<br/> Here you can add your tasks.`]}
    typeSpeed={60}  className="title text-red-600 text-5xl text-center font-semibold italic"
    />
     <button className="bg-green-500 text-white mt-10 p-3 rounded-3xl hover:bg-green-400 active:bg-green-600 animate-bounce"  type="button" onClick={()=>router.push('/add-task')}>Add Task</button>
    </main>}
    </>
  );
}
