// src/components/Footer.jsx
import React from 'react';
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2024 BarberBook. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <RiInstagramLine className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <FaFacebookSquare className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a href="mailto:someone@example.com" className="text-gray-800 hover:text-blue-500">
            <SiGmail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
