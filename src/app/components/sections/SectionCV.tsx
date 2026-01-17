"use client";

import CustomButton from "../buttons/CustomButton";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SectionCV() {
    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">

                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* ------------------------ left ------------------------ */}
                    <div className="flex flex-col gap-6 text-center md:text-left">
                        <h2 className="text-primary-darker font-bold text-[clamp(1.6rem,3.5vw,2.8rem)]">
                            Mon CV
                        </h2>

                        <p className="text-gray-600 text-[clamp(0.95rem,1.6vw,1.1rem)] leading-relaxed">
                            Je recherche activement un poste de développeuse fullstack web ou mobile.
                            <br />
                            <span className="font-medium text-gray-700">
                                Disponibilité immédiate.
                            </span>
                        </p>

                        {/* CTA */}
                        <CustomButton
                            variant="primary"
                            href="/CV_Samantha_Deschaepmeester.pdf"
                            icon={<HiOutlineDownload className="w-5 h-5" />}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Télécharger mon CV
                        </CustomButton>

                        {/* Social */}
                        <div className="flex justify-center md:justify-start gap-3">
                            <CustomButton
                                href="https://github.com/sdeschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                icon={<FaGithub className="w-5 h-5" />}
                                zoom
                            >
                                GitHub
                            </CustomButton>

                            <CustomButton
                                href="https://www.linkedin.com/in/samantha-deschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                icon={<FaLinkedin className="w-5 h-5" />}
                                zoom
                            >
                                LinkedIn
                            </CustomButton>

                            <CustomButton
                                href="mailto:deschaepmeester.samantha@gmail.com"
                                variant="secondary"
                                icon={<HiOutlineMail className="w-5 h-5" />}
                                zoom
                            >
                                Email
                            </CustomButton>
                        </div>
                    </div>

                    {/* ------------------------ PDF viewer desktop ------------------------ */}
                    <div className="hidden md:block w-full h-[80vh] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                        <iframe
                            src="/CV_Samantha_Deschaepmeester.pdf#toolbar=0&navpanes=0&scrollbar=1"
                            className="w-full h-full"
                            title="CV Samantha Deschaepmeester"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
