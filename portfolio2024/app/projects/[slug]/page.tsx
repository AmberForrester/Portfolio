import { projects } from "@/data";
import { notFound } from "next/navigation";

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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.des}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-6 py-2 text-white bg-purple-600 rounded-md"
      >
        Visit Project
      </a>
    </div>
  );
}
