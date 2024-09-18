import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Hengerdiss Music",
    projectUrls: [
      {
        url: "https://hengerdissmusic.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/Zetaii/hengerdissmusic",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/creativemusic.png",
    description: `A different resume approach using FramerMotion to display some of my capabilities.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "tRPC",
      "Vercel",
    ],
    cards: {
      a: {
        title: "Personal Music Sharing Site",
        text: `Built with JavaScript and Next.js, this web offers the creator a way to share their music and help them get discovered. The site is designed to be user-friendly and easy to navigate, making it simple for visitors to explore and enjoy the music shared by the creator.`,
      },
      b: {
        title: "Easily Scalable and Flexible",
        text: `The site is built with scalability and flexibility in mind, allowing the creator to easily add new music and update existing content. The site is also designed to be easily customizable, making it simple for the creator to change the look and feel of the site to suit their personal style.`,
      },
    },
  },
  {
    title: "movieApp (WIP)",
    projectUrls: [
      {
        url: "https://moviesite-jade-gamma.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/Zetaii/moviesite",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/MovieApp.jpg",
    description: `An open-source, opinionated portfolio template for creating a modern, reactive SPA portfolio.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Aceternity UI",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Latest and Trending Movies",
        text: `This project is designed to showcase the latest and trending movies, allowing you to easily browse and discover new films. With support for dynamic content and real-time updates using the IMDB API.`,
      },
      b: {
        title: "Easy Movie Collection Management",
        text: `Seamlessly customize your movie collection with this project, allowing you to easily add, remove, and update movies. The project is designed to be user-friendly and intuitive, making it simple to manage your movie collection with ease.`,
      },
    },
  },
  {
    title: "Motion Resume",
    projectUrls: [
      {
        url: "https://motionresume.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    videoUrl: "/images/motionvideo.mp4",
    description: `A cinematography portfolio built with Next.js and Sanity.io for fast page speeds and quick delivery of high quality assets.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "tRPC",
      "Sanity",
    ],
    cards: {
      a: {
        title: "Modern Animation and Cinematography Portfolio",
        text: `Built with Next.js, this cinematography portfolio uses FramerMotion to leverage some cool animations.`,
      },
      b: {
        title: "Lenis Scrolling and Smooth Transitions",
        text: `This project is designed to showcase the creator's cinematography work in a modern and engaging way. The site features smooth transitions and animations, making it easy to navigate and explore the creator's work.`,
      },
    },
  },
];
