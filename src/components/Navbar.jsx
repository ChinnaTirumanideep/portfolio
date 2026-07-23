import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navLinkClass = (active) =>
    [
      "nav-link relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300",
      active
        ? "bg-violet-500/15 text-[var(--text-primary)] shadow-[0_0_24px_rgba(124,58,237,0.2)]"
        : "text-[var(--text-muted)] hover:bg-violet-500/10 hover:text-violet-500",
    ].join(" ");

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[var(--surface)]/85 backdrop-blur-xl shadow-[0_20px_70px_rgba(124,58,237,0.14)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="text-base font-semibold tracking-[0.22em] text-[var(--text-primary)] transition-colors duration-300 hover:text-violet-500 sm:text-lg"
          onClick={() => setOpen(false)}
        >
          THIRU
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={navLinkClass(active)}>
                {item.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/20"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1.5 text-xs font-medium text-violet-100"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--surface)]/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    active ? "bg-violet-500/15 text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:bg-violet-500/10 hover:text-violet-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
