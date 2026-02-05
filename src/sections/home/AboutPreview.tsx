import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { fadeInUp } from '../../utils/animations';

export const AboutPreview: React.FC = () => {
  return (
    <section id="about-preview" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-gradient"
          >
            About Me
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 mb-8 text-lg leading-relaxed"
          >
            I'm a passionate frontend developer with a strong focus on creating
            beautiful, functional, and user-friendly web applications.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" size="lg">
              More →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
