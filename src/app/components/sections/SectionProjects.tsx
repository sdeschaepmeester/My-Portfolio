"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaReact, FaDocker, FaGithub, FaPython, FaAndroid, FaPaintBrush, FaDatabase, FaFlag, } from "react-icons/fa";
import { SiExpo, SiTypescript, SiTailwindcss, SiRender, SiNextdotjs, SiVercel, SiTurborepo, SiCloudflare, SiKotlin, SiArduino, SiPrisma, } from "react-icons/si";
import { TbMailFast } from "react-icons/tb";
import CustomButton from "../buttons/CustomButton";
import projects from "@/app/data/Projects";
import type { Project, ProjectStatus } from "../types/Project";
import { JSX } from "react";

/* Icons */
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
    turborepo: <SiTurborepo />,
    resend: <TbMailFast />,
    cloudflare: <SiCloudflare />,
    kotlin: <SiKotlin />,
    arduino: <SiArduino />,
    prisma: <SiPrisma />,
    database: <FaDatabase />,
    flag: <FaFlag />,
};

/* Status color */
const statusColors: Record<ProjectStatus, string> = {
    Terminé: "bg-green-600",
    "En cours": "bg-yellow-500",
    "En pause": "bg-orange-500",
    "Non commencé": "bg-gray-400",
};

/* CTA logic */
type CTAConfig =
    | { type: "link"; text: string }
    | { type: "disabled"; text: string }
    | { type: "label"; text: string };

const getCTAConfig = (project: Project): CTAConfig => {
    switch (project.id) {
        case "pf":
            return { type: "label", text: "Vous êtes ici" };
        case "frs":
            return { type: "label", text: "POC en cours" };
        case "vi":
            return { type: "label", text: "Privé" };
        case "cf":
            return { type: "label", text: "Privé" };
        default:
            return { type: "link", text: "Voir le projet" };
    }
};

const getLinkProps = (project: Project) =>
    project.clickable && project.link
        ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
        : {};

/* Structure */
const Header = (project: Project) => (
    <div className="flex items-center gap-3 flex-wrap mb-2">
        <h2 className="font-bold leading-tight text-[clamp(1.05rem,3.6vw,2.6rem)]">
            <a
                {...getLinkProps(project)}
                className="text-secondary hover:text-neutral-light transition-colors"
                aria-disabled={!project.clickable}
                onClick={(e) => {
                    if (!project.clickable) e.preventDefault();
                }}
            >
                {project.title}
            </a>
        </h2>

        <span
            className={[
                "px-2",
                "py-[clamp(0.2rem,0.8vw,0.35rem)]",
                "rounded-full",
                "text-white",
                "text-[clamp(0.6rem,1.8vw,0.75rem)]",
                statusColors[project.status],
            ].join(" ")}
        >
            {project.status}
        </span>
    </div>
);

const Techs = (project: Project, compact = false) => (
    <div className={compact ? "grid grid-cols-6 gap-2" : "flex flex-wrap gap-3"}>
        {project.techs.map((tech, i) => {
            const icon = techIcons[tech.iconKey.toLowerCase()];
            const tid = `tt-${project.id}-${i}`;

            return (
                <div
                    key={i}
                    data-tooltip-id={tid}
                    data-tooltip-content={tech.description}
                    className={
                        compact
                            ? "p-2 rounded-md bg-primary-light/40 flex items-center justify-center"
                            : "flex items-center gap-2 bg-primary-light rounded-lg px-3 py-2 basis-1/3 grow"
                    }
                >
                    <span className="text-[clamp(1rem,4vw,1.25rem)]">
                        {icon}
                    </span>

                    {!compact && (
                        <span className="text-[clamp(0.8rem,2.8vw,0.95rem)]">
                            {tech.label}
                        </span>
                    )}

                    <Tooltip id={tid} place="top" className="z-50" />
                </div>
            );
        })}
    </div>
);

const CTA = (project: Project) => {
    const cta = getCTAConfig(project);

    const baseClasses =
        "w-full text-center rounded font-semibold " +
        "text-[clamp(0.9rem,3.8vw,1rem)] " +
        "py-[clamp(0.6rem,3vw,0.9rem)]";

    if (cta.type === "label") {
        return <div className={`${baseClasses} bg-gray-800 text-gray-300`}>{cta.text}</div>;
    }

    if (cta.type === "disabled") {
        return <div className={`${baseClasses} bg-primary text-white opacity-50`}>{cta.text}</div>;
    }

    return (
        <CustomButton {...getLinkProps(project)} fullWidth variant="primary" className={baseClasses}>
            {cta.text}
        </CustomButton>
    );
};

/* Component */
export default function SectionProjects() {
    return (
        <section className="snap-start h-screen w-full text-white relative">
            <div className="h-full w-screen bg-gradient-to-b from-primary-darker to-primary-dark flex items-center justify-center px-4 md:px-16">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    loop
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{ enabled: true }}
                    breakpoints={{
                        0: { navigation: { enabled: false } },
                        768: { navigation: { enabled: true } },
                    }}
                    className="w-full h-[85%]"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="h-full">
                            {/* ------------------------ Desktop ------------------------ */}
                            <div className="hidden md:flex h-full w-full px-20 gap-6 items-center">
                                <div className="flex-1 h-[85%]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover rounded-xl"
                                    />
                                </div>

                                <div className="flex-1 h-[85%] flex flex-col">
                                    {Header(project)}

                                    <div className="flex-1 overflow-y-auto pr-2">
                                        <p className="text-gray-300 text-[clamp(0.95rem,2.2vw,1.2rem)] leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {Techs(project)}
                                    </div>
                                    {CTA(project)}
                                </div>
                            </div>

                            {/* ------------------------ Mobile ------------------------ */}
                            <div className="md:hidden h-full w-full flex flex-col px-2 pt-4">
                                <div className="w-full aspect-[4/3] max-h-[26vh] shrink-0 overflow-hidden rounded-xl shadow-md bg-gray-800 flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="flex-1 pt-3 pb-24">
                                    {Header(project)}

                                    <p className="text-gray-300 text-[clamp(0.85rem,3.1vw,1rem)] leading-relaxed mb-2 line-clamp-4">
                                        {project.description}
                                    </p>

                                    <h3 className="font-semibold mb-2 text-[clamp(0.8rem,3vw,0.95rem)]">
                                        Technologies
                                    </h3>

                                    {Techs(project, true)}
                                </div>

                                <div className="fixed left-0 right-0 bottom-4 z-40 px-4">
                                    <div className="bg-primary-dark/70 backdrop-blur rounded-xl p-1.5 shadow-lg">
                                        {CTA(project)}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
