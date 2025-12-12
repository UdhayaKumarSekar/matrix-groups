"use client";

import React, { useState } from "react";

const SystemCare: React.FC = () => {
    const [device, setDevice] = useState("");
    const [brand, setBrand] = useState("");
    const [issueType, setIssueType] = useState("");
    const [problem, setProblem] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [area, setArea] = useState("");
    const [completed, setCompleted] = useState(false);


    const mobileBrands = ["Samsung", "Apple", "Vivo", "Oppo", "Realme", "Poco", "Nokia"];
    const laptopBrands = ["Dell", "HP", "Lenovo", "Acer", "Asus", "Apple MacBook"];

    const hardwareIssues = [
        "Screen Damage",
        "Battery Issue",
        "Camera not working",
        "Speaker Issue",
    ];

    const softwareIssues = [
        "OS Crash",
        "Boot Issue",
        "App Crashing",
        "Software Update",
        "Performance Slow",
    ];

    const handleSubmit = () => {
        if (!device || !brand || !issueType || !problem) return;
        setSubmitted(true);
    };

    return (
        <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-6">System Care Services</h1>
                <p className="text-gray-200 mb-10">
                    Select your device and issue details. We’ll help you with the best solution at our service center.
                </p>

                {/* DEVICE SELECTION */}
                <div className="grid grid-cols-2 gap-6">
                    <button
                        onClick={() => setDevice("Mobile")}
                        className={`py-4 rounded-xl font-semibold transition-all ${device === "Mobile"
                                ? "bg-purple-600 scale-105"
                                : "bg-white/10 border border-white/20 hover:bg-white/20"
                            }`}
                    >
                        Mobile
                    </button>

                    <button
                        onClick={() => setDevice("Laptop")}
                        className={`py-4 rounded-xl font-semibold transition-all ${device === "Laptop"
                                ? "bg-purple-600 scale-105"
                                : "bg-white/10 border border-white/20 hover:bg-white/20"
                            }`}
                    >
                        Laptop/Desktop
                    </button>
                </div>

                {/* BRAND SELECTION */}
                {device && (
                    <div className="mt-10 text-left">
                        <h2 className="text-lg font-bold mb-3">Select Brand</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(device === "Mobile" ? mobileBrands : laptopBrands).map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setBrand(item)}
                                    className={`py-3 rounded-lg text-sm transition ${brand === item
                                            ? "bg-purple-500 scale-105"
                                            : "bg-white/10 hover:bg-white/20 border border-white/20"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ISSUE TYPE */}
                {brand && (
                    <div className="mt-10 text-left">
                        <h2 className="text-lg font-bold mb-3">Issue Type</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setIssueType("Hardware")}
                                className={`py-3 rounded-lg font-medium ${issueType === "Hardware"
                                        ? "bg-purple-600 scale-105"
                                        : "bg-white/10 hover:bg-white/20 border border-white/20"
                                    }`}
                            >
                                Hardware
                            </button>

                            <button
                                onClick={() => setIssueType("Software")}
                                className={`py-3 rounded-lg font-medium ${issueType === "Software"
                                        ? "bg-purple-600 scale-105"
                                        : "bg-white/10 hover:bg-white/20 border border-white/20"
                                    }`}
                            >
                                Software
                            </button>
                        </div>
                    </div>
                )}

                {/* PROBLEM */}
                {issueType && (
                    <div className="mt-10 text-left">
                        <h2 className="text-lg font-bold mb-3">Select Problem</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(issueType === "Hardware" ? hardwareIssues : softwareIssues).map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() => setProblem(item)}
                                        className={`py-3 rounded-lg font-medium ${problem === item
                                                ? "bg-purple-500 scale-105"
                                                : "bg-white/10 hover:bg-white/20 border border-white/20"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* CUSTOMER DETAILS FORM — Show only after problem is selected */}
                {problem && !completed && (
                    <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">

                        <h3 className="text-2xl font-extrabold text-purple-300">
                            {device === "Mobile" ? "Matrix Mobiles Care" : "Matrix System Care"}
                        </h3>

                        <p className="text-gray-200 mt-3 leading-relaxed">
                            You selected a
                            <span className="font-semibold"> {problem}</span> issue on your
                            <span className="font-semibold"> {brand} {device}</span>.
                            <br />
                            Please share your details so we can assist you quickly.
                        </p>

                        <div className="mt-6 space-y-4">
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
                                placeholder="Your Area / Place"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                            />

                            <button
                                onClick={() => setCompleted(true)}
                                disabled={!name || !phone || !area}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold disabled:bg-purple-400"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}

                {/* FINAL CONFIRMATION MESSAGE */}
                {completed && (
                    <div className="mt-10 bg-purple-600/20 backdrop-blur-xl border border-purple-300 p-6 rounded-2xl text-center">
                        <h3 className="text-2xl font-extrabold text-purple-200">Thank You {name}!</h3>

                        <p className="text-gray-200 mt-2 leading-relaxed">
                            Our team from{" "}
                            <span className="font-bold">
                                {device === "Mobile" ? "Matrix Mobiles Care" : "Matrix System Care"}
                            </span>{" "}
                            will contact you soon at{" "}
                            <span className="font-bold">{phone}</span>.
                            <br />
                            Service Area: <span className="font-bold">{area}</span>
                        </p>

                        <p className="text-gray-300 mt-2 text-sm">
                            You can also visit our service center anytime for a quick diagnosis.
                        </p>
                    </div>
                )}


            </div>
        </section>
    );
};

export default SystemCare;
