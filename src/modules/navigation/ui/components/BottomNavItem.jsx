import { memo } from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavItem = ({ label, icon, path, color, onClick }) => {
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
