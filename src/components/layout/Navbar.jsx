// src/components/layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Code2, Smartphone, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold text-slate-800 dark:text-white tracking-tight flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-0.5 rounded-lg w-12 h-12">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-1.png`}
              alt="Soumyo Roy"
              className="w-full h-full object-cover"
            />
          </span>
          Soumyo Roy
        </NavLink>

        <div className="flex items-center gap-4 sm:gap-6">
          <NavItem to="/about" icon={<User size={18} />} label="About" />
          <NavItem
            to="/apps"
            icon={<Smartphone size={18} />}
            label="Play Store"
          />
          <NavItem
            to="/portfolio"
            icon={<Code2 size={18} />}
            label="Portfolio"
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300"
        }`
      }
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </NavLink>
  );
}
