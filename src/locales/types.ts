export interface ExperienceItem {
  id: number;
  role: string;
  time: string;
  company: string;
  type?: string;
  skills: string[];
  description: string[];
  website?: string;
}
export interface EducationItem {
  institution: string;
  time: string;
}

export interface Translation {
  portfolio: string;
  nav: {
    home: string;
    about: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewWork: string;
    contactMe: string;
  };
  aboutPreview: {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    more: string;
  };
  experiencePreview: {
    title: string;
    description: string;
    details: string;
  };
  education: {
    title: string;
    description: string;
    items: EducationItem[];
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    skills: string;
    backToHome: string;
  };
  experience: {
    title: string;
    description: string;
    backToHome: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    other: string;
    connect: string;
    collaboration: string;
  };
  footer: {
    copyright: string;
  };
  messages: {
    name: string;
    email: string;
    message: string;
    success: string;
    error: string;
    copied: string;
    copy: string;
    copyError: string;
    open: string;
  };
  socialNotes: {
    github: string;
    linkedin: string;
    phone: string;
    email: string;
  };
}

export type Language = "en" | "ru" | "hy";
