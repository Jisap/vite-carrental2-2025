import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  

  return (
    <>
      <nav className={`
        px-[12%] text-white fixed top-0 left-0 w-full z-[9999] transition-all duration-300 
        ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'}
      `}>
        <div className='navbar max-w-7xl py-4 flex items-center justify-between relative'>
          <Link to="/" className='text-2xl md:text-4xl font-bold logo font-bricolage'>
            Ride<span>lux.</span>
          </Link>

          <div className='lg:hidden block'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`ri-menu-line text-2xl ${isOpen ? "hidden" : "block"}`}></i>
              <i className={`ri-close-line text-2xl ${isOpen ? "block" : "hidden"}`}></i>
            </button>
          </div>

          <ul className={`
            menu flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-black md:pl-5 md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-10 text-sm font-medium transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            lg:max-h-none lg:opacity-100
          `}>
            <li>
              <Link to="/" className="text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage ">
                About
              </Link>
            </li>
            <li>
              <Link to="/cars" className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage ">
                Cars
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage ">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage ">
                Contact
              </Link>
            </li>
          </ul>

          <div className='hidden lg:flex items-center gap-4'>
            <i className='bi bi-telephone flex items-center justify-center bg-[#e8021f] rounded-full text-2xl w-[45px] h-[45px]'></i>
            <div>
              <p className='text-xs text-white font-normal'>
                Need help
              </p>
              <p className='font-semibold'>
                855 100 4444
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav