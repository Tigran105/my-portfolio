import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { SOCIAL_LINKS } from "../store/appStore";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { fadeInUp, fadeInLeft, staggerChildren } from "../utils/animations";
import { useLanguage } from "../hooks/useLanguage";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: FaEnvelope,
};

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gradient">
                {t("contact.title")}
              </h2>
              <p className="text-foreground/70">{t("contact.description")}</p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                  placeholder={t("contact.name")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                  placeholder={t("contact.message")}
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                {t("contact.sendMessage")}
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient">
                {t("contact.connect")}
              </h3>
              <p className="text-foreground/70">{t("contact.collaboration")}</p>

              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-4 pt-6"
              >
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInLeft}
                      className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg hover:bg-ring/10 hover:text-ring transition-colors group"
                    >
                      <div className="w-12 h-12 bg-ring/20 rounded-lg flex items-center justify-center group-hover:bg-ring group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {social.label}
                        </p>
                        <p className="text-sm text-foreground/60 group-hover:text-ring transition-colors">
                          {social.id === "email"
                            ? "your.email@example.com"
                            : `@${social.id}`}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
