import React from 'react';
import Link from 'next/link';
import { HiOutlineDocumentText, HiOutlineBriefcase, HiOutlineMail, HiOutlineHome } from 'react-icons/hi';

export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-primary-darkest text-white flex items-center justify-between fixed top-0 left-0 z-50 px-8 opacity-90">
            <Link href="#home" className="text-xl font-bold flex items-center">
                {/* Big screen */}
                <span className="hidden md:inline">Portfolio - Samantha Deschaepmeester</span>
                {/* Medium screen */}
                <span className="hidden sm:inline md:hidden">Portfolio</span>
                {/* Small screen */}
                <HiOutlineHome className="inline sm:hidden w-6 h-6" />
            </Link>

            {/* Buttons */}
            <div className="flex space-x-2 sm:space-x-4">
                <a
                    href="#cv"
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-primary-light text-white rounded bg-primary-light hover:bg-primary-lighter transition text-sm sm:text-base flex items-center justify-center"
                >
                    <span className="hidden sm:inline">CV</span>
                    <HiOutlineDocumentText className="inline sm:hidden w-5 h-5" />
                </a>
                <a
                    href="#projects"
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-primary-light text-white rounded bg-primary-light hover:bg-primary-lighter transition text-sm sm:text-base flex items-center justify-center"
                >
                    <span className="hidden sm:inline">Projets personnels</span>
                    <HiOutlineBriefcase className="inline sm:hidden w-5 h-5" />
                </a>
                <a
                    href="#contact"
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-primary-light text-white rounded bg-primary-light hover:bg-primary-lighter transition text-sm sm:text-base flex items-center justify-center"
                >
                    <span className="hidden sm:inline">Me contacter</span>
                    <HiOutlineMail className="inline sm:hidden w-5 h-5" />
                </a>
            </div>
        </nav>
    );
}
