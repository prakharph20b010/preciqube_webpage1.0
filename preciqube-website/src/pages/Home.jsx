import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import About from "../components/About";
import Careers from "../components/Careers";
import Team from "../components/Team";
import BlogPreview from "../components/BlogPreview";

const Home = () => {
  return (
    //<div className="bg-gray-50 text-gray-800 dark:bg-[#0f0f1a] dark:text-white min-h-screen font-sans">
    <div className="bg-[#0f0f1a] text-white min-h-screen font-sans">
      <Header />
      <main className="space-y-12 px-6 md:px-20 py-10 bg-[#0f0f1a]">
        <Hero />
        <NewsTicker />
        <About />
        <Careers />
        <Team />
        <BlogPreview />
      </main>
    </div>
  );
};

export default Home;

