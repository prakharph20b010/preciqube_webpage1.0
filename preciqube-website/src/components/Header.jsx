import React from "react";
//<a href="#blog" className="hover:text-sky-500 transition-colors duration-200">Blog</a>
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0f0f1a] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
          Preciqube
        </div>
        <nav className="space-x-6 text-base font-medium text-gray-700 dark:text-gray-200">
          <a href="#about" className="hover:text-sky-500 transition-colors duration-200">About</a>
          <a href="#team" className="hover:text-sky-500 transition-colors duration-200">Team</a>
          <a href="#careers" className="hover:text-sky-500 transition-colors duration-200">Careers</a>
          
          <a href="#contact" className="hover:text-sky-500 transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

