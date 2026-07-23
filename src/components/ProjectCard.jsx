import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, features = [], link, demo, index = 0 }) {
  const techItems = tech.split(",").map((item) => item.trim());

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="theme-card group w-full rounded-[1.75rem] p-5 sm:p-6 lg:hover:-translate-y-1 lg:hover:shadow-[0_24px_80px_rgba(124,58,237,0.16)]"
    >
      <div className="h-1.5 w-20 rounded-full bg-violet-500/60" />

      <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techItems.map((item) => (
          <span key={item} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-100">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="theme-button-primary w-full justify-center px-4 py-3 text-sm sm:w-auto sm:py-2"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} className="theme-button-outline w-full justify-center px-4 py-3 text-sm sm:w-auto sm:py-2">
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
