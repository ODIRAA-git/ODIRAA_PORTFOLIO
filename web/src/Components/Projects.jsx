import { Link } from "react-router-dom";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { projects } from "../data";

function ProjectCard({ project }) {
  const { title, tagline, description, image, tech, live, code, caseStudy } = project;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent">{tagline}</p>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <p className="mt-3 flex-1 text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5 text-sm font-semibold">
          {caseStudy && (
            <Link to={caseStudy} className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
              <PlayCircle size={16} /> Demo & case study
            </Link>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
              Live site <ArrowUpRight size={16} />
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Projects" title="Things I've built">
          A selection of web and mobile apps, from idea to deployment.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
