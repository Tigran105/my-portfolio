import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { SKILLS } from "../store/appStore";

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
              I'm a passionate frontend developer with a strong focus on
              creating beautiful, functional, and user-friendly web
              applications. With expertise in React, TypeScript, and modern web
              technologies, I bring designs to life with clean code and smooth
              animations.
            </p>
            <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
              My approach combines technical excellence with design sensibility,
              ensuring that every project not only works flawlessly but also
              provides an exceptional user experience.
            </p>

            <div>
              <h3 className="font-bold text-xl mb-4 text-foreground">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-ring/20 hover:text-ring transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
