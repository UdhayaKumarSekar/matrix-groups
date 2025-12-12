"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact – Matrix Groups",
  description: "Get in touch with Matrix Groups for support and services.",
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone || !message) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Contact Us</h1>

      {!submitted ? (
        <div className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="w-full px-4 py-3 border rounded-lg h-32"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-green-600 font-semibold text-lg">
          Thank you {name}! We will reach out to you soon.
        </div>
      )}
    </section>
  );
}
