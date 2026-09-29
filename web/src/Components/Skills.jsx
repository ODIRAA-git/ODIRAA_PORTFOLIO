import { Code2, Database, Layout, Sprout, Wrench } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { learning, skills } from "../data";

const icons = {
  Languages: Code2,
  "Frontend & Mobile": Layout,
  "Backend & Data": Database,
  "Tools & Workflow": Wrench,
};

function Skills() {
  return (
    <section id="skills" className="section bg-surface/50">
      <div className="container-page">
        <SectionHeading eyebrow="Skills" title="My toolkit">
          I'm a continuous learner. My skill set keeps growing as I explore new tools, frameworks
          and technologies.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ group, items }, i) => {
            const Icon = icons[group] ?? Code2;
            return (
              <Reveal key={group} delay={i * 0.08} className="card p-6">
                <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
                  <span className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon size={18} />
                  </span>
                  {group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-5">
          <span className="flex items-center gap-2 font-semibold text-accent">
            <Sprout size={18} /> Currently learning
          </span>
          {learning.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
