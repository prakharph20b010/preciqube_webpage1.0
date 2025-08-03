// src/pages/ProfessorStudents.jsx
import React from "react";

const ProfessorStudents = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-500 mb-6 text-center">Students</h1>
      <ul className="grid md:grid-cols-2 gap-6 text-sm">
        <li><strong>Alice Kumar</strong> – PhD (Quantum Noise Suppression)</li>
        <li><strong>Ravi Patel</strong> – MTech (Vibration Isolation Systems)</li>
        {/* Add more students */}
      </ul>
    </section>
  );
};

export default ProfessorStudents;

