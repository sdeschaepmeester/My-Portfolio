"use client";

import Image from "next/image";
import "swiper/css";

export default function SectionPresentation() {
    return (
        <section id="presentation" className="snap-start h-screen flex items-center justify-center">
            <div className="h-full w-screen bg-gradient-to-b from-gray-200 to-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 gap-6 md:gap-8">
                {/* ------------ Presentation ------------ */}
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                        Présentation
                    </h2>
                    <p className="text-sm sm:text-base md:text-xl text-gray-700 mb-6">
                        Après quatre années d&apos;expérience en tant que développeuse web et mobile,
                        j&apos;ai eu l&apos;opportunité d&apos;intervenir aussi bien sur la partie technique que
                        sur la gestion de projet.
                        <br /><br />
                        Mes compétences principales incluent le développement front-end (typescript avec React et Next),
                        le développement mobile hybride et le travail en agilité (Scrum, Kanban).
                        <br /><br />
                        Je suis à la recherche d&apos;un poste en CDI au sein d&apos;une entreprise qui valorise les méthodes agiles,
                        le travail en équipe et l&apos;autonomie. N&apos;hésitez pas à me contacter pour discuter de vos projets ou
                        de collaborations potentielles.
                    </p>
                </div>

                {/* ------------ Image ------------ */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/avatar.webp"
                            alt="Photo de profil"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
