import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-gray-400 py-8 px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo or name */}
        <div className="text-center md:text-left">
          <p className="text-cyan-400 font-semibold">PreciQube</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Anchor links to sections */}
        <div className="flex space-x-6">
          <a href="/#about" className="hover:text-white">About</a>
          <a href="/#team" className="hover:text-white">Team</a>
          <a href="/#careers" className="hover:text-white">Careers</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/preciqube/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          {/* Add more links here as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

