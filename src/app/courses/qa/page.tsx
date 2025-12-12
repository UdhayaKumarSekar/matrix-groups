import Link from "next/link";

export const metadata = {
  title: "QA Automation Training – MIT Career Hub",
  description: "Learn Selenium, Playwright, API testing, and full automation frameworks.",
};

export default function QAMainPage() {
  const qaCourses = [
    {
      title: "Java + Selenium Automation",
      desc: "Master Core Java, Selenium WebDriver, TestNG, POM Framework, Reports & CI/CD.",
      link: "/courses/qa/java-selenium",
    },
    {
      title: "Python + Selenium Automation",
      desc: "Learn Python, Pytest, Selenium Automation, Page Object Model & reporting.",
      link: "/courses/qa/python-selenium",
    },
    {
      title: "Playwright (JavaScript)",
      desc: "Modern automation using Playwright with JavaScript, API testing & parallel execution.",
      link: "/courses/qa/playwright-js",
    },
    {
      title: "Playwright (TypeScript)",
      desc: "End-to-end automation using Playwright + TypeScript with fixtures & CI pipelines.",
      link: "/courses/qa/playwright-ts",
    },
    {
      title: "API Testing (Postman + RestAssured)",
      desc: "Manual API testing in Postman + automation with RestAssured framework.",
      link: "/courses/qa/api-testing",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        QA Automation Training — Choose Your Track
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        MIT–Career Hub offers multiple specialized QA tracks to match your learning style  
        and industry requirements. Choose the path that fits your goal.
      </p>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {qaCourses.map((course, index) => (
          <Link
            key={index}
            href={course.link}
            className="p-8 border rounded-xl hover:shadow-xl transition bg-white"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

