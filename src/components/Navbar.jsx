import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import { CgMenuMotion, CgClose } from "react-icons/cg";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-20 px-4 sm:h-28 bg-transparent bg-opacity-20 backdrop-blur-sm">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-bold uppercase text-lg text-[#1BD9BF]">
          CompanyLogo
        </h1>

        <div className="md:visible invisible md:inline hidden border-2 border-[#1BD9BF] rounded-full px-6 py-4">
          <ul className="flex items-center space-x-10 font-medium">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>About Us</NavLink></li>
            <li><NavLink to="/nfts" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>NFTs</NavLink></li>
            <li><NavLink to="/pools" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>Pools</NavLink></li>
          </ul>
        </div>
        <div className="md:visible invisible md:inline hidden">
          <button
            type="button"
            className='px-4 py-2 font-semibold rounded-full text-black bg-[#1BD9BF] hover:bg-[#21eed3] transition-all duration-300 ease-in-out'
          >
            Connect Wallet
          </button>
        </div>
        <div className="md:hidden md:invisible visible">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className='font-semibold text-4xl text-[#1BD9BF] hover:text-[#21eed3] transition-all duration-300 ease-in-out'
          >
            <CgMenuMotion/>
          </button>
        </div>
      </nav>
      {
        <div className={`md:hidden md:invisible visible transition-width duration-300 ease-in-out bg-gray-800 fixed top-0 right-0 z-50 p-5 h-screen shadow-xl ${menuOpen ? 'w-80 visible opacity-100' : 'w-0 invisible opacity-0'}`}>
          <div className="flex flex-col items-end">
            <button type="button" className="font-semibold text-4xl text-[#1BD9BF] hover:text-[#21eed3] transition-all duration-300 ease-in-out" onClick={() => setMenuOpen(false)}>
              <CgClose/>
            </button>
            <ul className="flex flex-col items-start font-medium text-xl mr-auto ml-5 gap-y-4 mt-5">
              <li onClick={() => setMenuOpen(false)}><NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>Home</NavLink></li>
              <li onClick={() => setMenuOpen(false)}><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>About Us</NavLink></li>
              <li onClick={() => setMenuOpen(false)}><NavLink to="/nfts" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>NFTs</NavLink></li>
              <li onClick={() => setMenuOpen(false)}><NavLink to="/pools" className={({ isActive }) => (isActive ? 'text-[#1BD9BF] transition-all duration-300 ease-in-out' : 'hover:text-gray-100 transition-all duration-300 ease-in-out')}>Pools</NavLink></li>
            </ul>
            <div className="mr-auto mt-5 ml-4">
              <button type="button" className='px-4 py-2 font-semibold rounded-full text-black bg-[#1BD9BF] hover:bg-[#21eed3] transition-all duration-300 ease-in-out'>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Navbar;
