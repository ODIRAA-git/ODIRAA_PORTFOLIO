import { Briefcase, Code2, MapPin, Rocket } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { experience, profile } from "../data";

const facts = [
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: Briefcase, label: "Latest role", value: `${experience[0].role} (${experience[0].type}), ${experience[0].company}` },
  { icon: Code2, label: "Focus", value: "Frontend & full-stack web, cross-platform mobile" },
  { icon: Rocket, label: "Growing into", value: "DevOps & CI/CD" },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="About me" title="Developer who cares about the people using the product" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I'm a software developer who builds{" "}
              <span className="text-fg">responsive, user-friendly and scalable applications</span>{" "}
              that solve real problems. My core is the front end — React, TypeScript, JavaScript and
              Tailwind CSS — backed by hands-on work with Node.js, Express and Python, and with both
              SQL and NoSQL databases.
            </p>
            <p>
              I'm comfortable in Git-based, Agile teams and enjoy taking a feature from idea to
              deployed product, as in my projects below. Right now I'm deepening my DevOps skills,
              including CI/CD pipelines and cloud deployment.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="card divide-y divide-line">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4 p-5">
                  <span className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="font-medium">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
