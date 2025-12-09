export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
          Contact
        </h2>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
          Feel free to reach out for opportunities, collaborations, or just to
          connect.
        </p>

        <div className="space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
          <p>
            <span className="font-semibold">Email:</span> yourmail@gmail.com
          </p>
          <p>
            <span className="font-semibold">GitHub:</span> github.com/yourusername
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span> linkedin.com/in/yourusername
          </p>
        </div>
      </div>
    </section>
  );
}
