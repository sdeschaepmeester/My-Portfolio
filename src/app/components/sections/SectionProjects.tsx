"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaReact, FaDocker, FaGithub, FaPython, FaAndroid, FaPaintBrush, } from "react-icons/fa";
import { SiExpo, SiTypescript, SiTailwindcss, SiRender, SiNextdotjs, SiVercel, } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { JSX } from "react";
import CustomButton from "../buttons/CustomButton";

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
};

const projects = [
    {
        id: "hg",
        title: "HangeulGo",
        clickable: true,
        description:
            "HangeulGo est une application mobile pour apprendre le coréen à l'aide de jeux et de quiz. Remplissez votre lexique et testez vos connaissances dans des jeux customisables. L'application est disponible gratuitement sur le Play Store.",
        image: "/projects/project_hg.webp",
        status: "Terminé",
        link: "https://play.google.com/store/apps/details?id=com.sdeschaepmeester.hangeulgo",
        techs: [
            { label: "React Native", iconKey: "react native", description: "Framework TypeScript" },
            { label: "Expo", iconKey: "expo", description: "Outils open source pour le développement mobile" },
            { label: "Play Store", iconKey: "play store", description: "Disponible gratuitement sur le Play Store" },
        ],
    },
    {
        id: "frs",
        title: "FullRemoteSeekers",
        clickable: false,
        description:
            "FullRemoteSeekers est une plateforme de recherche d'emploi 100% remote, en cours de développement.",
        image: "/projects/project_frs.webp",
        status: "En cours",
        link: "http://fullremoteseekers.com/",
        techs: [
            { label: "FastAPI (Python)", iconKey: "fastapi", description: "Framework Python pour les APIs" },
            { label: "React", iconKey: "react", description: "Framework JavaScript" },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "CI/CD Github Actions", iconKey: "cicd", description: "Intégration continue et déploiement continu" },
            { label: "Docker", iconKey: "docker", description: "Conteneurisation des applications" },
            { label: "Render", iconKey: "render", description: "Hébergement de l'application" },
        ],
    },
    {
        id: "pf",
        title: "Mon portfolio",
        clickable: false,
        description:
            "Ce site ! Construit avec Next, TypeScript et Tailwind CSS, dans une architecture Turborepo.",
        image: "/projects/project_pf.webp",
        status: "Terminé",
        link: "#",
        techs: [
            { label: "Next", iconKey: "next", description: "Next" },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "Vercel", iconKey: "vercel", description: "Hébergement de l'application" },
        ],
    },
    {
        id: "mpf",
        title: "My pet fox",
        clickable: true,
        description:
            "Premier projet de développement mobile, arrêté momentanément. Il s'agit d'un jeu où vous devez prendre soin d'un renard virtuel en jouant à des mini-jeux et en dévérouillant des endroits et des objets en accomplissant des quêtes.",
        image: "/projects/project_mpf.webp",
        status: "En cours",
        link: "https://www.youtube.com/shorts/BBcZHA1A59M",
        techs: [
            { label: "React Native", iconKey: "react native", description: "Framework TypeScript" },
            { label: "Expo", iconKey: "expo", description: "Outils open source pour le développement mobile" },
            { label: "Piskel", iconKey: "piskel", description: "Outil de dessin pixel art" },
        ],
    },
];

const statusColors: Record<"Terminé" | "En cours" | "Non commencé", string> = {
    Terminé: "bg-green-600",
    "En cours": "bg-yellow-500",
    "Non commencé": "bg-gray-400",
};

