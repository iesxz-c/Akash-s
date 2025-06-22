import React from "react";
import { motion } from "framer-motion";

type Tag = {
  id: string;
  name: string;
  path: string;
};

type ProjectDetailsProps = {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
};

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-sm border shadow-sm rounded-lg bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-1.5 rounded-sm top-2.5 right-2.5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-4 h-4" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-t-lg"
        />
        <div className="p-3">
          <h5 className="mb-1 text-lg font-serif text-purple">{title}</h5>
          <p className="mb-2 text-xs font-mono text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 font-mono text-xs text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-1.5">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-md w-6 h-6 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs 
              font-medium text-blue-400 hover:underline"
              font-serif
            >
              View Project
              <img src="assets/arrow-up.svg" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
