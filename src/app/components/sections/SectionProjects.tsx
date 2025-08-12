"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";

import { FaReact, FaDocker, FaGithub, FaPython, FaAndroid, FaPaintBrush } from "react-icons/fa";
import { SiExpo, SiTypescript, SiTailwindcss, SiRender, SiNextdotjs, SiVercel, SiTurborepo } from "react-icons/si";
import { JSX } from "react";

import ProjectSlideMobile from "../projects/ProjectSlideMobile";
import ProjectSlideDesktop from "../projects/ProjectSlideDesktop";
import type { ProjectStatus } from "../types/Project";
import projects from "@/app/data/Projects";

const techIcons: Record<string, JSX.Element> = {
    react: <FaReact />,
    "react native": <FaReact />,
    fastapi: <FaPython />,
    docker: <FaDocker />,
    github: <FaGithub />,
    cicd: <FaGithub />,
    python: <FaPython />,
    tailwind: <SiTailwindcss />,
    typescript: <SiTypescript />,
    render: <SiRender />,
    expo: <SiExpo />,
    piskel: <FaPaintBrush />,
    next: <SiNextdotjs />,
    "play store": <FaAndroid />,
    vercel: <SiVercel />,
    turborepo: <SiTurborepo />
};

/* Colors for statuses */
const statusColors: Record<ProjectStatus, string> = {
    Terminé: "bg-green-600",
    "En cours": "bg-yellow-500",
    "Non commencé": "bg-gray-400",
};

export default function SectionProjects() {
    return (
        <section className="snap-start h-screen w-full text-white relative">
            <div className="h-full w-screen bg-gradient-to-b from-primary-darker to-primary-dark flex items-center justify-center px-6 md:px-16">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    loop
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    /* Desktop navigation only */
                    navigation={{ enabled: true }}
                    breakpoints={{
                        0: { navigation: { enabled: false } },
                        768: { navigation: { enabled: true } },
                    }}
                    onSlideChange={(swiper) => {
                        swiper.autoplay.stop();
                        setTimeout(() => swiper.autoplay.start(), 3000);
                    }}
                    className="w-full h-[85%]"
                    preventClicks={false}
                    preventClicksPropagation={false}
                >
                    {projects.map((project, i) => (
                        <SwiperSlide key={i} className="h-full">
                            {/* ------------------------ Mobile section ------------------------ */}
                            <div className="md:hidden h-full w-full">
                                <ProjectSlideMobile
                                    project={project}
                                    statusColors={statusColors}
                                    techIcons={techIcons}
                                />
                            </div>

                            {/* ------------------------ Desktop section ------------------------ */}
                            <div className="hidden md:block h-full w-full">
                                <ProjectSlideDesktop
                                    project={project}
                                    statusColors={statusColors}
                                    techIcons={techIcons}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}