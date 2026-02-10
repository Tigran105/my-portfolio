import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import {
  fadeInLeft,
  fadeInUp,
  staggerChildren,
} from "@/shared/utils/animations.ts";
import { AnimatedTitle } from "@/shared/components/ui/AnimatedTitle.tsx";
import { SOCIAL_LINKS } from "@/shared/store/appStore.ts";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone,
};

export const Socials: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<{ email: boolean; phone: boolean }>({
    email: false,
    phone: false,
  });

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, textArea.value.length);

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (!successful) throw new Error("Copy failed");
      }

      setCopied((prev) => ({ ...prev, [type]: true }));
      toast.success(`${text} ${t("messages.copied")}`);
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
      toast.error(t("messages.copyFailed") || "Copy failed");
    }
  };

  const handleItemClick = (social: {
    icon: string;
    real: string;
    link?: string;
    label: string;
  }) => {
    const isCopyable = social.icon === "email" || social.icon === "phone";

    if (isCopyable) {
      if (social.icon === "email") {
        window.location.href = `mailto:${social.real}`;
      } else if (social.icon === "phone") {
        window.location.href = `tel:${social.real}`;
      }
    } else {
      window.open(social.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col  pt-20 px-1"
    >
      <div className="space-y-6">
        <div className={"space-y-2 text-center mx-auto"}>
          <AnimatedTitle
            children={t("contact.connect")}
            className={"mx-auto px-2"}
          />
          <p className="text-foreground/70 text-center px-2">
            {t("contact.collaboration")}
          </p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4 pt-6"
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            const displayText = t(`socialNotes.${social.icon}`);

            const isCopyable =
              social.icon === "email" || social.icon === "phone";
            const copyType = social.icon === "email" ? "email" : "phone";
            const copyState = copied[copyType];

            return (
              <motion.div
                key={social.icon}
                variants={fadeInLeft}
                className={`flex items-center gap-4 p-4 bg-foreground/5 rounded-lg transition-colors group cursor-pointer hover:bg-ring/10 hover:text-ring`}
                onClick={() => handleItemClick(social)}
              >
                <div
                  className={`w-12 h-12 bg-ring/20 rounded-lg flex items-center justify-center transition-colors group-hover:bg-ring group-hover:text-white`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-foreground">{social.label}</p>
                  <p
                    className={`text-sm text-foreground/60 group-hover:text-ring transition-colors`}
                  >
                    {displayText}
                  </p>
                </div>

                {isCopyable ? (
                  <motion.div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyToClipboard(social.real, copyType);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-1 rounded-md text-xs bg-blue-500/20 text-blue-500
                           hover:bg-blue-500/30 transition min-w-[70px] justify-center cursor-pointer z-40"
                  >
                    <span>
                      {copyState ? t("messages.copied") : t("messages.copy")}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(social.link, "_blank", "noopener,noreferrer");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-1 rounded-md text-xs bg-green-500/20 text-green-500
                           hover:bg-green-500/30 transition min-w-[70px] justify-center cursor-pointer z-40"
                  >
                    <span>{t("messages.open") || "Open"}</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};
