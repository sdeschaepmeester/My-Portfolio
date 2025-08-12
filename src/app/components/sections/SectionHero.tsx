export default function SectionHero() {
    return (
        <section className="relative snap-start h-screen bg-gradient-to-b from-[#060610] to-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.webp"
                    alt="img"
                    className="w-full h-full object-cover opacity-100"
                />
            </div>
            {/* ---------------- Main content ---------------- */}
            <div className="relative z-20 mx-auto px-4 text-center text-white w-[90vw] md:w-[75vw]">
                <h1
                    className="
                        font-bold mb-4
                        whitespace-normal md:whitespace-nowrap
                        break-words
                        leading-tight md:leading-snug
                        text-[clamp(1.35rem,6vw,3rem)]
                    "
                >
                    Développeuse web et mobile
                </h1>
                <p
                    className="
                        whitespace-normal md:whitespace-nowrap
                        break-words
                        text-[clamp(1rem,3.8vw,1.75rem)]
                        text-neutral-lighter opacity-90
                    "
                >
                    Conception, développement et gestion de projets web et mobile
                </p>
            </div>
        </section>
    );
}