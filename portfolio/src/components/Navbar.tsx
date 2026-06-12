"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0f]/80 backdrop-blur border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white tracking-tight">
          SM<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-slate-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:supisara.meemana@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:supisara.meemana@gmail.com"
            className="text-sm bg-violet-600 text-white px-4 py-2 rounded-full text-center"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
