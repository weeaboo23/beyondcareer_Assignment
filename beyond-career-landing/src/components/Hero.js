import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Unlock Your Dream Career with <span className="text-yellow-300">Beyond Career</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We connect students with mentorship, internships, and life-changing opportunities — powered by visionaries from IIT Kharagpur.
        </p>
        <a
          href="#contact"
          className="bg-yellow-300 hover:bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
