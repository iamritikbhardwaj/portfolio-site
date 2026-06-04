"use client";

import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About CTO", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="layout-container flex justify-center w-full">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-6 py-4">
          <div className="flex name items-center gap-4">
            <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
              <Terminal className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">
              Ritik Singh
            </h2>
          </div>
          <nav className="hidden gap-0.5 md:flex items-center md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                className="text-sm font-medium hover:text-primary transition-colors active:text-primary"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://cal.com/ritik-singh-3mjivg"
              target="_blank"
              className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25"
            >
              <span className="truncate">Hire Me</span>
            </a>
            <button
              className="md:hidden flex cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-700 dark:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-border-dark bg-background-light dark:bg-background-dark px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                className="text-base font-medium hover:text-primary transition-colors py-2.5 border-b border-gray-100 dark:border-border-dark/50 last:border-b-0"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://cal.com/ritik-singh-3mjivg"
            target="_blank"
            className="flex sm:hidden cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold shadow-lg shadow-primary/25 mt-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            <span className="truncate">Hire Me</span>
          </a>
        </div>
      )}
    </header>
  );
}
