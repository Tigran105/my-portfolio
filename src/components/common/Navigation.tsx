import React from 'react';
import { NavLink } from './NavLink';
import { NAV_LINKS } from '../../store/appStore';

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
