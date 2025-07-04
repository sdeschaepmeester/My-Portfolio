import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import Title from '../Title';

export default function SectionContact() {
    return (
        <div className="h-full bg-gray-100 flex flex-col justify-center py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <Title position="center">Contactez-moi</Title>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {/* ------------------------ LinkedIn ------------------------ */}
                    <a
                        href="https://www.linkedin.com/in/samantha-deschaepmeester"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0077b5] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                            <FaLinkedin />
                        </div>
                        <p className="text-lg md:text-xl text-primary font-semibold">LinkedIn</p>
                        <p className="text-sm md:text-base text-gray-600 break-all text-center mt-1">
                            samantha-deschaepmeester
                        </p>
                    </a>
                    {/* ------------------------ Email ------------------------ */}
                    <a
                        href="mailto:deschaepmeester.samantha@gmail.com"
                        className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-dark text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                            <FaEnvelope />
                        </div>
                        <p className="text-lg md:text-xl text-primary font-semibold">Email</p>
                        <p className="text-sm md:text-base text-gray-600 break-all text-center mt-1">
                            deschaepmeester.samantha@gmail.com
                        </p>
                    </a>

                    {/* ------------------------ Github ------------------------ */}
                    <a
                        href="https://github.com/sdeschaepmeester"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center w-64 p-6 rounded-lg transition hover:bg-primary hover:bg-opacity-20"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#24292e] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
                            <FaGithub />
                        </div>
                        <p className="text-lg md:text-xl text-primary font-semibold">GitHub</p>
                        <p className="text-sm md:text-base text-gray-600 break-all text-center mt-1">
                            github.com/sdeschaepmeester
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
