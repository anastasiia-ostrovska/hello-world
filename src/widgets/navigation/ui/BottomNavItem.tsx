import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';
import { NavigationItemProps } from '../model/types';

const BottomNavItem = ({ label, icon, path, color }: NavigationItemProps) => {
  return (
    <RouterLink to={path} style={{ display: 'flex', width: '100%' }}>
      <BottomNavigationAction aria-label={label} icon={icon} sx={{ color }} />
    </RouterLink>
  );
};

export default memo(BottomNavItem);
