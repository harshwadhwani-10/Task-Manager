"use client";
import Link from "next/link";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="w-full bg-white/80 dark:bg-zinc-900/80 shadow-lg py-3 px-8 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center min-w-[320px] gap-10">
        <Logo />
        <nav className="flex gap-2 sm:gap-6 text-lg relative min-w-65">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/tasks", label: "Tasks" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group px-3 py-1 rounded-md font-medium text-zinc-700 dark:text-zinc-200 hover:text-primary dark:hover:text-primary transition-colors relative overflow-hidden"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-linear-to-r from-primary/60 to-primary/90 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-transparent hover:border-primary dark:hover:border-primary/60 shadow-sm"
        >
          {isDark ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-zinc-700 text-xl" />}
        </button>
        <Link href="/login" aria-label="Login">
          <FaUserCircle className="text-3xl text-primary hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors drop-shadow-sm" />
        </Link>
      </div>
    </header>
  );
}
