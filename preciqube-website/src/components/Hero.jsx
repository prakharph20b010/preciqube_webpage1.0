import React from "react";
import HeroImage from "../assets/optics-lab.png";

const Hero = () => {
  return (
    <section className="relative w-full text-white pt-16 pb-0">
      <div className="max-w-7xl mx-auto text-center px-6 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-400 mb-4">
          PRECIQUBE
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-medium text-white">
          Advancing quantum-ready optics.<br />
          Where precision meets stability.
        </p>
      </div>

      {/* Background Image with overlay */}
      <div className="relative w-screen overflow-hidden">
        <img
          src={HeroImage}
          alt="Optical system"
          className="w-full h-auto object-cover"
        />

        {/* Buttons over image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <FeatureCard label="Ultra Stable Cavity" icon="📷" />
            <FeatureCard label="Low-Drift Platforms" icon="🔋" />
            <FeatureCard label="Precision Alignment" icon="🎯" />
            <FeatureCard label="Discover" icon="🔄" isCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ label, icon, isCTA = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${
        isCTA
          ? "bg-sky-400 text-black font-semibold hover:bg-sky-500 transition"
          : "bg-gray-800/90 text-white"
      }`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm text-center">{label}</div>
    </div>
  );
};

export default Hero;

