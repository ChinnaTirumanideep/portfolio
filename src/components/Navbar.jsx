// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  // Load dark mode from localStorage
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Apply theme & store
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#BEE3DB] dark:bg-[#92C7BC]
        backdrop-blur-md shadow-md
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold dark:text-white"
          onClick={() => setOpen(false)}
        >
          Chinna
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="
                  pb-1
                  text-gray-700 dark:text-gray-900
                  hover:text-gray-800 dark:hover:text-gray-700
                  font-medium
                "
              >
                {item.label}
              </Link>

              {/* Hover underline — NOW NEUTRAL, NOT BLUE */}
              <span
                className="
                  absolute left-0 -bottom-[2px]
                  w-full h-[1px]
                  bg-gray-700 dark:bg-gray-200
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  origin-left
                "
              ></span>
            </div>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDark((prev) => !prev)}
            className="
              px-3 py-1 rounded-md 
              bg-gray-200 dark:bg-gray-800 
              text-gray-800 dark:text-gray-100 
              text-xs sm:text-sm
            "
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="
              px-2 py-1 rounded-md 
              bg-gray-200 dark:bg-gray-800 
              text-gray-800 dark:text-gray-100 
              text-xs
            "
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 rounded-md border border-gray-400 dark:border-gray-600"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#BEE3DB] dark:bg-[#92C7BC] border-t border-gray-300 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-4">
            
            {navItems.map((item) => (
              <div key={item.to} className="relative group w-fit">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="
                    pb-1
                    text-gray-700 dark:text-gray-900
                    hover:text-gray-800 dark:hover:text-gray-700
                    font-medium
                  "
                >
                  {item.label}
                </Link>

                {/* Mobile underline — also neutral now */}
                <span
                  className="
                    absolute left-0 -bottom-[2px]
                    w-full h-[1px]
                    bg-gray-700 dark:bg-gray-200
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300
                    origin-left
                  "
                ></span>
              </div>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
