import React from "react";
import { navLinks } from "../constants/constant";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
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
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu></Menu>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
