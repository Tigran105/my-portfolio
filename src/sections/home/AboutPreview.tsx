import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { fadeInUp } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

export const AboutPreview: React.FC = () => {
  const { t, get } = useLanguage();
  const navigate = useNavigate();

  const highlights = get<string[]>("aboutPreview.highlights") || [];

  return (
    <section id="about-preview" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gradient"
          >
            {t("aboutPreview.title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-medium mb-6"
          >
            {t("aboutPreview.subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 mb-8 text-lg leading-relaxed"
          >
            {t("aboutPreview.description")}
          </motion.p>

          {/* Highlights */}
          {Array.isArray(highlights) && (
            <motion.ul
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center items-center gap-4 mb-10"
            >
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
                {highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ring" />
                    {item}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/about");
              }}
            >
              {t("aboutPreview.more")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
