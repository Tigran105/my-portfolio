import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
            >
              Tigran Sargsyan
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-foreground mb-8"
            >
              Frontend Developer & UI/UX Designer
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-foreground/70 mb-10 text-lg"
            >
              Building beautiful, functional web experiences with modern technologies
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button variant="primary" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
