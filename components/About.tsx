import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png"

const toolboxItems  = [
  {
    title: "JavaScript",
    icon:''
  },
  {
    title: "HTML",
    icon:''
  },
  {
    title: "CSS",
    icon:''
  },
  {
    title: "React",
    icon:''
  },
  {
    title: "Github",
    icon:''
  },
  {
    title: "Python",
    icon:''
  },
  {
    title: "SQL",
    icon:''
  },

]

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader
        title="A Glimpse Into My World"
        eyebrow="About me"
        description="Learn more about who I am and what inspires me. "
      />
      <div>
        <Card>
          <div>
            <FaStar/>
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="book" />
        </Card>

        <Card>
          <div>
            <FaStar/>
            <h3>My Toolbox</h3>
            <p>Explore the technologies 
              and tools I use to craft.</p>
          </div>
          <div>

          </div>
        </Card>
      </div>
    </div>
    
  );
};
