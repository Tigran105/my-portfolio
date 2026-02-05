import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { EXPERIENCE_DATA } from "../../store/appStore";
import { fadeInUp, fadeInLeft, staggerChildren } from "../../utils/animations";

export const ExperiencePreview: React.FC = () => {
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
            Work Experience
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            Here's a glimpse of my professional journey
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {EXPERIENCE_DATA.slice(0, 2).map((job) => (
            <motion.div
              key={job.id}
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
            Details →
          </Button>
        </div>
      </div>
    </section>
  );
};
