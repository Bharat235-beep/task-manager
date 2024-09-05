
import Image from 'next/image'
import React from 'react'

export default function Spinner() {
  return (
    <div className=''>
     <h2 className=' text-center  z-10 font-semibold text-xl'><span className='bg-gray-200 p-2 fixed'>Please wait...</span></h2>
     {/* <Image src={'spinner.gif'} width={50} height={50} alt='not found' /> */}
    </div>
  )
}
