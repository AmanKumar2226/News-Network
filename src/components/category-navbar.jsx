import React from 'react'
import '../component-styles/category-navbar.css'


function Category() {
  return (
    <>
      <div className='w-full bg-black p-5 sticky top-0 z-40'>
      <nav className='flex flex-row justify-between '>
        <div className='flex flex-row items-center flex-wrap gap-10 justify-center'>
        <div>
          <a className='text-white py-1 px-3' href="/">Sports</a>
        </div>
        <div>
          <a className='text-white py-1 px-3' href="/">Entertainment</a>
        </div>
        <div>
          <a className='text-white py-1 px-3' href="/">Politics</a>
        </div>
        <div>
          <a className='text-white py-1 px-3' href="/">Health</a>
        </div>
        <div>
          <a className='text-white py-1 px-3' href="/">Technology</a>
        </div>
        <div>
          <a className='text-white py-1 px-3' href="/">Weather</a>
        </div>
        </div>  
        <div>
          <a href="/login-form" className='border-2 border-solid border-white rounded-xl text-white p-2'>Sign-in/Sign-up</a>
        </div>
      </nav>
    </div>
    
    </>
    
  )
}

export default Category
