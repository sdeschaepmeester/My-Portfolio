"use client";

import "swiper/css";
import { FaCogs, FaBullseye, FaHandRock } from "react-icons/fa";

export default function SectionSkills() {
    const skillsGeneral = [
        { icon: <FaHandRock />, label: "Autonomie" },
        { icon: <FaCogs />, label: "Organisation" },
        { icon: <FaBullseye />, label: "Rigueur" },
    ];

    return (
        <section className="snap-start h-screen bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
            {/* General skills */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-0 ml-4 sm:ml-6">
                        Compétences générales
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 mt-4 sm:mt-6 md:mt-0 ml-4 sm:ml-6">
                        En plus de mes compétences techniques, mes expériences m&apos;ont apportées diverses compétences générales.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 justify-items-center">
                        {skillsGeneral.map((skill, index) => (
                            <div key={index}>
                                <div className="flex flex-col items-center bg-white rounded-full shadow-md p-4 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32">
                                    <div className="flex items-center justify-center text-primary rounded-full w-14 sm:w-16 md:w-32 h-14 sm:h-16 md:h-32 text-2xl sm:text-3xl md:text-6xl">
                                        {skill.icon}
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs md:text-xl sm:text-sm font-medium text-center mt-2 sm:mt-4">
                                    {skill.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    );
}
