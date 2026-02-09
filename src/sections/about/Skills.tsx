import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { SKILLS } from "../../store/appStore.ts";
import {
  FaCode,
  FaPaintBrush,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

const iconMap: { [key: string]: React.ReactNode } = {
  frontend: <FaCode />,
  uiux: <FaPaintBrush />,
  dataviz: <FaProjectDiagram />,
  tools: <FaTools />,
};

export const Skills: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <section className={`py-16 sm:py-20 ${className || ""}`}>
      <div className="mx-auto px-4">
        {/* Title */}
        <AnimatedTitle size="sm" className="mb-6 sm:mb-8">
          {t("about.skills")}
        </AnimatedTitle>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-px
            bg-white/10
            border border-white/10
            rounded-xl sm:rounded-2xl
            overflow-hidden
          "
        >
          {SKILLS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                dark:bg-[#0a0a0a]/20
                bg-white/10
                p-6 sm:p-8
                flex flex-col
                border-b border-white/10
                last:border-b-0
                sm:border-b-0
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-foreground text-base sm:text-lg">
                  {group.icon && iconMap[group.icon]}
                </span>

                <h3
                  className="
                    text-xs sm:text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-foreground
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1
                      rounded-md
                      bg-white/5
                      border border-border
                      text-[12px] sm:text-[11px]
                      text-foreground
                      hover:text-ring
                      hover:bg-white/10
                      transition-colors
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
