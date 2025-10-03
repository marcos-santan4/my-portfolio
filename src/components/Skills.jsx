import React from "react";
import { Server, PenTool, Code, Zap, Tool } from "react-feather";

export default function Skills() {
  return (
    <section id="skills" class="py-16 bg-gray-900 rounded-3xl px-8">
      <h2 class="text-3xl font-bold mb-12 text-center text-green-500 dark:text-accent">
        <Tool class="inline mr-2" />
        My Skills
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-green-500 dark:text-accent flex justify-center items-center">
            <PenTool class="inline mr-2" />
            Design
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="skill-pill bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              UI/UX
            </span>
            <span class="skill-pill bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Figma
            </span>
            <span class="skill-pill bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Prototyping
            </span>
            <span class="skill-pill bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Wireframing
            </span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-green-500 dark:text-accent">
            <Code class="inline mr-2" />
            Frontend
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="skill-pill bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              HTML/CSS
            </span>
            <span class="skill-pill bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              JavaScript
            </span>
            <span class="skill-pill bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              React
            </span>
            <span class="skill-pill bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span class="skill-pill bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Responsive
            </span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-green-500 dark:text-accent">
            <Server class="inline mr-2" />
            Backend
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              Node.js
            </span>
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              Express
            </span>
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              Firebase
            </span>
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              Supabase
            </span>
            <span class="skill-pill bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              REST APIs
            </span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-green-500 dark:text-accent">
            <Zap class="inline mr-2" />
            Other
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Git
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Jira
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Agile
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              SEO
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Photoshop
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              IT
            </span>
            <span class="skill-pill bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              N8N
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
