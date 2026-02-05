import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { fadeInUp } from '../../utils/animations';
import { useLanguage } from '../../hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

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
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-foreground mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-foreground/70 mb-10 text-lg"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button variant="primary" size="lg">
                {t('hero.viewWork')}
              </Button>
              <Button variant="outline" size="lg">
                {t('hero.contactMe')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
