import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]" style={{ lineHeight: '1.1' }}>
            Elevate your team with a <span className="text-purple">passionate</span><br/> Full Stack Software Engineer
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&apos;s connect and create impactful solutions together!
            </p>
            <a href="mailto:meagenaf@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
            </a>
        </div>
        <div 
            className="flex mt-16 md:flex-row flex-col justify-between   items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Amber Forrester
            </p>
            <br/>

            <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <a key={info.id} href={info.href} target="_blank" rel="noopener noreferrer">
                    <div 
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                        <Image 
                        src={info.img} 
                        alt="icons" 
                        width={20} 
                        height={20} />
                    </div>
                </a>
                
            ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;