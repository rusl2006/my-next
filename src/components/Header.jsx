/*'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
    <header className="bg-black text-white relative z-10">
      <div className="bg-neutral-900 text-sm text-gray-400 flex justify-center items-center py-2">
        <span>
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </span>
        <span className="ml-1 text-yellow-400">↗️</span>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        
        <div className="relative w-40 h-10 sm:w-48 sm:h-12 md:w-60 md:h-16">
          <Image
            src="/FutureTech.jpeg"
            alt="FutureTech Logo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-xl" 
          />
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <nav 
          ref={menuRef}
          className={`${isMenuOpen ? 'block' : 'hidden md:flex'} md:items-center gap-6 absolute md:relative md:top-0 top-full left-0 w-full md:w-auto bg-black md:bg-transparent py-4 md:py-0 transition-all duration-300 ease-in-out border-t md:border-none border-neutral-800`}
        >
          <a href="#" className="block md:inline px-3 py-1 rounded-md bg-neutral-800 mx-4 md:mx-0 hover:bg-neutral-700 transition">
            Home
          </a>
          <a href="/1" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0 transition">
            News
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0 transition">
            Podcasts
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-3 py-1 mx-4 md:mx-0 transition">
            Resources
          </a>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition hidden md:block">
          Contact Us
        </button>
      </div>
    </header>
  );
}*/ 'use client';

import { useState, useEffect, useRef } from 'react';
 import Image from 'next/image'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Исключаем клик по кнопке-бургеру
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button.md\\:hidden')) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-black text-white relative z-10">
      {/* Верхний баннер: Сделаем текст короче для мобильных */}
      <div className="bg-neutral-900 text-sm text-gray-400 flex justify-center items-center py-2 px-4 text-center">
        {/* Используем sm:block для скрытия длинного текста на очень маленьких экранах */}
        <span className="hidden sm:block">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </span>
        {/* Альтернативный короткий текст для мобильных */}
        <span className="sm:hidden">
          Subscribe for News & Resources
        </span>
        <span className="ml-1 text-yellow-400">↗️</span>
      </div>

      {/* Основная панель навигации */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4 relative">
        
        {/* Логотип: Адаптивный размер, чтобы не занимал много места на мобилке */}
       <div className="relative w-40 h-10 sm:w-48 sm:h-12 md:w-60 md:h-16">
          <Image
            src="/FutureTech.jpeg"
            alt="FutureTech Logo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-xl" 
          />
        </div>
        {/* Кнопка-бургер */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Навигационное меню: Full width и отступы для мобильной версии */}
        <nav 
          ref={menuRef}
          className={`${isMenuOpen ? 'block shadow-2xl' : 'hidden md:flex'} 
            md:items-center gap-6 
            absolute md:relative 
            md:top-0 top-full 
            left-0 w-full md:w-auto 
            bg-black md:bg-transparent 
            py-4 md:py-0 
            transition-all duration-300 ease-in-out 
            border-t md:border-none border-neutral-800`}
        >
          {/* Пункты меню: Увеличенные вертикальные отступы для удобства на сенсорных экранах */}
          <a href="#" className="block md:inline px-4 py-3 md:py-1 rounded-md bg-neutral-800 mx-4 md:mx-0 hover:bg-neutral-700 transition">
            Home
          </a>
          <a href="/1" className="block md:inline text-gray-400 hover:text-white px-4 py-3 md:py-1 mx-4 md:mx-0 transition hover:bg-neutral-900 md:hover:bg-transparent rounded-md">
            News
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-4 py-3 md:py-1 mx-4 md:mx-0 transition hover:bg-neutral-900 md:hover:bg-transparent rounded-md">
            Podcasts
          </a>
          <a href="#" className="block md:inline text-gray-400 hover:text-white px-4 py-3 md:py-1 mx-4 md:mx-0 transition hover:bg-neutral-900 md:hover:bg-transparent rounded-md">
            Resources
          </a>
        </nav>

        {/* Кнопка "Contact Us": Скрыта на мобилке, как и было */}
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition hidden md:block flex-shrink-0">
          Contact Us
        </button>
      </div>
    </header>
  );
}
