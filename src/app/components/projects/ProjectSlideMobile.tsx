"use client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import CustomButton from "../buttons/CustomButton";
import type { Project } from "../types/Project";
import { JSX } from "react";

type Props = {
    project: Project;
    statusColors: Record<Project["status"], string>;
    techIcons: Record<string, JSX.Element>;
};

export default function ProjectSlideMobile({ project, statusColors, techIcons }: Props) {
    return (
        <>
            <div className="h-full w-full flex flex-col items-center justify-center gap-4 px-2 pb-28">
                <div className="w-[90vw] max-w-[500px] aspect-[16/9]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Title + status */}
                <div className="w-full flex items-center justify-between gap-2 flex-wrap">
                    <h2 className="flex-1 min-w-0 text-[clamp(1.05rem,5.2vw,1.35rem)] font-bold leading-tight text-left">
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
                    <span
                        className={`shrink-0 px-2 py-0.5 text-[11px] rounded-full text-white ${statusColors[project.status]}`}
                    >
                        {project.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-[clamp(0.95rem,3.8vw,1.08rem)] leading-snug max-w-[92vw]">
                    {project.description}
                </p>

                {/* Technologies (icons only with tooltips) */}
                <div className="w-full">
                    <h3 className="text-[clamp(0.9rem,3.5vw,1rem)] font-semibold mb-3 text-left">Technologies</h3>
                    <div className="grid grid-cols-5 gap-3">
                        {project.techs.map((tech, i) => {
                            const icon = techIcons[tech.iconKey.toLowerCase()] ?? "";
                            const tid = `tooltip-${project.title}-m-${i}`;
                            return (
                                <button
                                    key={i}
                                    data-tooltip-id={tid}
                                    data-tooltip-content={tech.description}
                                    className="p-2 rounded-md bg-primary-light/40 hover:bg-primary-light/60 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                                    aria-label={tech.label}
                                    type="button"
                                >
                                    <span className="text-xl">{icon}</span>
                                    <Tooltip id={tid} place="top" className="z-50" />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="fixed left-0 right-0 bottom-4 z-40 px-4">
                <div className="bg-primary-dark/70 backdrop-blur rounded-xl p-2 shadow-lg">
                    {project.title === "Mon portfolio" ? (
                        <p className="w-full py-3 text-center bg-gray-800 text-white rounded font-semibold">
                            Vous êtes ici 😉
                        </p>
                    ) : (
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
                    )}
                </div>
            </div>
        </>
    );
}
