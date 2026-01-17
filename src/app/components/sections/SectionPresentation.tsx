"use client";

import Image from "next/image";
import "swiper/css";

export default function SectionPresentation() {
    return (
        <section id="presentation" className="snap-start h-screen w-screen">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-white flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* ------------------------ Left section (75%)  Text  ------------------------ */}
                    <div className="w-full md:basis-3/4 flex flex-col justify-center items-center md:items-start rounded-md md:rounded-none p-4 sm:p-6 md:p-8">
                        <h2 className="text-primary-darker font-bold mb-4 text-center md:text-left text-[clamp(1.5rem,3.5vw,2.75rem)]">
                            Présentation
                        </h2>
                        <p className="w-full text-gray-700 text-center md:text-left text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed">
                            Après cinq années d&apos;expérience en tant que développeuse web et mobile,
                            j&apos;ai eu l&apos;opportunité d&apos;intervenir aussi bien sur la partie technique que
                            sur la gestion de projet.
                            <br /><br />
                            Mes compétences principales incluent le développement web fullstack (typescript avec React et Next, Python et Java),
                            le développement mobile hybride et le travail en agilité (Scrum, Kanban).
                            <br /><br />
                            Je suis à la recherche d&apos;un poste en CDI au sein d&apos;une entreprise qui valorise les méthodes agiles,
                            le travail en équipe et l&apos;autonomie. N&apos;hésitez pas à me contacter pour discuter
                            de collaborations potentielles.
                        </p>
                    </div>
                    {/* ------------------------ Right section (25%) Photo ------------------------ */}
                    <div className="w-full md:basis-1/4 flex items-center justify-center rounded-md md:rounded-none p-6">
                        <div className="relative aspect-square w-40 sm:w-52 md:w-64 lg:w-72 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/avatar.webp"
                                alt="Photo de profil"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
