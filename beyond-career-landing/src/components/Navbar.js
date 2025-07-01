import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Beyond Career</h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
