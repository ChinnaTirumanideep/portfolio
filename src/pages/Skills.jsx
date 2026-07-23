import SectionReveal from "../components/SectionReveal";

const skillGroups = [
  { title: "Programming Languages", items: ["Java", "JavaScript", "C", "C++"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Responsive Design"] },
  { title: "Backend", items: ["REST APIs", "State Management", "Problem Solving"] },
  { title: "Database", items: ["MySQL", "DBMS", "Firebase"] },
  { title: "Tools", items: ["GitHub", "VS Code", "Deployment", "Version Control"] },
  { title: "Learning", items: ["Data Structures", "Algorithms", "OOP", "Computer Networks"] },
];

export default function Skills() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            A versatile toolkit built for modern software teams
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            My experience spans frontend design, Java-based development, and database-driven applications, giving me a broad base for internships, projects, and product-focused work.
          </p>
        </SectionReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.title} direction="up" delay={index * 0.06}>
              <div className="theme-card rounded-[1.75rem] p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
