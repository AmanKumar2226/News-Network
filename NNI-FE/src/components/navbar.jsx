import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import "../component-styles/navbar.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Category from "./category-navbar";
import CategoryDialog from "./dialogs/Category-menu";
import { useTheme } from '../utils/ThemeContext';

export default function Navbar() {
  const [details, setDetails] = useState({});
  const token = localStorage.getItem('token'); // Get token from localStorage
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [subDialogClass, setSubDialogClass] = useState("");
  const [isSubDialogOpen, setIsSubDialogOpen] = useState(false);
  const { theme } = useTheme();



  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  useEffect(() => {
    if (token) { // Check if token exists before making API request
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/nni/get-users',
        headers: {
          Authorization: `Bearer ${token.replace(/"/g, '')}`, // Remove quotes
        },
      };

      axios.request(config)
        .then((response) => {
          setDetails(response.data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuClass(isMenuOpen ? "slide-out-bottom" : "slide-in-top");
  };

  const toggleSubDialog = () => {
    if (isSubDialogOpen) {
      // Start closing animation
      setSubDialogClass("slide-out-right");
      setTimeout(() => {
        setIsSubDialogOpen(false);
      }, 300); // Duration should match the CSS animation time
    } else {
      // Open sub-dialog with animation
      setIsSubDialogOpen(true);
      setSubDialogClass("slide-in-right");
    }
  };

  return (
    <>
      <div className="pt-2 flex flex-row items-center header-container mx-auto px-5 lg:px-10 bg-white pb-2 border-solid border-2 border-black-500 dark:border-none shadow-md dark:shadow-none justify-between dark:bg-[#2A2C38] dark:text-white ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center text-xl max-[768px]:hidden gap-3 font-semibold">
            <a href="/">
              <img className="logo dark:mix-blend-screen " src={theme === "light" ? "./images/logo.jpg" : "./images/logo-white.jpeg"} alt="logo" />
            </a>
            <a href="/">
              <h1>News Network India</h1>
            </a>
          </div>
          <div className="w-3/4 absolute top-12 left-32 max-[768px]:hidden">
            <p className="text-sm">Today is {Date().slice(0, 16)}</p>
          </div>
        </div>

        <div className="flex flex-row md:items-center md:space-x-20">
          <div className="hidden md:block">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16 md:items-center">
              <NavLink to="/" className="menu-link px-3 py-2 font-medium leading-none text-center dark:text-white" activeclassname="active-nav">
                Home
              </NavLink>
              <NavLink to="/about" className="menu-link px-3 py-2 font-medium leading-none text-center dark:text-white" activeclassname="active-nav">
                About
              </NavLink>
              <NavLink to="/all-news" className="menu-link px-3 py-2 font-medium leading-none dark:text-white text-center" activeclassname="active-nav">
                All News
              </NavLink>
              <NavLink to="/contact-us" className="menu-link px-3 py-2 font-medium leading-none dark:text-white text-center">
                Contact Us
              </NavLink>
            </div>
          </div>


          <div className="flex items-center max-[768px]:block min-[768px]:hidden relative">
            <button
              onClick={toggleMenu}
              id="menu"
              className="bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 dark:bg-[#1F1F1F] rounded-xl"
            >
               <img className="dark:h-[30px] dark:w-[30px]" src={theme === "light" ? "././images/dialog-btn.png" : "./images/Menu-Button.png"} alt="logo" />
              
            </button>
            {isMenuOpen && (
              <div className={`top-0 left-0 h-screen z-[9999] fixed py-4 px-2 ${menuClass} dark:bg-[#2A2C38] bg-white w-[390px]`}>
                <div className="mb-5 flex justify-between mr-10">
                <img className="logo dark:mix-blend-screen h-[50px] w-[50px]" src={theme === "light" ? "./images/logo.jpg" : "./images/logo-white.jpeg"} alt="logo" />
                  <button
                    onClick={toggleMenu} className="text-xl dark:bg-[#1F1F1F] dark:text-white font-bold bg-[#F5F5F5] p-1 h-[48px] w-[48px] px-4 rounded-xl">
                    X
                  </button>
                </div>
                <div className="flex flex-col justify-between h-[90%] ">
                  <div>
                    <button className="block flex gap-2 items-center py-2 mb-2 text-center font-semibold text-xl" onClick={() => { toggleSubDialog(), toggleMenu() }}>
                      <img src="./images/red-icon.png" alt="" />
                      Categories
                    </button>
                    <NavLink to="/" className="block py-2 mb-2 text-center" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/about" className="block py-2 mb-2 text-center" onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/all-news" className="block py-2 mb-2 text-center" onClick={toggleMenu}>All News</NavLink>
                    <NavLink to="/contact-us" className="block py-2 mb-2 text-center" onClick={toggleMenu}>Contact Us</NavLink>
                  </div>
                  {token ?
                    <div className="flex flex-col justify-center items-center gap-3 mb-10">
                      <img className="h-[100px] w-[100px] rounded-[50%] border-2 border-[red]" src={details.profilePicture} alt="" />
                      <p className="text-2xl font-semibold">{details.firstName} {details.lastName}</p>
                      <a href="/account" className="underline text-[blue] font-semibold">Visit Profile</a>
                      <button onClick={() => { handleLogout(), toggleMenu() }} className="w-full bg-black text-white text-xl py-2 rounded-xl">Logout</button>
                    </div>
                    :
                    <div className="flex flex-col gap-2">
                      <button onClick={() => { navigate('/login'), toggleMenu() }} className="block py-2 mb-2 text-center font-semibold text-xl border-2 rounded-xl w-full">Login</button>
                      <button to="/sign-up" className="block py-2 mb-2 text-center font-semibold text-xl bg-black text-white rounded-xl w-full" onClick={() => { navigate('/sign-up'), toggleMenu() }}>Sign Up</button>
                    </div>}

                </div>


              </div>
            )}
          </div>

        </div>


        <div class="flex w-[]">

          <div class="relative w-[399px] max-[769px]:w-[300px] ">
            <button type="submit" class="absolute dark:bg-[#1F1F1F] top-0 -left-8 p-2.5 h-full text-sm font-medium bg-[#F5F5F5] text-white rounded-s-lg border-[#1F1F1F] border-r-0 max-[769px]:ml-24"><img src={theme === "light" ? "./images/3dots.png" : "./images/3dot-white.png"} alt="" /></button>
            <input type="search" id="search-dropdown" class="block p-2.5 w-[400px] z-20 text-sm bg-[#F5F5F5] dark:bg-[#1F1F1F] rounded-e-lg rounded-s-2 border-[#1F1F1F] border-l-none max-[768px]:w-[190px] max-[769px]:ml-24" placeholder="Search Anything" required />
            <button type="submit" class="absolute top-0 rounded-e-lg end-0 p-2.5 h-full text-sm font-medium text-white max-[768px]"><img src={theme === "light" ? "./images/icon.png" : "./images/search-white.png"} alt="" /></button>
          </div>
        </div>

        {token ? (
          <div className="flex items-center gap-5 mr-10 max-[768px]:hidden dark:bg-[#2A2C38] dark:text-white">

            <Menu>
              <MenuHandler>
                <button className="flex items-center gap-2 font-semibold text-lg"><img className='w-14 h-14 rounded-xl' src={details.profilePicture} alt="" /><p className="typo">{details.userName}</p></button>
              </MenuHandler>
              <MenuList className="w-52 text-xl pt-2">
                <MenuItem onClick={() => { navigate("/account") }}>My Account</MenuItem>
                <MenuItem onClick={() => { navigate("/articles-from-us") }}>My Articles</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
        ) : (
          <div className='flex gap-10 mr-10 max-[768px]:hidden'>
            {/* Login/Signup buttons */}
            <a href="/login" className='flex'><button className='typo'>Login</button></a>
            <a href="/sign-up"><button className='typo bg-black text-white rounded-xl p-4'>Sign-Up</button></a>
          </div>
        )}



      </div>

      <CategoryDialog isOpen={isSubDialogOpen} onClose={toggleSubDialog} className={subDialogClass} />

      <Outlet />

    </>
  );
}
