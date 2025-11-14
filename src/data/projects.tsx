import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  icons,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiRedis,
  SiAxios,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  axios: {
    title: "Axios",
    bg: "black",
    fg: "white",
    icon: <SiAxios />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // 01 — YatriPay
  {
    id: "yatripay",
    category: "FinTech",
    title: "YatriPay",
    src: "/assets/projects-screenshots/yatripay/1.png",
    screenshots: [
      "/assets/projects-screenshots/yatripay/1.png",
      "/assets/projects-screenshots/yatripay/2.png",
      "/assets/projects-screenshots/yatripay/3.png",
    ],
    live: "https://yatripay.com",
    github: "https://github.com/Pallab-Kashyap/YoPayX",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.axios,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A cryptocurrency and investment platform with a complete custom
            frontend. Includes KYC flows, portfolio tracking, real-time charts,
            wallet operations, and secure UI built with modern design components
            and smooth interactions.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },

  // 02 — Pixello (Canva-like editor)
  {
    id: "pixello",
    category: "Design Editor",
    title: "Pixello — AI-Powered Design Editor",
    src: "/assets/projects-screenshots/pixello/1.png",
    screenshots: [
      "/assets/projects-screenshots/pixello/1.png",
      "/assets/projects-screenshots/pixello/2.png",
      "/assets/projects-screenshots/pixello/3.png",
    ],
    live: "https://pixello.kshyp.tech",
    github: "https://github.com/pallab-kashyap/pixello",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Pixello is a full-featured online design platform similar to Canva.
            Includes drag-and-drop editing, AI image generation for pro users,
            prebuilt templates, and high-quality Unsplash stock images
            integrated directly in the editor.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },

  // 03 — Sociofy
  {
    id: "sociofy",
    category: "Social Media",
    title: "Sociofy",
    src: "/assets/projects-screenshots/sociofy/1.png",
    screenshots: [
      "/assets/projects-screenshots/sociofy/1.png",
      "/assets/projects-screenshots/sociofy/2.png",
      "/assets/projects-screenshots/sociofy/3.png",
    ],
    live: "https://sociofy.kshyp.tech",
    github: "https://github.com/pallab-kashyap/sociofy",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [PROJECT_SKILLS.sockerio],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Twitter-like social platform with posts, follow system, hashtags,
            real-time DMs using WebSockets, and personalized feeds — all built
            with Next.js and a modular UI.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },

  // 04 — Chess Master Server
  {
    id: "chessmaster",
    category: "Systems & Real-Time",
    title: "Chess Server",
    src: "/assets/projects-screenshots/chessServer/1.webp",
    screenshots: [
      "/assets/projects-screenshots/chessServer/1.webp",
      // "/assets/projects-screenshots/chessServer/2.png",
    ],
    live: "https://github.com/Pallab-Kashyap/chess-master-server",
    github: "https://github.com/Pallab-Kashyap/chess-master-server",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.redis,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A scalable real-time chess server like Chess.com using Redis for
            in-memory game state, Kafka for event streaming and persistence,
            MongoDB for storage, and Socket.io for low-latency realtime gameplay
            with automated game analysis.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },

  // 05 — StockFlow Inventory Server
  {
    id: "inventoryserver",
    category: "Backend Systems",
    title: "StockFlow Inventory Backend",
    src: "/assets/projects-screenshots/stockflowServer/1.png",
    screenshots: [
      "/assets/projects-screenshots/stockflowServer/1.png",
      "/assets/projects-screenshots/stockflowServer/2.jpg",
    ],
    live: "https://github.com/Pallab-Kashyap/inventory_server",
    github: "https://github.com/Pallab-Kashyap/inventory_server",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A production-ready inventory management backend supporting multiple
            stores, product variations, stock operations, and image storage
            using AWS S3 / Cloudinary. Built with TypeScript, Prisma,
            PostgreSQL, and Docker for easy self-hosting.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },

  // 06 — Portfolio
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [
      "/assets/projects-screenshots/portfolio/landing.png",
      "/assets/projects-screenshots/portfolio/navbar.png",
      "/assets/projects-screenshots/portfolio/project.png",
    ],
    live: "https://pallab.kshyp.tech",
    github: "https://github.com/pallab-kashyap/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My personal 3D-inspired interactive portfolio showcasing my
            projects, backend systems, real-time apps, and design-focused
            interfaces. Built with modern tooling and animations.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
];

export default projects;
