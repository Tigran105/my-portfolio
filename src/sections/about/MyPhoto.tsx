import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "../../utils/animations";
import myPhoto from "../../assets/myPhoto2.jpg";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
interface MyPhotoProps {
  className: string;
}
export const MyPhoto: React.FC<MyPhotoProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex justify-center items-center ${className} mt-20 lg:mt-0`}
    >
      <div className="relative group scale-[0.8] lg:scale-100">
        <div className="relative w-80 h-80 rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-[2rem] p-1">
            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-gray-900">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${myPhoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  scale: 1.1,
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-white/5" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white"
                >
                  <p className="text-xl font-medium text-cyan-100">
                    {t("about.photoTitle")}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-gray-300">
                      {t("about.status")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>

        <motion.div
          className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />

        <div className="absolute top-1/2 -left-12 w-8 h-px bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="absolute top-1/2 -right-12 w-8 h-px bg-gradient-to-l from-transparent to-purple-500" />
      </div>
    </motion.div>
  );
};
