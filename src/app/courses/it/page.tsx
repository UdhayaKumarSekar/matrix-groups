"use client";

import { useState } from "react";

export const metadata = {
  title: "IT Software Training – MIT Career Hub",
  description: "Learn full-stack, frontend, backend, DevOps, and cloud.",
};

export default function ITSoftwareTrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [otherCourse, setOtherCourse] = useState<string>("");

  const [otherTopic, setOtherTopic] = useState("");
  const [otherMaterial, setOtherMaterial] = useState("");
  const [otherRoadmap, setOtherRoadmap] = useState("");

  const courses = [
    "Full Stack Development (MERN)",
    "Python Full Stack",
    "Java Full Stack",
    "Frontend Development (React / Next.js)",
    "Backend Development (Node.js / Express)",
    "DevOps Basics",
    "Cloud Basics (AWS / Azure)",
    "Database & SQL Training",
    "Other (Specify)",
  ];

  const getCourseData = (course: string) => {
    switch (course) {
      case "Full Stack Development (MERN)":
        return {
          topics: ["HTML / CSS / JS", "React.js", "Node.js", "MongoDB", "API Development", "Mini Projects"],
          materials: ["Cheat Sheets", "Project Templates", "GitHub Setup Guide"],
          roadmap: ["Frontend → Backend → Database → Deployment"],
        };

      case "Python Full Stack":
        return {
          topics: ["Core Python", "OOPs", "Django / Flask", "REST APIs", "SQL / MongoDB"],
          materials: ["Django Notes", "Python PDFs", "Mini Projects List"],
          roadmap: ["Python Basics → Django → APIs → Deployment"],
        };

      case "Java Full Stack":
        return {
          topics: ["Core Java", "Spring Boot", "REST APIs", "Hibernate", "SQL"],
          materials: ["Java Notes", "Spring Boot Diagrams", "API Architecture"],
          roadmap: ["Java → Spring Boot → Microservices → Cloud"],
        };

      case "Frontend Development (React / Next.js)":
        return {
          topics: ["HTML / CSS", "JavaScript", "React Basics", "Hooks", "Next.js Routing", "UI Libraries"],
          materials: ["React Notes", "Next.js Guide", "UI Templates"],
          roadmap: ["HTML → JS → React → Next.js → Deployment"],
        };

      case "Backend Development (Node.js / Express)":
        return {
          topics: ["Node.js Basics", "Express.js", "Middleware", "REST APIs", "Authentication"],
          materials: ["Node.js Notes", "API Samples", "Security Best Practices"],
          roadmap: ["Node → Express → Database → Auth → Deployment"],
        };

      case "DevOps Basics":
        return {
          topics: ["Linux", "Git & GitHub", "Docker", "CI/CD (Jenkins)", "Cloud Basics"],
          materials: ["DevOps Commands List", "Docker Guides", "Jenkins Pipeline Examples"],
          roadmap: ["Linux → Git → Docker → Jenkins → Cloud"],
        };

      case "Cloud Basics (AWS / Azure)":
        return {
          topics: ["EC2", "S3 Buckets", "IAM Basics", "Deployments"],
          materials: ["AWS Notes", "Azure Basics", "Project Deployment Steps"],
          roadmap: ["IAM → Compute → Storage → Deployments"],
        };

      case "Database & SQL Training":
        return {
          topics: ["SQL Basics", "Joins", "Triggers", "Stored Procedures", "Indexes"],
          materials: ["MySQL Notes", "Query Cheatsheet", "Sample DB Projects"],
          roadmap: ["Basics → Queries → Joins → DB Design"],
        };

      case "Other (Specify)":
        return {
          topics: [],
          materials: [],
          roadmap: [],
        };

      default:
        return null;
    }
  };

  const courseData = selectedCourse ? getCourseData(selectedCourse) : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        IT Software Training — Learn & Build Real Skills
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Select a course to explore topics, study materials, and your step-by-step learning roadmap.  
        If you don’t see your preferred course, you can add it using the “Other” option.
      </p>

      {/* Course Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {courses.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCourse(c)}
            className={`p-4 rounded-xl border text-left ${
              selectedCourse === c
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Other Course Input */}
      {selectedCourse === "Other (Specify)" && (
        <input
          type="text"
          placeholder="Enter the course you want"
          className="border p-3 rounded-lg w-full mb-10"
          value={otherCourse}
          onChange={(e) => setOtherCourse(e.target.value)}
        />
      )}

      {/* Course Details */}
      {courseData && (
        <div className="space-y-12">
          {/* Topics */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 Topics Covered</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {courseData.topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
              <li className="mt-4">
                <strong>Other Topic:</strong>
                <input
                  type="text"
                  placeholder="Add your own topic"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherTopic}
                  onChange={(e) => setOtherTopic(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Materials */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📝 Study Materials</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {courseData.materials.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
              <li className="mt-4">
                <strong>Other Material:</strong>
                <input
                  type="text"
                  placeholder="Add any extra material"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherMaterial}
                  onChange={(e) => setOtherMaterial(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🎯 Learning Roadmap</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {courseData.roadmap.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
              <li className="mt-4">
                <strong>Other Roadmap Idea:</strong>
                <input
                  type="text"
                  placeholder="Add your own roadmap"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherRoadmap}
                  onChange={(e) => setOtherRoadmap(e.target.value)}
                />
              </li>
            </ul>
          </section>
        </div>
      )}

      {!selectedCourse && (
        <div className="text-gray-500 text-center mt-10 text-lg">
          Select a course to view full details.
        </div>
      )}
    </main>
  );
}
