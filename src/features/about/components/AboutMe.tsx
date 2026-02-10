import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import { fadeInRight } from "@/shared/utils/animations.ts";
import { AnimatedTitle } from "@/shared/components/ui/AnimatedTitle.tsx";

interface AboutMeProps {
  className?: string;
}
export const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <AnimatedTitle children={t("about.title")} />
      <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
        {t("about.description1")}
      </p>
      <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
        {t("about.description2")}
      </p>
    </motion.div>
  );
};
