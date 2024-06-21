import { Link, Outlet, NavLink } from "react-router-dom";
import "../component-styles/navbar.css";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Navbar() {

  return (
    <>
      <div className="pt-2 flex flex-row items-center header-container mx-auto px-5 lg:px-10 bg-white pb-2 border-solid border-2 border-black-500 shadow-md justify-between">
        <div className="flex flex-col">
        <div className="flex flex-row items-center text-xl gap-3 font-semibold">
          <a href="/">
            <img className="logo" src="./images/logo.jpg" alt="logo" />
          </a>
          <a href="/">
            <h1>News Network India</h1>
          </a>
        </div>
        <div className="w-3/4 absolute top-12 left-32">
          <p className="text-sm">Today is {Date().slice(0,16)}</p>
        </div>
        </div>
        
        <div className="flex flex-row md:items-center md:space-x-20">
          <div className="hidden md:block">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16 md:items-center">
              <NavLink to="/" className="menu-link px-3 py-2 font-medium leading-none text-center" activeclassname="active-nav">
                Home
              </NavLink>
              <NavLink to="/about" className="menu-link px-3 py-2 font-medium leading-none text-center" activeclassname="active-nav">
                About
              </NavLink>
              <NavLink to="/all-news" className="menu-link px-3 py-2 font-medium leading-none text-center" activeclassname="active-nav">
                All News
              </NavLink>
              <NavLink to="/contact-us" className="menu-link px-3 py-2 font-medium leading-none text-center">
              Contact Us
            </NavLink>
            </div>
          </div>
          

          <div className="flex items-center md:hidden relative">
            <button
              id="menu"
              className="text-gray-800 text-2xl focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
            >
              <svg
                aria-label="open menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            <ul className="p-2 w-40 border-r bg-white absolute rounded z-20 top-10 right-0 shadow hidden">
              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-400 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <a href="#" className="ml-2">
                    Home
                  </a>
                </div>
              </li>
              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                <Link to="/about" className="nav-link text-white">
                  About Us
                </Link>
              </li>
              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none bg-white">
                <a href="#" className="ml-2">
                  Projects
                </a>
              </li>
              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 ml-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none bg-white">
                <a
                  href="#"
                  className="font-bold leading-none underline text-gray-900 hover:text-indigo-700"
                >
                  {" "}
                  Let's work together{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        

    <div class="flex w-[]">
        
        <div class="relative w-[399px] ">
            <button type="submit" class="absolute top-0 -left-8 p-2.5 h-full text-sm font-medium bg-[#F5F5F5] text-white rounded-s-lg border border-r-0"><img src="./images/3dots.png" alt="" /></button>
            <input type="search" id="search-dropdown" class="block p-2.5 w-[400px] z-20 text-sm bg-[#F5F5F5] rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-l-none" placeholder="Search Anything" required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white rounded-e-lg"><img src="./images/icon.png" alt="" /></button>
        </div>
    </div>
              <div className="flex items-center gap-5">
                  <img className='w-10 h-10 rounded-full' src="./images/icon.png" alt="" />
                  <Menu>
                    <MenuHandler>
                      <Button>Menu</Button>
                    </MenuHandler>
                    <MenuList className="w-52 text-xl pt-2">
                      <MenuItem>Menu Item 1</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                      <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                  </Menu>
          </div>
      </div>
      <Outlet />
    </>
  );
}
