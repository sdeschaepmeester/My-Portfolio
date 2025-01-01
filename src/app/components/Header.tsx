"use client";
import Link from "next/link";

type HeaderProps = {
  setHoverText?: (text: string) => void;
};

const Header = ({
  setHoverText = () => { },
}: HeaderProps) => {
  const handleMouseEnter = (text: string) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText("");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#705949] text-white z-50 shadow-lg" style={{ height: "4rem" }}>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto h-full px-4">
        <Link href="/">
          <img
            src="/logo_white.png"
            alt="Logo"
            className="h-14 w-auto cursor-pointer transition-none"
          />
        </Link>
        <nav className="space-x-8 flex items-center">
          <Link
            href="/presentation"
            onMouseEnter={() => handleMouseEnter("Présentation")}
            onMouseLeave={handleMouseLeave}
            className="transition-none"
          >
            Présentation
          </Link>
          <Link
            href="/projects"
            onMouseEnter={() => handleMouseEnter("Projets")}
            onMouseLeave={handleMouseLeave}
            className="transition-none"
          >
            Projets
          </Link>
          <Link
            href="/cv"
            onMouseEnter={() => handleMouseEnter("CV")}
            onMouseLeave={handleMouseLeave}
            className="transition-none"
          >
            CV
          </Link>
          <Link
            href="/contact"
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={handleMouseLeave}
            className="transition-none"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;