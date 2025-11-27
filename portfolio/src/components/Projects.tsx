import React from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Routy',
      description: '여행 계획 웹 애플리케이션',
      image: '/projects/routy.png',
      tech: ['Vue.js', 'Spring Boot', 'MyBatis', 'Kakao Maps'],
      github: 'https://github.com/aaa/routy',
      demo: 'https://routy-demo.com'
    },
    {
      id: 2,
      name: 'HR System',
      description: '기업 인사 관리 시스템',
      image: '/projects/hr.png',
      tech: ['Vue.js', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/aaa/hr-system'
    }
  ];

  return (
    <section className="projects">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;