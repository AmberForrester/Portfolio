import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Player from "lottie-react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const frontEnd = ["Vercel", "Next.js", "React", "JavaScript", "TypeScript", "Vite", "UIKit Installations", "Shadcn/ui", "Aceternity UI", "Figma", "TailwindCSS", "Lexical", "LiveBlocks", "GraphQL", "HTML", "CSS", "jQuery", "Zustand", "Tanstack Query", "Flowbite", "hygraph", "Redux", "SWC", "Webpack", "Babel"];
  const backEnd = ["MongoDB", "Express", "Node", "AWS", "Python", "Django", "Flask", "Azure", "GCS", "Appwrite", "Firebase", "AstraDB", "Langflow", "Streamlit", "Mongoose", "Generative AI", "PostgreSQL", "SQL", "MySQL", "TSQL", "JWT's", "API's", "Webservers", "Clerk", "UploadThing", "Google OAuth", "Ollama", "OpenAI", "DRF", "Supabase", "pgAdmin"];

  const [copied, setCopied] = useState(false);



  const handleCopy = () => {
    const text = "meagenaf@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };



  return (
    <div
      className={cn("row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              height={200}
              width={200}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              height={200}
              width={200}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          { id === 3 && (
            <div className="flex flex-col gap-6 p-4 w-full">

              <div className="absolute bottom-8 right-8 flex flex-col gap-4">
                {/* Select for Left Tech Stack */}
                <Select>
                    <SelectTrigger className="w-55 bg-[#10132E] text-white">
                      <SelectValue placeholder="Frontend Essentials" />
                    </SelectTrigger>
                    <SelectContent>
                      {frontEnd.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Select for Right Tech Stack */}
                  <Select>
                    <SelectTrigger className="w-55 bg-[#10132E] text-white gap-4">
                      <SelectValue placeholder="Backend Powerhouses" />
                    </SelectTrigger>
                    <SelectContent>
                      {backEnd.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Player
                  key={copied ? "confetti-play" : "confetti-reset"}
                  autoplay={copied}
                  loop={false}
                  animationData={animationData}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};