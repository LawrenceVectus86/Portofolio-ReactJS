import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

// import image1 from "../assets/project1.jpeg";
// import image2 from "../assets/project2.jpeg";
// import image3 from "../assets/project3.jpeg";
// import image4 from "../assets/project4.jpeg";
// import image5 from "../assets/project5.jpeg";
// import image6 from "../assets/project6.jpeg";
// import image7 from "../assets/project7.jpeg";
// import image8 from "../assets/project8.jpeg";
import image9 from '../assets/HTML.png';
import image10 from '../assets/Dicoding1.png';
import image11 from '../assets/Dicoding2.png';
import image12 from '../assets/Akademi.png';
import image13 from '../assets/Apps1.png';
import image14 from '../assets/Apps2.png';
import image15 from '../assets/Apps3.png';
import image16 from '../assets/Apps4.png';
import image17 from '../assets/Apps5.png';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Calvin Lawrence",
  info: "Tech Enthusiast, Movie Enthusiast and Front-End Developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Calvin Lawrence, a Front-End developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Certificate HTML",
    subtitle:
      "Verified HTML proficiency with a SoloLearn certificate. Ready to build impressive websites.",
    image: image9,
  },
  {
    title: "Dicoding Java Certificate for beginners",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image10,
  },
  {
    title: "Dicoding",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image11,
  },
  {
    title: "Project Portofolio Website with Tailwind",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image12,
  },
  {
    title: "Make Apps Social Media Links",
    subtitle:
      "Tech HTML,CSS, JavaScript",
    image: image13,
  },
  {
    title: "Portofolio Website with TailwindCss",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image14,
  },
  {
    title: "Make AI Asistant for Explain Your image",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image15,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image16,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image17,
  },
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-700" />,
    name: "HTML5",
    experience: "4+ year",
  },
  {
    icon: <FaFigma className="text-4xl lg:text-6xl text-yellow-600" />,
    name: "Figma",
    experience: "3+ years",
  },
  {
    icon: <SiAdobephotoshop className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Photoshop",
    experience: "4+ year",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "Python",
    experience: "2+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "1+ years",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/LawrenceVectus86",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
