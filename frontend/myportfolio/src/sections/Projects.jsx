import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constant.js";

const Projects = () => {
  return (
    <section id="section" className="outer-container  mt-10">
      <div className="inner-container  border-2  ">
        <h3 className="font-dm-serif text-5xl text-theme-green text-center  ">
          Projects
        </h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
