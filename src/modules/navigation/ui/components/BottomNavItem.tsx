import { NavigationItemProps } from '@/modules/navigation/types';
import { memo } from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavItem = ({
  label,
  icon,
  path,
  color,
  onClick,
}: NavigationItemProps) => {
  return (
    <BottomNavigationAction
      aria-label={label}
      icon={icon}
      onClick={() => onClick(path)}
      sx={{ color }}
    />
  );
};

export default memo(BottomNavItem);
