import React from "react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-green-500 dark:text-accent">
          Crafting Digital
          <span className="text-accent dark:text-white"> Experiences</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-900 dark:text-gray-300">
          I design and build beautiful, functional digital products with a focus
          on user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-gray-900 dark:hover:bg-secondary transition"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-primary text-green-500 dark:border-green-500 dark:text-accent rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
