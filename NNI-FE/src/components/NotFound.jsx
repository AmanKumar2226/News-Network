import React from 'react'
import { Link } from 'react-router-dom' 
function NotFound() {
  return (
    <div>
      <div className='flex flex-col text-center items-center my-24'>
        <h1 className='text-[192px] text-[#FC4308] font-bold drop-shadow-[0px_0px_44px_rgba(252,67,8,0.35)]'>404</h1>
        <p className='text-lg font-semibold'>OOPS! Page you're looking for doesn't exist. Please use search for help</p>
        <Link className='mt-5 text-xl font-semibold text-cyan-600 underline' to="/">GO BACK TO HOME</Link>
      </div>
    </div>
  )
}

export default NotFound
