import Link from "next/link";

export const metadata = {
  title: "Matrix Groups – Education. Service. Innovation.",
  description: "Empowering students and customers with technology, learning, and services.",
};

export default function Home() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-800 via-blue-600 to-purple-700 text-white py-28 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Matrix Groups
        </h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Teaching • Technology • Services • Community  
          <br />
          <span className="text-yellow-300 font-semibold">
            “Teaching is the Greatest Art of Patriotism”
          </span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/courses"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Explore Courses
          </Link>
          <Link
            href="/system-care"
            className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            System Care Services
          </Link>
        </div>
      </section>

      {/* MATRIX GROUPS OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Divisions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/courses" className="p-8 rounded-xl border bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">MIT Career Hub</h3>
            <p className="text-gray-700">Educational division offering study materials, IT training, upskilling & career development.</p>
          </Link>

          <Link href="/system-care" className="p-8 rounded-xl border bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Matrix System Care</h3>
            <p className="text-gray-700">Mobile & laptop repair, onsite technical support and AMC services for institutions.</p>
          </Link>

          <Link href="/career-hub" className="p-8 rounded-xl border bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">MITCH — Media Hub</h3>
            <p className="text-gray-700">YouTube knowledge hub with motivational, educational & cinematic insights.</p>
          </Link>

          <Link href="/software" className="p-8 rounded-xl border bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">MIT Software Solutions</h3>
            <p className="text-gray-700">Upcoming software division for building educational & institutional apps.</p>
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">System Care Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8">
          <Link href="/system-care" className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">Mobile Repair</h3>
            <p className="text-gray-600 mt-2">Screen, battery, software fixes & diagnostics.</p>
          </Link>

          <Link href="/system-care" className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">Laptop / PC Repair</h3>
            <p className="text-gray-600 mt-2">Hardware, OS installation, performance optimization.</p>
          </Link>

          <Link href="/system-care" className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">Onsite & AMC</h3>
            <p className="text-gray-600 mt-2">Institutional IT support & annual maintenance plans.</p>
          </Link>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Courses Offered</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/courses/school" className="p-6 rounded-xl border bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700">School Students</h3>
            <p className="text-gray-700 mt-2">Study materials & model exams for 9th–12th.</p>
          </Link>

          <Link href="/courses/college" className="p-6 rounded-xl border bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700">College Students</h3>
            <p className="text-gray-700 mt-2">Subject notes, projects, roadmaps & guidance.</p>
          </Link>

          <Link href="/courses/it" className="p-6 rounded-xl border bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700">IT & Software Training</h3>
            <p className="text-gray-700 mt-2">Full-stack, DevOps, Cloud, SQL & more.</p>
          </Link>
        </div>
      </section>

      {/* QA AUTOMATION HIGHLIGHT */}
      <section className="bg-blue-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">QA Automation Training</h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          Industry-level automation training including Java Selenium, Python Selenium,  
          Playwright (JS/TS), API Testing, CI/CD, Docker, Framework Building & more.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/courses/qa/java-selenium" className="px-6 py-3 bg-white border rounded-xl hover:shadow-lg">
            Java + Selenium
          </Link>

          <Link href="/courses/qa/python-selenium" className="px-6 py-3 bg-white border rounded-xl hover:shadow-lg">
            Python + Selenium
          </Link>

          <Link href="/courses/qa/playwright-js" className="px-6 py-3 bg-white border rounded-xl hover:shadow-lg">
            Playwright (JS)
          </Link>

          <Link href="/courses/qa/playwright-ts" className="px-6 py-3 bg-white border rounded-xl hover:shadow-lg">
            Playwright (TS)
          </Link>

          <Link href="/courses/qa/api-testing" className="px-6 py-3 bg-white border rounded-xl hover:shadow-lg">
            API Testing (Postman + RestAssured)
          </Link>
        </div>
      </section>

      {/* LANGUAGES PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Languages Training</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {["Tamizh", "English", "Hindi", "Japanese", "Spanish"].map((lang) => (
            <div
              key={lang}
              className="p-6 rounded-xl border bg-white text-center font-semibold text-blue-700 hover:shadow-lg transition"
            >
              {lang}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-purple-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Guidance?</h2>
        <p className="opacity-90 mb-6">We help you choose the right path for your career.</p>

        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}
