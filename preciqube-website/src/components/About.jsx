import React from "react";

const About = () => {
  return (
    <section className="px-6 py-20 bg-[#0f0f1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Preciqube</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          We are a quantum optics startup focused on designing next-generation
          precision instruments for the quantum industry.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-sky-400 mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To accelerate scientific discovery and industrial transformation through
              advanced quantum sensing and optics.
            </p>
          </div>

          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-sky-400 mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              We aim to build stable, scalable, and highly precise optical tools for
              researchers, engineers, and industrial innovators working at the quantum edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

