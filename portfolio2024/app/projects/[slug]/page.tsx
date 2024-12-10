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
    source: project.source,
    features: project.features,
    pipeline: project.pipeline,
  };

  return (
    <div className="p-8">
      <BackButton />

      

      {/* HeroParallax with the customized project data */}
      <HeroParallax selectedProject={selectedProject} />

      <section className="mt-3 px-10 pb-[30vh]">
        <div className="max-w-7xl mx-auto">
          <h1 className="!text-left heading">
            Project <span className="block sm:inline text-purple">Features</span>
          </h1>
          <p className="font-light text-sm md:text-md lg:text-lg mt-4 italic">
            Showcasing the innovations and capabilities that define each project, from cutting-edge technologies to seamless user experiences. <br /> Discover the core functionalities and standout elements that make each project both impactful and user focused.
          </p>

          {/* Dynamically rendered features */}
          <ul className="mt-8 space-y-2 text-left font-light text-sm md:text-md lg:text-lg list-disc list-inside">
            {selectedProject.features?.map((feature, index) =>
              typeof feature === "string" ? (
              <li key={index}>{feature}</li>
            ) : (
              <li key={index}>
                <strong className="font-bold -ml-3">{feature.title}:</strong> {feature.description}
                <ul className="ml-6 mt-2 font-light text-sm md:text-md lg:text-lg list-disc list-inside">
                  {feature.subfeatures?.map((subfeature, subIndex) => (
                    <li key={subIndex}>{subfeature}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamically rendered future pipeline section */}
        <div className="max-w-7xl mx-auto mt-40">
          <h1 className="!text-left heading">
            <span className="block sm:inline text-purple">Dream Big</span> Build Bigger
          </h1>
          <p className="font-light text-sm md:text-md lg:text-lg mt-4 italic">
            Turning ambitious ideas into impactful realities with creativity, innovation, and purpose. <br /> Every project is a stepping stone - exploring future posibilities and continuous improvements to make it even better.
          </p>
          <ul className="mt-8 space-y-2 text-left font-light text-sm md:text-md lg:text-lg list-disc list-inside">
            {selectedProject.pipeline?.map((pipeline, index) =>
              typeof pipeline === "string" ? (
              <li key={index}>{pipeline}</li>
            ) : (
              <li key={index}>
                <strong className="font-bold -ml-3">{pipeline.title}:</strong> {pipeline.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

    <Footer />

    </div>
  );
}
