import React from "react";
import { NavLink } from "./NavLink";
import { NAV_LINKS } from "../../store/appStore";

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-5 text-sm">
      <ul className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <NavLink
              href={link.href}
              label={link.label}
              className="text-foreground hover:text-violet-400 transition font-medium"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
