import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Grocery Inventory Management System",
    desc: "A React-based system for organizing grocery products and maintaining inventory records. It helps users monitor stock levels and track inventory efficiently.",
    tech: "React, JavaScript",
    link: "https://github.com/ChinnaTirumanideep/grocery-management-system",
  },
  {
    title: "LLM-SHIELD",
    desc: "A research-oriented framework for secure communication that combines encryption and steganography to conceal messages within LLM-generated text. Its approach is designed to protect message contents while making communication covert.",
    tech: "Python, PyTorch, Hugging Face Transformers",
    link: "https://github.com/2023115134/sdp",
  },
  {
    title: "Pet Adoption System",
    desc: "A full-stack web application that connects people interested in adopting pets with available animals. Users can submit adoption requests, which are managed through the application.",
    tech: "Java, Spring Boot, React, PostgreSQL",
    link: "https://github.com/ChinnaTirumanideep/pet-adoption-system",
  },
  {
    title: "Library Management System",
    desc: "A DBMS-based system that simplifies library operations by organizing and maintaining book records. It supports efficient storage and retrieval of library information.",
    tech: "MySQL, Java, HTML/CSS",
    link: "https://github.com/ChinnaTirumanideep/library-management",
  },
  {
    title: "Lost and Found Website",
    desc: "A website where users can report belongings they have lost or found. It makes it easier to search for misplaced items and help return them to their owners.",
    tech: "HTML, CSS, JavaScript",
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

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
