import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { fadeInUp, fadeInLeft, staggerChildren } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import type { ExperienceItem } from "../../locales";
import { useNavigate } from "react-router-dom";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

export const ExperiencePreview: React.FC = () => {
  const { t, get } = useLanguage();
  const navigate = useNavigate();

  const experienceItems = get<ExperienceItem[]>("experience.items") || [];

  const handleViewAll = (itemId?: string) => {
    navigate("/experience", {
      state: { scrollToId: itemId },
      // OR as URL parameter: navigate(`/experience?item=${itemId}`);
    });
  };
  return (
    <section id="experience-preview" className="py-20 bg-foreground/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/*Title*/}
          <AnimatedTitle
            children={t("experiencePreview.title")}
            className={"mb-4"}
          />
          {/* Subtitle */}
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
          {experienceItems.map((job: ExperienceItem, index: number) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleViewAll(`experience-${job.id}`)}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                {job.role}
              </h3>
              <p className="text-ring font-medium mb-4">{job.company}</p>
              <p className="text-foreground/70 text-sm">{job.time}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              navigate("/experience");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t("experiencePreview.details")}
          </Button>
        </div>
      </div>
    </section>
  );
};
