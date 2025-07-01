import React from "react";

const testimonials = [
  {
    name: "Aditi Sharma",
    feedback:
      "Beyond Career helped me land my first internship through their mentorship and community. The experience was incredible!",
    role: "Intern at Google",
  },
  {
    name: "Rohit Verma",
    feedback:
      "The mentors here actually care! They gave me a roadmap that made all the difference in my tech journey.",
    role: "SDE Intern at Amazon",
  },
  {
    name: "Sneha Patel",
    feedback:
      "Being part of Beyond Career’s community gave me the confidence to apply for global opportunities. Thank you!",
    role: "Scholar at Microsoft Engage",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Success Stories</h2>
        <p className="text-lg mb-10">See how students have transformed their careers with Beyond Career.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm italic mb-4 text-gray-700">"{t.feedback}"</p>
              <h3 className="text-md font-semibold text-indigo-600">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-indigo-700">🎓 5000+ Students Impacted</h3>
          <p className="text-sm text-gray-600 mt-1">And growing every single day!</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
