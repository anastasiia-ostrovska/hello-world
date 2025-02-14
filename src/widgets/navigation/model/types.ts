import { ReactElement, ReactNode } from 'react';

export interface NavigationItem {
  id: string;
  path: string;
  label: string;
  icon: ReactNode;
}

export interface NavigationItemProps extends Omit<NavigationItem, 'id'> {
  color: string;
}

export interface NavbarLayoutProps {
  navItems: ReactElement[];
}
