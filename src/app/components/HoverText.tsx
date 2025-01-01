"use client";

const HoverText = ({ hoverText = "" }: { hoverText: string }) => {
    return (
        <p
            className="absolute top-[25%] right-[40%] text-black"
            style={{
                fontSize: "25px",
                zIndex: 10,
                transform: "rotate(2deg)",
            }}
        >
            {hoverText}
        </p>
    );
};

export default HoverText;
