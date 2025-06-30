export default function Skills() {
    return (
        <div className="h-full flex flex-col justify-center items-center bg-gray-100 px-4">
            <div className="max-w-6xl w-full mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                    Mes compétences
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                    {/* Skill Card */}
                    <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Développement Web</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Mobile</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>React Native</li>
                            <li>Expo</li>
                            <li>UI mobile responsive</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Gestion de projet</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Méthodologies Agile</li>
                            <li>Scrum</li>
                            <li>Outils de suivi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
