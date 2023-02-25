import Project from './Project';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] md:pt-28 mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-primary">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            return (
              <Project
                title={project.name}
                backgroundImg={project.img}
                projectUrl={project.url}
                tech={project.mainTech}
                techStack={project.techStack}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
