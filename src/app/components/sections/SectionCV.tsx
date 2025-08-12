"use client";

import "swiper/css";
import CustomButton from "../buttons/CustomButton";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SectionCV() {
    return (
        <section className="snap-start bg-gradient-to-b from-gray-200 to-white h-screen flex items-center justify-center">
            <div className="h-full w-screen flex flex-col justify-center px-4">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* -------------- Left section: Looking for a job text --------------*/}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4 text-primary">Mon CV</h1>
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

                        {/* -------------- Social buttons -------------- */}
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

                    {/*-------------- Right section: CV viewer --------------*/}
                    <div className="flex-1 w-full flex justify-center">
                        <div className="h-[80vh] w-full border border-gray-300 shadow-lg bg-white overflow-hidden rounded-lg">
                            {/* PDF Viewer */}
                            <object
                                data="/CV_Samantha_Deschaepmeester.pdf#view=FitH"
                                type="application/pdf"
                                className="h-full w-full"
                            >
                                {/* Fallback : iframe */}
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
        </section>
    );
}
