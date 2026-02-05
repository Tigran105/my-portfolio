import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SKILLS } from '../store/appStore';
import { fadeInUp, fadeInLeft, staggerChildren } from '../utils/animations';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
              I'm a passionate frontend developer with a strong focus on creating
              beautiful, functional, and user-friendly web applications. With expertise
              in React, TypeScript, and modern web technologies, I bring designs to life
              with clean code and smooth animations.
            </p>
            <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
              My approach combines technical excellence with design sensibility,
              ensuring that every project not only works flawlessly but also provides
              an exceptional user experience.
            </p>
            
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-4 text-foreground">Skills & Technologies</h3>
              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-ring/20 hover:text-ring transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-custom rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center px-8">
                  <div className="text-6xl font-bold mb-4">TS</div>
                  <p className="text-xl font-medium">Creative Developer</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/50 rounded-lg shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ring/50 rounded-lg shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
