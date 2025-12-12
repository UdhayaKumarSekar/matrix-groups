"use client";

import { useState } from "react";

export const metadata = {
  title: "Language Learning – MIT Career Hub",
  description: "Learn Tamizh, English, Hindi, Japanese, and Spanish basics.",
};

export default function LanguagesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [otherLanguage, setOtherLanguage] = useState("");

  const languages = [
    "Tamizh",
    "English",
    "Hindi",
    "Japanese",
    "Spanish",
    "Other (Specify)",
  ];

  const getLanguageData = (lang: string) => {
    switch (lang) {
      case "Tamizh":
        return {
          basics: ["Uyir Ezhuthukkal", "Mei Ezhuthukkal", "Uyir-Mei Formation", "Simple Words", "Basic Conversations"],
          pronunciation: ["Basic Sounds", "Letter-to-Sound Mapping", "Common Usage Patterns"],
          conversations: ["Self Introduction", "Asking Directions", "Daily Phrases"],
        };

      case "English":
        return {
          basics: ["Alphabet Basics", "Vowels & Consonants", "Common Words", "Sentence Structure"],
          pronunciation: ["Phonics", "Stress Patterns", "Common Mispronunciations"],
          conversations: ["Greetings", "Introducing Yourself", "Daily Conversations"],
        };

      case "Hindi":
        return {
          basics: ["Varnamala (Swar & Vyanjan)", "Simple Words", "Sentence Patterns"],
          pronunciation: ["Sound Formation", "Basic Tones"],
          conversations: ["Simple Phrases", "Daily Usage Words"],
        };

      case "Japanese":
        return {
          basics: ["Hiragana", "Katakana", "Basic Kanji", "Simple Vocabulary"],
          pronunciation: ["Japanese Sounds", "Long vs Short Vowels"],
          conversations: ["Self Intro (Jikoshoukai)", "Greetings", "Daily Expressions"],
        };

      case "Spanish":
        return {
          basics: ["Alphabet & Sounds", "Articles", "Simple Words", "Verb Basics"],
          pronunciation: ["Rolling R Sound", "Vowel Sounds"],
          conversations: ["Hola / Cómo estás", "Introducing Yourself", "Asking Basic Questions"],
        };

      case "Other (Specify)":
        return {
          basics: [],
          pronunciation: [],
          conversations: [],
        };

      default:
        return null;
    }
  };

  const data = selectedLanguage ? getLanguageData(selectedLanguage) : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        Languages — Fundamentals & Conversational Basics
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Select a language to learn its fundamentals, pronunciation rules, and everyday conversational patterns.
        Perfect for beginners. Advanced levels will be added later.
      </p>

      {/* Language Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            className={`p-4 rounded-xl border text-left ${
              selectedLanguage === lang
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Other Language Input */}
      {selectedLanguage === "Other (Specify)" && (
        <input
          type="text"
          placeholder="Enter language name"
          className="border p-3 rounded-lg w-full mb-10"
          value={otherLanguage}
          onChange={(e) => setOtherLanguage(e.target.value)}
        />
      )}

      {/* Language Content */}
      {data && (
        <div className="space-y-12">
          
          {/* Basics */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 Basics</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {data.basics.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>

          {/* Pronunciation */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🔊 Pronunciation</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {data.pronunciation.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>

          {/* Conversational Basics */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">💬 Conversational Basics</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {data.conversations.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      {!selectedLanguage && (
        <div className="text-gray-500 text-center mt-10 text-lg">
          Select a language to begin learning the fundamentals.
        </div>
      )}
    </main>
  );
}

