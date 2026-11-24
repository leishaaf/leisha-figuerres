// ✏️ ALL the text on your portfolio lives here.
// Replace the placeholders with your real info — the page updates automatically.

import type { TagColor } from "animal-island-ui";

/* ---------- You ---------- */
export const profile = {
  name: "Leisha Figuerres",
  role: "Software Engineer",
  location: "San Francisco, CA",
  bio: "I’m a passionate Software Engineer who enjoys backend & distributed systems. I also have experience in full stack & UX/UI & love using those skills to create cool things!",
  email: "leisha.figuerres@yahoo.com", // 
  github: "https://github.com/leishaaf",
  linkedin: "https://www.linkedin.com/in/leisha-figuerres-862096347/", 
};

/* ---------- About ---------- */
export const about: string[] = [
  "Aloha! I’m Leisha Figuerres, a Software Engineer who’s passionate about building impactful software, solving complex problems, and continuously challenging myself to grow. My interests span full-stack development, distributed systems, and cloud computing. I have most recently been learning AWS, GCP, Kubernetes, and Docker, and have bootstrapped a production-ready microservice in Go.",
  "Outside of coding, I enjoy exploring new matcha spots, spending time with friends, and connecting with new communities!",
];

export const funFacts: { question: string; answer: string }[] = [
  { question: "What am I learning right now?", answer: "AWS, GCP, Cloud Computing Concepts, and Typescript!" },
  { question: "What do I do for fun?", answer: "Weightlifting, exploring the city, bodyboarding (when I'm back at home), and CONCERTS!" },
];

export interface SkillGroup {
  label: string;
  color: TagColor;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "Languages", color: "app-teal", skills: ["Java", "Python", "TypeScript", "JavaScript", "C/C++", "Go", "Risc-V Assembly"] },
  { label: "Frontend", color: "app-orange", skills: ["HTML5", "CSS", "React"]},
  { label: "Backend", color: "app-pink", skills: ["Node.js", "Express.js", "Flask", "FastAPI", "MongoDB", "SQLite"] },
  { label: "Infra & DevOps", color: "lime-green", skills: ["Git", "Docker", "AWS", "GCP", "Kubernetes", "Grafana", "Prometheus", "Helm"] },
  { label: "Tools", color: "purple", skills: ["Git", "Github", "Figma"] },
];

/* ---------- Projects ---------- */
export interface Project {
  title: string;
  year: string;
  summary: string; // one line, shown on the card
  details: string[]; // bullet points, shown when the card is clicked
  tags: string[];
  color: "app-teal" | "app-pink" | "app-yellow" | "app-blue" | "app-orange" | "purple" | "app-green";
  repoUrl?: string; // ? = optional
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Web Search Engine",
    year: "2025",
    summary: "A concurrent web search engine built in Go, featuring ethical web crawling, TF-IDF ranking, and flexible indexing.",
    details: [
      "Built a search engine from scratch while learning Go, concurrency, and database fundamentals.",
      "Leveraged goroutines to parallelize web crawling and data processing, improving performance by 50% while respecting robots.txt.",
      "Implemented both in-memory and SQLite-backed indexing to explore storage tradeoffs, using abstractions to support interchangeable backends.",
      "Developed unit tests to validate search accuracy, ranking, and reliability.",
    ],
    tags: ["Go", "Concurrency", "SQLite", "TF-IDF", "HTML", "CSS"],
    color: "app-teal",
    repoUrl: "https://github.com/leishaaf/Leisha-Figuerres-CS-Project-Portfolio/tree/main/Search-Engine",
  },
  {
    title: "Guess the Artist's Top Song",
    year: "2025",
    summary: "An interactive music trivia web app that challenges players to guess an artist's most popular song using real-time Spotify data.",
    details: [
      "Built a full-stack music trivia game using Python, Flask, HTML, CSS, and the Spotify API.",
      "Integrated the Spotify API to dynamically retrieve artists and their top tracks, creating a unique trivia experience for each round.",
      "Implemented fuzzy string matching with FuzzyWuzzy to recognize close guesses and handle spelling variations.",
      "Used Flask sessions to persist game state across pages, ensuring a seamless gameplay experience.",
    ],
    tags: ["Python", "Flask", "Spotify API", "HTML", "CSS"],
    color: "app-orange",
    repoUrl: "https://github.com/leishaaf/Leisha-Figuerres-CS-Project-Portfolio/tree/main/Guess-Top-Song-Of-The-Artist.html",
  },
  {
    title: "Lei's Spill the Tea",
    year: "2026",
    summary: "A matcha review blog combining my love for matcha, web development, and UI design to showcase San Francisco's best ceremonial-grade matcha lattes.",
    details: [
      "Designed and developed a multi-page review blog from scratch using HTML and CSS.",
      "Implemented custom layouts with CSS Grid, typography, and a cohesive color palette to create a visually engaging user experience.",
      "Built intuitive navigation and a structured rating system to compare matcha spots based on taste, texture, color, and milk-to-matcha ratio.",
      "Deployed the website using GitHub Pages, making it publicly accessible.",
    ],
    tags: ["HTML", "CSS", "CSS Grid", "UI Design", "GitHub Pages"],
    color: "app-pink",
    repoUrl: "https://github.com/leishaaf/review-blog",
    liveUrl: "https://leishaaf.github.io/review-blog/",
  },
];

/* ---------- Experience ---------- */
export interface Job {
  role: string;
  org: string;
  dates: string;
  location: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    role: "Software Engineer Intern",
    org: "Fastly",
    dates: "May 2026 – Aug 2026",
    location: "San Francisco, CA",
    bullets: [
      "Bootstrapped a Go microservice to migrate a major legacy API, helping modernize Fastly's fleet infrastructure and decompose a long-running monolith.",
      "Designed a modular architecture with an in-memory caching layer, achieving API response times 77× faster than the legacy service.",
      "Built a CI/CD pipeline, deployed to Kubernetes using Docker, and migrated production traffic through traffic shadowing and shifting.",
      "Developed Grafana dashboards, configured monitoring alerts, and authored a runbook to support production reliability and operations.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "San Jose State University",
    dates: "Jun 2025 – Aug 2025",
    location: "San Francisco, CA",
    bullets: [
      "Developed REST APIs using Python, FastAPI, and Docker to manage and display school announcements on an LED sign.",
      "Implemented concurrent message handling with Python threading, Locks, and Events to manage message expiration and prevent race conditions.",
      "Integrated MongoDB and Mongoose TTL indexing to automatically expire outdated announcements.",
      "Instrumented FastAPI and Express.js services with Prometheus metrics and Grafana dashboards to monitor service health and reliability.",
    ],
  },
  {
    role: "Information Technology Engineer",
    org: "University of San Francisco",
    dates: "Oct 2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Provided technical support for computer systems, classroom technology, audiovisual equipment, and telecommunications serving over 1,400 faculty members.",
      "Developed troubleshooting documentation and user-friendly guides to streamline technical support and improve accessibility.",
      "Automated help desk ticket exports to CSV using Python, improving historical recordkeeping and performance tracking.",
      "Deployed an internal website to centralize IT desk hours, troubleshooting resources, and support information.",
    ],
  },
];
