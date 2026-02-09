import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../components/ui/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { fadeInUp } from "../../utils/animations";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

interface GithubCTAProps {
  username: string;
  className?: string;
}

export const GithubCTA: React.FC<GithubCTAProps> = ({
  username,
  className = "",
}) => {
  const { t } = useLanguage();

  return (
    <div className={"container max-w-4xl mx-auto"}>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`mx-auto p-10 rounded-3xl border border-border bg-background/50 backdrop-blur-sm text-center shadow-lg ${className}`}
      >
        <div className="flex flex-col items-center">
          <span className="px-4 py-1 rounded-full bg-ring/10 text-ring text-sm font-medium mb-4 tracking-wider uppercase">
            {t("githubCta.subtitle")}
          </span>

          <AnimatedTitle children={t("githubCta.title")} className="mb-4" />

          <p className="text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("githubCta.description")}
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              window.open(`https://github.com/${username}`, "_blank")
            }
            className="group flex items-center gap-3"
          >
            <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span>{t("githubCta.button")}</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
