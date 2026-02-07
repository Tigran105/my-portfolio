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
  degree: string;
  institution: string;
  period: string;
  description: string;
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
  getInTouch: {
    title: string;
    description: string;
    contact: string;
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
    connect: string;
    collaboration: string;
  };
  footer: {
    copyright: string;
  };
}

export type Language = "en" | "ru" | "hy";
