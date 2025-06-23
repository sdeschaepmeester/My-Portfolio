import React, { ReactNode } from 'react';
import NavBar from '../components/NavBar';

type Props = {
    children: ReactNode;
    scrollable?: boolean;
};

export default function MainLayout({ children, scrollable = true }: Props) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <NavBar />

            <main className={`pt-16 ${scrollable ? 'h-auto overflow-auto' : 'h-screen overflow-hidden' }`} >
                {children}
            </main>
        </div>
    );
}
