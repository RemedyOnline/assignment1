import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Connect With Us</h2>
        <p className="text-gray-600 mt-4">
          Interested in owning a piece of Africa's future? Get in touch with us
          today.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
