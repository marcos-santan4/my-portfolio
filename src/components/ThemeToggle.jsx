"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "react-feather"; // Ícones Feather

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    if (initialTheme === "dark") {
      root.classList.add("dark");
      setIsDarkMode(true);
    } else {
      root.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}
