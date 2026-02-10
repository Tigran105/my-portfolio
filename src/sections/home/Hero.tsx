import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  fadeInScale,
  staggerChildren,
} from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import video from "../../assets/heroBackground.mp4";
import { useAppStore } from "../../store/appStore.ts";
import { useNavigate } from "react-router-dom";
import { AnimatedTitle } from "../../components/ui/AnimatedTitle.tsx";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const theme = useAppStore((state) => state.theme);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.9;
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pb-20 relative"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        className={`absolute inset-0 ${theme === "dark" ? "bg-black/20" : "bg-white/70"}`}
      />

      <motion.div
        className="container relative z-10 mx-auto px-4 text-center max-w-4xl"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={fadeInLeft}
          className="text-5xl md:text-7xl font-bold mb-5 text-gradient py-2 pt-10"
        ></motion.h1>
        <AnimatedTitle
          children={t("hero.title")}
          size={"lg"}
          className=" text-gradient py-2 pt-10"
        />

        <motion.p
          variants={fadeInRight}
          className="text-xl md:text-2xl text-foreground mb-5"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-foreground/70 mb-10 text-lg"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={fadeInScale}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            variant="secondary"
            size="md"
            className="lg:max-w-[400px] max-w-[155px] flex justify-center items-center"
            onClick={() => navigate("/experience")}
          >
            {t("hero.viewWork")}
          </Button>
          <Button
            variant="outline"
            size="md"
            className="lg:max-w-[400px] max-w-[155px] flex justify-center items-center"
            onClick={() => navigate("/contact")}
          >
            {t("hero.contactMe")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
