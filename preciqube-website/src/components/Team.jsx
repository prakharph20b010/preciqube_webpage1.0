import React from "react";
import { Link } from "react-router-dom";
import prakharImg from "../assets/team/prakhar.png";
import ganesanImg from "../assets/team/ganesan.png";

const team = [
  {
    name: "Prakhar Maheshwari",
    role: "Co-Founder & CEO",
    bio: "Experienced in precision optics, quantum technologies, and startup leadership, with a background in building scalable hardware systems and leading multidisciplinary teams.",
    image: prakharImg // 🖼 Replace with actual path or URL
  },
  {
    name: "Dr. A.R. Ganesan",
    role: "Co-Founder & Technical Advisor",
    bio: "Senior Professor at IIT Madras with over 35 years of global experience in applied optics, adaptive optics, and optical instrumentation. Recognized for pioneering indigenous wavefront sensors and laser beam steering systems in India, and author of the revised editions of Hecht’s 'Optics'.",
    image: ganesanImg, // 🖼 Replace with actual path or URL
    link: "/professor"
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-[#0f0f1a] py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a2e] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Image Placeholder */}
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full object-cover ring-2 ring-cyan-500 mb-4"
              />

              {/* Name and Role */}
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-cyan-400">{member.role}</p>

              {/* Hover-revealed Bio */}
              <div className="absolute inset-0 bg-[#1a1a2e]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <p className="text-xs text-gray-300">{member.bio}</p>
                {member.link && (
                  <p className="mt-4 text-sm">
                    <Link
                      to={member.link}
                      className="text-sky-400 hover:underline"
                    >
                      Visit profile →
                    </Link>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

