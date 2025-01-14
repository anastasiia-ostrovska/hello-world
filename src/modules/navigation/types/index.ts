import { ComponentType, ReactNode } from 'react';

export interface NavigationItem {
  id: string;
  path: string;
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
