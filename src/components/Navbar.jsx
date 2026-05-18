import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const navLinkClass = (active) =>
    [
      "relative pb-1 text-sm font-medium transition-colors duration-300",
      active
  ? "text-violet-700 dark:text-white"
  : "text-slate-700 hover:text-violet-700 dark:text-slate-300 dark:hover:text-white",
    ].join(" ");

  const underlineClass = (active) =>
    [
      "absolute left-0 -bottom-[1px] h-[2px] w-full origin-left rounded-full bg-violet-400 transition-all duration-300",
      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
    ].join(" ");

  return (
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 dark:border-violet-900/40 bg-slate-50/90 dark:bg-gradient-to-r dark:from-black dark:via-slate-950 dark:to-violet-950/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors duration-300"> 
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="text-base font-semibold tracking-wide text-slate-900 dark:text-white transition-colors duration-300 hover:text-violet-600 dark:hover:text-violet-300 sm:text-lg"
          onClick={() => setOpen(false)}
        >
          Chinna Tirumanideep
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={navLinkClass(active)}
              >
                {item.label}
                <span className={underlineClass(active)} />
              </Link>
            );
          })}

          <button
            onClick={() => setDark((prev) => !prev)}
            className="rounded-full border border-slate-300 dark:border-violet-900/50 bg-white dark:bg-black/50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-violet-400 hover:text-violet-700 dark:hover:text-white"          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="rounded-full border border-violet-900/50 bg-black/50 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-violet-400 hover:text-white"
          >
            {dark ? "Light" : "Dark"}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-violet-900/50 bg-black/50 px-3 py-1.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-violet-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
<div className="border-t border-slate-200 dark:border-violet-900/40 bg-slate-50 dark:bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={navLinkClass(active)}
                >
                  {item.label}
                  <span className={underlineClass(active)} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
