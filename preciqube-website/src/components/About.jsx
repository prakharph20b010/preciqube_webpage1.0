import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-[#0f0f1a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">About PreciQube</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
           PreciQube is a quantum-tech startup building the optical and photonic backbone
          of the emerging quantum industry.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
             We design and develop cutting-edge precision instruments that empower researchers
             and engineers to work with light at its most fundamental level, where quantum behavior dominates.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-sky-400 mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To accelerate the next era of scientific discovery and industrial innovation
              by enabling reliable, scalable, and high-performance quantum technologies
              through advanced optical systems.
            </p>
          </div>

          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-sky-400 mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At PreciQube, we are committed to creating a new class of optical tools and
              platforms that are not only extremely stable and precise but also modular
              and production-ready. Our mission is to equip quantum researchers, experimental
              physicists, and system builders with the hardware they need to explore,
              prototype, and deploy quantum technologies from labs to industry.
            </p>
          </div>
        </div>

        <hr className="my-10 border-cyan-800" />
        <p className="text-sm text-gray-500 italic">
          Incubated at IIT Madras • Building tools for the quantum future
        </p>
      </div>
    </section>
  );
};


export default About;

