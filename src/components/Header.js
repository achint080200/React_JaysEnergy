import React from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  const location = useLocation();  // Hook to get current location

  // Check if the current path is home
  const isHome = location.pathname === '/';

  return (
    <div className='  mt-[20px] '>
      <div className={`fixed top-0   border-b-[0.2px] border-white  z-[10]    sm:w-full px-16 py-3 font-['Neue Montreal'] bg-zinc-50   sm:flex sm:justify-between sm:items-center opacity-100  ${isHome ? 'text-black' : 'text-black'}`}>
        <p className={`${isHome && ""} text-3xl`}>
        
        <img className='h-[10vh] ' alt='no render' src={logo}/>
   
        </p>
        <div className='flex -ml-[35px] gap-[5px]  sm:gap-10'>
          {["Home", "About", "Services", "Projects", "ContactUs"].map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-lg font-light capitalize ${index === 4 && "sm:ml-32"} ${isActive ? "border-b-2 border-black" : " border-black"} 
                   `
                }
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;