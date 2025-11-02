import React from 'react'

const Navbar = () => {
  return (
   
        <nav className='h-22 w-[80%] ml-[10%] bg-[#ffffff30] rounded-full backdrop-blur-sm  flex items-center'>

          <h1 className='absolute left-12'>Viewly</h1>

           <ul className='text-black absolute right-12 gap-4 flex'>
            <a href="#new" className='px-4 py-2 bg-transprent text-white backdrop-blur-sm font-bold hover:border-gray-white inline rounded-full border border-none cursor-pointer hover:scale-112 transition-all duration-300'><li >New&nbsp;Releases</li></a>
           <a href="#trending"  className='px-4 py-2 bg-transprent text-white backdrop-blur-sm font-bold hover:border-gray-white inline rounded-full border border-none cursor-pointer hover:scale-112 transition-all duration-300'> <li>Trending</li></a>
            <a href="#goat" className='px-4 py-2 bg-transprent text-white backdrop-blur-sm font-bold hover:border-gray-white inline rounded-full border border-none cursor-pointer hover:scale-112 transition-all duration-300 '> <li >Greatest&nbsp;Of&nbsp;All&nbsp;Time</li> </a> 
           </ul>

        </nav>
  )
}

export default Navbar