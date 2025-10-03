import { User, MapPin, Briefcase, Award } from "react-feather";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-500 dark:text-accent">
        <User className="inline mr-2 w-8 h-8" />
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/86273127?v=4" // Você pode trocar esta URL por sua foto!
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover border-4 border-green-500 shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-6">
            Hello! I'm
            <span className="font-bold text-green-500"> Marcos Santana</span>, a
            passionate UI/UX designer and front-end developer with over 5 years
            of experience creating digital experiences that users love.
          </p>
          <p className="text-lg mb-6">
            My journey in tech began when I was studying graphic design, and I
            fell in love with the intersection of aesthetics and functionality.
            I specialize in creating clean, intuitive interfaces with a focus on
            accessibility and performance.
          </p>
          <p className="text-lg mb-6">
            When I'm not designing or coding, you can find me hiking in nature,
            experimenting with photography, or enjoying a good cup of specialty
            coffee.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2 text-green-500 w-5 h-5" />
              <span>Itabuna, BA, BR</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 text-green-500 w-5 h-5" />
              <span>Available for freelance</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 text-green-500 w-5 h-5" />
              <span>2+ years experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
