"use client";

import Image from "next/image";
import "swiper/css";

export default function SectionPresentation() {
    return (
        <section id="presentation" className="snap-start h-screen flex items-center justify-center">
            <div className="h-full w-screen bg-gradient-to-b from-gray-200 to-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8">
                {/* ------------ Presentation ------------ */}
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Présentation</h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Bienvenue sur mon portfolio ! Je m'appelle <span className="font-semibold">Samantha</span>,
                        et je suis une développeuse web & mobile à la recherche d'un CDI. <br />
                        Après une expérience de 4 ans, j'ai pris goût à la gestion de projet et notamment aux méthodologies agiles.
                        Je recherche une entreprise travaillant dans ce contexte.
                    </p>
                </div>

                {/* ------------ Image ------------ */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/avatar.png"
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
