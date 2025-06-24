
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" >

      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
            Thanks for scrolling — 
 <span className="text-purple"> let’s build </span>
  something cool together.
        </h1>
        <p className="font-mono text-xs text-white-200 md:mt-10 my-5 text-center">
           Got a cool idea? Let’s build it before finals hit.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akashiyu18@gmail.com"
        target="_blank"
          rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
              

          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center"
      >
        <div className="mt-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Akash Krishnan
        </p>
</div>
        <div className="flex items-center md:gap-3 gap-6 mt-10">
          {socialMedia.map((info) => (
              <a
    key={info.id}
    href={info.href}
    target="_blank"
    rel="noopener noreferrer"
  >
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer
               flex justify-center items-center
               backdrop-filter backdrop-blur-lg
                saturate-180 bg-opacity-75 bg-black-200
                 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;