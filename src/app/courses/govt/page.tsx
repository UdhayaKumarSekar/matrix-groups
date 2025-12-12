"use client";

import { useState } from "react";

export const metadata = {
  title: "Government Exams Preparation – MIT Career Hub",
  description: "TNPSC, SSC, RRB, Banking and Defence exam resources.",
};

export default function GovtExamsPage() {
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [otherExam, setOtherExam] = useState<string>("");

  const [otherMaterial, setOtherMaterial] = useState("");
  const [otherStrategy, setOtherStrategy] = useState("");
  const [otherRoadmap, setOtherRoadmap] = useState("");

  const exams = [
    "TNPSC Group 1",
    "TNPSC Group 2 / 2A",
    "TNPSC Group 4",
    "SSC Exams (CGL / CHSL)",
    "Banking (IBPS / SBI)",
    "RRB (Railways)",
    "Police Exams (SI / Constable)",
    "Defence (NDA / CDS)",
    "Other (Specify)",
  ];

  const getExamData = (exam: string) => {
    switch (exam) {
      case "TNPSC Group 1":
        return {
          materials: ["Syllabus Breakdown", "Polity Notes", "Geography Notes", "Previous Year Papers"],
          strategies: ["Daily Test Plan", "Subject Weightage Strategy", "Revision Patterns"],
          roadmap: ["Prelims → Mains → Interview"],
        };

      case "TNPSC Group 2 / 2A":
        return {
          materials: ["Unit 8 Notes", "Tamil Grammar", "Aptitude Notes", "Expected Questions"],
          strategies: ["Study Timetable", "Tamil Priority Strategy", "Full Test Strategy"],
          roadmap: ["Basics → Practice → Tests → Revision"],
        };

      case "TNPSC Group 4":
        return {
          materials: ["Model Papers", "Basic GK Notes", "Maths Shortcuts", "Tamil Important Questions"],
          strategies: ["100-Day Preparation Plan", "Daily Revision Techniques"],
          roadmap: ["Basics → Daily Practice → Weekly Tests"],
        };

      case "SSC Exams (CGL / CHSL)":
        return {
          materials: ["Quant Formulas", "Reasoning Notes", "English Grammar Pack", "Mock Tests"],
          strategies: ["Tier-wise Strategy", "Time Management"],
          roadmap: ["Concepts → Practice Sets → Mocks"],
        };

      case "Banking (IBPS / SBI)":
        return {
          materials: ["Quant Pack", "Reasoning Puzzles", "Banking Awareness Notes"],
          strategies: ["Speed Improvement Strategy", "Mock Test Pattern"],
          roadmap: ["Basics → Speed Drills → Mock Exams"],
        };

      case "RRB (Railways)":
        return {
          materials: ["Maths Notes", "Reasoning Guide", "General Awareness Notes"],
          strategies: ["Topic-wise Planning", "Speed Practice"],
          roadmap: ["Basics → Practice → Tests"],
        };

      case "Police Exams (SI / Constable)":
        return {
          materials: ["Psychology Notes", "Tamil Notes", "GK Materials"],
          strategies: ["Daily Running + Written Strategy", "Revision Plan"],
          roadmap: ["Physical Training → Written Prep → Mocks"],
        };

      case "Defence (NDA / CDS)":
        return {
          materials: ["Maths Notes", "Science Notes", "GK Capsule", "English Tests"],
          strategies: ["Daily Workout + Study Plan", "Mock Test Strategy"],
          roadmap: ["Fitness → Written → SSB"],
        };

      case "Other (Specify)":
        return { materials: [], strategies: [], roadmap: [] };

      default:
        return null;
    }
  };

  const examData = selectedExam ? getExamData(selectedExam) : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        Government Exams Preparation — Study Hub
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Select your exam to explore study materials, preparation strategies and exam roadmaps.
        Use “Other” if your exam is not listed.
      </p>

      {/* Exam Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {exams.map((exam) => (
          <button
            key={exam}
            onClick={() => setSelectedExam(exam)}
            className={`p-4 rounded-xl border text-left ${
              selectedExam === exam
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
            }`}
          >
            {exam}
          </button>
        ))}
      </div>

      {/* Other Exam */}
      {selectedExam === "Other (Specify)" && (
        <input
          type="text"
          placeholder="Enter your exam name"
          className="border p-3 rounded-lg w-full mb-10"
          value={otherExam}
          onChange={(e) => setOtherExam(e.target.value)}
        />
      )}

      {/* Exam Details */}
      {examData && (
        <div className="space-y-12">
          {/* Study Materials */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 Study Materials</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {examData.materials.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
              {/* Other Material */}
              <li className="mt-4">
                <strong>Other Material:</strong>
                <input
                  type="text"
                  placeholder="Add your material"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherMaterial}
                  onChange={(e) => setOtherMaterial(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Strategies */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🎯 Preparation Strategy</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {examData.strategies.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
              {/* Other Strategy */}
              <li className="mt-4">
                <strong>Other Strategy:</strong>
                <input
                  type="text"
                  placeholder="Add your preparation strategy"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherStrategy}
                  onChange={(e) => setOtherStrategy(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🗺️ Exam Roadmap</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {examData.roadmap.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
              {/* Other Roadmap */}
              <li className="mt-4">
                <strong>Other Roadmap:</strong>
                <input
                  type="text"
                  placeholder="Add your roadmap idea"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherRoadmap}
                  onChange={(e) => setOtherRoadmap(e.target.value)}
                />
              </li>
            </ul>
          </section>
        </div>
      )}

      {!selectedExam && (
        <div className="text-gray-500 text-center mt-10 text-lg">
          Select an exam to view detailed content.
        </div>
      )}
    </main>
  );
}
