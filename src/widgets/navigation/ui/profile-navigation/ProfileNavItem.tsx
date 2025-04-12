import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link as RouterLink } from 'react-router-dom';
import { NavigationItemProps } from '../../model/types';

const ProfileNavItem = ({ label, icon, path, color }: NavigationItemProps) => {
  return (
    <MenuItem component={RouterLink} to={path} sx={{ color }}>
      <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>
      {label}
    </MenuItem>
  );
};

export default ProfileNavItem;
