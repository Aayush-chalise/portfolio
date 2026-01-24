import { healthlabcare, newsmania, nike } from "../assets/images";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiNextjsFill,
} from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    name: "NewsMania",
    description:
      "A web application that provides the latest news articles from various sources, allowing users to stay informed on current events.",
    githubLink: "https://github.com/Aayush-chalise/NewsMania",
    image: newsmania,
    tags: [
      {
        Name: "react",
        themeColor: "#58C4DC",
        icon: RiReactjsFill,
        id: "3240",
      },
      {
        Name: "express",
        themeColor: "#1e2939",
        id: "56",
      },
      {
        Name: "tailwind",
        themeColor: "#37B8F2",
        id: "343",
      },
      {
        Name: "Nodejs",
        themeColor: "#59A149",
        id: "5645",
      },
    ],
  },
  {
    name: "HomeLabCare",
    description:
      "HomeLabCare is a platform where user can book their lab services online and get a quote for the service they need from our team of highly qualified professionals. Also they can view their reports online and show it to their doctor.",
    githubLink: "https://github.com/Aayush-chalise/HomeLabCare",
    image: healthlabcare,
    tags: [
      {
        Name: "react",
        themeColor: "#58C4DC",
        id: "23",
      },
    ],
  },
  {
    name: "Nike Clone",
    description:
      "A responsive clone of the Nike website built with React and Tailwind CSS, featuring a modern design and interactive elements.",
    githubLink: "https://github.com/Aayush-chalise/nikeweb",
    image: nike,
    tags: [
      {
        Name: "react",
        themeColor: "#58C4DC",
        id: "3432",
      },
    ],
  },
  {
    name: "NewsMania",
    description:
      "A web application that provides the latest news articles from various sources, allowing users to stay informed on current events.",
    githubLink: "https://github.com/Aayush-chalise/NewsMania",
    image: newsmania,
    tags: [
      {
        Name: "react",
        themeColor: "#58C4DC",
        id: "354",
      },
    ],
  },
];