export default function SectionProjects() {
    return (
        <section className="snap-start h-screen w-full text-white relative">
            <div className="h-full w-screen bg-gradient-to-b from-primary-darker to-primary-dark flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false, 
                        pauseOnMouseEnter: true
                    }}
                    onSlideChange={(swiper) => {
                        swiper.autoplay.stop();
                        setTimeout(() => swiper.autoplay.start(), 3000);
                    }}
                    className="w-full h-[85%]"
                    preventClicks={false}
                    preventClicksPropagation={false}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full w-full flex flex-col md:flex-row px-4 md:px-20 gap-4 items-center justify-center">
                                {/* ------------------------ Project image ------------------------ */}
                                <div className="hidden md:flex flex-1 h-[85%] items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover rounded-xl shadow-lg h-full w-full max-w-[600px]"
                                    />
                                </div>
                                {/* ------------------------ Project informations ------------------------ */}
                                <div className="flex-1 h-[85%] flex flex-col justify-between items-center md:items-start text-center md:text-left w-full">
                                    <div className="w-full">
                                        {/* ------------------------ Mobile: image + title ------------------------*/}
                                        <div className="md:hidden flex items-center justify-center gap-4 mb-6">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-24 h-24 object-cover rounded shadow-md"
                                            />
                                            <div>
                                                <h2 className="text-2xl font-bold">
                                                    <a
                                                        href={project.clickable ? project.link : undefined}
                                                        target={project.clickable ? "_blank" : undefined}
                                                        rel={project.clickable ? "noopener noreferrer" : undefined}
                                                        onClick={(e) => {
                                                            if (!project.clickable) e.preventDefault();
                                                        }}
                                                        className="text-primary-lighter hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                                                        aria-disabled={project.clickable ? undefined : true}
                                                    >
                                                        {project.title}
                                                    </a>
                                                </h2>
                                                <span
                                                    className={`inline-block mt-2 px-3 py-1 text-sm rounded-full text-white ${statusColors[project.status as keyof typeof statusColors]
                                                        }`}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                        {/* ------------------------ Desktop title and status ------------------------ */}
                                        <div className="hidden md:flex items-center justify-center md:justify-start gap-3 mb-4">
                                            <h2 className="text-4xl md:text-5xl font-bold">
                                                <a
                                                    href={project.clickable ? project.link : undefined}
                                                    target={project.clickable ? "_blank" : undefined}
                                                    rel={project.clickable ? "noopener noreferrer" : undefined}
                                                    onClick={(e) => {
                                                        if (!project.clickable) e.preventDefault();
                                                    }}
                                                    className="text-primary-lighter hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                                                    aria-disabled={project.clickable ? undefined : true}
                                                >
                                                    {project.title}
                                                </a>
                                            </h2>
                                            <span
                                                className={`px-3 py-1 text-sm rounded-full text-white ${statusColors[project.status as keyof typeof statusColors]
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                        {/* ------------------------ Description ------------------------ */}
                                        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                                            {project.description}
                                        </p>
                                        {/* ------------------------ Technologies ------------------------ */}
                                        <h3 className="text-xl font-semibold mb-4 text-white text-center md:text-left">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap justify-start gap-4 mb-6">
                                            {project.techs.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    data-tooltip-id={`tooltip-${project.title}-${i}`}
                                                    data-tooltip-content={tech.description}
                                                    className="flex items-center gap-2 justify-start text-white text-sm sm:text-base font-medium bg-primary-light rounded-lg shadow-md p-4 grow basis-full sm:basis-[48%] md:basis-1/3 transition hover:scale-105 cursor-default"
                                                >
                                                    <span className="text-xl">
                                                        {techIcons[tech.iconKey.toLowerCase()] ?? ""}
                                                    </span>
                                                    <span>{tech.label}</span>
                                                    <Tooltip
                                                        id={`tooltip-${project.title}-${i}`}
                                                        place="top"
                                                        className="z-50"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* ------------------------ Button ------------------------ */}
                                    {project.title === "Mon portfolio" ? (
                                        <p className="w-full py-4 text-center bg-gray-800 text-white rounded font-semibold">
                                            Vous êtes ici 😉
                                        </p>
                                    ) : (
                                        <CustomButton
                                            href={project.clickable ? project.link : undefined}
                                            target={project.clickable ? "_blank" : undefined}
                                            rel={project.clickable ? "noopener noreferrer" : undefined}
                                            onClick={(e) => {
                                                if (!project.clickable) {
                                                    e?.preventDefault?.();
                                                }
                                            }}
                                            fullWidth
                                            variant="primary"
                                            aria-disabled={project.clickable ? undefined : true}
                                        >
                                            {project.id === "frs" ? "POC en cours" : "Voir le projet"}
                                        </CustomButton>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );

}