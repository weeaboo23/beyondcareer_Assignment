import React, { useEffect, useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    const isFastConnection = navigator.connection?.effectiveType === "4g";

    // Show video only on desktop and fast network
    if (isDesktop && isFastConnection) {
      setShowVideo(true);
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden text-white">
      {/* Video Background */}
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/hero-fallback.webp"
          alt="Hero background"
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Unlock Your Dream Career with{" "}
          <span className="text-yellow-300">Beyond Career</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          We connect students with mentorship, internships, and life-changing opportunities —
          powered by visionaries from IIT Kharagpur.
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
