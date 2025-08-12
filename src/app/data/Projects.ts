import { Project } from "../components/types/Project";

const projects: Project[] = [
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
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
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
            { label: "Turborepo", iconKey: "turborepo", description: "Monorepo (build & cache)" }
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
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "Expo", iconKey: "expo", description: "Outils open source pour le développement mobile" },
            { label: "Piskel", iconKey: "piskel", description: "Outil de dessin pixel art" },
        ],
    },
];

export default projects;