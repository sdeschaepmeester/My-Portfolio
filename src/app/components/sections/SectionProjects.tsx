"use client";

import "swiper/css";

export default function SectionProjects() {
    const projects = [
        {
            title: "Mon portfolio",
            description: "Réalisé avec les technologies suivantes : Next.js, React, TypeScript, Tailwind CSS, Turborepo.",
            image: "/portfolio_img.png",
            status: "Terminé",
        },
        {
            title: "HangeulGo",
            description: "Application mobile pour apprendre le coréen.",
            image: "/hangeulgo_img.png",
            status: "Terminé",
        },
        {
            title: "Jeu mobile",
            description: "Jeu mobile réalisé avec React Native, TypeScript, et Redux.",
            image: "/mdf_img.png",
            status: "En cours",
        }
    ];

    const statusColors: Record<"Terminé" | "En cours" | "Non commencé", string> = {
        Terminé: "bg-green-600",
        "En cours": "bg-yellow-500",
        "Non commencé": "bg-gray-400",
    };

    return (
        <section className="snap-start h-screen flex items-center justify-center">
            <div className="max-w-6xl w-full mx-auto px-4 py-8 flex-grow overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">Mes Projets</h1>
                <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
                    Ci-dessous les projets personnels sur lesquels j&apos;ai travaillé ou travaille actuellement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 md:h-48 object-cover"
                            />
                            <div className="p-4 md:p-6 flex-grow flex flex-col">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">{project.title}</h2>
                                <p className="text-gray-600 mb-4 text-center text-sm md:text-base flex-grow">{project.description}</p>
                                <div
                                    className={`w-full text-center px-4 py-3 text-white font-bold rounded ${statusColors[project.status as keyof typeof statusColors]} mt-auto`}
                                >
                                    {project.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}