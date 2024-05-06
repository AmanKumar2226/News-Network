import { Link, Outlet, NavLink } from "react-router-dom";
import "../component-styles/navbar.css";

export default function Navbar() {

  return (
    <>
      <div className="pt-2 flex flex-row items-center justify-between header-container mx-auto px-5 lg:px-10 bg-white pb-2 border-solid border-2 border-black-500 shadow-md">
        <div className="flex flex-col">
        <div className="flex flex-row items-center text-xl gap-3 font-semibold">
          <a href="/">
            <img className="logo" src="./images/logo.jpg" alt="logo" />
          </a>
          <a href="/">
            <h1>News Network India</h1>
          </a>
        </div>
        <div className="w-3/4 absolute top-12 left-36">
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
            </div>
          </div>
          <div className="hidden md:block">
            <NavLink to="/weather-today" className="menu-link px-3 py-2 font-medium leading-none text-center">
              Weather Today
            </NavLink>
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
      </div>
      <Outlet />
    </>
  );
}