import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className=" flex max-sm:flex-col border-2 bg-project-card-bg-color text-white font-dm-sans mt-6 rounded-2xl w-full  ">
      <div className="p-3 flex-1 flex justify-center items-center flex-col gap-4  grid-bg">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      <div className="p-3 rounded-2xl flex-1">
        <img src={project.image} alt={project.name} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
