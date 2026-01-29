import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className=" flex flex-col md:flex-row  bg-card-bg   font-dm-sans mt-6 rounded-2xl w-full  max-w-5xl p-1 md:p-3 ">
      <div className="p-3     md:w-[55%]  flex flex-col justify-center    ">
        <div>
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
        <div className="  p-1 mt-2      text-black px-2    ">
          <a href={project.githubLink} alt={project.name} target="_blank">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      <div className="rounded-2xl   md:w-[45%]    overflow-hidden flex items-center  ">
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
