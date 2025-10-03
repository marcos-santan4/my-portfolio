import VantaWaves from "../components/VantaWaves";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <VantaWaves />
      <Header />

      <main className="pt-24 pb-16 container mx-auto px-6">
        <Hero />
        <About />

        <hr className="my-16 border-gray-200 dark:border-gray-700" />

        <Skills />

        <hr className="my-16 border-gray-200 dark:border-gray-700" />

        <Projects />

        <hr className="my-16 border-gray-200 dark:border-gray-700" />

        <Contact />
      </main>

      {/* <Footer /> */}
    </>
  );
}
