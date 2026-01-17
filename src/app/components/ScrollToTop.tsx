"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        const onScroll = () => {
            setVisible(container.scrollTop > 200);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => {
                const container = document.getElementById("scroll-container");
                container?.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to top"
            className="
                group
                fixed bottom-5 right-5 z-50
                w-12 h-12
                rounded-full
                bg-secondary
                flex items-center justify-center
                shadow-lg
                hover:scale-105
                transition-transform
            "
        >
            <FaArrowUp
                className="
                    text-white text-xl font-bold
                    transition-transform
                    group-hover:animate-bounce
                "
            />
        </button>
    );
}
