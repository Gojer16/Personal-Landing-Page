import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section id="hero">
         <Hero />
      </section>
      <section id="projects">
          <Projects />
      </section>
    <section id="about">
      <About />
    </section>
      <section id="contact">
        <CTA />
      <Footer />
      </section>
    </div>
  );
}
