import { Link, Outlet, NavLink , useNavigate} from "react-router-dom";
import "../component-styles/navbar.css";
import {useState, useEffect} from 'react'
import axios from 'axios'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Category from "./category-navbar";

export default function Navbar() {
  const [details, setDetails] = useState({});
  const token = localStorage.getItem('token'); // Get token from localStorage
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState(""); 
const navigate = useNavigate();

  const handleLogout = ()=>{
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

  return (
    <>
      <div className="pt-2 flex flex-row items-center header-container mx-auto px-5 lg:px-10 bg-white pb-2 border-solid border-2 border-black-500 shadow-md justify-between">
        <div className="flex flex-col">
        <div className="flex flex-row items-center text-xl max-[768px]:hidden gap-3 font-semibold">
          <a href="/">
            <img className="logo" src="./images/logo.jpg" alt="logo" />
          </a>
          <a href="/">
            <h1>News Network India</h1>
          </a>
        </div>
        <div className="w-3/4 absolute top-12 left-32 max-[768px]:hidden">
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
          

          <div className="flex items-center max-[768px]:block min-[768px]:hidden relative">
            <button
            onClick={toggleMenu}
              id="menu"
              className="bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-xl"
            >
              <img src="./images/dialog-btn.png" alt="" />
            </button>
            {isMenuOpen && (
            <div className={`top-0 left-0 h-screen z-[9999] fixed py-4 px-2 ${menuClass} bg-white w-[390px]`}>
              <div className="mb-5 flex justify-between mr-10">
              <img className="h-[50px] w-[50px]" src="./images/logo.jpg" alt="" />
              <button
              onClick={toggleMenu} className="text-xl font-bold bg-[#F5F5F5] p-1 h-[48px] w-[48px] px-4 rounded-xl">
                  X
              </button>
              </div>
              <div className="flex flex-col justify-between h-[90%]">
              <div>
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
                <button onClick={()=>{handleLogout(), toggleMenu()}} className="w-full bg-black text-white text-xl py-2 rounded-xl">Logout</button>
              </div>
              :
              <div className="flex flex-col gap-2">
              <button onClick={()=>{navigate('/login'),  toggleMenu()}} className="block py-2 mb-2 text-center font-semibold text-xl border-2 rounded-xl w-full">Login</button>
              <button to="/sign-up" className="block py-2 mb-2 text-center font-semibold text-xl bg-black text-white rounded-xl w-full" onClick={()=>{navigate('/sign-up'), toggleMenu()}}>Sign Up</button>
              </div> }
              
              </div>
             
           
          </div>
             )}
          </div>
          
        </div>
        

    <div class="flex w-[]">
        
        <div class="relative w-[399px] max-[769px]:w-[300px]">
            <button type="submit" class="absolute top-0 -left-8 p-2.5 h-full text-sm font-medium bg-[#F5F5F5] text-white rounded-s-lg border border-r-0 max-[769px]:ml-24"><img src="./images/3dots.png" alt="" /></button>
            <input type="search" id="search-dropdown" class="block p-2.5 w-[400px] z-20 text-sm bg-[#F5F5F5] rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-l-none max-[768px]:w-[190px] max-[769px]:ml-24" placeholder="Search Anything" required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white rounded-e-lg max-[768px]"><img src="./images/icon.png" alt="" /></button>
        </div>
    </div>
              
          {token ? (
          <div className="flex items-center gap-5 mr-10 max-[768px]:hidden">
     
          <Menu>
            <MenuHandler>
              <button className="flex items-center gap-2 font-semibold text-lg"><img className='w-14 h-14 rounded-xl' src={details.profilePicture} alt="" /><p className="typo">{details.userName}</p></button>
            </MenuHandler>
            <MenuList className="w-52 text-xl pt-2">
              <MenuItem onClick={()=>{navigate("/account")}}>My Account</MenuItem>
              <MenuItem onClick={()=>{navigate("/articles-from-us")}}>My Articles</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
  </div>
        ) : (
          <div className='flex gap-10 mr-10'>
            {/* Login/Signup buttons */}
            <a href="/login" className='flex'><button className='typo'>Login</button></a>
            <a href="/sign-up"><button className='typo bg-black text-white rounded-xl p-4'>Sign-Up</button></a>
          </div>
        )}
      </div>
       
      <Outlet />
    </>
  );
}
