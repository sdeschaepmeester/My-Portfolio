"use client";

import "swiper/css";
import { FaCogs, FaCode, FaPalette, FaMobileAlt, FaFolder } from "react-icons/fa";

export default function SectionFormations() {
    const technicalSkills = [
        { icon: <FaCode />, label: "Développement front-end (React, Next, js, ts)" },
        { icon: <FaPalette />, label: "UI/UX Design (Material UI, Tailwind)" },
        { icon: <FaMobileAlt />, label: "Développement mobile (React native, Redux)" },
        { icon: <FaCogs />, label: "Développement Back-End (Java/SpringBoot)" },
        { icon: <FaFolder />, label: "Gestion de projet, Agilité" },
    ];

    const formations = [
        { year: "2022-2024", title: "Master Architecte Logiciel", school: "Openclassrooms" },
        { year: "2021-2022", title: "Master IA et Big Data (Arrêté, manque de cours techniques)", school: "École Itescia by ESIEE-IT" },
        { year: "2020-2021", title: "Licence Développeur web et mobile", school: "Coding Factory" },
        { year: "2018-2020", title: "BTS Services informatique aux organisations", school: "Lycée Jean Jacques Rousseau" },
    ];

    return (
         <section className="snap-start h-screen flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8">
                        Mes formations et compétences techniques
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Formations */}
                        <div className="relative lg:w-2/3 flex-1">
                            <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-[50px] lg:translate-x-0 h-full w-1 bg-transparent lg:hidden"></div>
                            <div className="space-y-8 sm:space-y-10 md:space-y-12">
                                {formations.map((formation, index) => (
                                    <div key={index} className="flex items-center space-x-6 sm:space-x-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-40 sm:w-45 h-8 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold p-2">
                                                {formation.year}
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-700">{formation.title}</h3>
                                            <p className="text-xs sm:text-sm md:text-base text-gray-500">{formation.school}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Technical skills */}
                        <div className="lg:w-2/3 flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10">
                            <div className="flex flex-col justify-between h-full gap-4">
                                {technicalSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white flex items-center justify-center rounded-full text-lg sm:text-xl md:text-2xl">
                                            {skill.icon}
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base font-medium">{skill.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
