import React from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-[100dvh] selection:bg-accent-lime selection:text-black bg-primary-bg text-text-primary">
      <div className="flex flex-col min-h-[100dvh] relative overflow-hidden">
        <main id="main-content" className="flex-grow">
          <Hero />
          <Services />
          <Projects />
          <Experience />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
