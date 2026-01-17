"use client";

import { JSX, useEffect, useState } from "react";
import { FaCogs, FaBullseye, FaHandRock } from "react-icons/fa";

type Skill = {
    key: string;
    label: string;
    icon: JSX.Element;
};

const SKILLS: Skill[] = [
    { key: "autonomie", label: "Autonomie", icon: <FaHandRock /> },
    { key: "organisation", label: "Organisation", icon: <FaCogs /> },
    { key: "rigueur", label: "Rigueur", icon: <FaBullseye /> },
];

export default function SectionSkills() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Animation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SKILLS.length);
        }, 1600);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full bg-gradient-to-b from-primary-darker to-primary-dark flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">

                {/* Title */}
                <h2 className="font-bold text-center text-neutral-lighter mb-4 text-[clamp(1.4rem,4vw,2.6rem)]">
                    Compétences générales
                </h2>

                <p className="max-w-2xl text-center text-primary-lightest mb-10 text-[clamp(0.9rem,1.6vw,1.1rem)] leading-relaxed">
                    En plus de mes compétences techniques, mes expériences m&apos;ont apporté des compétences générales solides.
                </p>

                {/* ------------------------ Desktop ------------------------ */}
                <div className="hidden md:grid grid-cols-3 gap-10">
                    {SKILLS.map((skill, index) => {
                        const active = index === activeIndex;

                        return (
                            <div key={skill.key} className="flex flex-col items-center">
                                <div
                                    className={`
                                        bg-secondary-lighter rounded-full shadow-md
                                        flex items-center justify-center
                                        transition-transform duration-500 ease-in-out
                                        w-[clamp(4rem,10vw,8rem)]
                                        h-[clamp(4rem,10vw,8rem)]
                                        ${active ? "scale-125" : "scale-100"}
                                    `}
                                >
                                    <span className="text-primary-darker text-[clamp(1.5rem,4vw,3.5rem)]">
                                        {skill.icon}
                                    </span>
                                </div>

                                <p className="mt-4 text-white font-medium text-[clamp(0.8rem,1.6vw,1.2rem)]">
                                    {skill.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* ------------------------ Mobile ------------------------ */}
                <div className="md:hidden w-full flex flex-col items-center gap-6">
                    <div className="flex justify-center gap-5">
                        {SKILLS.map((skill, index) => {
                            const active = index === activeIndex;

                            return (
                                <div
                                    key={skill.key}
                                    className={`
                                        rounded-full shadow-md
                                        flex items-center justify-center
                                        transition-transform duration-500 ease-in-out
                                        w-14 h-14
                                        ${active ? "bg-secondary-lighter scale-125" : "bg-secondary-lighter scale-100"}
                                    `}
                                >
                                    <span className="text-primary-darker text-2xl">
                                        {skill.icon}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="min-h-[2.5rem]">
                        <div className="mx-auto text-center text-neutral-lighter text-sm bg-white/10 backdrop-blur-sm rounded-md px-4 py-2">
                            {SKILLS[activeIndex].label}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
