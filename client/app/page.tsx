import { Metadata } from 'next';
import { Suspense } from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import FixedSocialBar from '@/components/FixedSocialBar';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/StructuredData';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: "Home | Orlando Ascanio - AI Engineer",
  description: "Welcome to my portfolio! I'm an AI Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design.",
  keywords: "ai engineer, python, langchain, full-stack, developer, portfolio, Orlando Ascanio, web development, API development",
  openGraph: {
    title: "Home | Orlando Ascanio - AI Engineer",
    description: "Welcome to my portfolio! I'm an AI Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design.",
    url: "https://orlandoascanio.com",
    siteName: "Orlando Ascanio Portfolio",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PersonStructuredData
        name="Orlando Ascanio"
        jobTitle="AI Engineer"
        description="AI Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design."
        url="https://orlandoascanio.com"
        image="https://orlandoascanio.com/pfp.jpg"
        email="operation927@gmail.com"
        sameAs={[
          "https://github.com/orlandoascanio",
          "https://www.linkedin.com/in/orlando-ascanio-dev",
          "https://orlandoascanio.com"
        ]}
      />
      <WebsiteStructuredData />
      <ScrollProgress />
      <Navbar />
      <FixedSocialBar />
      <section id="hero" className="scroll-mt-16">
         <Hero />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="projects" className="scroll-mt-16">
            <Projects />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="contact" className="scroll-mt-16">
          <CTA />
          <Footer />
        </section>
      </Suspense>
    </div>
  );
}
