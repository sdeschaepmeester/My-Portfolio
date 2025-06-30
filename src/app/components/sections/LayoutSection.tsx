import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    id?: string
};

export default function SectionLayout({ children, className, id }: Props) {
    return (
        <section
            id={id}
            className={`w-full h-screen snap-start flex flex-col ${className || ""}`}
        >
            {children}
        </section>
    );
}
