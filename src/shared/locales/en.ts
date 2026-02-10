import type { Translation } from "@/shared/locales/types.ts";

export const en: Translation = {
  portfolio: "My Portfolio",
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    title: "I’m Tigran",
    subtitle:
      "Building elegant, scalable web and mobile interfaces with React, React Native, and Next.js.",
    description:
      "Delivering clean, scalable, and high-performance web and mobile applications. I turn complex " +
      "ideas into intuitive interfaces, ensuring quality, consistency, and usability.",
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
    more: "More about Me →",
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
      { institution: "Basic IT Center", time: "02.2020 - 09.2020" },
      {
        institution: "National Polytechnic University of Armenia, Yerevan",
        time: "09.2016 - 05.2022",
      },
    ],
  },
  about: {
    title: "About Me",
    description1:
      "I’m Tigran - Front-End Developer with 5+ years of experience in React and React Native, building web and mobile applications. Skilled in interactive UIs," +
      " including 3D experiences with Three.js, and integrating analytics and payment solutions like Stripe. Passionate about delivering user-focused solutions that drive business value.",
    description2:
      "Building fast, intentional interfaces with a focus on modularity and performance. I enjoy solving complex UI challenges in" +
      " planners and internal tools, leveraging structured state management to create seamless user experiences.",
    skills: "Skills & Technologies",
    backToHome: "Back to Home",
    photoTitle: "Creative Developer",
    status: "Open to creative collaborations",
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
  githubCta: {
    title: "Take a Peek at My GitHub",
    subtitle: "Code Speaks Louder Than Words",
    description:
      "Want to see my architectural patterns and daily activity? Explore my public repositories where ideas transform into production-ready code.",
    button: "Explore GitHub",
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
    other: "Other ways to connect →",
    collaboration:
      "I'm always open to interesting projects and collaborations. Let's connect and create something amazing together!",
  },
  footer: {
    copyright: "All rights reserved",
  },
  messages: {
    email: "Please enter a valid email",
    name: "Please enter your name",
    message: "Please enter a message",
    success: "Message sent successfully",
    error: "Something went wrong, please try again",
    copied: "Copied!",
    copy: "Copy",
    copyError: "Failed to copy",
    open: "Open",
  },

  socialNotes: {
    linkedin: "Let's connect professionally",
    github: "See my code and open-source work",
    email: "Send me an email",
    phone: "Call or send me a message",
  },
  valuesAndPrinciples: {
    title: "Values & Principles",
    items: [
      {
        title: "How I Work",
        description:
          "I approach problems with a product mindset, starting with understanding the user and the goal, then designing clear and maintainable solutions.\n\n" +
          "I value clean architecture, reusable components, and thoughtful interactions. I iterate quickly, test assumptions early, and pay close attention to performance and visual details.\n\n" +
          "I work comfortably both independently and in collaboration with designers and product teams, turning ideas into polished, production-ready interfaces.",
      },
      {
        title: "What I Value",
        description:
          "I value clarity and usability in every interface, along with clean, maintainable, and scalable code.\n\n" +
          "Strong collaboration, teamwork, and continuous learning are important to me, as well as taking responsibility and ownership for the work I deliver.\n\n" +
          "I care deeply about performance, smooth user interactions, and solving problems thoughtfully and the right way.",
      },
      {
        title: "Personal Note",
        description:
          "I focus on building meaningful, intuitive, and high-quality interfaces that feel natural and easy to use.\n\n" +
          "I enjoy learning new technologies, exploring visual systems, and experimenting with interaction patterns and UI details.\n\n" +
          "My goal is to turn complex ideas into simple, clear, and enjoyable user experiences.",
      },
    ],
  },
  whatIdo: {
    title: "What I Do",
    items: [
      {
        icon: "dashboard",
        title: "Complex Interfaces & Dashboards",
        description:
          "Designing and building data-heavy interfaces, admin panels, and internal tools with clear structure and scalable architecture.",
      },
      {
        icon: "planner",
        title: "Interactive Editors & Planners",
        description:
          "Developing drag-and-drop systems, planners, and visual editors with precise logic, performance focus, and smooth interaction.",
      },
      {
        icon: "uiux",
        title: "UI Architecture & UX Thinking",
        description:
          "Creating reusable component systems with strong UX fundamentals, consistency, and attention to interaction details.",
      },
      {
        icon: "frontend",
        title: "Advanced Frontend Engineering",
        description:
          "Building modern frontend applications using React, Next.js, Tailwind CSS, Canvas, and animation libraries.",
      },
    ],
  },
  seo: {
    home: {
      title: "Tigran Sargsyan - Senior Software Developer",
      description:
        "Building modern web applications with React, TypeScript & Node.js. Based in Armenia.",
    },
    about: {
      title: "About Me - Tigran Sargsyan",
      description:
        "Passionate software developer with 5+ years of experience in frontend and backend development.",
    },
    experience: {
      title: "Experience - Tigran Sargsyan",
      description:
        "Professional journey and key projects I've worked on as a software developer.",
    },
    contact: {
      title: "Contact - Tigran Sargsyan",
      description:
        "Get in touch for collaboration opportunities, freelance projects, or just to say hello.",
    },
    jobTitle: "Senior Software Developer",
    company: "Freelance",
  },
};
