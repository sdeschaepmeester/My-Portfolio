export default function Projects() {

  const projects = [
    {
      title: "Mon portfolio",
      description: "Réalisé avec les technologies suivantes : Next.js, React, TypeScript, Tailwind CSS, Turborepo.",
      image: "/portfolio_img.png",
      status: "Terminé",
    },
    {
      title: "Jeu mobile",
      description: "Jeu mobile réalisé avec React Native, TypeScript, et Redux.",
      image: "/mdf_img.png",
      status: "En cours",
    },
    {
      title: "Tamagotchi",
      description: "Projet réalisé avec des éléments Raspberry Pi.",
      image: "/tamagotchi_img.jpeg",
      status: "Non commencé",
    },
  ];

  const statusColors: Record<"Terminé" | "En cours" | "Non commencé", string> = {
    Terminé: "bg-green-600",
    "En cours": "bg-yellow-500",
    "Non commencé": "bg-gray-400",
  };

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 overflow-hidden flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 mt-8 text-[#705949]">Mes Projets</h1>
        <p className="text-center text-gray-600 mb-8">
          Ci-dessous les projets personnels sur lesquels j&apos;ai travaillé ou travaille actuellement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{project.title}</h2>
                <p className="text-gray-600 mb-4 text-center flex-grow">{project.description}</p>
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
    </div>
  );
}