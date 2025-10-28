import Custom404 from "@/app/not-found";
import projects from "../dataProjects";
import ProjectDetail from "../ProjectDetail";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} - ${project.tagline}`;
  const description = `${project.tagline} Built with ${project.stack.slice(0, 3).join(", ")}. ${project.problem.slice(0, 120)}...`;
  const imageUrl = project.image ? `https://orlandoascanio.com${project.image}` : "https://orlandoascanio.com/pfp.jpg";

  return {
    title,
    description,
    keywords: `${project.stack.join(", ")}, Orlando Ascanio, project, case study, ${project.role}`,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://orlandoascanio.com/projects/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} project screenshot`,
        },
      ],
      siteName: "Orlando Ascanio Portfolio",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://orlandoascanio.com/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <Custom404 />
  }

  return <ProjectDetail project={project} />;
}
