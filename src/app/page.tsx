"use client";
import { useState } from "react";
import CursorEffect from './components/CursorEffect';
import HoverText from './components/HoverText';
import Header from './components/Header';

export default function Home() {
  const [hoverText, setHoverText] = useState("");

  return (
    <div className="overflow-hidden">
      <CursorEffect />
      <Header setHoverText={setHoverText} />
      <div
        className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      >
        <HoverText hoverText={hoverText} />
      </div>
    </div>
  );
}