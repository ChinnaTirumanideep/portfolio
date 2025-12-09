// src/pages/Home.jsx

export default function Home() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl text-center">
        
        {/* Small Tagline */}
        <p className="
          text-sm sm:text-base 
          font-semibold 
          text-gray-700 dark:text-gray-300
        ">
          Frontend Developer • Student
        </p>

        {/* Main Heading */}
        <h1 className="
          mt-3 
          text-4xl sm:text-5xl font-bold 
          text-gray-900 dark:text-white 
          leading-tight
        ">
          Hey, I’m Chinna 👋  
          <br />
          I build clean and practical web interfaces.
        </h1>

        {/* Short Description */}
        <p className="
          mt-4 
          text-gray-600 dark:text-gray-300 
          text-sm sm:text-base 
          max-w-2xl mx-auto
        ">
          I enjoy creating simple, structured, and efficient applications using 
          React and strong programming fundamentals. Clean UI and clarity are always my priorities.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          
          <a
            href="/projects"
            className="
              px-6 py-3 
              rounded-lg 
              bg-[#BEE3DB] dark:bg-[#92C7BC]
              text-gray-900 dark:text-gray-900
              font-semibold text-sm sm:text-base
              shadow-md hover:shadow-lg
              transition-all duration-300
            "
          >
            View Projects
          </a>

          <a
            href="/about"
            className="
              px-6 py-3 
              rounded-lg 
              border border-gray-400 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              font-semibold text-sm sm:text-base
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-300
            "
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
