import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Grocery Inventory Management System",
    desc: "A React-based system to track and manage grocery stock.",
    tech: "React, JavaScript",
    features: ["Inventory tracking", "Role-based flow", "Clean dashboard"],
    link: "https://github.com/ChinnaTirumanideep/grocery-management-system",
  },
  {
    title: "Doctor Appointment Booking System",
    desc: "A responsive platform for booking and managing doctor appointments.",
    tech: "React, Firebase / DB",
    features: ["Responsive UI", "Booking flow", "Appointment management"],
    link: "https://github.com/ChinnaTirumanideep/doctor-appointment",
  },
  {
    title: "Local Job Alert System",
    desc: "A simple platform helping local workers discover nearby job opportunities.",
    tech: "HTML, CSS, JavaScript",
    features: ["Simple onboarding", "Job listing cards", "Mobile friendly"],
    link: "https://github.com/ChinnaTirumanideep/local-job-alert",
  },
  {
    title: "Library Management System",
    desc: "A DBMS-based library record handling system.",
    tech: "MySQL, Java, HTML/CSS",
    features: ["CRUD workflow", "Structured records", "Reliable backend"],
    link: "https://github.com/ChinnaTirumanideep/library-management",
  },
  {
    title: "Lost & Found Website",
    desc: "A project designed to help users submit lost items and recover belongings easily.",
    tech: "HTML, CSS, JavaScript",
    features: ["Searchable listings", "Friendly UX", "Accessible layout"],
    link: "https://github.com/ChinnaTirumanideep/lost-and-found",
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Selected work shaped around usability and impact
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
