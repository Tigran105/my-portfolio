import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { fadeInUp, fadeInLeft, staggerChildren } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import type { ExperienceItem } from "../../locales";

export const ExperiencePreview: React.FC = () => {
  const { t, get } = useLanguage();

  const experienceItems = get<ExperienceItem[]>("experience.items") || [];

  return (
    <section id="experience-preview" className="py-20 bg-foreground/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gradient"
          >
            {t("experiencePreview.title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            {t("experiencePreview.description")}
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {experienceItems
            .slice(0, 2)
            .map((job: ExperienceItem, index: number) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {job.position}
                </h3>
                <p className="text-ring font-medium mb-4">{job.company}</p>
                <p className="text-foreground/70 text-sm">{job.period}</p>
              </motion.div>
            ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            {t("experiencePreview.details")}
          </Button>
        </div>
      </div>
    </section>
  );
};
