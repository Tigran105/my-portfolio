import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerChildren } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import type { EducationItem } from "../../locales";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

export const Education: React.FC = () => {
  const { t, get } = useLanguage();

  const educationItems = get<EducationItem[]>("education.items") || [];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gradient"
          >
            {}
          </motion.h2>
          <AnimatedTitle children={t("education.title")} className={"mb-4"} />

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            {t("education.description")}
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {educationItems.map((edu: EducationItem, index: number) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-ring">
                    {edu.institution}
                  </h3>
                </div>
              </div>
              <p className="text-foreground/70">{edu.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
