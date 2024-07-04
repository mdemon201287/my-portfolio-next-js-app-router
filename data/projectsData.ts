// data/projectsData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3',
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/yourusername/project3',
  },
  // Add more projects as needed
];

export default projectsData;
