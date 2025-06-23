
export default function HomeSection() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
            {/* About me */}
            <section
                className="snap-start min-h-screen bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/home_bg.png')" }}
            >
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 break-words">
                        Chef de projet et développeuse
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl leading-relaxed">
                        Blabla le portfolio, blabla le CV, blabla la présentation.
                    </p>
                </div>
            </section>
        </div>
    );
}
