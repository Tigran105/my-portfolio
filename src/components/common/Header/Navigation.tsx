import React from "react";
import { NavLink } from "../NavLink.tsx";
import { NAV_LINKS } from "../../../store/appStore.ts";
import { useLanguage } from "../../../hooks/useLanguage.ts";

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
          <li key={link.id} className={"whitespace-nowrap"}>
            <NavLink
              href={link.href}
              label={getNavLabel(link.id)}
              className="text-foreground hover:text-violet-400 transition font-medium md:min-w-[68px]"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
