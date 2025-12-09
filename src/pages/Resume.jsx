export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-white dark:bg-gray-900 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
          Resume
        </h2>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
          You can download my resume using the button below. It includes my
          education, skills, and project experience in detail.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-5 py-2.5 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
