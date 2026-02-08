import { create } from "zustand";

export const NAV_LINKS = [
  { id: "home", href: "/" },
  { id: "about", href: "/about" },
  { id: "experience", href: "/experience" },
  { id: "contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "Phone",
    real: "+37443150200",
    icon: "phone",
    link: "tel:+37443150200",
    delay: 0,
    hasCopy: true,
    copyText: "+37443150200",
  },
  {
    label: "Email",
    real: "tigran.sargsyan105@gmail.com",
    icon: "email",
    link: "mailto:tigran.sargsyan105@gmail.com",
    delay: 0.05,
    hasCopy: true,
    copyText: "tigran.sargsyan105@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    real: "https://www.linkedin.com/in/tigran-sargsyan105/",
    link: "https://www.linkedin.com/in/tigran-sargsyan105/",
    delay: 0.1,
    hasCopy: true,
  },
  {
    label: "GitHub",
    icon: "github",
    real: "https://github.com/Tigran105/",
    link: "https://github.com/Tigran105/",
    delay: 0.15,
    hasCopy: true,
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Company Name",
    position: "Frontend Developer",
    period: "Jan 2023 - Present",
    description:
      "Working on modern web applications using React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind", "Zustand"],
  },
  {
    id: 2,
    company: "Previous Company",
    position: "UI Developer",
    period: "Mar 2021 - Dec 2022",
    description:
      "Built responsive user interfaces and collaborated with design teams.",
    technologies: ["React", "JavaScript", "CSS", "Figma"],
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Zustand",
  "Framer Motion",
  "Vite",
  "Git",
  "UI/UX",
];

interface AppState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
