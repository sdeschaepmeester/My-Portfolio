"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../ContactForm";

export default function SectionContact() {
    return (
        <section className="snap-start h-screen w-screen bg-primary-dark flex items-center justify-center px-4">
            <div className="w-full max-w-6xl flex flex-col items-center gap-8">

                <h2 className="text-white font-bold text-center text-[clamp(1.5rem,3.5vw,2.75rem)]">
                    Contactez-moi
                </h2>

                {/* Form */}
                <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center">
                    <ContactForm />
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/samantha-deschaepmeester/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077b5] text-white text-xl hover:scale-105 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/sdeschaepmeester"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24292e] text-white text-xl hover:scale-105 transition"
                    >
                        <FaGithub />
                    </a>
                </div>

            </div>
        </section>
    );
}
