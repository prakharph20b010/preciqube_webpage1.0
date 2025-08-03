// src/pages/ProfessorTeaching.jsx
import React from "react";

const ProfessorTeaching = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-500 mb-6 text-center">Teaching</h1>
      <ul className="space-y-4 text-sm">
        <li><strong>Quantum Optics (PH701)</strong> – Graduate level, focus on interferometry, squeezing, and quantum states of light.</li>
        <li><strong>Advanced Experimental Physics (PH502)</strong> – Hands-on lab experiments in precision measurement.</li>
        {/* Add more courses */}
      </ul>
    </section>
  );
};

export default ProfessorTeaching;

