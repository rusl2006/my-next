"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const menuRef = useRef(null);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <header className="bg-black text-white relative z-10">
      <div className="bg-neutral-900 text-sm text-gray-400 flex justify-center items-center py-2 px-4 text-center">
        <span className="hidden sm:block">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </span>
        <span className="sm:hidden">Subscribe for News & Resources</span>
        <span className="ml-1 text-yellow-400">↗️</span>
      </div>

      <div className="container mx-auto flex justify-between items-center py-3 px-4 relative">
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
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <nav
          ref={menuRef}
          className={`${
            isMenuOpen ? "block shadow-2xl" : "hidden md:flex"
          } md:items-center gap-6 absolute md:relative md:top-0 top-full 
          left-0 w-full md:w-auto bg-black md:bg-transparent py-4 md:py-0 
          transition-all duration-300 ease-in-out border-t md:border-none border-neutral-800`}
        >
          <a
            href="/"
            className={`block md:inline px-4 py-3 md:py-1 rounded-md mx-4 md:mx-0 transition ${
              activePath === "/"
                ? "bg-neutral-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-neutral-900 md:hover:bg-transparent"
            }`}
          >
            Home
          </a>

          <a
            href="/1"
            className={`block md:inline px-4 py-3 md:py-1 mx-4 md:mx-0 rounded-md transition ${
              activePath === "/1"
                ? "bg-neutral-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-neutral-900 md:hover:bg-transparent"
            }`}
          >
            News
          </a>

          <a
            href="/2"
            className={`block md:inline px-4 py-3 md:py-1 mx-4 md:mx-0 rounded-md transition ${
              activePath === "/2"
                ? "bg-neutral-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-neutral-900 md:hover:bg-transparent"
            }`}
          >
            Podcasts
          </a>

          <a
            href="#"
            className="block md:inline text-gray-400 hover:text-white px-4 py-3 md:py-1 mx-4 md:mx-0 transition hover:bg-neutral-900 md:hover:bg-transparent rounded-md"
          >
            Resources
          </a>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition hidden md:block flex-shrink-0">
          Contact Us
        </button>
      </div>
    </header>
  );
}
