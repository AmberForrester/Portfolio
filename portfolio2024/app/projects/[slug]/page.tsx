import BackButton from "@/components/BackButton";
import { projects } from "@/data";
import { notFound } from "next/navigation";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { socialMedia } from "@/data";
import Image from "next/image";


export function generateStaticParams() {
  const params = projects.map((project) => ({
    slug: project.slug,
  }));

  return params;
}

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const selectedProject = {
    title: project.title,
    description: project.des,
    screenshots: project.screenshots,
    iconLists: project.iconLists,
  };

  return (
    <div className="p-8">

      {/* <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-6 py-2 text-white bg-purple-600 rounded-md"
      >
        Visit Project
      </a> */}

      {/* HeroParallax with the customized project data */}
      <HeroParallax selectedProject={selectedProject} />




















      <BackButton />
    
      {/* FOOTER */}
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

    </div>
  );
}
