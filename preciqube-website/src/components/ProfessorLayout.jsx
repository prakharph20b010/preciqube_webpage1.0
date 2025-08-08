import React from "react";
import { Link } from "react-router-dom";

const ProfessorLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white font-sans">
      <nav className="bg-[#1a1a2e] px-6 py-4 flex gap-6 text-cyan-400 font-medium">
        <Link to="/professor">Home</Link>
        <Link to="/professor/publications">Publications</Link>
        <Link to="/professor/students">Students</Link>
        <Link to="/professor/teaching">Teaching</Link>
        <Link to="/">← Back to Preciqube</Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default ProfessorLayout;
