import React from "react";

const Careers = () => {
  return (
    <section  id="careers" className="px-6 py-20 bg-[#0f0f1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Careers at Preciqube</h2>
        <p className="text-lg text-gray-300 mb-6">
          We're looking for passionate individuals to work on quantum optics, optical simulations,
          scientific hardware, and product design. Join us in shaping the future.
        </p>

        {/* 🔗 Brochure Button */}
        <div className="mb-12">
          <a
            href="https://www.notion.so/Internship-Opportunities-Optical-Simulation-Experimental-Optics-Web-Development-Product-Design-23e574cc395980a2bd77f49654b835e0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-cyan-500 rounded-full text-cyan-300 hover:bg-cyan-600 hover:text-white transition"
          >
            📄 View Internship Brochure
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <JobCard
            title="Intern – Optical Simulation"
            description="Develop and maintain simulation code for optical systems like interferometers and cavities, emphasizing modular design for easy GUI integration. Write efficient, reusable backend code using established or custom optical tools. Collaborate closely with the Web Development team to build a seamless, user-friendly simulation platform with interactive capabilities.
"
            link="https://forms.zohopublic.in/preciqube1/form/QuantumHardwareBuildersWantedPreciQubeInternshipFo/formperma/dvGtFMKbkbO1OcsRznJCiYFvTPAId3E1y6f5MUqGkps"
          />
          <JobCard
            title="Intern – Experimental Optics"
            description="Hands-on work in lab-scale optical setups including beam alignment, mode-matching, and locking systems. Ideal for students in physics, engineering, or applied optics."
            link="https://forms.zohopublic.in/preciqube1/form/QuantumHardwareBuildersWantedPreciQubeInternshipFo/formperma/dvGtFMKbkbO1OcsRznJCiYFvTPAId3E1y6f5MUqGkps"
          />
          <JobCard
            title="Intern – Web Development"
            description="Help build frontend and backend tools for internal lab workflows and public-facing applications. Experience in React, Firebase, or Next.js a plus."
            link="https://forms.zohopublic.in/preciqube1/form/QuantumHardwareBuildersWantedPreciQubeInternshipFo/formperma/dvGtFMKbkbO1OcsRznJCiYFvTPAId3E1y6f5MUqGkps"
          />
          <JobCard
            title="Intern – Product Design"
            description="Prototype enclosures and fixtures for precision hardware using CAD tools like SolidWorks or Fusion360. Background in mechanical or industrial design preferred."
            link="https://forms.zohopublic.in/preciqube1/form/QuantumHardwareBuildersWantedPreciQubeInternshipFo/formperma/dvGtFMKbkbO1OcsRznJCiYFvTPAId3E1y6f5MUqGkps"
          />
        </div>
      </div>
    </section>
  );
};

const JobCard = ({ title, description, link }) => {
  return (
    <div className="relative group p-6 rounded-xl bg-[#1a1a2e] shadow-lg hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sky-400 text-sm font-medium hover:underline transition"
      >
        Apply Now →
      </a>

      {/* Hover Popup */}
      <div className="absolute z-50 hidden group-hover:flex flex-col p-5 w-[34rem] bg-[#1f1f2e] text-sm text-gray-200 border border-cyan-500 rounded-lg shadow-2xl top-1/2 left-full ml-4 transform -translate-y-1/2 transition-all duration-300">
        <h4 className="font-semibold text-cyan-300 mb-2">{title}</h4>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
export default Careers;

