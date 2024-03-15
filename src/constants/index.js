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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  food,
  discord,
  ionic,
  blogify,
} from "../assets";
import { ajio } from "../assets";
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Ionic Digital Labs",
    icon: ionic,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js , Javascript ,Nodejs andother related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
// {
//   testimonial:
//     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//   name: "Sara Lee",
//   designation: "CFO",
//   company: "Acme Co",
//   image: "https://randomuser.me/api/portraits/women/4.jpg",
// },
// {
//   testimonial:
//     "I've never met a web developer who truly cares about their clients' success like Rick does.",
//   name: "Chris Brown",
//   designation: "COO",
//   company: "DEF Corp",
//   image: "https://randomuser.me/api/portraits/men/5.jpg",
// },
// {
//   testimonial:
//     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//   name: "Lisa Wang",
//   designation: "CTO",
//   company: "456 Enterprises",
//   image: "https://randomuser.me/api/portraits/women/6.jpg",
// },
// ];

const projects = [
  {
    name: "Ecommerce Website",
    description:
      "The Ajio clone is built using modern technology stacks, including Next.js for the frontend and Tailwind CSS for styling. It incorporates authentication functionality, a wishlist feature, and implements infinite scrolling. Data is retrieved from the backend, with MongoDB serving as the database.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },

      {
        name: "Full Stack",
        color: "pink-text-gradient",
      },
    ],
    image: ajio,
    source_code_link: "https://github.com/nikki9899/AjioClone",
  },
  {
    name: "Food Court",
    description:
      "The Food website is a JavaScript-based platform where users can explore a wide range of food options. It serves as a learning tool for users to discover various cuisines and dishes.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Frontend Development",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/nikki9899/Food-Website",
  },
  {
    name: "Discord Bot",
    description:
      "Discord is a bot created using Node.js, featuring two main technologies. Firstly, it includes a URL shortening functionality, where if you provide a URL, it will generate a shortened version for URL. Secondly, it utilizes AI so that you can ask it any question, and it will provide you with an answer for each question.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Backend Development",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: discord,
    source_code_link: "https://github.com/nikki9899/NodeJS",
  },
  {
    name: "Blogify",
    description:
      "Blogify is a responsive website where you can sign in, sign up, and log out. It uses JWT authentication. In this website,you can add a blog where you can include a title, description, and image for your blog. Additionally, you can also leave comments.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Backend Development",
        color: "pink-text-gradient",
      },
    ],
    image: blogify,
    source_code_link: "https://github.com/nikki9899/blogify",
  },
 
];

export { services, technologies, experiences, projects };
