import React from "react";

const Careers = () => {
  return (
    <section className="px-6 py-20 bg-[#0f0f1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Careers at Preciqube</h2>
        <p className="text-lg text-gray-300 mb-12">
          We're always looking for passionate people interested in quantum optics, precision
          engineering, and scientific product development. Join us in shaping the future.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <JobCard
            title="Research Intern"
            description="Work with our team on precision optics and resonator systems. Ideal for PhD aspirants or final-year students in physics/engineering."
            link="/contact"
          />
          <JobCard
            title="Founding Engineer"
            description="Help build our first generation of hardware-software tools. Strong background in embedded systems, optics or quantum preferred."
            link="/contact"
          />
        </div>
      </div>
    </section>
  );
};

const JobCard = ({ title, description, link }) => {
  return (
    <div className="p-6 rounded-xl bg-[#1a1a2e] shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block text-sky-400 text-sm font-medium hover:underline transition"
      >
        Apply Now →
      </a>
    </div>
  );
};

export default Careers;

