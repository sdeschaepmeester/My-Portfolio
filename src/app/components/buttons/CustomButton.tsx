"use client";

import React from "react";
import Link from "next/link";

type CustomButtonProps = {
    label: string;
    type?: "primary" | "secondary";
    onClick?: () => void;
    href?: string; 
    icon?: React.ReactNode; 
};

export default function CustomButton({
    label,
    type = "primary",
    onClick,
    href,
    icon,
}: CustomButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold px-6 py-3 rounded-full shadow-md transition-colors w-full text-center";
    const primaryStyles =
        "bg-primary text-neutral-lighter hover:bg-primary-dark";
    const secondaryStyles =
        "bg-secondary text-neutral-lighter hover:bg-secondary-dark";

    const buttonClasses = `${baseStyles} ${type === "primary" ? primaryStyles : secondaryStyles
        }`;

    if (href) {
        return (
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={buttonClasses}
            >
                {icon && <span className="mr-2">{icon}</span>}
                {label}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonClasses}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
}
