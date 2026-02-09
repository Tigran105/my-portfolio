import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerChildren } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import type { ExperienceItem } from "../../locales";
import { useLocation } from "react-router-dom";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

export const Experience: React.FC = () => {
  const { t, get } = useLanguage();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const experienceItems = get<ExperienceItem[]>("experience.items") || [];

  useEffect(() => {
    // Check if we have a scrollToId in location state
    if (location.state?.scrollToId) {
      // Wait for DOM to render then scroll
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollToId);
        if (element) {
          const offset = 120; // Adjust for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Optional: Add a visual highlight effect
          element.classList.add("ring-2", "ring-blue-500/30", "rounded-lg");
          setTimeout(() => {
            element.classList.remove(
              "ring-2",
              "ring-blue-500/30",
              "rounded-lg",
            );
          }, 2000);
        }
      }, 300); // Increased delay for page to fully load
    }
  }, [location.state]);

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <AnimatedTitle
          children={t("experience.title")}
          size={"lg"}
          className={"mb-2"}
        />
        <p className="text-foreground/70 max-w-2xl mx-auto">
          {t("experience.description")}
        </p>
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {experienceItems.map((job: ExperienceItem, index: number) => (
          <motion.div
            id={`experience-${job.id}`}
            key={index}
            variants={fadeInLeft}
            ref={index === 0 ? scrollRef : undefined} // Optional: attach ref to first item
            className="bg-background rounded-xl shadow-md p-8 border border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {job.role}
                </h3>
                <p className="text-ring font-medium mt-1">{job.company}</p>
              </div>
              <span className="text-foreground/60 text-sm bg-foreground/5 px-4 py-1 rounded-full">
                {job.time}
              </span>
            </div>

            <div>
              {job.description.map((line: string, idx: number) => (
                <p
                  key={idx}
                  className="text-foreground/70 mb-2 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-ring/10 text-ring rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
