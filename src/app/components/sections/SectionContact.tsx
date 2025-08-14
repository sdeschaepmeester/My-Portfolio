"use client";

import "swiper/css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SectionContact() {
    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-gradient-to-b from-primary-darker to-primary-dark flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="w-full max-w-6xl mx-auto text-center">
                        <h2 className="font-bold mb-4 text-center text-[clamp(1.5rem,3.5vw,2.75rem)] text-neutral-lighter">
                            Contactez-moi
                        </h2>
                        {/* ------------------------ Mobile ------------------------ */}
                        <div className="md:hidden flex items-center justify-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/samantha-deschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0077b5] text-white shadow-md active:scale-95 transition"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>

                            <a
                                href="mailto:deschaepmeester.samantha@gmail.com"
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-dark text-white shadow-md active:scale-95 transition"
                                aria-label="Email"
                                title="Email"
                            >
                                <FaEnvelope className="text-2xl" />
                            </a>

                            <a
                                href="https://github.com/sdeschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#24292e] text-white shadow-md active:scale-95 transition"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>

                        {/* ------------------------ Desktop ------------------------ */}
                        <div className="hidden md:flex flex-wrap justify-center gap-8 md:gap-12">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/samantha-deschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0077b5] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                                    <FaLinkedin />
                                </div>
                                <p className="text-neutral-lighter text-lg md:text-xl font-semibold">LinkedIn</p>
                                <p className="text-primary-lightest text-sm md:text-base break-all text-center mt-1">
                                    samantha-deschaepmeester
                                </p>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:deschaepmeester.samantha@gmail.com"
                                className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-dark text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                                    <FaEnvelope />
                                </div>
                                <p className="text-neutral-lighter text-lg md:text-xl font-semibold">Email</p>
                                <p className="text-primary-lightest text-sm md:text-base break-all text-center mt-1">
                                    deschaepmeester.samantha@gmail.com
                                </p>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/sdeschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#24292e] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                                    <FaGithub />
                                </div>
                                <p className="text-neutral-lighter text-lg md:text-xl font-semibold">GitHub</p>
                                <p className="text-primary-lightest text-sm md:text-base break-all text-center mt-1">
                                    github.com/sdeschaepmeester
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}