import React from "react";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import { NAV_LINKS } from "@/shared/store/appStore.ts";
import { NavLink } from "@/shared/components/common/NavLink.tsx";

export const Navigation: React.FC = () => {
  const { t } = useLanguage();

  const getNavLabel = (id: string): string => {
    const navMap: Record<string, string> = {
      home: t("nav.home"),
      about: t("nav.about"),
      experience: t("nav.experience"),
      contact: t("nav.contact"),
    };
    return navMap[id] || id;
  };

  return (
    <nav className="hidden md:flex items-center gap-5 text-sm">
      <ul className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <li
            key={link.id}
            className={"whitespace-nowrap"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <NavLink
              href={link.href}
              label={getNavLabel(link.id)}
              className={`text-foreground hover:text-violet-400 transition font-medium
              ${
                location.pathname === link.href
                  ? "text-gradient"
                  : "text-foreground"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
