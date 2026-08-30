import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PersonSchema from "./person-schema";

// Below-fold sections — code-split to reduce initial JS parse
const Services = dynamic(() => import("@/components/sections/Services"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Products = dynamic(() => import("@/components/sections/Products"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Page() {
  return (
    <div className="min-h-[100dvh] selection:bg-accent-lime selection:text-black bg-primary-bg text-text-primary">
      <PersonSchema />
      <div className="flex flex-col min-h-[100dvh] relative overflow-hidden">
        <main id="main-content" className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Experience />
          <Pricing />
          <Contact />
          <Products />
        </main>
        <Footer />
      </div>
    </div>
  );
}
