"use client";
import { Feather, Menu } from "react-feather";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/50 dark:bg-dark/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-primary dark:text-accent flex items-center text-green-500"
        >
          <Feather className="mr-2 w-6 h-6" />
          Marco DEV
        </a>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Mobile Menu Toggle"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {/* Menu Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-out`}
        onClick={() => setIsMenuOpen(false)} // Fecha ao clicar no link
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
