export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 sm:p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">
          
          {/* Heading */}
          <h2
            className="
              text-3xl sm:text-4xl
              font-bold
              mb-6
              text-violet-600
              dark:text-violet-300
              transition-all
              duration-300
              hover:text-violet-700
              dark:hover:text-violet-200
              hover:opacity-80
              hover:scale-[1.02]
              cursor-default
            "
          >
            Contact
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-xl leading-7">
            Feel free to reach out for opportunities, collaborations, or just
            to connect.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-sm sm:text-base text-gray-800 dark:text-gray-200">
            
            <p>
              <span className="font-semibold text-violet-600 dark:text-violet-300">
                Email:
              </span>{" "}
              chinnadasari0705@gmail.com
            </p>

            <p>
              <span className="font-semibold text-violet-600 dark:text-violet-300">
                GitHub:
              </span>{" "}
              <a
                href="https://github.com/ChinnaTirumanideep"
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-600 transition-colors duration-300"
              >
                github.com/ChinnaTirumanideep
              </a>
            </p>

            <p>
              <span className="font-semibold text-violet-600 dark:text-violet-300">
                LinkedIn:
              </span>{" "}
              <a
                href="https://www.linkedin.com/in/chinna-tirumanideep-dasari-24833a291"
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-600 transition-colors duration-300"
              >
                linkedin.com/in/chinna-tirumanideep-dasari-24833a291
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}