import React from "react";
import HeroImage from "../assets/optics-lab.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] text-white">
      {/* Full Image with overlay */}
      <img
        src={HeroImage}
        alt="Optical system"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Overlaid content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-400 mb-6 drop-shadow-lg">
          PRECIQUBE
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-3xl drop-shadow">
          Advancing quantum-ready optics,
          Where precision meets stability.
        </p>

        {/* Feature buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl w-full">
          <FeatureCard label="Ultra Stable Cavity" />
          <FeatureCard label="Low-Drift Platforms" />
          <FeatureCard label="Precision Alignment" />
          <FeatureCard label="Discover" isCTA />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ label, isCTA = false }) => {
  return (
    <div
      className={`
        relative group p-4 sm:p-6 bg-[#1a1a2e] text-white rounded-xl shadow-lg
        transition-transform duration-500 transform hover:rotate-1 hover:scale-105
        cursor-pointer overflow-hidden
      `}
    >
      {/* Front */}
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 text-center">
          {label}
        </h3>
      </div>

      {/* Hover back */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#111827] text-sm sm:text-base font-semibold text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Coming soon
      </div>
    </div>
  );
};

export default Hero;

