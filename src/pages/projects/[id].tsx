// pages/projects/[id].tsx

import { useRouter } from 'next/router';
import projectsData, { Project } from '../../../data/projectsData'; // Adjusted path

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find project by id from projectsData
  const project: Project | undefined = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <div className="mt-4">
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} className="mt-4" />
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 block"
        >
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
