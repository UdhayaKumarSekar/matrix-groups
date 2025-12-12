import { useState } from "react";
import Link from "next/link";

const mobileModels = [
  "Samsung Galaxy S24",
  "Samsung Galaxy A15",
  "Apple iPhone 15",
  "Apple iPhone 13",
  "Vivo V30",
  "Oppo Reno 11",
  "Realme Narzo 70",
  "Poco X6",
  "Nokia G22",
];

const laptopModels = [
  "Dell Inspiron 15",
  "HP Pavilion 14",
  "Lenovo IdeaPad 3",
  "Acer Aspire 5",
  "Asus VivoBook 15",
  "Apple MacBook Air M2",
  "MSI Modern 14",
];

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"mobile" | "laptop">("mobile");

  const models =
    type === "mobile"
      ? mobileModels.filter((m) => m.toLowerCase().includes(query.toLowerCase()))
      : laptopModels.filter((m) => m.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700">Our Services — Matrix System Care</h1>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          We provide repair, onsite support, and AMC packages for mobiles, laptops and institutional setups.
          Choose a service to learn more or request support.
        </p>
      </header>

      {/* Service Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Link href="/system-care" className="p-6 rounded-xl border hover:shadow-xl bg-white">
          <img src="/services/mobile-repair.png" alt="Mobile Repair" className="h-28 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">Mobile Repair</h3>
          <p className="text-sm text-gray-600 text-center">Screen, battery, camera, software fixes and diagnostics.</p>
        </Link>

        <Link href="/system-care" className="p-6 rounded-xl border hover:shadow-xl bg-white">
          <img src="/services/laptop-repair.png" alt="Laptop Repair" className="h-28 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">Laptop / PC Repair</h3>
          <p className="text-sm text-gray-600 text-center">Hardware, SSD/HDD, OS install, data recovery, performance tune-ups.</p>
        </Link>

        <Link href="/system-care#onsite" className="p-6 rounded-xl border hover:shadow-xl bg-white">
          <img src="/services/onsite.png" alt="Onsite Support" className="h-28 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">Onsite Support</h3>
          <p className="text-sm text-gray-600 text-center">Home / office visits for network, software issues and setup.</p>
        </Link>

        <Link href="/system-care#amc" className="p-6 rounded-xl border hover:shadow-xl bg-white">
          <img src="/services/amc.png" alt="AMC" className="h-28 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">AMC (Institutions)</h3>
          <p className="text-sm text-gray-600 text-center">Annual maintenance contracts for schools, colleges and offices.</p>
        </Link>
      </section>

      {/* Models + Search */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-2 bg-white rounded-full p-1 border">
            <button
              onClick={() => setType("mobile")}
              className={`px-3 py-1 rounded-full ${type === "mobile" ? "bg-blue-700 text-white" : "text-gray-700"}`}
            >
              Mobile Models
            </button>
            <button
              onClick={() => setType("laptop")}
              className={`px-3 py-1 rounded-full ${type === "laptop" ? "bg-blue-700 text-white" : "text-gray-700"}`}
            >
              Laptop Models
            </button>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${type === "mobile" ? "mobile" : "laptop"} models...`}
            className="ml-auto border rounded-lg px-4 py-2 w-full md:w-72"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {models.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-6">No models found — try a different keyword.</div>
          ) : (
            models.map((m) => (
              <div key={m} className="p-4 border rounded-lg bg-white hover:shadow-md">
                <div className="h-28 flex items-center justify-center mb-3">
                  {/* Placeholder image — replace later with actual model image at public/services/<slug>.png */}
                  <img src={`/services/placeholder-device.png`} alt={m} className="h-20" />
                </div>
                <h4 className="font-semibold text-sm text-blue-700">{m}</h4>
                <p className="text-xs text-gray-600 mt-1">Model quick-info can go here (release year, common issues).</p>
                <div className="mt-3">
                  <Link
                    href="/system-care"
                    className="inline-block text-sm bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    Diagnose
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Notes / How it works */}
      <section className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-bold text-blue-700 mb-3">How Onsite & AMC work</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Onsite visits are scheduled after basic diagnosis — if hardware replacement needed, device may be taken to workshop.</li>
          <li>AMC proposals are customized for institutions — include number of systems, frequency of visits and SLA.</li>
          <li>Use the Diagnose button to submit issue details — our team will contact you back with the next steps.</li>
        </ul>
      </section>
    </main>
  );
}
