"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "YatriPay",
    description: `A cryptocurrency and investment platform with a fully custom frontend.
      Includes KYC flows, portfolio tracking, real-time price charts, secure wallet
      operations, and smooth UI built with modern design principles.`,
    link: "https://yatripay.com",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },

  {
    id: 2,
    name: "Pixello",
    description: `A full-featured online design editor similar to Canva. Includes drag-and-drop
      canvas editing, AI-powered image generation for pro users, prebuilt templates, and
      integrated access to high-quality Unsplash stock images.`,
    link: "https://pixello.kshyp.tech",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },

  {
    id: 3,
    name: "Sociofy",
    description: `A social media platform inspired by Twitter with real-time chat using WebSockets,
      hashtags, personalized feeds, posts, follows, and a responsive modern UI built with Next.js.`,
    link: "https://sociofy.kshyp.tech",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },

  {
    id: 4,
    name: "Chess Server",
    description: `A scalable real-time chess server like Chess.com, using Redis for game state,
      Kafka for event persistence, MongoDB for storage, and Socket.io for low-latency move syncing
      and automated game analysis.`,
    link: "https://github.com/Pallab-Kashyap/chess-master-server",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },

  {
    id: 5,
    name: "StockFlow Inventory Server",
    description: `A production-ready inventory management backend with multiple store support,
      product variations, stock tracking, and media storage via AWS S3/Cloudinary. Built with
      TypeScript, Prisma, and PostgreSQL.`,
    link: "https://github.com/Pallab-Kashyap/inventory_server",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },

  {
    id: 6,
    name: "Portfolio",
    description: `My personal portfolio showcasing projects, experience, and creativity through
      a modern, animated, and responsive design.`,
    link: "https://www.abhijitzende.com/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
