import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className=" flex max-sm:flex-col  bg-card-bg   font-dm-sans mt-6 rounded-2xl w-full text-theme-green ">
      <div className="p-3  flex justify-center items-center flex-col gap-4  grid-bg md:w-[55%] w-full ">
        <h4 className="text-4xl">{project.name}</h4>
        <p className="text-center">{project.description}</p>
      </div>
      <div className="p-3 rounded-2xl     md:w-[45%] w-full">
        <img src={project.image} alt={project.name} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
