"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "فعال کردن حالت تاریک"
          : "فعال کردن حالت روشن"
      }
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        text-slate-600
        hover:text-sky-600
        hover:bg-slate-100
        dark:text-slate-300
        dark:hover:text-sky-400
        dark:hover:bg-slate-800
        transition-colors
      "
    >
      {theme === "light" ? (
        <Moon size={20} strokeWidth={2} />
      ) : (
        <Sun size={20} strokeWidth={2} />
      )}
    </button>
  );
}