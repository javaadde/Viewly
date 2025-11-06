'use client'


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

interface User {
  username: string;
  email: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); 
    
    // Fetch user session
    const fetchUser = async () => {
      try {
        const response = await axios.get<{ user: User }>('/api/user');
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.delete('/api/logout');
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showDropdown && !target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };
    if (isMounted) {
        document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown, isMounted]);

  const dropdownClasses = `absolute right-0 mt-3 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden z-50 
    transition-opacity duration-200 ease-out ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'}`;
    
  return (
    <nav className='relative h-20 w-[90%] mx-auto mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex items-center px-8'>
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <Link href="/">
        <h1 className='relative text-2xl font-bold text-white cursor-pointer hover:text-neutral-300 transition-colors duration-300'>
          Viewly
        </h1>
      </Link>
      
      <ul className='relative flex gap-2 mx-auto'>
        {/* ... Navigation links ... */}
        <li><Link href="#new" className='px-5 py-2.5 bg-neutral-800 text-white font-medium hover:bg-neutral-700 rounded-lg border border-neutral-700 hover:border-neutral-600 cursor-pointer transition-all duration-300 inline-block'>New Releases</Link></li>
        <li><Link href="#trending" className='px-5 py-2.5 bg-neutral-800 text-white font-medium hover:bg-neutral-700 rounded-lg border border-neutral-700 hover:border-neutral-600 cursor-pointer transition-all duration-300 inline-block'>Trending</Link></li>
        <li><Link href="#goat" className='px-5 py-2.5 bg-neutral-800 text-white font-medium hover:bg-neutral-700 rounded-lg border border-neutral-700 hover:border-neutral-600 cursor-pointer transition-all duration-300 inline-block'>Greatest Of All Time</Link></li>
      </ul>

     
      <div className='relative flex items-center gap-3'>
       
        {isMounted && (
            isLoading ? (
                <div className='w-10 h-10 rounded-full bg-neutral-800 animate-pulse'></div>
            ) : user ? (
                // Logged In State
                <div className='relative dropdown-container'>
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className='flex items-center gap-3 px-4 py-2 bg-neutral-800 backdrop-blur-sm rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300'
                    >
                        <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm'>
                            {user.username.charAt(0).toUpperCase()}
                        </div>
                        <span className='text-white font-medium'>{user.username}</span>
                        <svg 
                            className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown Menu  */}
                    <div className={dropdownClasses}>
                        <div className='p-4 border-b border-neutral-800'>
                            <p className='text-white font-semibold text-sm'>{user.username}</p>
                            <p className='text-neutral-400 text-xs mt-1'>{user.email}</p>
                        </div>
                        <div className='p-2'>
                            {/* <Link href="/profile" className='block px-4 py-2.5 text-white hover:bg-neutral-800 rounded-lg transition-all duration-200 font-medium text-sm'>Profile</Link>
                            <Link href="/settings" className='block px-4 py-2.5 text-white hover:bg-neutral-800 rounded-lg transition-all duration-200 font-medium text-sm'>Settings</Link>
                            <Link href="/watchlist" className='block px-4 py-2.5 text-white hover:bg-neutral-800 rounded-lg transition-all duration-200 font-medium text-sm'>My Watchlist</Link> */}
                            <div className='my-2 h-px bg-neutral-800'></div>
                            <button 
                                onClick={handleLogout}
                                className='w-full cursor-pointer text-left px-4 py-2.5 text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 font-medium text-sm'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Logged Out State
                <div className='flex gap-3'>
                    <Link href="/login" className='px-5 py-2.5 text-white font-semibold bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300'>Login</Link>
                    <Link href="/register" className='px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all duration-300 shadow-lg'>Sign Up</Link>
                </div>
            )
        )}
      </div>

     
    </nav>
  );
};

export default Navbar;