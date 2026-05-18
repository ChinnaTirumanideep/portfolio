import { Link } from "react-router-dom";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ChinnaTirumanideep",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.61 2 12.31c0 4.56 2.87 8.43 6.84 9.8.5.1.66-.22.66-.47 0-.23-.01-.85-.01-1.67-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.52 1.07 1.52 1.07.88 1.56 2.31 1.11 2.87.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.75-.1-.26-.43-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.17 9.17 0 0 1 4.97 0c1.9-1.32 2.73-1.05 2.73-1.05.53 1.41.2 2.45.1 2.71.62.72 1 1.63 1 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .25.16.58.67.47A10.32 10.32 0 0 0 22 12.31C22 6.61 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinna-tirumanideep-dasari-24833a291",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5A2.48 2.48 0 1 1 4.97 8a2.48 2.48 0 0 1 .01-4.5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.06C14.43 9.62 15.64 9 17.36 9 21.08 9 22 11.45 22 14.64V21h-4v-5.64c0-1.35-.03-3.09-1.88-3.09-1.89 0-2.18 1.48-2.18 2.99V21h-4V9Z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-300">
          Computer Science Student &amp; Developer
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Aspiring Software Engineer
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
          I build practical applications with React, JavaScript, HTML, CSS,
          and Java while focusing on software development, problem solving,
          and learning new technologies.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-violet-500 bg-transparent px-6 py-3 text-sm font-semibold text-violet-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:text-white dark:text-violet-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}