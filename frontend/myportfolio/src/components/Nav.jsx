import { NavLink } from "react-router-dom";
import React from "react";

const Nav = React.memo(() => {
  return (
    <header className="w-full z-40 px-3 py-5 sm:py-7 fixed md:border md:border-black/10 bg-bg-color font-medium ">
      <nav className="flex flex-wrap md:justify-between justify-center items-center max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto font-dm-sans">
        <div className="text-lg sm:text-xl hidden md:block">aayush</div>
        <div className="hidden md:flex">
          <ul className="flex gap-6 sm:gap-8">
            <NavLink className="relative" to="/">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    Home
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>
            <NavLink className="relative" to="/projects">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    Work
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>

            <NavLink className="relative" to="/about">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    About
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>

            <a
              className="px-5 py-1  text-white hover:underline bg-theme-green rounded-full"
              href="Aayush_Chalise.pdf"
              target="_blank"
            >
              Resume
            </a>
          </ul>
        </div>

        <div className="flex     justify-center items-center max-w-92.5 px-3 sm:px-5 md:py-4  sm:max-w-112.5 md:hidden   rounded-2xl py-2.5 bg-card-bg ">
          <ul className="flex gap-6 sm:gap-8">
            <NavLink className="relative" to="/">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    Home
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>
            <NavLink className="relative" to="/projects">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    Work
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>

            <NavLink className="relative" to="/about">
              {({ isActive }) => (
                <div className="relative px-2 py-1">
                  <span
                    className={
                      isActive ? "text-theme-green font-bold" : "text-gray-700"
                    }
                  >
                    About
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-theme-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>

            <a
              className="px-4 py-1 text-white bg-theme-green  rounded-full"
              href="Aayush_Chalise.pdf"
              target="_blank"
            >
              Resume
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
});

export default Nav;
