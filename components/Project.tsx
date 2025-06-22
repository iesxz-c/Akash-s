import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { FaArrowRight } from "react-icons/fa";
import StarIcon from "@/assets/icons/star.svg"

type Tag = {
  id: string;
  name: string;
  path: string;
};

type ProjectProps = {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];
  setPreview: (image: string | null) => void;
};

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectProps) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
  <div
    className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 gap-4"
    onMouseEnter={() => setPreview(image)}
    onMouseLeave={() => setPreview(null)}
  >
    {/* LEFT SECTION */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <StarIcon className="text-pink-300 w-5 h-5" />
        <p className="text-2xl font-serif text-white">{title}</p>
      </div>
     
<div className=" flex flex-wrap gap-3 text-sand font-mono text-pink-600 text-sm">
  {tags.map((tag) => (
    <span className="mr-5" key={tag.id}>{tag.name}</span>
  ))}
</div>


    </div>

    {/* RIGHT SECTION */}
    <button
      onClick={() => setIsHidden(true)}
      className="flex items-center gap-2 font-medium text-pink-600 hover:text-pink-400 transition"
    >
      Read More
      <FaArrowRight className="w-4 h-4" />
    </button>
  </div>

  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

  {isHidden && (
    <ProjectDetails
      title={title}
      description={description}
      subDescription={subDescription}
      image={image}
      tags={tags}
      href={href}
      closeModal={() => setIsHidden(false)}
    />
  )}
</>

  );
};

export default Project;
