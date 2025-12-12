"use client";

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Build Your Future with  
            <span className="block text-purple-300">MIT-Career Hub</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">
            From IT training to real-time project learning and interview preparation —
            empower your skills with a platform built for growth, guidance, and success.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold shadow-lg hover:bg-purple-600 transition-all"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-purple-300 text-purple-200 rounded-xl font-semibold hover:bg-purple-700 hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Highlight Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-purple-300">500+</p>
              <p className="text-sm text-gray-300">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-300">10+</p>
              <p className="text-sm text-gray-300">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-300">98%</p>
              <p className="text-sm text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
        <div className="flex justify-center relative">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10">
            <img
              src="/coding-illustration.png"
              alt="MIT Career Hub Illustration"
              className="w-[90%] md:w-[420px] drop-shadow-2xl"
            />
          </div>

          {/* Glow effects */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-600 opacity-20 blur-2xl rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
