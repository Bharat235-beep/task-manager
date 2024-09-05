"use client"
import UserContext from '@/context/userContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

function Navbar() {

    const { logout, user, setuser } = useContext(UserContext)
    const router = useRouter()
    const handlelogOut = async () => {
        const res = await logout()
        setuser(undefined)
        router.push('/login')
    }


    return (
        <nav id='desktop-navbar'>
            <div className='flex flex-row justify-between bg-slate-500 text-white p-3   '>
                <div className="brand font-bold animate-pulse text-lg">
                    <Link href={'/'}>Task Manager</Link>
                </div>
                <div className="nav-items">
                    <ul className='flex flex-row justify-center gap-x-10'>
                        <li className='hover:bg-black  p-1 rounded-2xl' ><Link href={'/'}>Home</Link></li>
                        <li className='hover:bg-black  p-1 rounded-2xl' ><Link href={'/add-task'}>Add Task</Link></li>
                        <li className='hover:bg-black  p-1 rounded-2xl' ><Link href={'/show-tasks'}>Tasks</Link></li>
                    </ul>
                </div>
                <div className="btn-group">
                    {/* <button type='button' className='bg-green-400 mx-2 text-white w-20 rounded-xl hover:bg-green-300'><Link href={'/create-account'}>Log In</Link></button> */}
                    <button type='button' className='bg-red-400 mx-2 text-white w-20 rounded-xl hover:bg-red-300' onClick={handlelogOut}>LogOut</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
