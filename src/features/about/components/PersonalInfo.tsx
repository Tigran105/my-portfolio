import React from "react";
import { motion } from "framer-motion";
import type { PersonalSection } from "@/shared/locales/types.ts";
import { AnimatedTitle } from "@/shared/components/ui/AnimatedTitle.tsx";
import { staggerChildren } from "@/shared/utils/animations.ts";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";

export const PersonalInfo: React.FC = () => {
  const { t, get } = useLanguage();
  const personalSections =
    get<PersonalSection[]>("valuesAndPrinciples.items") || [];

  return (
    <div className="my-12">
      <AnimatedTitle
        children={t("valuesAndPrinciples.title")}
        size={"sm"}
        className={"mb-2"}
      />

      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:justify-between lg:gap-6"
      >
        {personalSections?.map((section: PersonalSection, index: number) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.99, transition: { duration: 0.2 } }}
            className="
              p-6 rounded-xl
              border border-border bg-background
              shadow-sm hover:shadow-md backdrop-blur-sm
              flex flex-col
              flex-1
              min-w-0
              lg:max-w-[calc(33.33%-16px)]
              mb-4 lg:mb-0
            "
          >
            <h2 className="text-2xl font-semibold mb-2 text-gradient">
              {section.title}
            </h2>
            <p className="text-sm text-muted break-words overflow-auto max-h-80">
              {section.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
