import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const ProjectCard = ({ project }) => {
  return (
    <div className="  shadow-xl flex flex-col-reverse    bg-card-bg   font-dm-sans mt-6 rounded-2xl w-full  max-w-3xl ">
      <div className="p-3   flex flex-col justify-center    ">
        <div className="mt-2">
          <h4 className="text-3xl  md:text-4xl font-dm-serif  text-theme-green">
            {project.name}
          </h4>
          <p className="text-[1.1rem] sm:text-[1.2rem]  md:text-[1.3rem]  p-1 mt-2 text-description font-medium  ">
            {project.description}
          </p>
        </div>

        {/* <div className="flex gap-4  ">
          {project.tags.map((tag) => {
            const IconTag = tag.icon;
            return (
              <p
                className=" flex justify-center items-center   px-2 rounded-4xl mt-2 text-center"
                key={tag.id}
              >
                <div style={{ textColor: tag.themeColor }}>
                  {IconTag && <IconTag />}
                </div>
              </p>
            );
          })}
        </div> */}
        <div className="    p-1 mt-2  flex items-center   font-dm-sans gap-4 sm:gap- text-black px-2    ">
          <a href={project.githubLink} alt={project.name} target="_blank">
            <FaGithub size={24} />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              alt={project.name}
              target="_blank"
              className="group ml-2 text-[1.1rem] inline-flex items-center text-theme-green font-semibold  gap-2 rounded-sm px-2 "
            >
              <span>Visit Site </span>
              <GoArrowRight className="  -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 " />
            </a>
          )}
        </div>
      </div>
      <div className="rounded-2xl      overflow-hidden flex items-center  ">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-2xl w-full h-auto   "
        />
      </div>
    </div>
  );
};
export default ProjectCard;
