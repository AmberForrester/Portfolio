import BackButton from "@/components/BackButton";
import { projects } from "@/data";
import { notFound } from "next/navigation";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
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
    features: project.features,
  };

  return (
    <div className="p-8">
      <BackButton />

      {/* HeroParallax with the customized project data */}
      <HeroParallax selectedProject={selectedProject} />

      <section className="mt-[-120vh] h-[200vh] px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="!text-left heading">
            Project <span className="block sm:inline text-purple">Features</span>
          </h1>

          {/* Dynamically rendered features */}
          <ul className="mt-8 space-y-4 text-left list-disc list-inside">
            {selectedProject.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

        </div>
      </section>









   
      <Footer />
    </div>
  );
}
