import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="w-full z-40 px-3 py-5 sm:py-7 fixed md:border md:border-black/10 bg-bg-color font-medium ">
      <nav className="flex flex-wrap md:justify-between justify-center items-center max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto font-dm-sans">
        <div className="text-lg sm:text-xl hidden md:block">aayush</div>
        <div className="hidden md:flex">
          <ul className="flex gap-6 sm:gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " border text-theme-green font-bold px-2 py-1 rounded-2xl hover:bg-[#C1D6C3]"
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border text-theme-green font-bold px-2 py-1 rounded-2xl hover:bg-[#C1D6C3]"
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/projects"
            >
              Work
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border text-theme-green font-bold px-2 py-1 rounded-2xl hover:bg-[#C1D6C3]"
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/about"
            >
              About me
            </NavLink>

            <a
              className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              href="Aayush_Chalise.pdf"
              target="_blank"
            >
              Resume
            </a>
          </ul>
        </div>

        <div className="flex justify-center items-center max-w-[370px] px-1.5 sm:px-3 md:py-3  sm:max-w-[450px] md:hidden   rounded-2xl py-1.5 bg-card-bg ">
          <ul className="flex gap-6 sm:gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border  text-theme-green font-bold px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border text-theme-green font-bold px-2 py-1 rounded-2xl hover:bg-[#C1D6C3]"
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/projects"
            >
              Work
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border  text-theme-green font-bold px-2 py-1 rounded-2xl hover:bg-[#C1D6C3]   "
                  : "px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
              }
              to="/about"
            >
              About me
            </NavLink>

            <a
              className="px-2 py-1 rounded-full hover:bg-[#C1D6C3]"
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
};

export default Nav;
