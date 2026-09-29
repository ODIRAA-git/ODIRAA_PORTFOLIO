// All portfolio content lives here, so text can be updated without touching components.
import easymeal from "./assets/easymeal.jpg";
import listvault from "./assets/listvault.jpg";
import bookflix from "./assets/bookflix.jpg";

export const profile = {
  name: "Madu Odiraa Perpetua",
  shortName: "Odiraa",
  role: "Software Developer",
  location: "Düsseldorf, Germany",
  email: "odiraa_perpetua@yahoo.com",
  phone: "+49 176 55064303",
  github: "https://github.com/ODIRAA-git",
  linkedin: "https://www.linkedin.com/in/madu-o-717713216",
  // Drop a PDF into /public (e.g. public/Madu_Odiraa_CV.pdf) and set the path here to show a "Download CV" button.
  cv: "",
};

export const experience = [
  {
    role: "Programmer",
    company: "Axinity GmbH & Co. KG",
    type: "Internship",
    period: "2025 – Feb 2026",
    // Add 2–3 concrete achievements per role, e.g. "Built X with React, cutting load time by 30%".
    highlights: [],
  },
  {
    role: "Frontend Developer",
    company: "Swilook UG",
    type: "Working Student",
    period: "2023 – 2024",
    highlights: [],
  },
  {
    role: "IT Support",
    company: "ReDI School of Digital Integration",
    type: "Working Student",
    period: "2022 – 2023",
    highlights: [],
  },
];

export const projects = [
  {
    title: "List Vault",
    tagline: "Collaborative family shopping lists",
    description:
      "Cross-platform app for planning shopping together: weekly lists that roll unfinished items forward, event lists, voice input and real-time sync across Android, iOS and web.",
    image: listvault,
    tech: ["Flutter", "Supabase", "PostgreSQL", "Row Level Security", "Real-time"],
    caseStudy: "/list-vault-demo",
    live: "https://listvault.netlify.app",
    code: "https://github.com/ODIRAA-git/LIST_VAULT",
  },
  {
    title: "Bookflix",
    tagline: "The reader's guide",
    description:
      "Book discovery platform where readers browse novels by genre, save favourites to a wishlist and read prologues before committing to their next book.",
    image: bookflix,
    tech: ["React", "TypeScript", "Vite", "Supabase"],
    live: "https://bookfliix.netlify.app/",
  },
  {
    title: "EasyMeal",
    tagline: "Recipe search engine",
    description:
      "Meal-planning assistant with sign-up and login that lets users search recipes from a REST API, with a layout that adapts to any screen size.",
    image: easymeal,
    tech: ["React", "JavaScript", "REST API", "Responsive Design"],
    live: "https://eaziimeal.netlify.app/",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    group: "Frontend & Mobile",
    items: ["React", "Angular", "Tailwind CSS", "Flutter", "Responsive Design"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "Supabase", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    group: "Tools & Workflow",
    items: ["Git", "GitHub", "Vite", "Agile / Scrum", "Netlify"],
  },
];

export const learning = ["Docker", "CI/CD pipelines", "AWS", "Azure"];
