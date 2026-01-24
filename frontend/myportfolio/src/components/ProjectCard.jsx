import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className=" flex max-sm:flex-col  bg-card-bg   font-dm-sans mt-6 rounded-2xl w-full text-theme-green p-4  max-w-5xl  ">
      <div className="p-3   gap-4   md:w-[55%]   ">
        <h4 className="text-3xl  md:text-4xl font-dm-serif ">{project.name}</h4>
        <p className=" leading-loose text-base p-1 mt-2 text-description ">
          {project.description}
        </p>
        <p>Built-with:</p>
        <div className="flex gap-4">
          {project.tags.map((tag) => {
            const IconTag = tag.icon;
            return (
              <p
                style={{ textColor: tag.themeColor }}
                className=" flex border justify-center items-center   px-2 rounded-4xl mt-2 text-center"
                key={tag.id}
              >
                {tag.Name}
                {IconTag && <IconTag />}
              </p>
            );
          })}
        </div>
        <div className="  p-1 mt-2 inline-block  text-black px-2">
          <a href={project.githubLink} alt={project.name} target="_blank">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      <div className=" rounded-2xl   md:w-[45%]  ">
        <img src={project.image} alt={project.name} className="rounded-2xl " />
      </div>
    </div>
  );
};
export default ProjectCard;
