import React from "react";
import { navLinks } from "../constants/constant";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full  fixed  z-10  px-4 py-7  border border-black/10 bg-bg-color font-medium">
      <nav className="flex flex-wrap justify-between items-center     max-w-3xl  xl:max-w-5xl lg:max-w-4xl mx-auto  font-dm-sans">
        <div>aayush</div>
        <div className="hidden md:flex">
          <ul className="flex    gap-16 ">
            {navLinks?.map((item) => (
              <li key={item.label}>
                <Link to={item.slug}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div>
          <ul>
            {navLinks?.map((item) =>{
              <li>
                <a href = "#">{item.label}</a>
              </li>
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
