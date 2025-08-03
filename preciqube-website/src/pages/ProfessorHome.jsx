import React from "react";
import ProfessorLayout from "../components/ProfessorLayout";

const ProfessorHome = () => {
  return (
    <ProfessorLayout>
      <h1 className="text-3xl font-bold mb-4 text-cyan-400">Dr. A. Sharma</h1>
      <p className="mb-2 text-lg">Professor of Applied Optics and Quantum Technologies</p>

      <h2 className="text-2xl mt-6 mb-2 text-sky-400">Education</h2>
      <ul className="list-disc list-inside text-sm text-gray-300">
        <li>Ph.D. in Quantum Optics, XYZ University</li>
        <li>M.Sc. in Physics, ABC Institute</li>
      </ul>

      <h2 className="text-2xl mt-6 mb-2 text-sky-400">Employment</h2>
      <ul className="list-disc list-inside text-sm text-gray-300">
        <li>Professor, ABC Institute of Technology</li>
        <li>Former Research Scientist, National Lab of Photonics</li>
      </ul>

      <h2 className="text-2xl mt-6 mb-2 text-sky-400">Consultancy Projects</h2>
      <p className="text-sm text-gray-300">Worked with defense labs and photonics startups on interferometric sensing systems.</p>

      <h2 className="text-2xl mt-6 mb-2 text-sky-400">Grant Projects</h2>
      <p className="text-sm text-gray-300">Received grants from DST, DRDO, and international collaborations for cavity-stabilized lasers and atomic clocks.</p>
    </ProfessorLayout>
  );
};

export default ProfessorHome;

