// src/components/NewsTicker.jsx
import React from "react";

const NewsTicker = () => {
  const updates = [
    "📢 Preciqube team to attend QTech 2025!",
    "🚀 First prototype of our laser-stabilized cavity almost ready.",
    "🔬 Hiring: Mechanical Engineer (Quantum Hardware)",
    "🧠 Blog post coming soon: 'Why stability matters in quantum optics'",
  ];

  return (
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee font-medium text-sm">
        {updates.map((text, index) => (
          <span key={index} className="mx-6">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
