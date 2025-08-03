// src/pages/ProfessorPublications.jsx
import React from "react";

const ProfessorPublications = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-500 mb-6 text-center">Publications</h1>
      <ul className="space-y-6 text-sm">
        <li>
          <strong>[2025]</strong> – Title of the research paper on ultra-stable cavities.
          <br /><em>Journal of Quantum Engineering</em>
        </li>
        <li>
          <strong>[2024]</strong> – Precision alignment of photonic elements.
          <br /><em>Applied Optics Letters</em>
        </li>
        {/* Add more here */}
      </ul>
    </section>
  );
};

export default ProfessorPublications;

