import React from 'react';
import "../../component-styles/navbar.css";
import { Link } from 'react-router-dom';

const CategoryDialog = ({ isOpen, onClose, className }) => {
  return (
    <div className={`fixed z-[999999] top-0 right-0 h-full w-full md:w-1/2 dark:text-white dark:bg-[#2A2C38] bg-white p-5 transition-transform ${isOpen ? className : ''} ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex justify-between'>
            <div className='flex w-1/2 gap-2 mb-2 items-center'>
                <img className='py-5' src="./images/red-icon.png" alt="" />
                <h1 className='text-2xl font-semibold'>Categories</h1>
            </div>
            
        <button onClick={onClose} className="mb-4 dark:bg-[#1F1F1F] dark:text-white bg-[#F5F5F5] p-2 rounded-xl w-[50px] text-xl font-bold">X</button>
        </div>
      
      <nav className="rounded-xl w-full mx-2 bg-[#F5F5F5] dark:bg-[#2A2C38] flex flex-col gap-6 cursor-pointer justify-center py-5">
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
          onClick={onClose}
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
  );
};

export default CategoryDialog;
