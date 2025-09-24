'use client'; // Директива для клиентского рендера

import { useState, useEffect } from 'react';

export default function Main() {
  const [stats, setStats] = useState({ resources: 0, downloads: 0, users: 0 }); // useState для анимированных чисел

  useEffect(() => {
    // useEffect: анимация при загрузке
    const timer = setInterval(() => {
      setStats(prev => ({
        resources: prev.resources < 300 ? prev.resources + 1 : 300,
        downloads: prev.downloads < 12000 ? prev.downloads + 10 : 12000,
        users: prev.users < 10000 ? prev.users + 5 : 10000,
      }));
    }, 20);
    return () => clearInterval(timer); // Cleanup, чтобы не утечка памяти
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Левый блок — текст */}
          <div className="lg:col-span-7">
            <p className="text-sm text-gray-400 mb-4">Your Journey to Tomorrow Begins Here</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Explore the Frontiers of   
              <span className="block">Artificial Intelligence</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl">
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where
              machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              <div className="bg-gray-900/40 p-6 rounded-lg">
                <div className="text-3xl font-bold">{stats.resources.toLocaleString()}+</div>
                <div className="text-gray-400 mt-1 text-sm">Resources available</div>
              </div>
              <div className="bg-gray-900/40 p-6 rounded-lg">
                <div className="text-3xl font-bold">{stats.downloads.toLocaleString()}+</div>
                <div className="text-gray-400 mt-1 text-sm">Total Downloads</div>
              </div>
              <div className="bg-gray-900/40 p-6 rounded-lg">
                <div className="text-3xl font-bold">{stats.users.toLocaleString()}+</div>
                <div className="text-gray-400 mt-1 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Правый блок — визуал */}
          <div className="lg:col-span-5">
            <div className="flex flex-col items-start sm:items-end">
              <div className="w-full sm:w-96 bg-gradient-to-br from-gray-900/40 to-transparent p-6 rounded-lg">
                <div className="h-40 sm:h-48 w-full bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-md flex items-center justify-center">
                  <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="80" rx="8" fill="#0b0b0b" />
                    <g opacity="0.12">
                      <path d="M0 10 H160" stroke="white" strokeWidth="0.5" />
                      <path d="M0 20 H160" stroke="white" strokeWidth="0.5" />
                      <path d="M0 30 H160" stroke="white" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Explore 1000+ resources</h3>
                    <p className="text-gray-400 text-sm mt-1">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                  </div>
                  <button className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-md text-sm font-medium hover:opacity-95">
                    Explore Resources
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 6.414V17a1 1 0 11-2 0V6.414L9.707 8.121A1 1 0 018.293 6.707l4-4z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flex -space-x-3">
                  {['A','B','C','D'].map((c, i) => (
                    <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 border border-neutral-800 text-sm font-medium text-white">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}