import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constant.js";

const Projects = () => {
  return (
    <section id="projects" className="outer-container mt-24  xl:mt-28 p-1">
      <div className="inner-container md:flex justify-center items-center flex-col grid-bg gap-4">
        <h3 className="font-dm-serif  text-4xl md:text-5xl lg:text-6xl text-theme-green text-center  ">
          Projects
        </h3>
        <p className="text-center p-1 mt-3 sm:mt-5  lg:mt-7 font-dm-sans   max-w-2xl mx-auto   mb-3 sm:mb-5 lg:mb-7   text-black leading-loose text-[1.2rem] sm:text-[1.3rem]  md:text-[1.4rem]">
          Turning my ideas into cool stuff on screens—it's just me, my keyboard,
          and a bunch of pixels. Here’s a sneak peek at some projects!✨
        </p>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
