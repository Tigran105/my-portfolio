import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { fadeInUp } from '../../utils/animations';
import { useLanguage } from '../../hooks/useLanguage';

export const AboutPreview: React.FC = () => {
  const { t } = useLanguage();

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
            {t('aboutPreview.title')}
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 mb-8 text-lg leading-relaxed"
          >
            {t('aboutPreview.description')}
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" size="lg">
              {t('aboutPreview.more')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
