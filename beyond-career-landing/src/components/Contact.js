import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 px-6 md:px-12 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Contact Us</h2>
        <p className="text-lg mb-10">
          Have questions or want to collaborate? We’d love to hear from you!
        </p>

        <form
          action="https://formspree.io/f/xjkrlpdq"
          method="POST"
          className="bg-white p-6 rounded-lg shadow-md grid gap-6 text-left"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-600 space-y-2">
          <p>📧 Email: contact@beyondcareer.in</p>
          <p>📱 Phone: +91 98765 43210</p>
          <div className="flex justify-center gap-6 text-xl mt-4">
            <a href="https://www.linkedin.com/company/beyondgradess" className="hover:text-indigo-600">🌐 LinkedIn</a>
            <a href="https://www.instagram.com/beyond_career_/" className="hover:text-indigo-600">📘 Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
