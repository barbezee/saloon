import React, { useState, useEffect } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`bg-blue-100 p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 text-xl font-bold">BarBeZee</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800 font-bold hover:text-gray-600" onClick={() => scrollToSection('')}>Home</Link>
          <a href="#services" className="text-gray-800 font-bold hover:text-gray-600" onClick={() => scrollToSection('services-section')}>Services</a>
          <a href="#bookings" className="text-gray-800 font-bold hover:text-gray-600" onClick={() => scrollToSection('bookings')}>Book Now</a>
          <Link to="/about" className="text-gray-800 font-bold hover:text-gray-600">About Us</Link>
          <a href="#contact" className="text-gray-800 font-bold hover:text-gray-600">Contact</a>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-800"
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoClose className="w-6 h-6" /> : <CgMenuGridO className="w-6 h-6" />}
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
        <Link to="/" className="block text-gray-800 font-bold py-2 px-4 hover:bg-blue-200" onClick={() => scrollToSection('')}>Home</Link>
        <a href="#services" className="block text-gray-800 font-bold py-2 px-4 hover:bg-blue-200" onClick={() => scrollToSection('services')}>Services</a>
        <a href="#bookings" className="block text-gray-800 font-bold py-2 px-4 hover:bg-blue-200" onClick={() => scrollToSection('bookings')}>Book Now</a>
        <Link to="/about" className="block text-gray-800 font-bold py-2 px-4 hover:bg-blue-200">About Us</Link>
        <a href="#contact" className="block text-gray-800 font-bold py-2 px-4 hover:bg-blue-200">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
