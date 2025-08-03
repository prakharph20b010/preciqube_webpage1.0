import React from "react";
import { Link } from "react-router-dom"; // 🔗 import Link

const team = [
  {
    name: "Dr. A. Sharma",
    role: "Founder & CEO",
    bio: "Expert in quantum optics, system design, and atomic sensors.",
    link: "/professor", // 🧭 link to professor home page
  },
  {
    name: "Priya Nair",
    role: "Optics Engineer",
    bio: "Works on laser systems, beam alignment, and cavity design.",
  },
  {
    name: "Ravi Verma",
    role: "Embedded Systems",
    bio: "Handles FPGA control and hardware integration.",
  },
  {
    name: "Sara Iqbal",
    role: "Quantum Algorithms",
    bio: "Designs control logic for quantum experiments.",
  },
];

const Team = () => {
  return (
    <section className="bg-[#0f0f1a] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => {
            const cardContent = (
              <>
                <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl font-bold text-cyan-400 ring-2 ring-cyan-500 mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-cyan-400">{member.role}</p>
                <p className="text-xs mt-2 text-gray-400">{member.bio}</p>
                {member.link && (
                  <p className="mt-3 text-sm">
                    <Link
                      to={member.link}
                      className="text-sky-400 hover:underline"
                    >
                      Visit profile →
                    </Link>
                  </p>
                )}
              </>
            );

            return (
              <div
                key={index}
                className="bg-[#1a1a2e] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

