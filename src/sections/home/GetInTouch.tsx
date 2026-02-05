import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { SOCIAL_LINKS } from '../../store/appStore';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { fadeInUp, fadeInLeft, staggerChildren } from '../../utils/animations';
import { useLanguage } from '../../hooks/useLanguage';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: FaEnvelope
};

export const GetInTouch: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="get-in-touch" className="py-20 bg-foreground/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gradient"
          >
            {t('getInTouch.title')}
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            {t('getInTouch.description')}
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInLeft}
                className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border hover:bg-ring/10 hover:text-ring transition-colors group"
              >
                <div className="w-12 h-12 bg-ring/20 rounded-lg flex items-center justify-center group-hover:bg-ring group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">{social.label}</p>
                  <p className="text-sm text-foreground/60 group-hover:text-ring transition-colors">
                    {social.id === 'email' ? 'your.email@example.com' : `@${social.id}`}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            {t('getInTouch.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
};
