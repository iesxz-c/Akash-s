'use client'
import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { FaStar } from "react-icons/fa";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png"
import JsIcon from "@/assets/icons/square-js.svg"
import ReactIcon from "@/assets/icons/react.svg"
import Css from "@/assets/icons/css3.svg"
import Html from "@/assets/icons/html5.svg"
import Github from "@/assets/icons/github.svg"
import Python from "@/assets/icons/python-brands.svg"
import SQL from "@/assets/icons/db.svg"
import Linux from "@/assets/icons/linux-brands.svg"
import { TechIcon } from "./TechIcon";
import mapImage from "@/assets/images/map.png"
import smileEmoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "./CardHeader";
import { ToolboxItems } from "./ToolboxItems";
import GridGlobe from "./ui/GridGlobe";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", iconType: JsIcon},
  { title: "HTML", iconType: Html},
  { title: "CSS", iconType: Css},
  { title: "React", iconType: ReactIcon},
  { title: "Github", iconType: Github},
  { title: "Python", iconType: Python},
  { title: "SQL", iconType: SQL},
  { title: "Linux", iconType: Linux},
];

const hobbies = [
  { title: "Traveling", emoji: "🌍",left:'5%',top:'5%' },
  { title: "Comics", emoji: "🦸‍♂️",left:'50%',top:'5%' },
  { title: "Music", emoji: "🎧" ,left:'10%',top:'35%'},
  { title: "Movies", emoji: "🎬" ,left:'35%',top:'40%'},
   { title: "Cricket", emoji: "🏏" ,left:'70%',top:'45%'},
     { title: "Reading", emoji: "📚" ,left:'5%',top:'65%'},
  { title: "Cooking", emoji: "🍳",left:'45%',top:'70%' }
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-16 lg:py-28">
      <div className="container">
      <SectionHeader
        title="A Glimpse Into My World"
        eyebrow="About me"
        description="Learn more about who I am
         and what inspires me. "
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 
        md:gap-8 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" 
          description="Explore the books shaping 
          my perspectives."
          />
          <div className="w-40 mx-auto mt-2  ">
          <Image src={bookImage} alt="book" />
          </div>
        </Card>

        <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
          <CardHeader title="My Toolbox"
          description="Explore the technologies 
              and tools I use to craft."  className="px-6 pt-6"/>
          <ToolboxItems toolboxItems={toolboxItems} className=""
          itemsWrapperClassName="animate-move-left
          [animation-duration:30s]
          "
          />
          <ToolboxItems toolboxItems={toolboxItems} 
          className="mt-4 " 
          itemsWrapperClassName="animate-move-right 
          [animation-duration:15s]
          "/>
        </Card>
         </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5
        lg:grid-cols-3 ">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3
        lg:col-span-2">
          <CardHeader title="Beyond the Code"
          description="Explore my passions and interests 
              beyond the code.
              " className="px-6 py-6"
              />
          <div className="relative flex-1 " ref={constraintRef}>
            {hobbies.map(hobby=>(
              <motion.div key={hobby.title} 
              className="inline-flex items-center 
              gap-2 px-8 
              bg-gradient-to-r from-[#2c091f]
              to-[#5f1b3a] rounded-full py-1.5
              absolute 
              "
              style={{
                left: hobby.left,
                top: hobby.top
              }}
              drag
              dragConstraints={constraintRef}
              >
                <span className="font-medium
                 text-gray-300">{hobby.title}</span>
                <span >{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </Card>
        <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
          <CardHeader title="Time-Agnostic"
          description=" Flexible across regions and time zones."
          className="px-6 py-6"
          />
          <GridGlobe/>
        </Card>
        </div>
      </div>
      </div>
    </div>
    
  );
};