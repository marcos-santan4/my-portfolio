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
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* <Footer /> */}
    </>
  );
}
