export default function HomeSection() {
    return (
        <section className="relative snap-start h-screen bg-primary-darker flex items-center justify-center overflow-hidden">
            <img
                src="/form1.png"
                alt="Forme décorative bas gauche"
                className="absolute bottom-0 left-0 w-1/2 opacity-50 z-0"
            />
            <img
                src="/form2.png"
                alt="Forme décorative haut droit"
                className="absolute top-0 right-0 w-2/5 opacity-50 z-0"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 break-words">
                    Chef de projet et développeuse web & mobile
                </h1>
            </div>
        </section>
    );
}
