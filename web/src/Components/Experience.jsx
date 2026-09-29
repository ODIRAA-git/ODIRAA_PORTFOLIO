import Reveal, { SectionHeading } from "./Reveal";
import { experience } from "../data";

function Experience() {
  return (
    <section id="experience" className="section bg-surface/50">
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="relative ml-2 border-l border-line">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 0.08} className="relative mb-8 pl-8 last:mb-0">
              <span
                className={`absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                  i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-muted"
                }`}
              />
              <div className="card p-6 transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted">
                    <p className="font-medium">{job.period}</p>
                    <p>{job.type}</p>
                  </div>
                </div>
                {job.highlights.length > 0 && (
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
