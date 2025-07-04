type Props = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export default function LayoutSection({ children, className, id }: Props) {
    return (
        <section
            id={id}
            className={`w-full h-screen snap-start flex flex-col ${className || ""} scroll-mt-16`}
        >
            {children}
        </section>
    );
}
