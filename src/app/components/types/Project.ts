export type ProjectStatus = "Terminé" | "En cours" | "Non commencé" | "En pause";

export type Tech = {
    label: string;
    iconKey: string;
    description: string;
};

export type Project = {
    id: string;
    title: string;
    clickable: boolean;
    description: string;
    image: string;
    status: ProjectStatus;
    link: string;
    techs: Tech[];
};
