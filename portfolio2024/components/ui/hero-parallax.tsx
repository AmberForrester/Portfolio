"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
    selectedProject,
}: {
    selectedProject: {
    title: string;
    description: string;
    screenshots: string[];
    iconLists: string[];
  };
}) => {
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

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header 
        title={selectedProject.title}
        description={selectedProject.description}
        iconLists={selectedProject.iconLists}
      />
        <motion.div
            style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
            }}
            className="">

            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((screenshot, index) => (
                <ImageCard
                key={index}
                src={screenshot}
                translate={translateX}
                />
            ))}
            </motion.div>
        </motion.div>
    </div>
  );
};

export const Header = ({
    title,
    description,
    iconLists,
}: {
    title: string;
    description: string;
    iconLists: string[];
}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {title}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {description}
      </p>

      {/* TECH STACK ICONS */}
      <div className="flex items-center mt-8">
        {iconLists.map((icon, index) => (
            <div 
                key={icon}
                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-4"
                style={{
                    transform: `translateX(-${5 * index * 5}px)`,
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
    </div>
  );
};

export const ImageCard = ({
  src,
  translate,
}: {
    src: string;
    translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-64 w-[30rem] sm:h-80 sm:w-[25rem] md:h-96 md:w-[30rem] lg:h-[28rem] lg:w-[36rem] relative flex-shrink-0 overflow-hidden bg-gray-900 rounded-lg"
    >
        <Image
          src={src}
          alt="Project Screenshot"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
    </motion.div>
  );
};
