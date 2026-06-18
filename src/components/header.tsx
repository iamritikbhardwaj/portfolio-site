"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "SYSTEMS", href: "/#systems" },
    { label: "PROJECTS", href: "/#projects" },
  ];

  return (
    <nav className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
            terminal
          </span>
          <span className="font-label-caps text-label-caps tracking-tighter text-primary">
            CODE_CRAFTED_LABS
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors border border-outline-variant px-4 py-2 hover:bg-surface-container transition-bezier focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            href="https://cal.com/ritik-singh-3mjivg"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK_CONSULTATION
          </a>
        </div>
        <button
          className="md:hidden text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-3 border-b border-outline-variant/50 last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
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
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center border border-outline-variant hover:bg-surface-container transition-bezier h-12 text-on-surface font-label-caps text-label-caps mt-2 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            onClick={() => setIsOpen(false)}
          >
            <span>BOOK_CONSULTATION</span>
          </a>
        </div>
      )}
    </nav>
  );
}
