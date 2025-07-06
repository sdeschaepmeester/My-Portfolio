import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export default function SectionContent({ children, className, id }: Props) {
    return (
        <section
            id={id}
            className={`snap-start h-screen max-w-screen w-full mx-auto flex flex-col flex-grow ${className || ""}`}
        >
            {children}
        </section>
    );
}