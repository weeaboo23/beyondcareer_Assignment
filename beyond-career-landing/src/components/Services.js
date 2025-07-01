import React from "react";

const services = [
  {
    title: "Career Guidance",
    icon: "🎯",
    description:
      "Personalized advice and resources to help you choose the right path and build a successful career.",
  },
  {
    title: "Internship Opportunities",
    icon: "💼",
    description:
      "Curated internships that give you hands-on experience and exposure to real-world work culture.",
  },
  {
    title: "Mentorship Programs",
    icon: "🧑‍🏫",
    description:
      "Learn from experts, alumni, and industry leaders who guide you through challenges and opportunities.",
  },
  {
    title: "Community Engagement",
    icon: "🤝",
    description:
      "Be part of a vibrant, supportive community of students, professionals, and changemakers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Our Services</h2>
        <p className="text-lg mb-10">
          Beyond Career offers a wide range of services tailored to help students grow, connect, and succeed.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
