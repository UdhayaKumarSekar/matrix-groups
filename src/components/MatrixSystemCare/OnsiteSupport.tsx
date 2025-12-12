"use client";

import React, { useState } from "react";

const OnsiteSupport: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone || !area) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-800 to-purple-900 text-white px-6 mt-10">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold mb-4 text-center">
          Onsite Technical Support
        </h1>

        <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10">
          We provide home/office onsite support for software issues,
          network setup, troubleshooting, and basic diagnostics.
          Hardware repairs requiring part replacement will be done
          in our service center.
        </p>

        {/* CARD */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8">

          {!submitted ? (
            <>
              <h2 className="text-xl font-bold mb-4">Request Onsite Visit</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <input
                  type="text"
                  placeholder="Your Area / Location"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <textarea
                  placeholder="Describe Issue (optional)"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-4 py-3 h-24 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                ></textarea>

                <button
                  onClick={handleSubmit}
                  disabled={!name || !phone || !area}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold disabled:bg-purple-400"
                >
                  Request Visit
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-200">
                Thank You {name}!
              </h3>
              <p className="text-gray-200 mt-2">
                Our technician will contact you at  
                <span className="font-bold"> {phone} </span>  
                to schedule your onsite visit.
              </p>
              <p className="text-gray-300 mt-1 text-sm">
                Area: <span className="font-semibold">{area}</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default OnsiteSupport;
