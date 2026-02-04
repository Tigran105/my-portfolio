import { create } from 'zustand';

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', icon: 'github', url: '#' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', url: '#' },
  { id: 'twitter', label: 'Twitter', icon: 'twitter', url: '#' },
  { id: 'email', label: 'Email', icon: 'email', url: 'mailto:your.email@example.com' },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Frontend Developer',
    period: 'Jan 2023 - Present',
    description: 'Working on modern web applications using React, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Zustand']
  },
  {
    id: 2,
    company: 'Previous Company',
    position: 'UI Developer',
    period: 'Mar 2021 - Dec 2022',
    description: 'Built responsive user interfaces and collaborated with design teams.',
    technologies: ['React', 'JavaScript', 'CSS', 'Figma']
  }
];

export const SKILLS = [
  'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
  'Zustand', 'Framer Motion', 'Vite', 'Git', 'UI/UX'
];

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section })
}));
