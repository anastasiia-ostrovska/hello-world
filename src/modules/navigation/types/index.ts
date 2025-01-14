import { ComponentType, ReactNode } from 'react';

export type Path = string;

export interface NavigationItem {
  id: string;
  path: Path;
  label: string;
  icon: ReactNode;
}

export type NavigateToPathHandler = (path: NavigationItem['path']) => void;

export interface NavigationItemProps extends Omit<NavigationItem, 'id'> {
  color: string;
  onClick: NavigateToPathHandler;
}

export interface NavigationListProps
  extends Pick<NavigationItemProps, 'onClick'> {
  items: NavigationItem[];
  NavigationItem: ComponentType<NavigationItemProps>;
}
