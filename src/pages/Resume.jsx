import SectionReveal from "../components/SectionReveal";

export default function Resume() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionReveal className="theme-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            View my professional background
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
            Open the resume below to explore my academic background, technical strengths, and project experience.
          </p>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="theme-button-primary px-6 py-3 text-sm"
            >
              View Resume
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}