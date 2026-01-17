import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

type Props = {
    children: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    zoom?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    preventClick?: boolean;
    variant?: Variant;
    fullWidth?: boolean;
    className?: string;
    style?: React.CSSProperties;
    target?: string;
    rel?: string;
};

function variantClasses(variant: Variant): string {
    switch (variant) {
        case "secondary":
            return [
                "border border-secondary",
                "bg-transparent text-secondary",
                "hover:bg-secondary hover:text-white",
                "hover:border-secondary",
            ].join(" ");
        case "outline":
            return [
                "border border-white",
                "bg-transparent text-white",
                "hover:bg-secondary hover:text-white",
                "hover:border-secondary",
            ].join(" ");
        case "primary":
        default:
            return [
                "border border-primary-light",
                "bg-secondary text-white",
                "hover:bg-primary-light hover:border-secondary",
            ].join(" ");
    }
}

export default function CustomButton({
    children,
    href,
    onClick,
    zoom = false,
    icon,
    disabled = false,
    preventClick = false,
    variant = "primary",
    fullWidth = false,
    className = "",
    style,
    target,
    rel,
}: Props) {
    const base = [
        "inline-flex items-center justify-center gap-2",
        "px-4 py-2 rounded",
        "transition",
        "focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:ring-offset-0",
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
        zoom ? "hover:scale-105" : "",
        fullWidth ? "w-full" : "",
        variantClasses(variant),
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const handleClick = (e: React.MouseEvent) => {
        if (preventClick || disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    // LINK
    if (href) {
        return (
            <Link
                href={href}
                className={base}
                style={style}
                target={target}
                rel={rel}
                onClick={handleClick}
            >
                {icon && <span className="text-lg">{icon}</span>}
                {children}
            </Link>
        );
    }

    // BUTTON
    return (
        <button
            className={base}
            style={style}
            onClick={handleClick}
            disabled={disabled}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </button>
    );
}
