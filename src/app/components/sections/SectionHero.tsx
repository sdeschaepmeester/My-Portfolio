export default function SectionHero() {
    return (
        <section className="relative snap-start h-screen bg-gradient-to-b from-[#060610] to-primary flex items-center justify-center overflow-hidden">
            {/* ---------------- Sparkle background ---------------- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/home_bg.png"
                    alt="Background Sparkle"
                    className="w-full h-full object-cover opacity-100"
                />
            </div>
            {/* ---------------- Main content ---------------- */}
            <div className="relative z-20 mx-auto px-4 text-center text-white">
                <h1 className="font-bold mb-4 break-words text-[clamp(1.25rem,4vw,3rem)] leading-tight md:leading-snug">
                    Développeuse web & mobile
                </h1>
                <p className="max-w-3xl mx-auto text-[clamp(0.875rem,2vw,1.5rem)] text-neutral-lighter opacity-90">
                    Conception, développement et pilotage de projets web et mobile.
                </p>
            </div>
        </section>
    );
}
