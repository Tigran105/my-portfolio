import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerChildren } from '../../utils/animations';

export const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Focused on web development, algorithms, and software engineering principles.'
    },
    {
      id: 2,
      degree: 'Frontend Development Certification',
      institution: 'Online Platform',
      period: '2022 - 2023',
      description: 'Advanced React, TypeScript, and modern web technologies.'
    }
  ];

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
            Education
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            My academic journey and certifications
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeInLeft}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-ring font-medium mt-1">{edu.institution}</p>
                </div>
                <span className="text-foreground/60 text-sm bg-foreground/5 px-4 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-foreground/70">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
