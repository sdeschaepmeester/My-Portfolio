export default function SectionHero() {
    return (
        <section className="relative snap-start h-screen bg-gradient-to-b from-[#060610] to-primary flex items-center justify-center overflow-hidden">
            {/* ---------------- Sparkle background ---------------- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/home_bg.gif"
                    alt="Background Sparkle"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            {/* ---------------- Decorative shape ---------------- */}
            <img
                src="/form1.png"
                alt="Forme décorative bas gauche"
                className="absolute bottom-0 left-0 w-[50vw] max-w-[400px] opacity-80 z-10"
            />
            {/* ---------------- Main content ---------------- */}
            <div className="relative z-20 mx-auto px-4 text-center text-white">
                <h1 className="font-bold mb-4 break-words text-[clamp(1.25rem,4vw,2.5rem)] leading-tight md:leading-snug">
                    Chef de projet et développeuse web & mobile
                </h1>
                <p className="max-w-3xl mx-auto text-[clamp(0.875rem,2vw,1.25rem)] text-neutral-lighter opacity-90">
                    Conception, développement et pilotage de projets web et mobile.
                </p>
            </div>
        </section>
    );
}
