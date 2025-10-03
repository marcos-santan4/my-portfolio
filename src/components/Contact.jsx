import { Mail, Phone, MapPin, GitHub, Linkedin } from "react-feather";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 rounded-3xl px-8 text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-green-500">
        <Mail className="inline mr-2" />
        Get In Touch
      </h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition m"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-3">
              <Mail className="w-8 h-8" />
            </div>
            <a
              href="mailto:ssmarcosantana@gmail.com"
              className="hover:text-accent"
            >
              ssmarcosantana@gmail.com
            </a>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <Phone className="w-8 h-8" />
            </div>
            <a href="tel:+5573988024012" className="hover:text-accent">
              +55 73 98802-4012
            </a>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <MapPin className="w-8 h-8" />
            </div>
            <span>Itabuna, BA, BR</span>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/marcos-santan4"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-santana-002942212/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
