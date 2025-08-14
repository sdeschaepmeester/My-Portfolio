"use client";

import "swiper/css";
import CustomButton from "../buttons/CustomButton";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SectionCV() {
    return (
        <section className="snap-start h-screen w-screen">
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-white flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* ------------------------ Mobile ------------------------ */}
                    <div className="md:hidden w-full max-w-6xl mx-auto flex flex-col gap-4">
                        <h2 className="text-primary-darker font-bold text-center text-[clamp(1.5rem,3.5vw,2.75rem)]">
                            Mon CV
                        </h2>
                        <p className="text-gray-600 text-center">
                            Je recherche activement un emploi en tant que développeuse fullstack.
                            Disponibilité immédiate.
                        </p>

                        {/* ------------------------ Preview ------------------------ */}
                        <div className="w-full">
                            <div className="h-56 w-full border border-gray-300 shadow-lg bg-white overflow-hidden rounded-lg">
                                <object
                                    data="/CV_Samantha_Deschaepmeester.pdf#view=FitH"
                                    type="application/pdf"
                                    className="h-full w-full"
                                >
                                    <iframe
                                        src="/CV_Samantha_Deschaepmeester.pdf#view=FitH"
                                        className="h-full w-full"
                                        title="CV PDF"
                                    />
                                </object>
                            </div>
                        </div>

                        {/* ------------------------ Download ------------------------ */}
                        <CustomButton
                            variant="primary"
                            href="/CV_Samantha_Deschaepmeester.pdf"
                            icon={<HiOutlineDownload className="w-5 h-5" />}
                            fullWidth
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Télécharger mon CV
                        </CustomButton>

                        {/* ------------------------ Contact ------------------------ */}
                        <div className="mt-2 flex items-center justify-center gap-4">
                            <CustomButton
                                href="https://github.com/sdeschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                icon={<FaGithub className="w-6 h-6" />}
                                aria-label="GitHub"
                                zoom
                            >
                                <span className="sr-only">GitHub</span>
                            </CustomButton>

                            <CustomButton
                                href="https://www.linkedin.com/in/samantha-deschaepmeester"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                icon={<FaLinkedin className="w-6 h-6" />}
                                aria-label="LinkedIn"
                                zoom
                            >
                                <span className="sr-only">LinkedIn</span>
                            </CustomButton>

                            <CustomButton
                                href="mailto:deschaepmeester.samantha@gmail.com"
                                variant="secondary"
                                icon={<HiOutlineMail className="w-6 h-6" />}
                                aria-label="Email"
                                zoom
                            >
                                <span className="sr-only">Email</span>
                            </CustomButton>
                        </div>
                    </div>

                    {/* ------------------------ Desktop ------------------------ */}
                    <div className="hidden md:flex h-full w-full">
                        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-primary-darker font-bold mb-4 text-center md:text-left text-[clamp(1.5rem,3.5vw,2.75rem)]">
                                    Mon CV
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Je recherche activement un emploi en tant que développeuse fullstack.
                                    Disponibilité immédiate.
                                </p>
                                <CustomButton
                                    variant="primary"
                                    href="/CV_Samantha_Deschaepmeester.pdf"
                                    icon={<HiOutlineDownload className="w-5 h-5" />}
                                    fullWidth
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Télécharger mon CV
                                </CustomButton>
                                {/* ------------------------ Social buttons ------------------------ */}
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <CustomButton
                                        href="https://github.com/sdeschaepmeester"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="secondary"
                                        icon={<FaGithub />}
                                        fullWidth
                                        zoom
                                    >
                                        GitHub
                                    </CustomButton>

                                    <CustomButton
                                        href="https://www.linkedin.com/in/samantha-deschaepmeester"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="secondary"
                                        icon={<FaLinkedin />}
                                        fullWidth
                                        zoom
                                    >
                                        LinkedIn
                                    </CustomButton>

                                    <CustomButton
                                        href="mailto:deschaepmeester.samantha@gmail.com"
                                        variant="secondary"
                                        icon={<HiOutlineMail className="w-5 h-5" />}
                                        fullWidth
                                        zoom
                                    >
                                        Email
                                    </CustomButton>
                                </div>
                            </div>

                            {/* ------------------------ viewer ------------------------ */}
                            <div className="flex-1 w-full flex justify-center">
                                <div className="h-[80vh] w-full border border-gray-300 shadow-lg bg-white overflow-hidden rounded-lg">
                                    <object
                                        data="/CV_Samantha_Deschaepmeester.pdf#view=FitH"
                                        type="application/pdf"
                                        className="h-full w-full"
                                    >
                                        <iframe
                                            src="/CV_Samantha_Deschaepmeester.pdf#view=FitH"
                                            className="h-full w-full"
                                            title="CV PDF"
                                        />
                                    </object>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
