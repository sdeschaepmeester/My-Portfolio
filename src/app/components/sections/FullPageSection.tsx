type Props = {
    children: React.ReactNode;
};

export default function FullPageSections({ children }: Props) {
    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth hide-scrollbar">
            {children}
        </div>
    );
}