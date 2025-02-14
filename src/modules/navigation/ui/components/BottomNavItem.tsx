import { NavigationItemProps } from '@/modules/navigation/types';
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';

const BottomNavItem = ({
  label,
  icon,
  path,
  color,
  onClick,
}: NavigationItemProps) => {
  return (
    <RouterLink to={path} style={{ display: 'flex', width: '100%' }}>
      <BottomNavigationAction
        aria-label={label}
        icon={icon}
        onClick={() => onClick(path)}
        sx={{ color }}
      />
    </RouterLink>
  );
};

export default memo(BottomNavItem);
