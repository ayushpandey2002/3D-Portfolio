import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  todo,
  predictit,
  crwn,
  git,
  figma,
  docker,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "FrontEnd Developer",
    icon: backend,
  },
  {
    title: "Competitive Programming (DSA)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];





const projects = [
  {
    name: "Predict It",
    description:
      "Web-based platform that allows users to predict current value of their car using python libraries, providing a convenient and efficient solution for car dealership needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: predictit,
    source_code_link: "https://github.com/ayushpandey2002/Project-PREDICT-IT/",
  },
  {
    name: "ToDo",
    description:
      "Android application that enables users to keep a track of daily tasks and help them manage their hectic life in an organised manner.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Room Database",
        color: "green-text-gradient",
      },
      {
        name: "Mobile",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ayushpandey2002/Project-ToDo/",
  },
  {
    name: "Crwn Clothing",
    description:
      "A comprehensive fashion booking platform that allows users to book Jackets, Shoes, and Hats, and offers collection of mens and womens clothing lineups.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: crwn,
    source_code_link: "https://project-crwn-clothing.vercel.app/",
  },
];

export { services, technologies, projects };