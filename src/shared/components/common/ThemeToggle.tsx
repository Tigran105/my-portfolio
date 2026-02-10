import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppStore } from "@/shared/store/appStore.ts";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? (
        <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <FaSun className="w-5 h-5 text-yellow-400" />
      )}
    </motion.button>
  );
};
