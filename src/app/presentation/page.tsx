"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCogs, FaCode, FaPalette, FaMobileAlt, FaBullseye, FaHandRock, FaFolder } from "react-icons/fa";

export default function Presentation() {
    const skillsGeneral = [
        { icon: <FaHandRock />, label: "Autonomie" },
        { icon: <FaCogs />, label: "Organisation" },
        { icon: <FaBullseye />, label: "Rigueur" },
    ];

    const technicalSkills = [
        { icon: <FaCode />, label: "React, Next.js, TypeScript" },
        { icon: <FaPalette />, label: "UI/UX Design (Material UI, Tailwind)" },
        { icon: <FaMobileAlt />, label: "Développement mobile (React Native, Redux)" },
        { icon: <FaCogs />, label: "Développement Back-End (Java/SpringBoot)" },
        { icon: <FaFolder />, label: "Gestion de projet, Agilité" },
    ];

    const formations = [
        { year: "2022-2024", title: "Master Architecte Logiciel", school: "Openclassrooms" },
        { year: "2021-2022", title: "Master IA et Big Data (Arrêté, manque de cours techniques)", school: "École Itescia by ESIEE-IT" },
        { year: "2020-2021", title: "Licence Développeur web et mobile", school: "Coding Factory" },
        { year: "2018-2020", title: "BTS Services informatique aux organisations", school: "Lycée Jean Jacques Rousseau" },
    ];

    const hobbies = [
        { src: "/hobby_plants4.jpg", alt: "Plante 4" },
        { src: "/hobby_art3.jpg", alt: "Art 3" },
        { src: "/hobby_art1.jpg", alt: "Art 1" },
        { src: "/hobby_plants1.jpg", alt: "Plante 1" },
        { src: "/hobby_plants2.jpg", alt: "Plante 2" },
        { src: "/hobby_art2.jpg", alt: "Art 2" },
        { src: "/hobby_plants3.jpg", alt: "Plante 3" },
    ];

    return (
        <div
            className="snap-y snap-mandatory h-[calc(100vh-64px)] overflow-y-scroll hide-scrollbar"
        >
            {/* About me */}
            <section
                className="snap-start min-h-screen bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/presentation.png')" }}
            >
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <h1 className="text-6xl font-bold mb-6">À propos de moi</h1>
                    <p className="text-xl leading-relaxed">
                        J&apos;aime produire des choses de mes mains et en comprendre l&apos;intégralité, que ce soit au niveau
                        du développement web et mobile mais aussi dans mes autres passions comme l&apos;art,
                        le jardinage et l&apos;entomologie.
                        Je considère le développement comme un art qui demande patience, compétences et créativité de la même manière qu&apos;une peinture ou de la couture.
                    </p>
                </div>
            </section>

            {/* My hobbies */}
            <section className="snap-start min-h-screen bg-gray-200 py-10 px-4 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#705949] mb-8">Mes passions en quelques photos</h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        modules={[Navigation]}
                        className="h-[400px] w-full"
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {hobbies.map((hobby, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div className="relative h-[300px] w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={hobby.src}
                                        alt={hobby.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Formations and technical skills */}
            <section className="snap-start min-h-screen bg-gray-100 py-10 px-4 mb-10 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#705949] mb-8">Mes formations et compétences techniques</h2>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="relative lg:w-2/3">
                            <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-[50px] lg:translate-x-0 h-full w-1 bg-gray-300"></div>
                            <div className="space-y-12">
                                {formations.map((formation, index) => (
                                    <div key={index} className="flex items-center space-x-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-50 h-10 bg-[#705949] text-white rounded-full flex items-center justify-center font-bold p-2">
                                                {formation.year}
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-700">{formation.title}</h3>
                                            <p className="text-sm text-gray-500">{formation.school}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col gap-6">
                            {technicalSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#705949] text-white flex items-center justify-center rounded-full text-2xl">
                                        {skill.icon}
                                    </div>
                                    <p className="text-gray-700 font-medium">{skill.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* General skills */}
            <section className="snap-start h-[calc(100vh-64px)] bg-gray-200 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#705949] mb-8">Compétences générales</h2>
                    <p className="text-lg mb-6">
                        En plus de mes compétences techniques, mes expériences m&apos;ont apportées diverses compétences générales.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                        {skillsGeneral.map((skill, index) => (
                            <div key={index}>
                                <div
                                    className="flex flex-col items-center bg-white rounded-full shadow-md p-6 w-32 h-32"
                                >
                                    <div className="flex items-center justify-center text-[#705949] rounded-full w-24 h-24 text-5xl">
                                        {skill.icon}
                                    </div>
                                </div>
                                <p className="text-gray-700 font-medium text-center text-sm mt-5">{skill.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
