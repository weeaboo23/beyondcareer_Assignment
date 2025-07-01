import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">About Us</h2>
        <p className="text-lg mb-8">
          <strong>Beyond Career</strong> is a visionary initiative by students from <strong>IIT Kharagpur</strong> to
          redefine how young minds shape their careers. We believe in guiding students through mentorship, internships,
          and real-world exposure to unlock their full potential.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">🚀 Our Mission</h3>
            <p>
              To empower students across India with personalized career support, bridging the gap between academic life
              and professional success.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">🌟 Our Vision</h3>
            <p>
              To become the leading platform for student career development, fostering a future where every learner has
              access to guidance, opportunity, and community.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">💡 Our Values</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Inclusivity & Equity</li>
              <li>Student-first Innovation</li>
              <li>Community Collaboration</li>
              <li>Authentic Mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
