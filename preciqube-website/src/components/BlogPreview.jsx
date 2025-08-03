import React from "react";

const blogs = [
  {
    title: "Quantum Sensing: A New Era of Precision",
    excerpt:
      "We explore how quantum sensors are redefining limits in navigation, defense, and space.",
    date: "July 25, 2025",
  },
  {
    title: "Inside Our Optical Cavity Design Process",
    excerpt:
      "A deep dive into the design principles and FEA simulations behind our stable cavities.",
    date: "July 15, 2025",
  },
  {
    title: "Startup Culture in Quantum Optics",
    excerpt:
      "Building a company at the frontier of science — lessons from our first 90 days.",
    date: "July 5, 2025",
  },
];

const BlogPreview = () => {
  return (
    <section className="bg-[#0f0f1a] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">From Our Blog</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{blog.excerpt}</p>
              <button className="text-sky-400 font-medium hover:underline transition">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

