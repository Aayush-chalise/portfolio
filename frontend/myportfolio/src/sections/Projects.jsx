import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "NewsMania",
      description:
        "A web application that provides the latest news articles from various sources, allowing users to stay informed on current events.",
      githubLink: "https://github.com/Aayush-chalise/NewsMania",
      image: "",
    },
  ];

  return (
    <section id="section" className="outer-container mt-10 min-h-screen ">
      <div className="inner-container grid-bg">
        <h3 className="font-dm-serif text-4xl text-theme-green text-center  ">
          Projects
        </h3>
        {projects.map((project, index) => (
          <div key={index} className="">
            <div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
