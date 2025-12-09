export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition max-w-md w-full mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
        {desc}
      </p>

      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span className="font-semibold">Tech:</span> {tech}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          View Project
        </a>
      )}
    </div>
  );
}
