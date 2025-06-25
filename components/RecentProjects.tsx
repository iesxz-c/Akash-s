import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'


const RecentProjects = () => {
  return (
    <div id="projects" className='py-20'>
       <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-start justify-center p-4 gap-x-24 gap-y-4 mt-0">
        {projects.map(({
            id, 
            title, 
            des, 
            img, 
            iconLists, 
            link
          }) => (
            <div key={id} className="sm:h-[28rem] lg:min-h-[24rem]
              h-[24rem] flex items-center
              justify-center sm:w-[500px] w-[80vw]">
                <PinContainer
                 title={link}
                href={link}>
                    <div className="relative flex items-center
                      justify-center sm:w-[500px] w-[80vw]
                      overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh]
                      mb-6">
                     { /*   <div className="relative w-full h-full
                          overflow-hidden lg:rounded-3xl"
                       style={{ backgroundColor: "#13162D" }}>
                             <img src="/bg.png" alt="bgimg" />
                        </div> */}
                        <div
  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
  style={{ backgroundColor: "transparent" }}
></div>
                          <img
                              src={img}
                               alt="cover"
                               className="z-10 absolute bottom-0 w-full h-full object-contain lg:w-full"
                            />
                    </div>
                    <h3 className="font-bold text-pink-500 font-serif text-base
                      lg:text-base md:text-base line-clamp-1 mb-2">
                        {title}
                    </h3>
                    <p className="lg:text-xs
                     lg:font-normal font-light text-sm line-clamp-2 text-white/60"
                style={{                                                         
                margin: "1vh 0",
                }}>
                        {des}
                    </p>
                      <div className="flex items-center
                      justify-between mt-7 mb-3">
                         <div className="flex items-center">
                            {iconLists.map((icon,index)=>(
                                <div key={icon} className="border
                                  border-white/[0.2] rounded-full bg-black-100 lg:w-10
                                  lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                                >
                                    <img src={icon} alt="icon5" className="p-2" />
                                </div>
                            ))}
                         </div>
                         <div className="flex justify-center items-center">
                           <a   href={link}   target="_blank"   rel="noopener noreferrer"   className="flex items-center lg:text-xl md:text-xs text-sm text-pink-600" >   <span>Check Live Site</span>   <FaLocationArrow className="ms-3" color="#db2777" /> </a>
                          </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects