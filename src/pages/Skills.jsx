import SkillBar from "../components/SkillBar";

export default function Skills() {
  const skills = [
    { skill: "HTML / CSS / JavaScript", level: 90 },
    { skill: "React", level: 85 },
    { skill: "Java", level: 80 },
    { skill: "C / C++", level: 80 },
    { skill: "MySQL / DBMS", level: 75 },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
          Skills
        </h2>

        <div className="max-w-xl">
          {skills.map((s) => (
            <SkillBar key={s.skill} skill={s.skill} level={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
