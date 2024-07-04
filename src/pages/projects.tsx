// pages/projects.tsx

import ProjectCard from "../../components/ProjectCard"; // Adjusted path
import projectsData from "../../data/projectsData"; // Adjusted path
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <a>
              <ProjectCard project={project} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
