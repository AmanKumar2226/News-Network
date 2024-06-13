import React from "react";
import "../component-styles/category-navbar.css";
import { Link, NavLink } from "react-router-dom";

function Category() {
  return (
    <>
      {/* <div className='w-full bg-black p-5 sticky top-0 '>
      <nav className='flex flex-row justify-between '>
        <div className='flex flex-row items-center flex-wrap gap-5 justify-center'>
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
          <NavLink to="/articles-from-us" activeclassname="active-category" className='text-white py-1 px-3'>Articles from NNI</NavLink>
        </div>
        <div>
          <NavLink to="/login-form" activeclassname="login-link-active" className='login-link border-2 border-solid border-white rounded-xl text-white p-2'>Sign-in/Sign-up</NavLink>
        </div>
        
      </nav>
    </div> */}

      <div className="links flex justify-center mt-11 mb-14">
        <nav className="rounded-xl w-full mx-2 bg-[#F5F5F5] flex gap-6 cursor-pointer justify-center py-5">
        {[
          { name: "#Sports", Ref: "/sports" , image:"/images/sports.png"},
          { name: "#Entertainment", Ref: "/entertainment" , image:"/images/music3.png"},
          { name: "#General", Ref: "/general", image:"/images/animal.png"},
          { name: "#Health", Ref: "/health", image:"/images/technology.png"},
          { name: "#Science", Ref: "/science", image:"/images/car.png"},
          { name: "#Business", Ref: "/business", image:"/images/abstract.png"},
          { name: "#Technology", Ref: "/technology", image:"/images/technology.png"},
          { name: "#Top Headlines", Ref: "/headlines", image:"/images/car.png"},
          { name: "#Apple Articles from yesterday", Ref: "/apple-articles-from-yesterday", image:"/images/music3.png"},
          { name: "#Articles from NNI", Ref: "/articles-from-us", image:"/images/sports.png"},
        ].map((items, index) => (
          
          <Link
            key={index}
            className={`text-xl font-normal capitalize bg-cover rounded-xl bg-white p-2 text-white`}
            style={{backgroundImage: `url(${items.image})`}}
            to={items.Ref}
          >
            {items.name}
          </Link>

        ))}
        </nav>
      </div>
    </>
  );
}

export default Category;
