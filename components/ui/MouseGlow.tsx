"use client";

import { useEffect, useState } from "react";

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-2 h-2 
                 bg-blue-200 rounded-full 
                 shadow-[0_0_6px_4px_rgba(59,130,246,0.8)]
                 opacity-70 mix-blend-lighten 
                 transition-transform duration-75 ease-linear"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
};
