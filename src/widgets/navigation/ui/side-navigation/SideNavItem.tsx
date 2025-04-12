import { memo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { NavigationItemProps } from '../../model/types';

const SideNavItem = ({ label, icon, path, color }: NavigationItemProps) => {
  return (
    <ListItem disablePadding aria-label={label} sx={{ color }}>
      <ListItemButton component={RouterLink} to={path}>
        <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(SideNavItem);
