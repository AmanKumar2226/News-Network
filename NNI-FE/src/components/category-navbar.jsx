import React from 'react'
import '../component-styles/category-navbar.css'    
import { NavLink } from 'react-router-dom'


function Category() {
  return (
    <>
      <div className='w-full bg-black p-5 sticky top-0 z-40'>
      <nav className='flex flex-row justify-between '>
        <div className='flex flex-row items-center flex-wrap gap-6 justify-center'>
        <div>
          <NavLink to="/sports" activeclassname="active-category" className='text-white py-1 px-3'>Sports</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className='text-white py-1 px-3' to="/entertainment">Entertainment</NavLink>
        </div>
        <div>
          <NavLink Name="active-category" className=' text-white py-1 px-3' to="/general">General</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/health">Health</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/science">Science</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/business">Business</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/technology">Technology</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/headlines">Top Headlines</NavLink>
        </div>
        <div>
          <NavLink activeclassname="active-category" className=' text-white py-1 px-3' to="/apple-articles-from-yesterday">Apple Articles from yesterday</NavLink>
        </div>
        </div>  
        <div>
          <NavLink to="/login-form" activeclassname="login-link-active" className='login-link border-2 border-solid border-white rounded-xl text-white p-2'>Sign-in/Sign-up</NavLink>
        </div>
      </nav>
    </div>
    
    </>
    
  )
}

export default Category
