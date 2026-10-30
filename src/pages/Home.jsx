import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import SectionReveal from "../components/SectionReveal";
import StatCounter from "../components/StatCounter";
import profileImage from "../assets/images/portfolio_photo.jpeg";
import llmAgenticAiCertificate from "../assets/certificates/AU_DIST_LLM&AgenticAI_1 (70).jpg";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ChinnaTirumanideep",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.61 2 12.31c0 4.56 2.87 8.43 6.84 9.8.5.1.66-.22.66-.47 0-.23-.01-.85-.01-1.67-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.52 1.07 1.52 1.07.88 1.56 2.31 1.11 2.87.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.75-.1-.26-.43-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.17 9.17 0 0 1 4.97 0c1.9-1.32 2.73-1.05 2.73-1.05.53 1.41.2 2.45.1 2.71.62.72 1 1.63 1 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .25.16.58.67.47A10.32 10.32 0 0 0 22 12.31C22 6.61 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinna-tirumanideep-dasari-24833a291",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path fill="currentColor" d="M4.98 3.5A2.48 2.48 0 1 1 4.97 8a2.48 2.48 0 0 1 .01-4.5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.06C14.43 9.62 15.64 9 17.36 9 21.08 9 22 11.45 22 14.64V21h-4v-5.64c0-1.35-.03-3.09-1.88-3.09-1.89 0-2.18 1.48-2.18 2.99V21h-4V9Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: 4, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 2027, suffix: "", label: "Graduation" },
  { value: 100, suffix: "%", label: "Dedication" },
];

const certificates = [
  {
    title: "Three-Day Workshop on LLM & Agentic AI",
    org: "AU",
    date: "Not specified",
    description:
      "Successfully participated in a Three-Day Workshop on Large Language Models (LLMs) and Agentic AI.",
    image: llmAgenticAiCertificate,
  },
];

export default function Home() {
  return (
    <>
      <section className="px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-violet-500">
              Hello <span className="wave-hand" aria-hidden="true">👋</span>
            </p>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              I'm Tirumanideep
            </h1>
            <p className="mt-4 text-lg font-semibold text-violet-500 sm:text-xl">
              Final Year Information Technology Student
            </p>

            <div className="mt-6 rounded-[1.4rem] border border-violet-400/20 bg-[var(--card-bg)]/80 p-4 shadow-[0_18px_50px_rgba(124,58,237,0.12)] backdrop-blur sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-500">Currently</p>
              <div className="mt-3 min-h-[2.4rem] text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                <TypeAnimation
                  sequence={[
                    "Building Full Stack Applications",
                    1700,
                    "Learning AI & Machine Learning",
                    1700,
                    "Preparing for Software Engineering Placements",
                    1700,
                    "Creating Modern Web Experiences",
                    1700,
                  ]}
                  wrapper="span"
                  speed={45}
                  deletionSpeed={45}
                  repeat={Infinity}
                  className="inline-block"
                />
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              I build practical applications with React, JavaScript, HTML, CSS, and Java while focusing on software development, problem solving, and learning new technologies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="theme-button-primary w-full justify-center px-6 py-3 text-sm sm:w-auto"
              >
                Download Resume
              </a>
              <Link to="/contact" className="theme-button-outline w-full justify-center px-6 py-3 text-sm sm:w-auto">
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/20 bg-[var(--card-bg)] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="hero-profile-frame">
              <img
                src={profileImage}
                alt="Thiru Manideep"
                className="hero-profile-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <SectionReveal className="theme-panel mx-auto max-w-6xl rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Current focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Building thoughtful web experiences</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                I enjoy turning ideas into polished, practical interfaces with a strong focus on clean design, reliable functionality, and continuous learning.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-violet-400/20 bg-[var(--card-bg)] p-5">
                <p className="text-sm font-semibold text-violet-500">Frontend</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">React, JavaScript, Tailwind, responsive UI systems</p>
              </div>
              <div className="rounded-[1.25rem] border border-violet-400/20 bg-[var(--card-bg)] p-5">
                <p className="text-sm font-semibold text-violet-500">Backend</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Java, problem solving, structured application logic</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <SectionReveal className="theme-panel mx-auto max-w-6xl rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Certificates</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">Learning milestones that keep growing</h2>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 xl:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="theme-card group min-w-[85vw] snap-start overflow-hidden rounded-[1.5rem] p-4 sm:min-w-[280px] md:min-w-0 md:p-5"
              >
                <div className="mb-4 overflow-hidden rounded-[1rem] border border-violet-400/20 bg-[var(--card-bg)] p-2">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-48 w-full rounded-[0.85rem] object-contain"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{certificate.title}</h3>
                </div>

                <p className="mt-3 text-sm font-medium text-violet-500">{certificate.org}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{certificate.date}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{certificate.description}</p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-button-primary w-full justify-center px-4 py-3 text-sm sm:w-auto sm:py-2"
                  >
                    View Certificate
                  </a>
                  <a
                    href={certificate.image}
                    download={`${certificate.title.replace(/\s+/g, "_")}.jpg`}
                    className="theme-button-outline w-full justify-center px-4 py-3 text-sm sm:w-auto sm:py-2"
                  >
                    Download Certificate
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </section>
    </>
  );
}