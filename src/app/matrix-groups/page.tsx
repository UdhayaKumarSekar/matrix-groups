import Link from "next/link";

export const metadata = {
  title: "Matrix Groups – Our Divisions",
  description: "Explore all branches: MIT Career Hub, System Care, Software, Media.",
};


export default function MatrixGroupsPage() {
  const divisions = [
    {
      title: "Matrix Info Tech",
      desc: "Educational division offering school, college, and IT training.",
      link: "/courses",
    },
    {
      title: "MIT Career Hub (MITCH)",
      desc: "Media & learning hub featuring motivational content & insights.",
      link: "/career-hub",
    },
    {
      title: "Matrix System Care",
      desc: "Mobile & laptop repair, onsite support, and AMC services.",
      link: "/system-care",
    },
    {
      title: "MIT Software Solutions",
      desc: "Future division for app development & institutional software.",
      link: "/software",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10">
        Matrix Groups — Our Divisions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {divisions.map((d, idx) => (
          <Link
            href={d.link}
            key={idx}
            className="p-8 border rounded-xl hover:shadow-xl transition bg-white"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{d.title}</h3>
            <p className="text-gray-700">{d.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
