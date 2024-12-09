import BackButton from "@/components/BackButton";
import { projects } from "@/data";
import { notFound } from "next/navigation";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { socialMedia } from "@/data";
import Image from "next/image";
import Footer from "@/components/Footer";


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
    link: project.link,
  };

  return (
    <div className="p-8">
      <BackButton />

      {/* HeroParallax with the customized project data */}
      <HeroParallax selectedProject={selectedProject} />

      <h1>Features</h1>

   
      <Footer />
    </div>
  );
}
