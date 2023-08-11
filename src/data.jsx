import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import img1 from "./assets/fooddeliveryapp.png";
import img2 from "./assets/socialmedia.png";
import img3 from "./assets/google-map.png";
import img4 from "./assets/pinterest.png";
import img5 from "./assets/videoblog.png";
import img6 from "./assets/whatsappui.png";

// mock data for experience

// export const Experience = [
//   {
//     id: 1,
//     date: "2016 - present",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 2,
//     date: "2014 - 2016",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 3,
//     date: "2012 - 2014",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 4,
//     date: "2011 - 2012",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 5,
//     date: "2010 - 2011",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
// ];

export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: img1,
    techs: "React Js, Redux, Material UI",
    github: "#",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: img5,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: img6,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    name: "GitHub",
    iconSource: <IoLogoGithub className="text-gray-500 text-3xl cursor-pointer" />,
    link: "#",
  },
  {
    id: 2,
    name: "Twitter",
    iconSource: <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />,
    link: "#",
  },
  {
    id: 3,
    name: "LinkedIn",
    iconSource: <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />,
    link: "#",
  },
  {
    id: 4,
    name: "Whatsapp",
    iconSource: <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />,
    link: "#",
  },
];
