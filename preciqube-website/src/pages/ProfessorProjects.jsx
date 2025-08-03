import React from "react";
import ProfessorLayout from "../components/ProfessorLayout";

const ProfessorProjects = () => {
  return (
    <ProfessorLayout>
      <div className="bg-gradient-to-b from-[#f2f2f2] to-[#ffffff] dark:from-[#0f0f1a] dark:to-[#1a1a2e] min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12 text-gray-800 dark:text-gray-200">

          {/* Section: PhD and Masters Guidance */}
          <section>
            <h2 className="text-3xl font-bold text-sky-500 mb-4 border-b border-gray-400 pb-2">Research Guidance</h2>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Ph.D. guided: <strong>6 completed</strong>, <strong>4 ongoing</strong></li>
              <li>Masters guided: <strong>12 completed</strong>, <strong>2 ongoing</strong></li>
            </ul>
          </section>

          {/* Section: Sponsored Projects */}
          <section>
            <h2 className="text-3xl font-bold text-sky-500 mb-4 border-b border-gray-400 pb-2">Sponsored R&D Projects</h2>
            <ul className="space-y-4 text-md">
              <li><strong>Wavefront Sensor for Adaptive Optics</strong> – IRDE-DRDO (2000–2002) – PI</li>
              <li><strong>Laser Beam Steering System</strong> – IRDE-DRDO (2002–2003) – PI</li>
              <li><strong>Optical Wavefront Sensing</strong> – DRDO ER&IPR (2003–2006) – PI</li>
              <li><strong>Wavefront Compensation Techniques</strong> – IITM IC&SR (2007–2009) – PI</li>
              <li><strong>Wavelet-Based Wavefront Characterization</strong> – DRDO ER&IPR (2010–2013) – PI</li>
              <li><strong>Aberrometry & Ocular Correction</strong> – DST SERB + VRF Sankara Nethralaya (2012–2015) – PI & Co-PI</li>
              <li><strong>Ammonia Vapor Sensing with Fiber Optics</strong> – DST SERB (2013–2016) – Co-PI</li>
              <li><strong>Atmospheric Phase Aberrations Study</strong> – DRDO CHESS (2019–2021) – PI</li>
              <li><strong>Compact Solar Desalination System – Phase I</strong> – CoE (2021–2023) – Co-PI</li>
              <li><strong>Compact Solar Desalination System – Phase II</strong> – CoE (2023–2026) – Co-PI</li>
            </ul>
          </section>

          {/* Section: Industry Consultancy */}
          <section>
            <h2 className="text-3xl font-bold text-sky-500 mb-4 border-b border-gray-400 pb-2">Consultancy Projects</h2>
            <ul className="space-y-4 text-md">
              <li>Low-cost Fundus Camera – Appasamy Associates (2002–2003) – PI</li>
              <li>Aberrometer for Human Eye – Appasamy Associates (2004–2005) – PI</li>
              <li>Solar Power Feasibility – KG Info Systems (2007–2008) – PI</li>
              <li>Security Hologram Evaluation – Govt. of Andhra Pradesh (2011) – PI</li>
              <li>Ophthalmic Lens Characterization – Titan Ltd. (2015) – PI</li>
              <li>Progressive Lens Corridor Mapping – Titan Ltd. (2016) – PI</li>
            </ul>
          </section>

          {/* Section: Key Instruments Developed */}
          <section>
            <h2 className="text-3xl font-bold text-sky-500 mb-4 border-b border-gray-400 pb-2">Key Instruments Developed</h2>
            <ul className="list-disc pl-6 text-md space-y-2">
              <li>Shack-Hartmann Wavefront Sensor (India’s first)</li>
              <li>Closed-loop Laser Beam Steering System</li>
              <li>Low-cost Fundus Camera for Retinal Imaging</li>
              <li>Aberrometer for Higher-Order Eye Aberrations</li>
              <li>Hartmann & Twyman-Green Interferometers</li>
            </ul>
          </section>

          {/* Section: Research Facilities Established */}
          <section>
            <h2 className="text-3xl font-bold text-sky-500 mb-4 border-b border-gray-400 pb-2">Lab Establishment and Infrastructure</h2>
            <p className="text-md text-gray-700 dark:text-gray-300">
              Dr. Ganesan has led the development of advanced optics labs at IIT Madras and NIT Trichy, including photonics, optical metrology, and interferometry labs. He also helped set up optical labs at the University of Malaya during his postdoctoral tenure.
            </p>
          </section>

        </div>
      </div>
    </ProfessorLayout>
  );
};

export default ProfessorProjects;

