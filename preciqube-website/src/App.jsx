// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProfessorHome from "./pages/ProfessorHome";
import ProfessorPublications from "./pages/ProfessorPublications";
import ProfessorStudents from "./pages/ProfessorStudents";
import ProfessorTeaching from "./pages/ProfessorTeaching";
import ProfessorProjects from "./pages/ProfessorProjects";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professor" element={<ProfessorHome />} />
        <Route path="/professor/publications" element={<ProfessorPublications />} />
        <Route path="/professor/students" element={<ProfessorStudents />} />
        <Route path="/professor/teaching" element={<ProfessorTeaching />} />
        <Route path="/professor/projects" element={<ProfessorProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

