import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaProjectDiagram,
  FaCubes,
} from "react-icons/fa";
import type { WhatIdo } from "@/shared/locales/types.ts";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import { AnimatedTitle } from "@/shared/components/ui/AnimatedTitle.tsx";

export default function WhatIDo() {
  const { t, get } = useLanguage();
  const whatIDoList = get<WhatIdo[]>("whatIdo.items") || [];

  const whatIDoIconMap: { [key: string]: React.ReactNode } = {
    dashboard: <FaProjectDiagram />,
    planner: <FaCubes />,
    uiux: <FaPaintBrush />,
    frontend: <FaCode />,
  };
  return (
    <section className="py-20">
      <div className="mx-auto px-4">
        <AnimatedTitle
          children={t("whatIdo.title")}
          size={"sm"}
          className={"mb-2"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDoList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-background
               hover:bg-accent transition-all duration-300 min-w-[200px]"
            >
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {whatIDoIconMap[item.icon] || <FaProjectDiagram />}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
