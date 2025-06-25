"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Project from "./Project";
import { myProjects } from "@/data";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + 20);            
    y.set(e.clientY + 20);
  };

  return (
    <div className="mt-20 mb-24 ">
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
       <h2 className="heading ">
        My {" "}
        <span className="text-purple font-serif">Certificates</span>
      </h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-28 h-[1px] w-full " />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
    </div>
  );
};

export default Projects;
