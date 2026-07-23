import SectionReveal from "../components/SectionReveal";

const highlights = [
  "Strong foundation in React, JavaScript, HTML, CSS, and Java",
  "Focused on building clean, maintainable, and user-centered interfaces",
  "Comfortable working across frontend development, databases, and problem solving",
];

export default function About() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal direction="up" className="theme-panel rounded-[2rem] p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Building practical products with a thoughtful engineering mindset
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              I’m an IT student and developer focused on turning ideas into polished software experiences. I enjoy creating responsive web applications, improving user flows, and writing code that remains clear and scalable as projects grow.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              My goal is to contribute as a dependable developer in frontend, full-stack, or software engineering roles while continuing to grow through hands-on building and continuous learning.
            </p>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.08} className="theme-card rounded-[2rem] p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">What I bring</p>
            <div className="mt-5 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-violet-400/20 bg-[var(--card-bg)] p-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400" />
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{item}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
