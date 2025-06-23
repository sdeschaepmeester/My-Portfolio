export default function Presentation() {
    return (
        <section
            className="snap-start min-h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/presentation.png')" }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center text-white">
                <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
                <p className="text-lg">
                    J’aime produire des choses de mes mains et en comprendre l’intégralité…
                </p>
            </div>
        </section>
    );
}
