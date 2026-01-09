import React from "react";
import { navLinks } from "../constants/constant";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="w-full border-2 fixed border-black z-10  px-4 py-7  ">
      <nav className="flex flex-wrap justify-between items-center  border-2 border-blue-500 max-w-3xl  xl:max-w-5xl lg:max-w-4xl mx-auto">
        <div>aayush</div>
        <div className="hidden md:flex">
          <ul className="flex border-2 border-red-500 gap-8 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
