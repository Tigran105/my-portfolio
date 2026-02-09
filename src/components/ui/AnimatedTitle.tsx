import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type TitleSize = "sm" | "md" | "lg";

interface AnimatedTitleProps extends HTMLMotionProps<"div"> {
  size?: TitleSize;
  children: React.ReactNode;
  underlineColor?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  size = "md",
  children,
  underlineColor = "bg-blue-600",
  className = "",
  ...props
}) => {
  const sizeStyles: Record<
    TitleSize,
    { text: string; line: string; margin: string }
  > = {
    sm: {
      text: "text-xl",
      line: "h-[2px]",
      margin: "mb-1",
    },
    md: {
      text: "text-3xl",
      line: "h-[4px]",
      margin: "mb-2",
    },
    lg: {
      text: "text-4xl md:text-5xl",
      line: "h-[6px]",
      margin: "mb-3",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <motion.div
      className={`inline-block group cursor-default ${className}`}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <h2
        className={`${currentSize.text} ${currentSize.margin} font-bold tracking-tight text-gradient transition-colors duration-300`}
      >
        {children}
      </h2>

      <motion.div
        variants={{
          initial: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`${currentSize.line} ${underlineColor} rounded-full`}
      />
    </motion.div>
  );
};
