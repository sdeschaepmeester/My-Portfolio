import React from 'react';

export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-primary-darkest text-white flex items-center justify-between fixed top-0 left-0 z-50 px-8 opacity-90">
            <h1 className="text-xl font-bold">Portfolio - Samantha Deschaepmeester</h1>
            <div className="flex space-x-4">
                <a
                    href="#cv"
                    className="px-4 py-2 border border-primary-light text-white rounded bg-primary-light hover:bg-primary-lighter transition"
                >
                    CV
                </a>
                <a
                    href="#projects"
                    className="px-4 py-2 border border-primary-light bg-primary-light text-white rounded hover:bg-primary-lighter transition"
                >
                    Projets
                </a>
                <a
                    href="#contact"
                    className="px-4 py-2 border border-primary-light bg-primary-light text-white rounded hover:bg-primary-lighter transition"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}
