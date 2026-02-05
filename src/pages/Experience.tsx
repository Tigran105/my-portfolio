import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { fadeInUp, fadeInLeft, staggerChildren } from '../utils/animations';
import { useLanguage } from '../hooks/useLanguage';

export const Experience: React.FC = () => {
  const { t, get } = useLanguage();

  const experienceItems = get('experience.items') || [];

  return (
    <Section id="experience" className="bg-foreground/3">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">{t('experience.title')}</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experienceItems.map((job: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className="bg-background rounded-xl shadow-md p-8 border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{job.position}</h3>
                  <p className="text-ring font-medium mt-1">{job.company}</p>
                </div>
                <span className="text-foreground/60 text-sm bg-foreground/5 px-4 py-1 rounded-full">
                  {job.period}
                </span>
              </div>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech: string, idx: number) => (
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

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            {t('experience.backToHome')}
          </Button>
        </div>
      </div>
    </Section>
  );
};
