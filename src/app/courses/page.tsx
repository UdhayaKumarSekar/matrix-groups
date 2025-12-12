import Link from "next/link";

export const metadata = {
  title: "Courses – MIT Career Hub",
  description: "Learn school, college, IT, QA, and government exam courses.",
};


export default function CoursesPage() {
  const courses = [
    {
      title: "School Students (9th–12th)",
      desc: "Study materials, revision guidance, model exams, and career counselling for school students.",
      link: "/courses/school",
    },
    {
      title: "College Students",
      desc: "Engineering, Arts & Science, Diploma – subject support, career roadmaps, project guidance and internships.",
      link: "/courses/college",
    },
    {
      title: "IT Software Training",
      desc: "Full-stack development, QA automation, Python, Java, SQL, DevOps — industry-level training.",
      link: "/courses/it",
    },
    {
      title: "QA & Automation Training",
      desc: "Selenium, TestNG, Java, API Testing, Postman, Docker, Jenkins pipelines, POM frameworks.",
      link: "/courses/qa",
    },
    {
      title: "Government Exam Prep",
      desc: "TNPSC, Banking, SSC, RRB, Police, Group 2/4 — study resources, mock tests, strategy planning.",
      link: "/courses/govt",
    },
    {
      title: "Spoken Languages",
      desc: "English fluency, Japanese basics (N5/N4), and Tamil communication improvement modules.",
      link: "/courses/languages",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10">
        Courses Offered by MIT–Career Hub
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        At MIT-Career Hub, we focus on empowering students from all backgrounds — school, college,
        graduates, job seekers, and working professionals. All study materials, roadmaps, and
        learning resources will be available freely. Our structured courses help students gain
        confidence, build skills, and prepare for a brighter future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, idx) => (
          <Link
            key={idx}
            href={course.link}
            className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition bg-white"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
