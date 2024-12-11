"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";

export const HeroParallax = ({
    selectedProject,
}: {
    selectedProject: {
    title: string;
    description: string;
    screenshots: string[];
    iconLists: string[];
    link: string;
    source: string;
  };
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string |null>(null);  

  const firstRow = selectedProject.screenshots.slice(0, 4);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div
      ref={ref}
      className="h-[200vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header 
        title={selectedProject.title}
        description={selectedProject.description}
        iconLists={selectedProject.iconLists}
        link={selectedProject.link}
        source={selectedProject.source}
      />

      {isMobile ? (
        <div className="flex flex-col gap-4 items-center mt-10">
          {selectedProject.screenshots.map((screenshot, index) => (
            <ImageCard 
              key={index}
              src={screenshot}
              translate={null}
              onClick={() => openModal(screenshot)}
            />
          ))}
        </div>
      ) : (
        <motion.div
            style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
            }}
            className="">

            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-2">
            {firstRow.map((screenshot, index) => (
                <ImageCard
                key={index}
                src={screenshot}
                translate={translateX}
                onClick={() => openModal(screenshot)}
                />
            ))}
            </motion.div>
        </motion.div>        
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            
            <div className="relative w-full max-w-5xl h-auto p-4 flex justify-center items-center">
            <button
                onClick={closeModal}
                className="absolute top-2 right-5 text-purple text-2xl font-semibold"
            >
                &times;
            </button>
            
                <Image
                src={modalImage!}
                alt="Full-size screenshot"
                layout="responsive"
                width={1200}
                height={1200}
                className="rounded-lg"
                />
            </div>
        </div>
      )}
    </div>
  );
};

export const Header = ({
  title,
  description,
  iconLists,
  link,
  source,
}: {
  title: string;
  description: string;
  iconLists: string[];
  link: string;
  source: string;
}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">{title}</h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {description}
      </p>

      {/* Container for Icons and Button */}
      <div className="flex flex-col mt-8">
        {/* Tech Stack Icons */}
        <div className="flex relative">
          {iconLists.map((icon, index) => (
            <div
              key={icon}
              className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index}px)`,
                zIndex: iconLists.length - index,
              }}
            >
              <Image
                src={icon}
                alt={`Tech stack icon ${index + 1}`}
                className="p-2"
                height={40}
                width={40}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-start">
          {/* Visit Project Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-purple md:text-xl"
          >
            View the Live Demo
          </a>

          {/* View Source Code Button */}
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-purple md:text-xl flex items-center"
          >
            Source Code <IoLogoGithub className="ml-2"/>
          </a>
        </div>
      </div>
    </div>
  );
};


export const ImageCard = ({
  src,
  translate,
  onClick,
}: {
    src: string;
    translate: MotionValue<number> | null;
    onClick: () => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate || 0,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-64 w-[30rem] sm:h-64 md:h-96 md:w-[30rem] lg:h-[28rem] lg:w-[36rem] relative flex-shrink-0 overflow-hidden bg-gray-900 rounded-lg"
      onClick={onClick}
    >
        <Image
          src={src}
          alt="Project Screenshot"
          height={600}
          width={600}          
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
    </motion.div>
  );
};
