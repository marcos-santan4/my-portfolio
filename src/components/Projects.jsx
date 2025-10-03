import Image from "next/image";
import dissulba from "../styles/images/dissulba_logo.png";
import { Briefcase } from "react-feather";

export default function Projects() {
  return (
    <section id="projects" class="py-16">
      <h2 class="text-3xl font-bold mb-12 text-center text-green-500 dark:text-accent">
        <Briefcase class="inline mr-2" />
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
          <Image
            src={dissulba}
            alt="Dissulba landing page"
            class="w-full h-48 object bg-white"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">
              Institutional Website - Dissulba
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A landing page for a food distribution company, showcasing its
              values, services, and customer support.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                HTML
              </span>
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                CSS
              </span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                JAVASCRIPT
              </span>
            </div>
            <div class="flex justify-between">
              <a
                href="https://www.dissulba.com.br"
                target="_blank"
                class="text-accent hover:underline flex items-center hover:text-green-500"
              >
                Acessar
              </a>
              <a
                href="https://github.com/marcos-santan4/dissulba-lp"
                target="_blank"
                class="text-primary dark:text-accent hover:underline flex items-center"
              >
                <i data-feather="github" class="w-4 h-4 mr-1"></i> Code
              </a>
            </div>
          </div>
        </div>

        <div class="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
          <Image
            src={dissulba}
            alt="Dissulba landing page"
            class="w-full h-48 object bg-white"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Finance Dashboard</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Interactive dashboard for personal finance tracking with data
              visualization.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                Vue.js
              </span>
              <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                D3.js
              </span>
              <span class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                Express
              </span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-accent hover:underline flex items-center">
                <i data-feather="external-link" class="w-4 h-4 mr-1"></i> Live
                Demo
              </a>
              <a
                href="#"
                class="text-primary dark:text-accent hover:underline flex items-center"
              >
                <i data-feather="github" class="w-4 h-4 mr-1"></i> Code
              </a>
            </div>
          </div>
        </div>

        <div class="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
          <img
            src="http://static.photos/education/600x400/3"
            alt="Learning Platform"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Learning Platform</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Online education platform with interactive courses and progress
              tracking.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                React
              </span>
              <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                MongoDB
              </span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                GraphQL
              </span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-accent hover:underline flex items-center">
                <i data-feather="external-link" class="w-4 h-4 mr-1"></i> Live
                Demo
              </a>
              <a
                href="#"
                class="text-primary dark:text-accent hover:underline flex items-center"
              >
                <i data-feather="github" class="w-4 h-4 mr-1"></i> Code
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="text-center mt-12">
        <a
          href="#"
          class="px-6 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition inline-flex items-center"
        >
          <i data-feather="folder-plus" class="mr-2"></i> View All Projects
        </a>
      </div> */}
    </section>
  );
}
