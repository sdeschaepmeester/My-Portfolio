"use client";

import "swiper/css";
import { useState } from "react";
import { FaCogs, FaCode, FaPalette, FaMobileAlt, FaFolder } from "react-icons/fa";

export default function SectionFormations() {
    const technicalSkills = [
        { key: "frontend", icon: <FaCode />, label: "Développement front-end (React, Next, JS, TS)" },
        { key: "uiux", icon: <FaPalette />, label: "UI/UX Design (Material UI, Tailwind)" },
        { key: "mobile", icon: <FaMobileAlt />, label: "Développement mobile (React native, Redux, Kotlin)" },
        { key: "backend", icon: <FaCogs />, label: "Développement Back-End (Python/FastAPI, Java/SpringBoot)" },
        { key: "pm", icon: <FaFolder />, label: "Gestion de projet, Agilité (Kanban, Scrum)" },
    ];

    const formations = [
        { year: "2022-2025", title: "Master Architecte Logiciel", school: "OpenClassrooms" },
        { year: "2021-2022", title: "Master IA et Big Data", school: "École Itescia by ESIEE-IT" },
        { year: "2020-2021", title: "Licence Développeur web et mobile", school: "Coding Factory" },
        { year: "2018-2020", title: "BTS Services informatique aux organisations", school: "Lycée Jean Jacques Rousseau" },
    ];

    const [activeSkill, setActiveSkill] = useState<string>("frontend");
    const toggleSkill = (key: string) => setActiveSkill(prev => (prev === key ? "" : key));

    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* Title */}
                    <h2 className="text-primary-darker font-bold text-center mb-8 text-[clamp(1.5rem,3.5vw,2.75rem)]">
                        Mes formations et compétences techniques
                    </h2>

                    {/* ------------------------ Mobile ------------------------ */}
                    <div className="w-full md:hidden flex flex-col gap-8">
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-3">Formations</h3>
                            <div className="relative pl-5 border-l border-gray-300 space-y-5">
                                {formations.map((f, i) => (
                                    <div key={i} className="relative">
                                        <span className="absolute -left-2.5 top-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary shadow" />
                                        <div className="flex items-center gap-3">
                                            <span className="ml-4 text-gray-800 font-medium text-[0.95rem] leading-snug">
                                                {f.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-3">Compétences</h3>
                            <div className="flex items-center justify-center flex-wrap gap-4">
                                {technicalSkills.map(s => {
                                    const active = activeSkill === s.key;
                                    return (
                                        <button
                                            key={s.key}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => toggleSkill(s.key)}
                                            className={`rounded-full w-14 h-14 flex items-center justify-center transition-transform shadow-md ${active ? "scale-105 bg-white" : "bg-primary"
                                                }`}
                                            title={s.label}
                                        >
                                            <span className={`text-2xl ${active ? "text-primary-darker" : "text-white"}`} aria-hidden="true">
                                                {s.icon}
                                            </span>
                                            <span className="sr-only">{s.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-4 min-h-[2.5rem]">
                                {activeSkill && (
                                    <div className="mx-auto max-w-md text-center text-gray-800 text-sm bg-white rounded-md px-3 py-2 shadow">
                                        {technicalSkills.find(s => s.key === activeSkill)?.label}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ------------------------ Desktop ------------------------ */}
                    <div className="hidden md:flex w-full">
                        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8">
                            <div className="w-full md:basis-1/2 flex items-center justify-center p-6 md:border-r md:border-gray-300">
                                <div className="w-full">
                                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                                        {formations.map((formation, index) => (
                                            <div key={index} className="flex items-center gap-4 p-3">
                                                <div className="flex-shrink-0">
                                                    <div className="h-9 sm:h-10 px-4 sm:px-5 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                                        {formation.year}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-gray-700 font-bold text-[clamp(0.95rem,1.6vw,1.125rem)]">
                                                        {formation.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-[clamp(0.85rem,1.3vw,1rem)]">
                                                        {formation.school}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="w-full md:basis-1/2 flex items-center justify-center p-6">
                                <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
                                    {technicalSkills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white flex items-center justify-center rounded-full text-lg sm:text-xl md:text-2xl">
                                                {skill.icon}
                                            </div>
                                            <p className="text-gray-700 text-[clamp(0.9rem,1.4vw,1rem)] font-medium">
                                                {skill.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
