import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import About from "../components/About";
import Careers from "../components/Careers";
import Team from "../components/Team";
//import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
//<BlogPreview /> {/* <section id="blog" ... /> inside Team.jsx */}
const Home = () => {
  return (
    <div className="bg-[#0f0f1a] text-white min-h-screen font-sans">
      <Header />
      <main className="space-y-12 px-6 md:px-20 py-10 bg-[#0f0f1a]">
        <Hero />
        <NewsTicker />
        <About />       {/* <section id="about" ... /> inside About.jsx */}
        <Careers />     {/* <section id="careers" ... /> inside Careers.jsx */}
        <Team />        {/* <section id="team" ... /> inside Team.jsx */}
        
        <Contact />     {/* <section id="contact" ... /> inside Contact.jsx */}
      </main>
    </div>
  );
};

export default Home;

