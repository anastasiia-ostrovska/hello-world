import { memo } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { NavigationItemProps } from '../model/types';

const TopNavItem = ({ label, icon, path, color }: NavigationItemProps) => {
  return (
    <Box component="li">
      <IconButton
        component={RouterLink}
        to={path}
        aria-label={label}
        sx={{ color }}
      >
        {icon}
      </IconButton>
    </Box>
  );
};

export default memo(TopNavItem);
