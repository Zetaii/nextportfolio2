import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "Steven Nguyen",
  subTitle: "A sleek and modern way to show myself",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Steven Nguyen",
  subTitle: "Fullstack Software Developer",
  body: `Aspiring software developer with a foundation in modern technologies and a passion for creating innovative and user-friendly applications. I am a quick learner and a team player who is always looking to improve my skills and knowledge.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/steven-nguyen-dev/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/Zetaii",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/Zetaii",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
