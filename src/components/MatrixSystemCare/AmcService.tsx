"use client";

import React, { useState } from "react";

const AmcService: React.FC = () => {
  const [orgName, setOrgName] = useState("");
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [systems, setSystems] = useState("");
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!orgName || !person || !phone || !systems || !area) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white px-6 mt-10">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold mb-4 text-center">
          AMC (Annual Maintenance Contract)
        </h1>

        <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10">
          We provide AMC support for schools, colleges, businesses, offices, and institutions.
          Our AMC service includes regular maintenance, system health checkups, software updates,
          virus protection, installation support, and priority on-call/on-site services.
        </p>

        {/* CARD */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8">

          {!submitted ? (
            <>
              <h2 className="text-xl font-bold mb-4">Request AMC Proposal</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Organization / Institution Name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <input
                  type="text"
                  placeholder="Contact Person Name"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
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
                  placeholder="Number of Systems / Laptops"
                  value={systems}
                  onChange={(e) => setSystems(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <input
                  type="text"
                  placeholder="Your Area / Location"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />

                <button
                  onClick={handleSubmit}
                  disabled={!orgName || !person || !phone || !systems || !area}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold disabled:bg-indigo-400"
                >
                  Request Proposal
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-indigo-200">
                Thank You {person}!
              </h3>
              <p className="text-gray-200 mt-2">
                Your AMC request for{" "}
                <span className="font-bold">{orgName}</span> has been received.
              </p>
              <p className="text-gray-300 mt-1 text-sm">
                We will contact you shortly at <span className="font-semibold">{phone}</span>.
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Location: <span className="font-semibold">{area}</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AmcService;
