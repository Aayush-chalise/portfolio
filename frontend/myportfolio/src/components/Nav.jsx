import React, { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const navLinks = [
  { href: "#", label: "Work" },
  { href: "#about", label: "About Me" },
  { href: "Aayush_Chalise.pdf", label: "Resume", external: true },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-color border-b border-black/10 px-4 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between font-medium">
        <a className="text-lg font-bold text-theme-green" href="#">
          Aayush
        </a>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="px-3 py-2 rounded-full hover:bg-[#C1D6C3] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-bg-color/95 pt-20">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 rounded-full hover:bg-[#C1D6C3] text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
