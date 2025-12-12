export const metadata = {
  title: "College Courses – MIT Career Hub",
  description: "Materials, subjects, and career guidance for college students.",
};

"use client";

import { useState } from "react";

export default function CollegeCoursesPage() {
  const [selectedDept, setSelectedDept] = useState<string>("");
  const [otherDept, setOtherDept] = useState<string>("");

  const [otherSubject, setOtherSubject] = useState("");
  const [otherMaterial, setOtherMaterial] = useState("");
  const [otherRoadmap, setOtherRoadmap] = useState("");

  const departments = [
    "Engineering (CSE)",
    "Engineering (ECE)",
    "Engineering (EEE)",
    "Engineering (Mechanical)",
    "Engineering (Civil)",
    "B.Sc / BCA (Computer Science)",
    "Arts & Science",
    "Diploma (Polytechnic)",
    "Other (Specify)",
  ];

  const getDeptContent = (dept: string) => {
    switch (dept) {
      case "Engineering (CSE)":
        return {
          subjects: ["DSA", "OOPs", "DBMS", "Networks", "OS", "Python / Java Basics"],
          materials: ["Unit-wise Notes", "Lab Manuals", "Mini Project Ideas"],
          roadmap: ["Placement Prep Roadmap", "Internship Plan", "Skill Development Flow"],
        };

      case "Engineering (ECE)":
        return {
          subjects: ["Digital Electronics", "Signals & Systems", "Microprocessors", "EM Waves"],
          materials: ["Lab Records", "Important Questions", "Score Booster Notes"],
          roadmap: ["Core Job Roadmap", "Electronics Projects", "Steps to GATE"],
        };

      case "Engineering (EEE)":
        return {
          subjects: ["Circuit Theory", "Power Systems", "Electrical Machines", "Control Systems"],
          materials: ["Lab Notes", "Formula Sheets", "Public Question Banks"],
          roadmap: ["GATE Prep Tips", "Core Job Path", "Interview Strategy"],
        };

      case "Engineering (Mechanical)":
        return {
          subjects: ["Thermodynamics", "Fluid Mechanics", "Manufacturing Tech", "Machine Design"],
          materials: ["Charts", "Important Theory Questions", "Model Papers"],
          roadmap: ["Design Job Roadmap", "Production Roles", "Internship Guidance"],
        };

      case "Engineering (Civil)":
        return {
          subjects: ["Surveying", "Structural Engineering", "Concrete Tech", "Geotechnical"],
          materials: ["Drawing Sheets", "Diagrams", "Last Year Papers"],
          roadmap: ["Site Engineer Path", "GATE Civil Prep", "Government Job Flow"],
        };

      case "B.Sc / BCA (Computer Science)":
        return {
          subjects: ["C Programming", "Data Structures", "DBMS", "Web Development"],
          materials: ["Notes", "Practicals", "Mini Project List"],
          roadmap: ["IT Career Roadmap", "Internship Prep", "Portfolio Building"],
        };

      case "Arts & Science":
        return {
          subjects: ["English", "Tamil", "Economics", "Commerce Basics"],
          materials: ["Study Materials", "Expected Questions", "Short Notes"],
          roadmap: ["Career Options After Degree", "Competitive Exams Guide", "Skill Development"],
        };

      case "Diploma (Polytechnic)":
        return {
          subjects: ["Engineering Maths", "Basics of Electronics", "Mechanics", "Workshop Practice"],
          materials: ["Model Papers", "Short Notes", "Board Exam Materials"],
          roadmap: ["LEET Engineering Path", "Technical Courses", "Job Opportunities"],
        };

      case "Other (Specify)":
        return {
          subjects: [],
          materials: [],
          roadmap: [],
        };

      default:
        return null;
    }
  };

  const deptData = selectedDept ? getDeptContent(selectedDept) : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        College Courses — Study Hub & Career Roadmaps
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Select your department to explore subjects, exam materials, projects, and career guidance.
        If your department is not listed, you can add it.
      </p>

      {/* Department Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`p-4 rounded-xl border text-left ${
              selectedDept === dept
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Other Department Input */}
      {selectedDept === "Other (Specify)" && (
        <input
          type="text"
          placeholder="Enter your department"
          className="border p-3 rounded-lg w-full mb-10"
          value={otherDept}
          onChange={(e) => setOtherDept(e.target.value)}
        />
      )}

      {/* Department Content */}
      {deptData && (
        <div className="space-y-12">
          {/* Subjects */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 Core Subjects</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {deptData.subjects.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
              {/* Other Subject */}
              <li className="mt-4">
                <strong>Other Subject:</strong>
                <input
                  type="text"
                  placeholder="Add custom subject"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherSubject}
                  onChange={(e) => setOtherSubject(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Study Materials */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📝 Study Materials</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {deptData.materials.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
              {/* Other Material */}
              <li className="mt-4">
                <strong>Other Material:</strong>
                <input
                  type="text"
                  placeholder="Add your study material"
                  className="border p-2 rounded-lg w-full mt-2"
                  value={otherMaterial}
                  onChange={(e) => setOtherMaterial(e.target.value)}
                />
              </li>
            </ul>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🎯 Career Roadmap</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {deptData.roadmap.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
              {/* Other Roadmap */}
              <li className="mt-4">
                <strong>Other Roadmap:</strong>
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

      {!selectedDept && (
        <div className="text-gray-500 text-center mt-10 text-lg">
          Select your department to view course details.
        </div>
      )}
    </main>
  );
    }