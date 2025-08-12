"use client";

import { Tooltip } from "react-tooltip";
import CustomButton from "../buttons/CustomButton";
import type { Project } from "../types/Project";
import { JSX } from "react";

type Props = {
    project: Project;
    statusColors: Record<Project["status"], string>;
    techIcons: Record<string, JSX.Element>;
};

export default function ProjectSlideDesktop({ project, statusColors, techIcons }: Props) {
    return (
        <div className="h-full w-full flex flex-row px-20 gap-6 items-center justify-center">
            {/* Left: image */}
            <div className="flex-1 h-[85%] flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover rounded-xl shadow-lg h-full w-full max-w-[600px]"
                />
            </div>

            {/* Right: content */}
            <div className="flex-1 h-[85%] flex flex-col justify-between items-start text-left">
                {/* Title + status */}
                <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-5xl font-bold">
                        <a
                            href={project.clickable ? project.link : undefined}
                            target={project.clickable ? "_blank" : undefined}
                            rel={project.clickable ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                                if (!project.clickable) e.preventDefault();
                            }}
                            className="text-secondary hover:text-neutral-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                            aria-disabled={project.clickable ? undefined : true}
                        >
                            {project.title}
                        </a>
                    </h2>
                    <span className={`px-3 py-1 text-sm rounded-full text-white ${statusColors[project.status]}`}>
                        {project.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xl leading-relaxed max-w-xl mb-6">{project.description}</p>

                {/* Tech pills */}
                <div className="w-full self-stretch flex flex-wrap justify-start gap-4 mb-6">
                    {project.techs.map((tech, i) => {
                        const icon = techIcons[tech.iconKey.toLowerCase()] ?? "";
                        const tid = `tooltip-${project.title}-d-${i}`;
                        return (
                            <div
                                key={i}
                                data-tooltip-id={tid}
                                data-tooltip-content={tech.description}
                                className="flex items-center gap-2 text-white text-base font-medium bg-primary-light rounded-lg shadow-md p-4 grow basis-full sm:basis-[48%] md:basis-1/3 transition hover:scale-105 cursor-default"
                            >
                                <span className="text-xl">{icon}</span>
                                <span>{tech.label}</span>
                                <Tooltip id={tid} place="top" className="z-50" />
                            </div>
                        );
                    })}
                </div>

                {project.title === "Mon portfolio" ? (
                    <p className="w-full py-4 text-center bg-gray-800 text-white rounded font-semibold">Vous êtes ici 😉</p>
                ) : (
                    <div className="w-full">
                        <CustomButton
                            href={project.clickable ? project.link : undefined}
                            target={project.clickable ? "_blank" : undefined}
                            rel={project.clickable ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                                if (!project.clickable) e?.preventDefault?.();
                            }}
                            fullWidth
                            variant="primary"
                            aria-disabled={project.clickable ? undefined : true}
                        >
                            {project.id === "frs" ? "POC en cours" : "Voir le projet"}
                        </CustomButton>
                    </div>
                )}
            </div>
        </div>
    );
}
