// components/ProjectCard.tsx

import React from "react";
import { Project } from "../data/projectsData";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={project.imageUrl} alt={project.title} className="mb-4" />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-2 block"
      >
        GitHub Link
      </a>
    </div>
  );
};

export default ProjectCard;
