export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#3A6F62] dark:text-[#DFF4EE]">
    About Me
</h2>


        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          I’m Chinna, a student and aspiring software developer from India.
          I focus on frontend development and enjoy turning ideas into working
          web applications. I’ve worked on systems like Grocery Inventory
          Management, Doctor Appointment Booking, Library Management, and Local
          Job Alert platforms.
        </p>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mt-4">
          I prefer writing clean, structured code and following a traditional,
          fundamentals-first approach: understanding data structures, algorithms,
          and system design before jumping into frameworks.
        </p>
      </div>
    </section>
  );
}
