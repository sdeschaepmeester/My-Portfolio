"use client";

//import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import { Autoplay } from "swiper/modules";
import { FaCogs, FaCode, FaPalette, FaMobileAlt, FaBullseye, FaHandRock, FaFolder } from "react-icons/fa";

export default function Presentation() {
    const skillsGeneral = [
        { icon: <FaHandRock />, label: "Autonomie" },
        { icon: <FaCogs />, label: "Organisation" },
        { icon: <FaBullseye />, label: "Rigueur" },
    ];

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

    // const hobbies = [
    //     { src: "/hobby_plants4.jpg", alt: "Plante 4" },
    //     { src: "/hobby_art3.jpg", alt: "Art 3" },
    //     { src: "/hobby_art1.jpg", alt: "Art 1" },
    //     { src: "/hobby_plants1.jpg", alt: "Plante 1" },
    //     { src: "/hobby_plants2.jpg", alt: "Plante 2" },
    //     { src: "/hobby_art2.jpg", alt: "Art 2" },
    //     { src: "/hobby_plants3.jpg", alt: "Plante 3" },
    // ];

    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
            {/* About me */}
            {/* <section
                className="snap-start min-h-screen bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/presentation.png')" }}
            >
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 break-words">
                        À propos de moi
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl leading-relaxed">
                        J&apos;aime produire des choses de mes mains et en comprendre l&apos;intégralité, que ce soit au niveau
                        du développement web et mobile mais aussi dans mes autres passions comme l&apos;art,
                        le jardinage et l&apos;entomologie.
                        Je considère le développement comme un art qui demande patience, compétences et créativité de la même manière qu&apos;une peinture ou de la couture.
                    </p>
                </div>
            </section> */}

            {/* My hobbies */}
            {/* <section className="snap-start min-h-screen bg-gray-200 py-10 px-4 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 break-words">
                        Mes passions en quelques photos
                    </h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        modules={[Autoplay]}
                        className="h-[300px] sm:h-[350px] md:h-[400px] w-full"
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {hobbies.map((hobby, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={hobby.src}
                                        alt={hobby.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev lg:hidden absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    </div>
                    <div className="swiper-button-next lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    </div>
                </div>
            </section> */}


            {/* Formations and technical skills */}
            <section className="snap-start min-h-screen bg-gray-100 py-10 px-4 mb-10 flex items-center">
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
            {/* General skills */}
            <section className="snap-start h-[calc(100vh-64px)] bg-gray-200 flex items-center">
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
        </div>
    );
}
