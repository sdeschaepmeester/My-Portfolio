import React from "react";
import { FaHome, FaFileAlt, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-primary-darkest text-white flex items-center justify-between fixed top-0 left-0 z-50 px-6 md:px-8 opacity-90">
            <a href="#home" className="flex items-center space-x-2">
                {/* Big screen */}
                <h1 className="hidden lg:block text-xl font-bold">
                    Portfolio - Samantha Deschaepmeester
                </h1>
                {/* Medium screen */}
                <h1 className="hidden md:block lg:hidden text-xl font-bold">
                    Portfolio
                </h1>
                {/* Small screen */}
                <FaHome className="block md:hidden w-6 h-6" />
            </a>

            {/* Links */}
            <div className="flex space-x-4">
                {/* Big and medium screens */}
                <a
                    href="#projects"
                    className="hidden md:inline-block px-4 py-2 border border-primary-light bg-primary-light text-white rounded hover:bg-primary-lighter transition"
                >
                    Mes réalisations
                </a>
                <a
                    href="#cv"
                    className="hidden md:inline-block px-4 py-2 border border-primary-light text-white rounded bg-primary-light hover:bg-primary-lighter transition"
                >
                    CV
                </a>
                <a
                    href="#contact"
                    className="hidden md:inline-block px-4 py-2 border border-primary-light bg-primary-light text-white rounded hover:bg-primary-lighter transition"
                >
                    Me contacter
                </a>

                {/* Small screens */}
                <a href="#projects" className="block md:hidden">
                    <FaFolderOpen className="w-6 h-6" />
                </a>
                <a href="#cv" className="block md:hidden">
                    <FaFileAlt className="w-6 h-6" />
                </a>
                <a href="#contact" className="block md:hidden">
                    <FaEnvelope className="w-6 h-6" />
                </a>
            </div>
        </nav>
    );
}