const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "C", "C++"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "React", "Responsive Design"],
  },
  {
    title: "Databases",
    items: ["MySQL", "DBMS", "Firebase / DB"],
  },
  {
    title: "Tools & Platforms",
    items: ["GitHub", "VS Code", "Project Deployment", "Version Control"],
  },
  {
    title: "Core CS Subjects",
    items: ["Data Structures", "Algorithms", "OOP", "Computer Networks"],
  },
];

export default function Skills() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-300">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          A broader technical foundation for multiple IT roles
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
          This portfolio is shaped around versatility, with a mix of frontend,
          Java, database, and core computer science skills that support both
          project building and interview readiness.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-white/60 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
