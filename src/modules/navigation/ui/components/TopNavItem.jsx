import { memo } from 'react';
import IconButton from '@mui/material/IconButton';

const TopNavItem = ({ label, icon, path, color, onClick }) => {
  return (
    <IconButton aria-label={label} onClick={() => onClick(path)} sx={{ color }}>
      {icon}
    </IconButton>
  );
};

export default memo(TopNavItem);
