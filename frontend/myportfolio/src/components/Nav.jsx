import React from "react";
import { navLinks } from "../constants/constant";
import { Links } from "react-router-dom";

const Nav = () => {
  return (
    <header className="w-full border-2 fixed border-black z-10 px-4 py-8">
      <nav className="flex flex-wrap justify-between items-center">
        <div>aayush</div>
        <ul>
          {navLinks.map((item) => {
            <li>{item.label}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
