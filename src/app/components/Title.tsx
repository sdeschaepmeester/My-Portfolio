import React from "react";

type TitleProps = {
    children: React.ReactNode;
    position?: "left" | "center" | "right";
    className?: string;
};

export default function Title({
    children,
    position = "center",
    className = "",
}: TitleProps) {
    const alignment =
        position === "left"
            ? "text-left"
            : position === "right"
                ? "text-right"
                : "text-center";

    return (
        <h1 className={`text-3xl md:text-4xl font-bold text-primary mb-12 ${alignment} ${className}`}>
            {children}
        </h1>
    );
}