// src/pages/ProfessorStudents.jsx
import React from "react";

const ProfessorStudents = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-500 mb-6 text-center">Students</h1>
      <ul className="grid md:grid-cols-2 gap-6 text-lg">
        <li><strong>1.</strong> P. Arulmozhivarman</li>
        <li><strong>2.</strong> M. Jesson</li>
        <li><strong>3.</strong> Manju Nair</li>
        <li><strong>4.</strong> M. Balasubramaniyam</li>
        <li><strong>5.</strong> V C Pretheeshkumar</li>
        <li><strong>6.</strong> Akhil Krishnan</li>
        <li><strong>7.</strong> K. Venkataramana</li>
        <li><strong>8.</strong> Laxman Mandal</li>
        <li><strong>9.</strong> Jaspal Singh</li>
      </ul>
    </section>
  );
};

export default ProfessorStudents;

