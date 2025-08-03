// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProfessorHome from "./pages/ProfessorHome";
import ProfessorPublications from "./pages/ProfessorPublications";
import ProfessorStudents from "./pages/ProfessorStudents";
import ProfessorTeaching from "./pages/ProfessorTeaching";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professor" element={<ProfessorHome />} />
        <Route path="/professor/publications" element={<ProfessorPublications />} />
        <Route path="/professor/students" element={<ProfessorStudents />} />
        <Route path="/professor/teaching" element={<ProfessorTeaching />} />
      </Routes>
    </Router>
  );
}

export default App;

