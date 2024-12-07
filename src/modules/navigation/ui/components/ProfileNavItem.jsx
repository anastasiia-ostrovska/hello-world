import { memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const ProfileNavItem = ({ label, icon, path, color, onClick }) => {
  return (
    <MenuItem onClick={() => onClick(path)} sx={{ color }}>
      <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>
      {label}
    </MenuItem>
  );
};

export default memo(ProfileNavItem);
