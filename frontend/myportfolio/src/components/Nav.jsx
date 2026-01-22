import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full     z-40  px-3 py-7 fixed  border border-black/10 bg-bg-color font-medium">
      <nav className="flex flex-wrap justify-between items-center     max-w-3xl  xl:max-w-6xl lg:max-w-4xl mx-auto  font-dm-sans">
        <div>aayush</div>
        <div className="hidden md:flex">
          <ul className="flex  gap-22 ">
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="#">Work</a>
            </li>
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="#contacts">About me</a>
            </li>
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="Aayush_Chalise.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div>
          <ul className="flex flex-col     gap-6 mt-6 ">
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="#">Work</a>
            </li>
            <li className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]">
              <a href="#contacts">Contacts</a>
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
