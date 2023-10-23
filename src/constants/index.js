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
  tailwind,
  git,
  docker,
  spring,
  webased,
  inmind,
  carrent,
  adobeXD,
  laravel,
  angular,
  threejs,
  springGif,
  sordiGif,
  evaluation,
  pvrple,
  petTalesImage,
  sordiImage,
  springImage,
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
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: backend,
  },
  {
    title: "Scrum Master",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "adobeXD",
    icon: adobeXD,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Software Engineer ",
    company_name: "inmind. ai",
    icon: inmind,
    iconBg: "#fff",
    date: "Mar 2022 - Present",
    points: [
      "Developing and maintaining web applications using React, Angular, Laravel and other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Creating mockups adhering to UI/UX best practices",
    ],
  },
  {
    title: "Freelance React Developer",
    company_name: "Spring Communications",
    icon: spring,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Developing the website using ReactJs.",
      "Leveraging styled-components as the UI library for responsive and visually appealing user interfaces.",
      "Implementing the client's design specifications for a seamless user experience.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Webased",
    icon: webased,
    iconBg: "#fff",
    date: "Aug 2021 - Mar 2021",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with clients to define project requirements.",
      "Crafting user stories, UML diagrams and designing project architectures.",
    ],
  },
  {
    title: "Research and Development Intern",
    company_name: "Webased",
    icon: webased,
    iconBg: "#fff",
    date: "Nov 2020 - Mar 2021",
    points: [
      "Completing trainings in Elastcsearch, Git, Unit Testing, Postman, PHP, Agile development, Docker, and Laravel",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A fast learner, smart and very dedicated. She fully completed the program and all the research related, and managed to pull off an impressive final presentation.",
    name: "Gilbert Salloum",
    designation: "General Manager",
    company: "Webased",
  },
  {
    testimonial:
      "A hard-working person with a strong sense of responsibility and rigor. I was very proud of her project.",
    name: "Manal El-Dick",
    designation: "Associate Professor",
    company: "the Lebanese Univerity",
  },
  {
    testimonial:
      "Thank you for your cheerful personality, your design perspective, and your support as Scrum Master.",
    name: "Hadi Koubeissy",
    designation: "Project Lead",
    company: "inmind. ai",
  },
];

const projects = [
  {
    name: "Pet Tales",
    slogan: "A favor to pets and their owners",
    context: "Lebanese University - Final Year Project",
    description:
      "Pet Tales is a social networking platform designed to link pet owners and caretakers together. This android application also includes an Item to Item Slope One Family for Collaborative Filtering Recommendation Svstem",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    images: [
      {
        name: "1",
        imageSrc: "",
      },
      {
        name: "2",
        imageSrc: "",
      },
      {
        name: "3",
        imageSrc: "",
      },
    ],
    additionalInformation: [
      {
        content: "",
      },
    ],
    video:
      "https://wideo.co/embed/34065791623620986413?width=768&height=432&repeat=true&autoplay=true&hideControls=false",
    image: petTalesImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spring Communications",
    slogan: "Turning Mockups into Reality",
    context: "Freelance Front-End Development",
    description:
      "A creative communications company's website that highlights their mission, key projects, members and clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
    ],
    images: [
      {
        name: "main",
        imageSrc: "",
      },
      {
        name: "secondary",
        imageSrc: "",
      },
      {
        name: "tertiary",
        imageSrc: "",
      },
    ],
    additionalInformation: [
      {
        content: "",
      },
    ],
    image: springImage,
    gif: springGif,
    source_code_link: "https://spring.xyz/en",
  },
  {
    name: "Sordi. ai",
    context: "BMW TechOffice",
    description:
      "A website designed to facilitate the efficient management of SORDI, a popular dataset. Users can easily view and download datasets depending on their quota. It also has an integrated management system for admins to upload the dataset and manage users' download quota.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "azure-b2c",
        color: "green-text-gradient",
      },
      {
        name: "angular-material",
        color: "pink-text-gradient",
      },
    ],
    images: [
      {
        name: "1",
        imageSrc: "",
      },
      {
        name: "2",
        imageSrc: "",
      },
      {
        name: "3",
        imageSrc: "",
      },
    ],
    additionalInformation: [
      {
        content: "",
      },
    ],
    gif: sordiGif,
    image: sordiImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Evaluation GUI",
    context: "BMW-InnovationLab",
    slogan: "Eat, sleep, train, repeat",
    description:
      "An open-source project, developed alongside the BMW-InnovationLab, that evaluates how well a computer vision model performs by utilizing provided labeled datasets and an inference API for comprehensive assessment and metric analysis.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "apex-charts",
        color: "green-text-gradient",
      },
      {
        name: "ngZorro",
        color: "pink-text-gradient",
      },
    ],
    gif: evaluation,
    image: evaluation,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pvrple Shop",
    slogan: "Shop 'til you drop",
    context: "A project for Purpleskie Technologies",
    description:
      "A multi-retailer e-commerce website in the US that allows customers to get the best deals for their money.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
    ],
    gif: pvrple,
    image: pvrple,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
