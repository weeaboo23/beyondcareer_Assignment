import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Beyond Career. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
