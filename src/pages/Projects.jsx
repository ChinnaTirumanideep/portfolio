import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Grocery Inventory Management System",
      desc: "A React-based system to track, update, and manage grocery stock with a simple and clean UI.",
      tech: "React, JavaScript, (Backend of your choice)",
      link: "#",
    },
    {
      title: "Doctor Appointment Booking System",
      desc: "Web app for patients to book and manage doctor appointments with an organized schedule view.",
      tech: "React, Firebase / DB",
      link: "#",
    },
    {
      title: "Local Job Alert System",
      desc: "A platform helping local workers and small businesses connect through job postings.",
      tech: "HTML, CSS, JavaScript",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 dark:text-white">
          Projects
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
