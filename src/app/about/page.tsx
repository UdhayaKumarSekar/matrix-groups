import React from "react";
import Hero from "@/components/Hero"; // If needed

export const metadata = {
  title: "About – Matrix Groups",
  description: "Learn about the mission and vision of Matrix Groups.",
};

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        About Matrix Groups
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Matrix Groups is a multi-division organization built with a vision to 
        empower students, professionals, and customers through education, 
        technology, and service excellence. What started as a small initiative 
        has grown into four core divisions operating under one mission — 
        <span className="font-semibold text-blue-700"> "Teaching is the Greatest Art of Patriotism."</span>
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-3">Our Objectives</h2>
      <ul className="space-y-2 text-gray-700">
        <li>• Provide accessible education to students of all levels</li>
        <li>• Deliver high-quality IT training and career development</li>
        <li>• Offer trustworthy system repair and onsite support</li>
        <li>• Build software & digital solutions for institutions</li>
        <li>• Create motivational and educational media</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-3">Our Vision</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        To become the most trusted brand in education, technology services, 
        and community development — especially for rural students and 
        institutions across Tamil Nadu.
      </p>
    </section>
  );
}
