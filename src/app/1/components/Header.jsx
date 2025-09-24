'use client'; 
import Link from 'next/link';


import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const menuRef = useRef(null); 

  useEffect(() => { 
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-black text-white">
      <div className="bg-neutral-900 text-sm text-gray-400 flex justify-center items-center py-2">
        <span>
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </span>
        <span className="ml-1 text-yellow-400">↗️</span>
      </div>

      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <img
            src="./src/images/logo.png"
            alt="FutureTech"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">FutureTech</span>
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          
        </button>

        <nav 
          ref={menuRef}
          className={`${
            isMenuOpen ? 'block' : 'hidden md:flex'
          } md:items-center gap-6 absolute md:relative md:top-0 top-full left-0 w-full md:w-auto bg-black md:bg-transparent py-4 md:py-0 transition-all duration-300 ease-in-out`}
        >
          
         <Link href="/" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0">
          Home
         </Link>
         <a href="#" className="block md:inline px-3 py-1 rounded-md bg-neutral-800 mx-4 md:mx-0">
            News
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0">
            Podcasts
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0">
            Resources
          </a>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500">
          Contact Us
        </button>
      </div>
    </header>
  );
}