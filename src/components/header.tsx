"use client"

import { Terminal } from "lucide-react"

export default function Header() {
    return(
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="layout-container flex justify-center w-full">
          <div className="flex items-center justify-between w-full max-w-[1200px] px-6 py-4">
            <div className="flex name items-center gap-4">
              <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-tight">Ritik Singh</h2>
            </div>
            <nav className="hidden gap-0.5 md:flex items-center md:gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors active:text-primary" href="/">Home</a>
              <a className="text-sm font-medium hover:text-primary transition-colors active:text-primary" href="/about">About</a>
              <a className="text-sm font-medium hover:text-primary transition-colors active:text-primary" href="/projects">Projects</a>
              <a className="text-sm font-medium hover:text-primary transition-colors active:text-primary" href="/experience">Experience</a>
              <a className="text-sm font-medium hover:text-primary transition-colors active:text-primary" href="/contact">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/+919119060487" target="_blank" className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25">
                <span className="truncate">Hire Me</span>
              </a>
              <button className="md:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25" onClick={() => { 
                const navBar = document.querySelector("nav")
                const name = document.querySelector(".name")
                if(navBar?.classList.contains("hidden")) {
                  name?.classList.add("hidden")
                  navBar?.classList.remove("hidden")
                } else {
                  navBar?.classList.add("hidden")
                  name?.classList.remove("hidden")
                }
              }}>
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}