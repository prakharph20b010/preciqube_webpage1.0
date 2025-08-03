import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔧 Replace with your backend or email logic later
    console.log("Form submitted:", form);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section  id="contact" className="px-6 py-20 bg-[#0f0f1a] text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-12">
          Have questions or want to collaborate? Fill out the form below or email us at{" "}
          <a
            href="mailto:contact@preciqube.com"
            className="text-sky-400 underline hover:text-sky-300"
          >
            contact@preciqube.com
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a2e] rounded-xl p-6 shadow-lg space-y-4 text-left"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-[#0f0f1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-[#0f0f1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-[#0f0f1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 text-white font-medium px-6 py-2 rounded hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

