import type { Translation } from "./types";

export const en: Translation = {
  portfolio: "My Portfolio",
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    title: "Tigran Sargsyan",
    subtitle: "Frontend Developer & UI/UX Designer",
    description:
      "Building beautiful, functional web experiences with modern technologies",
    viewWork: "View My Work",
    contactMe: "Contact Me",
  },
  aboutPreview: {
    title: "About Me",
    subtitle: "Senior Frontend Developer",
    description:
      "I build scalable and high-performance web applications using React and TypeScript, with a strong focus on clean architecture and user experience.",
    highlights: [
      "Performance-first UI",
      "Clean and maintainable code",
      "Modern frontend architecture",
    ],
    more: "More →",
  },
  experiencePreview: {
    title: "Work Experience",
    description: "Here's a glimpse of my professional journey",
    details: "Details →",
  },
  education: {
    title: "Education",
    description: "My academic journey and certifications",
    items: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University Name",
        period: "2018 - 2022",
        description:
          "Focused on web development, algorithms, and software engineering principles.",
      },
      {
        degree: "Frontend Development Certification",
        institution: "Online Platform",
        period: "2022 - 2023",
        description: "Advanced React, TypeScript, and modern web technologies.",
      },
    ],
  },
  getInTouch: {
    title: "Get In Touch",
    description: "Have a project in mind or just want to say hi?",
    contact: "Contact Me →",
  },
  about: {
    title: "About Me",
    description1:
      "I'm a passionate frontend developer with a strong focus on creating beautiful, functional, and user-friendly web applications. With expertise in React, TypeScript, and modern web technologies, I bring designs to life with clean code and smooth animations.",
    description2:
      "My approach combines technical excellence with design sensibility, ensuring that every project not only works flawlessly but also provides an exceptional user experience.",
    skills: "Skills & Technologies",
    backToHome: "Back to Home",
  },
  experience: {
    title: "Work Experience",
    description:
      "Here's a detailed look at my professional journey and the projects I've worked on",
    backToHome: "Back to Home",
    items: [
      {
        id: 1,
        role: "FrontEnd Developer",
        time: "09.2022 - present",
        company: "Pixeria LAB",
        type: "Full-time, Hybrid",
        skills: [
          "react",
          "react native",
          "three.js",
          "stripe",
          "javascript",
          "typescript",
          "html5",
          "css3",
          "scss",
          "responsive design",
          "rest apis",
          "axios",
          "redux toolkit",
        ],
        description: [
          "Led frontend development of web and mobile apps using React / React Native. Built scalable UI and integrated 3D components with Three.js (360° Viewer). Developed a platform where users could customize room-change floors, walls, and add decorations interactively. Owned feature lifecycle, improved frontend skills, and collaborated with design, backend, and product teams.",
          "Built a scalable admin panel for the room customization platform. Integrated analytics dashboards and charts, implemented role-based access, managed interlinked product categories and subcategories, and added payment integration with Stripe. Collaborated with backend and product teams to ensure smooth data flow and maintainable architecture.",
          "Developed a mobile app that allows users to capture multiple photos of a room from several central points and view it in 360°. Implemented UI guidance showing where to position the phone, with automatic photo capture for precise results. Built interactive 360° viewing and ensured smooth user experience across devices.",
        ],
      },
      {
        id: 2,
        role: "Frontend Developer",
        time: "01.2024 - 12.2025 (2 yrs)",
        company: "GenieWeb",
        type: "Part-time, Remote",
        skills: [
          "javascript",
          "rest apis",
          "responsive design",
          "mobile-first layout",
          "html5",
          "css3",
          "tailwind css",
          "fetch",
          "axios",
          "typescript",
        ],
        description: [
          "Contributed to frontend development of web applications with GenieWeb, building responsive, mobile-first UIs and integrating REST APIs. Participated in UI testing and supported SEO-focused technical and product content.",
        ],
      },
      {
        id: 3,
        role: "FrontEnd Developer",
        time: "01.2022 - 12.2022 (1 yr)",
        company: "NWS LAB",
        type: "Full-time, On-site",
        skills: [
          "react",
          "zustand",
          "javascript",
          "typescript",
          "css3",
          "html5",
          "scss",
          "dynamic forms",
          "visual diagrams",
        ],
        description: [
          "Developed a dynamic portfolio management platform for algorithmic trading strategies using React.js and Zustand. Implemented interactive tables, dynamic forms, and visual diagrams to effectively present trading logic and portfolio data. Additionally, continuously strengthened frontend skills and participated in conferences covering modern frontend architectures and best practices.",
        ],
      },
      {
        id: 4,
        role: "FrontEnd Developer",
        time: "08.2020 - 12.2021 (1 yr 6 mos)",
        company: "BeeOnCode LLC",
        type: "Full-time, On-site",
        skills: [
          "javascript",
          "typescript",
          "rest apis",
          "html5",
          "css3",
          "responsive design",
          "ui components",
          "dynamic ui",
          "backend integration",
        ],
        description: [
          "Developed and enhanced the admin panel used by the Ministry of Territorial Administration and Infrastructure. Built flexible UI components and implemented dynamic structure control, allowing administrators to modify interface elements and content. Worked closely with backend APIs to ensure full functionality and smooth UI experience. Project website: ",
        ],
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    description:
      "Have a project in mind or just want to say hi? Feel free to reach out!",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    connect: "Connect With Me",
    collaboration:
      "I'm always open to interesting projects and collaborations. Let's connect and create something amazing together!",
  },
  footer: {
    copyright: "All rights reserved",
  },
};
