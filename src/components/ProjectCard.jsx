// src/components/ProjectCard.jsx

export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <div
      className="
        group
        p-6 rounded-xl
        border border-violet-500/40
        bg-white/10 dark:bg-black/20
        shadow-md transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        hover:border-violet-500
        hover:bg-white/20 dark:hover:bg-black/30
        cursor-pointer
      "
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-violet-600 dark:text-violet-300 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-3 leading-6">
        {desc}
      </p>

      {/* Tech Stack */}
      <p className="text-sm text-gray-900 dark:text-gray-200 font-semibold mb-4">
        <span className="text-violet-500">Tech:</span> {tech}
      </p>

      {/* GitHub Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block px-4 py-2
            bg-violet-700 hover:bg-violet-800
            text-white text-sm font-semibold
            rounded-md transition-all duration-300 shadow-md
          "
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
