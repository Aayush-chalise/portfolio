import React, { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  return (
    <header className="w-full z-40 px-3 py-5 sm:py-7 fixed border border-black/10 bg-bg-color font-medium">
      <nav className="flex flex-wrap justify-between items-center max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto font-dm-sans">
        <div className="text-lg sm:text-xl">aayush</div>
        <div className="hidden md:flex">
          <ul className="flex gap-6 sm:gap-8">
            <Link
              className={`px-2 py-1 rounded-full hover:bg-[#C1D6C3] `}
              onClick={() => {
                setActive("projects");
              }}
              to="/#projects"
            >
              Work
            </Link>

            <Link
              onClick={() => {
                setActive("aboutme");
              }}
              className={`px-2 py-1 rounded-full hover:bg-[#C1D6C3]`}
              to="/about"
            >
              About me
            </Link>

            <a
              className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              href="Aayush_Chalise.pdf"
              target="_blank"
            >
              Resume
            </a>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-color border-t border-black/10 shadow-lg">
          <ul className="flex flex-col gap-6 mt-6 px-4 py-4">
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="#projects">Work</a>
            </li>
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <Link to="/about">About me</Link>
            </li>
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="Aayush_Chalise.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
