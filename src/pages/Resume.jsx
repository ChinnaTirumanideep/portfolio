// src/pages/Resume.jsx

export default function Resume() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 sm:p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">
          
          {/* Heading */}
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-300">
            Resume
          </p>

          <h2
  className="
    mt-3
    text-3xl
    font-bold
    tracking-tight
    text-slate-900
    sm:text-4xl
    dark:text-white
    transition-all
    duration-300
    hover:text-violet-600
    dark:hover:text-violet-300
    hover:opacity-80
    hover:scale-[1.02]
    cursor-default
  "
>
  View My Resume
</h2>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            You can open and view my resume in a new tab using the button below.
          </p>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-black
                px-6 py-3
                text-sm font-semibold text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-violet-700
              "
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}