import Custom404 from "@/app/not-found";
import projects from "../dataProjects";
import ProjectDetail from "../ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <Custom404 />
  }

  return <ProjectDetail project={project} />;
}
