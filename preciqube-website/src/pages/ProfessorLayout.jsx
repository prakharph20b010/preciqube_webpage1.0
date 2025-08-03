import React from "react";
import { Link } from "react-router-dom";

const ProfessorLayout = ({ children }) => {
  return (
    <div className="bg-[#0f0f1a] text-white min-h-screen">
      {/* Professor navigation header */}
      <header className="bg-[#1a1a2e] px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400 mb-2 md:mb-0">Dr. A.R. Ganesan</h1>
          <nav className="flex space-x-6 text-sm font-medium">
            <Link to="/professor" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/professor-publications" className="text-gray-300 hover:text-white">Publications</Link>
            <Link to="/professor-students" className="text-gray-300 hover:text-white">Students</Link>
            <Link to="/professor-teaching" className="text-gray-300 hover:text-white">Teaching</Link>
            <Link to="/professor-projects" className="text-gray-300 hover:text-white">Projects</Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="py-10 px-6 max-w-6xl mx-auto">{children}</main>
    </div>
  );
};

export default ProfessorLayout;

