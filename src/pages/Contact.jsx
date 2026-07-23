import SectionReveal from "../components/SectionReveal";

const contacts = [
  {
    label: "Email",
    value: "chinnadasari0705@gmail.com",
    href: "mailto:chinnadasari0705@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/ChinnaTirumanideep",
    href: "https://github.com/ChinnaTirumanideep",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chinna-tirumanideep-dasari-24833a291",
    href: "https://www.linkedin.com/in/chinna-tirumanideep-dasari-24833a291",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="theme-panel rounded-[2rem] p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Let's build something meaningful together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            I�m open to internships, collaborations, and opportunities where I can contribute through thoughtful frontend work and dependable engineering.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="theme-card rounded-[1.25rem] p-5"
              >
                <p className="text-sm font-semibold text-violet-500">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.value}</p>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}