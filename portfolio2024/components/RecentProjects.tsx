"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="block sm:inline text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[10vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image 
                  src="/bg.png" 
                  alt="bgimg" 
                  height={200}
                  width={200}
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute inset-0 w-full h-full object-cover rounded-lg lg:rounded-3xl"
                  height={100}
                  width={100}
                />
              </div>

              <h1 className="font-bold lg:text-1xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image 
                      src={icon} 
                      alt={icon}
                      className="p-2" 
                      height={100}
                      width={100}
                      />
                    </div>
                  ))}
                </div>

                {/* <div className="flex justify-center items-center">
                  <p className="font-bold flex lg:text-xl md:text-xs text-sm text-purple">
                    Explore
                  </p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div> */}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;