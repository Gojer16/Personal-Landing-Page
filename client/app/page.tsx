import { Metadata } from 'next';
import { Suspense } from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Home | Orlando Ascanio - Software Engineer",
  description: "Welcome to my portfolio! I'm a Software Engineer specializing in JavaScript, Python, and React. I build full-stack apps, secure APIs, and real-world solutions that scale.",
  keywords: "software engineer, javascript, python, react, full-stack, developer, portfolio, Orlando Ascanio, web development, API development",
  openGraph: {
    title: "Home | Orlando Ascanio - Software Engineer",
    description: "Welcome to my portfolio! I'm a Software Engineer specializing in JavaScript, Python, and React. I build full-stack apps, secure APIs, and real-world solutions that scale.",
    url: "https://orlandoascanio.com",
    siteName: "Orlando Ascanio Portfolio",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section id="hero">
         <Hero />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}
