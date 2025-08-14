"use client";

import "swiper/css";
import { useState } from "react";
import { FaCogs, FaBullseye, FaHandRock } from "react-icons/fa";

export default function SectionSkills() {
    // Desktop data 
    const skillsGeneral = [
        { icon: <FaHandRock />, label: "Autonomie" },
        { icon: <FaCogs />, label: "Organisation" },
        { icon: <FaBullseye />, label: "Rigueur" },
    ];

    // Mobile data 
    const mobileSkills = [
        { key: "autonomie", icon: <FaHandRock />, title: "Autonomie" },
        { key: "organisation", icon: <FaCogs />, title: "Organisation" },
        { key: "rigueur", icon: <FaBullseye />, title: "Rigueur" },
    ];

    const [activeSkill, setActiveSkill] = useState<string | null>("autonomie");

    const toggleSkill = (key: string) => {
        setActiveSkill(prev => (prev === key ? null : key));
    };

    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-gradient-to-b from-primary-darker to-primary-dark flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* ------------------------ Desktop ------------------------ */}
                    <div className="hidden md:block w-full">
                        <h2 className="font-bold mb-4 text-center text-[clamp(1.5rem,3.5vw,2.75rem)] text-neutral-lighter">
                            Compétences générales
                        </h2>
                        <p className="w-full mb-16 text-primary-lightest text-center text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed mb-6">
                            En plus de mes compétences techniques, mes expériences m&apos;ont apportées diverses compétences générales.
                        </p>
                        <div className="w-[50%] mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 justify-items-center">
                            {skillsGeneral.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex flex-col items-center bg-primary-lightest rounded-full shadow-md p-4 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32">
                                        <div className="flex items-center justify-center text-primary-darker rounded-full w-14 sm:w-16 md:w-32 h-14 sm:h-16 md:h-32 text-2xl sm:text-3xl md:text-6xl">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="text-white text-xs md:text-xl sm:text-sm font-medium text-center mt-2 sm:mt-4">
                                        {skill.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ------------------------ Mobile ------------------------ */}
                    <div className="md:hidden flex flex-col gap-8 w-full">
                        <h2 className="font-bold text-center text-[clamp(1.35rem,5.5vw,2rem)] text-neutral-lighter">
                            Compétences générales
                        </h2>
                        <p className="text-primary-lightest text-sm sm:text-base mb-4 text-center">
                            En plus de mes compétences techniques, mes expériences m&apos;ont apportées diverses compétences générales.
                        </p>

                        {/* ------------------------ Icons mobile ------------------------ */}
                        <div className="flex items-center justify-center gap-5">
                            {mobileSkills.map((s) => {
                                const active = activeSkill === s.key;
                                return (
                                    <button
                                        key={s.key}
                                        type="button"
                                        aria-pressed={active}
                                        onClick={() => toggleSkill(s.key)}
                                        className={`rounded-full w-14 h-14 flex items-center justify-center transition-transform shadow-md ${active
                                            ? "scale-105 bg-white"
                                            : "bg-primary-lightest"
                                            }`}
                                    >
                                        <span
                                            className="text-2xl text-primary-darker"
                                            aria-hidden="true"
                                        >
                                            {s.icon}
                                        </span>
                                        <span className="sr-only">{s.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-4 min-h-[2.5rem]">
                            {activeSkill && (
                                <div className="mx-auto max-w-md text-center text-neutral-lighter text-sm bg-white/10 backdrop-blur-sm rounded-md px-3 py-2">
                                    {mobileSkills.find((s) => s.key === activeSkill)?.title}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
