import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

        {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
        <div>
            <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
            />
            <Spotlight
            className="h-[80vh] w-[50vw] top-30 left-full"
            fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/**
       *  UI: grid
       * Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds*/}
        <div
            className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.00] bg-grid-black-100/[0.2]
            absolute top-0 left-0 flex items-center justify-center"
        >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-wideset text-xs text-center text-blue-100 max-w-80">
                Designing the Future, One Experience at a Time
                </h2>
                <br/>

                {/**
                *  Link: https://ui.aceternity.com/components/text-generate-effect*/}
                <TextGenerateEffect
                words={`Turning Ordinary Ideas into\n Extraordinary User Experiences`}
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
                <br/>

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hey! I&apos;m Amber, a Full Stack Software Developer driven by a passion for creating innovative and impactful solutions. Based in the heart of Canada, I thrive on transforming ideas into seamless digital experiences. <br/>
                    <br/>

                    Ready to see how my diverse skills and experience can bring value to your team?
                </p>

                <a href="#projects">
                    <MagicButton
                    title="Discover My Skills"
                    icon={<FaLocationArrow/>}
                    position="right"/>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Hero;