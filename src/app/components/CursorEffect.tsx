"use client";
import { useEffect } from "react";
import "../styles/CursorEffect.css";

const CursorEffect: React.FC = () => {
  useEffect(() => {
    const createPaillettes = (x: number, y: number) => {
      const maxX = window.innerWidth - 5;
      const maxY = window.innerHeight - 5;

      const paillette = document.createElement("div");
      paillette.classList.add("paillettes");

      const offsetX = Math.random() * 10 - 5;
      const offsetY = Math.random() * 10 - 5;
      paillette.style.left = `${Math.min(Math.max(x + offsetX, 0), maxX)}px`;
      paillette.style.top = `${Math.min(Math.max(y + offsetY, 0), maxY)}px`;

      document.body.appendChild(paillette);

      setTimeout(() => {
        paillette.remove();
      }, 500);
    };

    const moveCursor = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      createPaillettes(mouseX, mouseY);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return null;
};

export default CursorEffect;