import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionContent({ children, className }: Props) {
    return (
        <div className={`max-w-6xl w-full mx-auto px-4 py-8 flex flex-col flex-grow ${className || ""}`}>
            {children}
        </div>
    );
}