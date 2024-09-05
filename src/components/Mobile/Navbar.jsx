"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import "./Navbar.css"
import UserContext from '@/context/userContext'
import { useRouter } from 'next/navigation'
const MobileNavbar = () => {
    const { logout, user, setuser } = useContext(UserContext)
    const router = useRouter()
    const handlelogOut = async () => {
        const res = await logout()
        setuser(undefined)
        router.push('/login')
    }
  return (
    < >
              
        <Menu isOpen={false} right={true}>
        <Link id="home" className="menu-item" href={"/"}>Home</Link>
        <Link id="about" className="menu-item" href={"/add-task"}>Add Task</Link>
        <Link id="contact" className="menu-item" href={"/show-tasks"}>Tasks</Link>
        <div className="btn-group menu-item">
                    {/* <button type='button' className='bg-green-400 mx-2 text-white w-20 rounded-xl hover:bg-green-300'><Link href={'/create-account'}>Log In</Link></button> */}
                    <button type='button' className='bg-red-400 mx-2 text-white w-20 rounded-xl hover:bg-red-300' onClick={handlelogOut}>LogOut</button>
                </div>
      </Menu>
    </>
  )
}

export default MobileNavbar
