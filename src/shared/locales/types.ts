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
export type PersonalSection = {
  title: string;
  description: string;
};
export type WhatIdo = {
  title: string;
  description: string;
  icon: string;
};

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
    photoTitle: string;
    status: string;
  };
  experience: {
    title: string;
    description: string;
    backToHome: string;
    items: ExperienceItem[];
  };

  githubCta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
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
  valuesAndPrinciples: {
    title: string;
    items: PersonalSection[];
  };
  whatIdo: {
    title: string;
    items: WhatIdo[];
  };
}

export type Language = "en" | "ru" | "hy";
