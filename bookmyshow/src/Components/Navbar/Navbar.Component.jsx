import React from 'react'
import logonav from '../images/logonav.png'
import logo from '../images/BookMyShow_logo.png'
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";


function Navsm() { 
  return <>
  <div className='text-black flex items-center justify-between'>
    <div>
      <h3 className='text-xl font-bold'>It all starts here!</h3>
      <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-black'>Lucknow <BiChevronDown /></span>
    </div>
    <div className='w-8 h-8'> <BiSearch className='w-full h-full'/>
    </div>
  </div>
  </>
  }

function NavMd() { 
  return <>
  <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
    <BiSearch />
    <input type="search" className='w-full bg-transparent border-none focus:outline-none' />
  </div>
  </>
  }

function NavLg() { 
  return <>
  <div className='container flex mx-auto mt-5 mb-5 px-4 items-center justify-between'>
    <div className='flex items-center w-1/2 gap-3'>
    <div className='w-60 h-10'>
    <img src={logo} alt="logo" className='w-full h-full bg-transparent'/>
    </div>
    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
      <BiSearch />
      <input type="search" className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for Movies,Events,Plays,Sports and activities'/>
    </div>
    </div>
    <div className='flex items-center gap-3'>
      <span className='text-gray-500 text-base flex items-center cursor-pointer hover:text-black'>Lucknow
      <BiChevronDown />
      </span>
      <button className='btn1 text-white px-2 py-1 rounded-md'>Sign in</button>
      <div className='w-8 h-8 text-black-500'>
        <BiMenu className='w-full h-full' />
      </div>
    </div>
  </div>
  </>
  }


const Navbar = () => {
  return (    
<nav className='px-4 py-3'> 
{/*Small screen size */}
<div className='md:hidden'>
  <Navsm />
</div>
{/*Medium screen size */}
<div className='hidden md:flex lg:hidden'>
  <NavMd />
</div>
{/*Small screen size */}
<div className='hidden md:hidden lg:flex'>
  <NavLg />
</div>
</nav>
  )
}

export default Navbar
