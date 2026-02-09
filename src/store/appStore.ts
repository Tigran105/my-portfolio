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

export const SKILLS = [
  {
    title: "Frontend Development",
    icon: "frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "Zustand",
      "Tailwind",
      "Testing (Jest)",
    ],
  },
  {
    title: "UI / UX Engineering",
    icon: "uiux",
    skills: [
      "Component Architecture",
      "UI Systems",
      "Animations",
      "Responsive Design",
      "Interaction Design",
      "Mobile-First Layout",
    ],
  },
  {
    title: "Data Visualization",
    icon: "dataviz",
    skills: [
      "HTML Canvas",
      "Konva (learning)",
      "Three.js",
      "WebGL (basic)",
      "Coordinate Systems",
      "Drag & Drop Logic",
      "2D / 3D Interaction Logic",
    ],
  },
  {
    title: "Engineering & Tools",
    icon: "tools",
    skills: [
      "REST API Integration",
      "OAuth 2.0",
      "Google Login",
      "Facebook Login",
      "Stripe Payments Integration",
      "Git / GitLab",
      "Refactoring",
      "Product Thinking",
    ],
  },
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
