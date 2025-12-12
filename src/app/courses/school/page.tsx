"use client";

import { useState } from "react";

export const metadata = {
  title: "School Courses – MIT Career Hub",
  description: "Study materials and learning resources for school students.",
};

export default function SchoolCoursesPage() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [otherClass, setOtherClass] = useState<string>("");

  const [otherMaterial, setOtherMaterial] = useState("");
  const [otherExam, setOtherExam] = useState("");
  const [otherRoadmap, setOtherRoadmap] = useState("");

  const classes = [
    "9th Standard",
    "10th Standard",
    "11th Science",
    "11th Commerce",
    "12th Science",
    "12th Commerce",
    "Other (Specify)",
  ];

  const getMaterials = (cls: string) => {
    switch (cls) {
      case "9th Standard":
        return {
          notes: ["Maths Notes", "Science Notes", "Social Notes", "English Notes"],
          exams: ["Quarterly Model", "Half-Yearly Model", "Annual Model Paper"],
          roadmap: ["Daily Study Plan", "Subject Weightage", "Exam Strategies"],
        };

      case "10th Standard":
        return {
          notes: ["Maths Guide", "Science Full Notes", "Social Book Summary", "Tamil / English Grammar"],
          exams: ["10th Public Model Papers", "Expected Questions", "Important 5 Marks"],
          roadmap: ["Scoring Strategy", "Learning Timetable", "Exam Preparation Tips"],
        };

      case "Other (Specify)":
        return {
          notes: [],
          exams: [],
          roadmap: [],
        };

      default:
        return {
          notes: ["General Notes"],
          exams: ["General Model Exams"],
          roadmap: ["General Study Plan"],
        };
    }
  };

  const materials = selectedClass ? getMaterials(selectedClass) : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        School Courses — Study Materials & Learning Hub
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Select your class to view study materials, model exams, and roadmaps.  
        If you didn’t find what you need, you can add your own topics.
      </p>

      {/* Class Selection */}
      <div className="flex flex-wrap gap-4 mb-10">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-6 py-3 rounded-lg border font-medium ${
              selectedClass === cls
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Other Class Input */}
      {selectedClass === "Other (Specify)" && (
        <input
          type="text"
          placeholder="Enter your class"
          className="border p-3 rounded-lg w-full mb-10"
          value={otherClass}
          onChange={(e) => setOtherClass(e.target.value)}
        />
      )}

      {/* Material Section */}
      {materials && (
        <div className="space-y-10">
          {/* Study Materials */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 Study Materials</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {materials.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}

              {/* Other Material */}
              <li className="mt-4">
                <strong>Other (Specify):</strong>
                <input
                  type="text"
                  placeholder="Add custom study material"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherMaterial}
                  onChange={(e) => setOtherMaterial(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Model Exams */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📝 Model Exams</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {materials.exams.map((exam, i) => (
                <li key={i}>{exam}</li>
              ))}

              {/* Other Exam */}
              <li className="mt-4">
                <strong>Other (Specify):</strong>
                <input
                  type="text"
                  placeholder="Add custom exam type"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherExam}
                  onChange={(e) => setOtherExam(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🎯 Roadmap</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {materials.roadmap.map((rm, i) => (
                <li key={i}>{rm}</li>
              ))}

              {/* Other Roadmap */}
              <li className="mt-4">
                <strong>Other (Specify):</strong>
                <input
                  type="text"
                  placeholder="Add your own roadmap idea"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherRoadmap}
                  onChange={(e) => setOtherRoadmap(e.target.value)}
                />
              </li>
            </ul>
          </section>
        </div>
      )}

      {!selectedClass && (
        <div className="text-gray-500 text-center mt-10 text-lg">
          Select a class above to view study materials.
        </div>
      )}
    </main>
  );
}
