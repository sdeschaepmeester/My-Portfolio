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
        id: "dsa",
        title: "Drone Sud Activités",
        clickable: true,
        description:
            "Drone Sud Activités est un site web vitrine pour une entreprise de services par drone. Le site présente les services offerts, des exemples d'interventions et un formulaire de contact pour les devis et autres demandes.",
        image: "/projects/project_dsa.webp",
        status: "Terminé",
        link: "https://www.drone-sud-activités.fr/",
        techs: [
            { label: "NextJS", iconKey: "next", description: "Framework NextJS, pour l'amélioration du référencement." },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "Resend", iconKey: "email", description: "Service d'emails" },
        ],
    },
    {
        id: "ca",
        title: "Cycle Harmony",
        clickable: true,
        description:
            "CycleHarmony est un site web vitrine pour une auto-entrepreneuse experte en symptothermie. Le site présente ce qu'est la symptothermie, les différents packs de service et un formulaire de contact pour prise de rendez-vous.",
        image: "/projects/project_ch.webp",
        status: "Terminé",
        link: "https://cycleharmony.vercel.app/",
        techs: [
            { label: "ReactJS", iconKey: "react", description: "Framework React TypeScript." },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "Resend", iconKey: "email", description: "Service d'emails" },
            { label: "Cloudflare", iconKey: "cloudflare", description: "Déploiement automatique de l'application" },
        ],
    },
    {
        id: "nhp",
        title: "Portfolio - Artisan en rénovation intérieur",
        clickable: true,
        description:
            "Site vitrine d'un artisan polyvalent en rénovation intérieure. Le site présente les domaines d'interventions, des exemples de réalisations et un formulaire de prise de contact.",
        image: "/projects/project_nhp.webp",
        status: "Terminé",
        link: "https://dsa-multiservices.vercel.app/",
        techs: [
            { label: "Next", iconKey: "next", description: "Framework NextJS." },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "Resend", iconKey: "email", description: "Service d'emails" },
            { label: "Vercel", iconKey: "vercel", description: "Déploiement automatique de l'application" },
        ],
    },
    {
        id: "vi",
        title: "Vista - Peluche robotique",
        clickable: true,
        description:
            "Jeu mobile réalisé en Kotlin, lié à une peluche robotique via Bluetooth BLE. Les actions du joueur sur l'application font bouger la peluche (pattes avant et queue). Le système embarqué de la peluche est fait avec des composants Arduino.",
        image: "/projects/project_vi.webp",
        status: "En cours",
        link: "",
        techs: [
            { label: "Arduino", iconKey: "arduino", description: "Composants électroniques" },
            { label: "Kotlin", iconKey: "kotlin", description: "Application mobile Android" },
        ],
    },
    {
        id: "dpg",
        title: "DovePigeonGuide",
        clickable: true,
        description:
            "Une plateforme d'articles sur l'élevage des colombes et tourterelles. Chaque article subit une revue avant d'être publié sur la plateforme. Design canva en lien.",
        image: "/projects/project_dpg.webp",
        status: "En cours",
        link: "https://www.canva.com/design/DAGxb8BMbrU/qO7WimXQ2DHic9EaELHV1Q/edit?utm_content=DAGxb8BMbrU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        techs: [
            { label: "Next", iconKey: "next", description: "Framework Next suivant la stack T3" },
            { label: "Resend", iconKey: "resend", description: "Réception et envoie d'emails automatique" },
            { label: "Prisma", iconKey: "prisma", description: "Base de données Next" },
            { label: "i18n", iconKey: "i18n", description: "Gestion des traductions" },
            { label: "TypeScript", iconKey: "typescript", description: "TypeScript" },
            { label: "CI/CD Github Actions", iconKey: "cicd", description: "Intégration continue et déploiement continu" },
            { label: "Docker", iconKey: "docker", description: "Conteneurisation des applications" },
            { label: "Vercel", iconKey: "vercel", description: "Hébergement de l'application" },
        ],
    },
    {
        id: "frs",
        title: "FullRemoteSeekers",
        clickable: false,
        description:
            "FullRemoteSeekers est une plateforme de recherche d'emploi 100% remote, en cours de développement.",
        image: "/projects/project_frs.webp",
        status: "En pause",
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