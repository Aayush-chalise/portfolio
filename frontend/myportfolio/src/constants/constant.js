import { healthlabcare, newsmania, nike, todo } from "../assets/images";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiExpress } from "react-icons/si";

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
        icon: SiExpress,
        id: "56",
      },
      {
        Name: "tailwind",
        themeColor: "#37B8F2",
        icon: RiTailwindCssFill,
        id: "343",
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
    liveLink: "https://statnikeweb.netlify.app/",
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
    name: "TodoApp",
    description:
      "This is a full-stack TODO application where users can securely register, log in, and manage their personal task list. The app is fully containerized using Docker, making it easy to set up and deploy. It includes user authentication and real-time task tracking so users can monitor their progress by marking tasks as complete or incomplete. ",
    githubLink: "https://github.com/Aayush-chalise/chapter_3-todo-app",
    liveLink: "https://chapter-3-todo-app.onrender.com/",
    image: todo,
    tags: [
      {
        Name: "react",
        themeColor: "#58C4DC",
        id: "354",
      },
    ],
  },
];
