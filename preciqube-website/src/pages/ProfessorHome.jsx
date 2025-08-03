import React from "react";
import ProfessorLayout from "../components/ProfessorLayout";
import ganesanImg from "../assets/team/ganesan.png";

const ProfessorHome = () => {
  return (
    <ProfessorLayout>
      <div className="bg-gradient-to-b from-[#f2f2f2] to-[#ffffff] dark:from-[#0f0f1a] dark:to-[#1a1a2e] min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 shadow-lg border-4 border-red-400">
              <img
                src={ganesanImg}
                alt="Dr. A.R. Ganesan"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-gray-900 dark:text-white mb-2">
                Dr. A.R. Ganesan
              </h1>
              <div className="h-1 w-32 bg-red-400 mb-4 mx-auto md:mx-0"></div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-6 text-center md:text-left">
                Professor of Applied Optics, Department of Physics, IIT Madras
              </p>
              <h2 className="text-2xl font-semibold text-red-500 mb-3 text-left">Bio-sketch</h2>
              <p className="text-md md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                Dr. A.R. Ganesan received his Ph.D. from the Indian Institute of Technology Madras, specializing in adaptive optics and optical instrumentation. Over the last three decades, he has contributed significantly to India's precision optics capabilities, especially in the areas of wavefront sensing, optical alignment systems, and quantum photonic platforms. He has held visiting scientist positions at CREOL (USA) and the University of New Mexico, collaborating on atomic sensors and laser stability research. As a faculty member at IIT Madras, he leads multiple national projects funded by DRDO, ISRO, and DST. His work spans both fundamental research and industrial consulting, advancing the frontier of quantum-ready instrumentation.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-sky-500 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Education
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-300 space-y-2">
                <li>Ph.D. in Physics (Applied Optics, Holography, Laser Instrumentation), IIT Madras, 1989</li>
                <li>M.Sc. in Physics (Electronics specialization), University of Madras, 1984 – First Class</li>
                <li>B.Sc. in Physics, University of Madras, 1981 – First Class</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-sky-500 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Employment
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-300 space-y-2">
                <li>Professor, Department of Physics, IIT Madras (Mar. 2018 – Present)</li>
                <li>Associate Professor, Department of Physics, IIT Madras (Jun. 2006 – Mar. 2018)</li>
                <li>Associate Professor, Department of Physics, NIT Tiruchirappalli (Jan. 2005 – Jun. 2006)</li>
                <li>Assistant Professor, Department of Physics, NIT Tiruchirappalli (Nov. 1998 – Dec. 2004)</li>
                <li>Assistant Professor, Dept. of E&I Engineering, Shanmugha College of Engineering (Jul. 1997 – Oct. 1998)</li>
                <li>Senior Research Associate, Dept. of Physics, IIT Madras (Apr. 1994 – Jun. 1997)</li>
                <li>Scientist (on leave from IITM), IRDE, DRDO, Dehradun (Oct. 1994 – Jul. 1995)</li>
                <li>Alexander von Humboldt Fellow, University of Oldenburg, Germany (May 1992 – Mar. 1994)</li>
                <li>Research Assistant Professor, Alabama A&M University, USA (May 1991 – Apr. 1992)</li>
                <li>Postdoctoral Fellow, University of Malaya, Malaysia (Oct. 1989 – Apr. 1991)</li>
                <li>Research Fellow & Project Associate, Dept. of Physics, IIT Madras (Sep. 1984 – Oct. 1989)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-sky-500 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Other Academic Visits
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-300 space-y-2">
                <li>Swiss Federal Institute of Technology, Lausanne, Switzerland (Dec. 1990)</li>
                <li>Blackett Laboratory, Imperial College, London, UK (Jun. 1993)</li>
                <li>Norwegian Institute of Technology, Trondheim, Norway (Sep. 1993)</li>
                <li>University of Oldenburg, Germany (Jun. – Aug. 1999)</li>
                <li>National University of Ireland, Galway (May – Jun. 2012)</li>
                <li>Presented invited lectures at conferences in USA, China, and other countries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-sky-500 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Awards and Honors
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-300 space-y-2">
                <li>Alexander von Humboldt Fellowship (Germany)</li>
                <li>Distinguished Fellow of the Optical Society of India</li>
                <li>Senior Member of SPIE (USA)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-sky-500 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Editorial Boards and Reviewer
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-300 space-y-2">
                <li>Scientific Reports (Nature)</li>
                <li>IEEE Transactions on Magnetics</li>
                <li>J. Magnetism and Magnetic Materials</li>
                <li>Optical Engineering</li>
                <li>Optics & Lasers in Engineering</li>
                <li>Journal of Biomedical Optics</li>
                <li>Optics Communications</li>
                <li>Journal of Measurement Science</li>
                <li>Editorial Board Member – International Journal of Holography and Speckle</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </ProfessorLayout>
  );
};

export default ProfessorHome;

