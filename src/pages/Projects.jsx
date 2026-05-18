// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">

      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-violet-600 dark:text-violet-300">
  Projects
</h2>


      <div className="grid sm:grid-cols-2 gap-8">

        <ProjectCard
          title="Grocery Inventory Management System"
          desc="A React-based system to track and manage grocery stock."
          tech="React, JavaScript"
          link="https://github.com/ChinnaTirumanideep/grocery-inventory"
        />

        <ProjectCard
          title="Doctor Appointment Booking System"
          desc="A responsive platform for booking and managing doctor appointments."
          tech="React, Firebase / DB"
          link="https://github.com/ChinnaTirumanideep/doctor-appointment"
        />

        <ProjectCard
          title="Local Job Alert System"
          desc="A simple platform helping local workers discover nearby job opportunities."
          tech="HTML, CSS, JavaScript"
          link="https://github.com/ChinnaTirumanideep/local-job-alert"
        />

        <ProjectCard
          title="Library Management System"
          desc="A DBMS-based library record handling system."
          tech="MySQL, Java, HTML/CSS"
          link="https://github.com/ChinnaTirumanideep/library-management"
        />

        <ProjectCard
          title="Lost & Found Website"
          desc="A project designed to help users submit lost items and recover belongings easily."
          tech="HTML, CSS, JavaScript"
          link="https://github.com/ChinnaTirumanideep/lost-and-found"
        />

      </div>
    </section>
  );
}
