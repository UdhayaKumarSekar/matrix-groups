"use client";

import React from "react";

const Highlights: React.FC = () => {
  const data = [
    { number: "50+", label: "Students Trained" },
    { number: "10+", label: "Courses Offered" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-purple-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {data.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
          >
            <h2 className="text-4xl font-extrabold text-purple-300 drop-shadow-md">
              {item.number}
            </h2>
            <p className="text-sm text-gray-200 mt-2">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Highlights;
