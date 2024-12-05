import { memo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideMainNavItem = ({ id, label, icon, path, color, onClick }) => {
  return (
    <ListItem
      disablePadding
      onClick={() => onClick({ id, path })}
      sx={{ color }}
    >
      <ListItemButton>
        <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(SideMainNavItem);
