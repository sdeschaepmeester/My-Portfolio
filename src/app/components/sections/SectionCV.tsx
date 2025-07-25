"use client";

import "swiper/css";
import CustomButton from "../buttons/CustomButton";
import { HiOutlineDownload } from "react-icons/hi";

export default function SectionCV() {

    return (
        <section className="snap-start bg-gradient-to-b from-gray-200 to-white h-screen flex items-center justify-center">
            <div className="h-full w-screen flex flex-col justify-center px-4">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* -------------- Left section: Looking for a job text --------------*/}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4 text-primary">Mon CV</h1>
                        <p className="text-gray-600 mb-6">
                            Je recherche activement un emploi en tant que chef de projet technique / PO.
                            Disponibilité immédiate.
                        </p>
                        <CustomButton
                            label="Télécharger mon CV"
                            type="primary"
                            href="/CV_Deschaepmeester_Samantha.pdf"
                            icon={<HiOutlineDownload className="w-5 h-5" />}
                        />
                    </div>

                    {/*-------------- Right section: CV image --------------*/}
                    <div className="flex-1 flex justify-center">
                        <div className="flex-1 flex justify-center">
                            <div className="h-[80vh] w-auto max-w-[90%] border border-gray-400 shadow-lg bg-white overflow-hidden rounded-lg">
                                <img
                                    src="/cv.png"
                                    alt="CV"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}